import { json, ipfs, Bytes, JSONValueKind } from "@graphprotocol/graph-ts";
import { SubgraphMetadata } from "../../generated/schema";
import { SubgraphMetadataUpdated as SubgraphMetadataUpdatedEvent } from "../../generated/GNS/GNS";
import { jsonToString } from "../helpers/utils-json";
import { l2Subgraph } from "../helpers/utils";

/**
 * Extracts the IPFS hash from the SubgraphMetadataUpdated event data
 * @param event - The SubgraphMetadataUpdated event
 * @returns IPFS hash as a string or null if not found
 */
export function extractIpfsHashFromEventData(
  event: SubgraphMetadataUpdatedEvent
): string | null {
  let ipfsHash: string | null = null;

  // Assuming that the IPFS hash is part of the event parameters
  const subgraphMetadata = event.params.subgraphMetadata;

  // Fetch IPFS data using ipfs.cat
  const ipfsData = ipfs.cat(subgraphMetadata.toHex());

  if (ipfsData !== null) {
    // Try to convert the fetched data to a JSON object
    const tryData = json.try_fromBytes(ipfsData as Bytes);

    if (tryData.isOk) {
      const data = tryData.value.toObject();
      const ipfsHashField = data.get("ipfsHash");

      if (
        ipfsHashField !== null &&
        ipfsHashField.kind === JSONValueKind.STRING
      ) {
        ipfsHash = ipfsHashField.toString();
      }
    }
  }

  return ipfsHash;
}

/**
 * Fetches subgraph metadata from IPFS and updates the provided SubgraphMetadata entity
 * @param subgraphMetadata - SubgraphMetadata entity to be updated with fetched metadata
 * @param ipfsHash - IPFS hash of the metadata content
 * @returns Updated SubgraphMetadata entity
 */
export function fetchSubgraphMetadata(
  subgraphMetadata: SubgraphMetadata,
  ipfsHash: string
): SubgraphMetadata {
  // Fetch the metadata content from IPFS based on the provided hash
  let metadata = ipfs.cat(ipfsHash);

  if (metadata !== null) {
    // Try to convert the fetched data to a JSON object
    let tryData = json.try_fromBytes(metadata as Bytes);

    if (tryData.isOk) {
      let data = tryData.value.toObject();

      // Update the SubgraphMetadata fields based on the fetched IPFS data
      subgraphMetadata.description = jsonToString(data.get("description"));
      subgraphMetadata.name = jsonToString(data.get("name"));
      subgraphMetadata.codeRepository = jsonToString(
        data.get("codeRepository")
      );
      subgraphMetadata.website = jsonToString(data.get("website"));

      let categories = data.get("categories");

      // Process categories if present
      if (categories != null && !categories.isNull()) {
        let categoriesArray = categories.toArray();

        for (let i = 0; i < categoriesArray.length; i++) {
          let categoryId = jsonToString(categoriesArray[i]);
          arbitrumOneSubgraph(categoryId); // Process the category using a helper function
        }
      }

      // Extract and handle image-related data
      let image = jsonToString(data.get("image"));
      let subgraphImage = data.get("subgraphImage");

      if (
        subgraphImage != null &&
        subgraphImage.kind === JSONValueKind.STRING
      ) {
        // Set NFT image if available, otherwise use the regular image
        subgraphMetadata.nftImage = image;
        subgraphMetadata.image = jsonToString(subgraphImage);
      } else {
        subgraphMetadata.image = image;
      }
    }
  }

  return subgraphMetadata;
}
