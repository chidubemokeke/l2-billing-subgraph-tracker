import { BigInt } from "@graphprotocol/graph-ts";
import {
  SubgraphPublished as SubgraphPublishedEvent,
  SubgraphMetadataUpdated as SubgraphMetadataUpdatedEvent,
  SubgraphVersionUpdated as SubgraphVersionUpdatedEvent,
} from "../generated/GNS/GNS";
import { arbitrumOneSubgraph } from "./helpers/utils";
import { fetchSubgraphMetadata } from "./helpers/utils.metadata";
import { L2SubgraphMetadata } from "../generated/schema";

// Const IPFSHASH =

// Handle SubgraphPublished event
export function handleSubgraphPublished(event: SubgraphPublishedEvent): void {
  let subgraph = arbitrumOneSubgraph(event.params.subgraphDeploymentID.toHex());
  subgraph.previousBalance = event.params.reserveRatio;
  subgraph.previousVersionHash = event.params.subgraphID;
  subgraph.currentVersionHash = event.params.subgraphDeploymentID;
  subgraph.queryFees = BigInt.zero();
  subgraph.save();
}

export function handleSubgraphMetadata(
  event: SubgraphMetadataUpdatedEvent
): void {
  let subgraphMetadataId = event.params.subgraphMetadata.toHex();
  let ipfsHash = "your_ipfs_hash_here"; // Replace this with the actual IPFS hash

  let updatedMetadata = fetchSubgraphMetadata(subgraphMetadataId, ipfsHash);
  // Handle the updated metadata accordingly
}
