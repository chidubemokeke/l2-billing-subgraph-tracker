import { BigInt, ipfs } from "@graphprotocol/graph-ts";
import {
  SubgraphPublished as SubgraphPublishedEvent,
  SubgraphMetadataUpdated as SubgraphMetadataUpdatedEvent,
  SubgraphVersionUpdated as SubgraphVersionUpdatedEvent,
} from "../generated/GNS/GNS";
import { arbitrumOneSubgraph } from "./helpers/utils";
import { fetchSubgraphMetadata } from "./helpers/utils.metadata";
import { L2SubgraphMetadata } from "../generated/schema";

 

// Handle SubgraphPublished event
export function handleSubgraphPublished(event: SubgraphPublishedEvent): void {
  let subgraph = arbitrumOneSubgraph(event.params.subgraphDeploymentID.toHex());
  subgraph.previousBalance = event.params.reserveRatio;
  subgraph.previousVersionHash = event.params.subgraphID;
  subgraph.currentVersionHash = event.params.subgraphDeploymentID;
  subgraph.queryFees = BigInt.zero();
  subgraph.save();
}

/*export function handleSubgraphMetadata(
  event: SubgraphMetadataUpdatedEvent
): void {
  let subgraphMetadataId = event.params.subgraphMetadata.toHex();
  let ipfsHash = "your_ipfs_hash_here"; // Replace this with the actual IPFS hash

  let updatedMetadata = fetchSubgraphMetadata(subgraphMetadataId, ipfsHash);
  // Handle the updated metadata accordingly
  let ipfsHash = 
}*/

function extractIpfsHashFromEventData(event: SubgraphMetadataUpdatedEvent): string | null {
  // Here you should implement your logic to extract the IPFS hash from the event
  // For example, if the IPFS hash is part of the event parameters, you can access it like event.params.ipfsHash
  // Replace this with your actual event structure and extraction logic
  const ipfshash = ipfs.cat.toString(event.params.subgraphMetadataId());  (subgraphID.slice(2))).toBase58()

  return event.params.ipfsHash.toHex(); // Assuming ipfsHash is a Bytes32
}

// Handle SubgraphMetadataUpdated event
export function handleSubgraphMetadata(
  event: SubgraphMetadataUpdatedEvent
): void {
  let subgraphMetadataId = event.params.subgraphMetadata.toHex();

  // Extracting the IPFS hash from the event data
  let ipfsHash = extractIpfsHashFromEventData(event);

  if (ipfsHash) {
    // If the IPFS hash is available, fetch the metadata
    let updatedMetadata = fetchSubgraphMetadata(subgraphMetadataId, ipfsHash);
    // Handle the updated metadata accordingly
  } else {
    // Handle the case where the IPFS hash couldn't be extracted
    // or isn't available in the event data
    // You might log an error or take any necessary action here
  }
}