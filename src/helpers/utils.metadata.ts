import { json, ipfs, Bytes, JSONValueKind } from "@graphprotocol/graph-ts";
import { SubgraphMetadata } from "../../generated/schema";
import { jsonToString } from "../helpers/utils-json";
import { createOrLoadAccount, arbitrumOneSubgraph } from "../helpers/utils";

export function fetchSubgraphMetadata(
  subgraphMetadataId: string,
  ipfsMetadataHash: Bytes
): void {
  let metadataEntity = SubgraphMetadata.load(subgraphMetadataId);

  if (metadataEntity == null) {
    metadataEntity = new SubgraphMetadata(subgraphMetadataId);
  }

  let ipfsData = ipfs.cat(ipfsMetadataHash.toString());

  if (ipfsData !== null) {
    let metadata = ipfsData.toHexString();

    // Updating the metadata fields based on the fetched IPFS data
    metadataEntity.metadataHash = ipfsMetadataHash;
    metadataEntity.description = "description";
    metadataEntity.image = "image";
    metadataEntity.nftImage = "nftImage";
    metadataEntity.codeRepository = "codeRepository";
    metadataEntity.website = "website";
    metadataEntity.displayName = "displayName";

    metadataEntity.save();
  }
}
