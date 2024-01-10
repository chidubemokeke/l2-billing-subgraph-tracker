import { json, ipfs, Bytes, JSONValueKind } from "@graphprotocol/graph-ts";
import { L2SubgraphMetadata } from "../../generated/schema";
import { jsonToString } from "../helpers/utils-json";
import { arbitrumOneSubgraph } from "../helpers/utils";

/**
 * Fetches subgraph metadata from IPFS and updates the provided SubgraphMetadata entity
 * @param subgraphMetadata - SubgraphMetadata entity to be updated with fetched metadata
 * @param ipfsHash - IPFS hash of the metadata content
 * @returns Updated SubgraphMetadata entity
 */

export function fetchSubgraphMetadata(
  subgraphMetadata: L2SubgraphMetadata,
  ipfsHash: string
): L2SubgraphMetadata {
  // Fetch the metadata content from IPFS based on the provided hash
  let metadata = ipfs.cat(ipfsHash);

  if (metadata !== null) {
    // Try to convert the fetched data to a JSON object
    let tryData = json.try_fromBytes(metadata as Bytes);

    if (tryData.isOk) {
      let data = tryData.value.toObject();

      // Update the SubgraphMetadata fields based on the fetched IPFS data
      subgraphMetadata.description = jsonToString(data.get("description"));
      subgraphMetadata.displayName = jsonToString(data.get("displayName"));
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
