import { Bytes, ByteArray, BigInt } from "@graphprotocol/graph-ts";
import {
  Account,
  Subgraph,
  Transaction as TransactionEntity,
  SubgraphDeployment as SubgraphDeploymentEntity,
} from "../generated/schema";
import {
  SubgraphPublished as SubgraphPublishedEvent,
  SubgraphVersionUpdated as SubgraphVersionUpdatedEvent,
  SubgraphMetadataUpdated as SubgraphMetadataUpdatedEvent,
} from "../generated/GNS/GNS";
import { arbitrumOneSubgraph } from "./helpers/utils";

// Handle SubgraphPublished event
export function handleSubgraphPublished(event: SubgraphPublishedEvent): void {
  let subgraph = arbitrumOneSubgraph(event.params.subgraphDeploymentID.toHex());
  subgraph.previousBalance = event.params.reserveRatio;
  subgraph.previousVersionHash = event.params.subgraphID;
  subgraph.currentVersionHash = event.params.subgraphDeploymentID;
  subgraph.queryFees = BigInt.zero();
  subgraph.save();
}

// Handle SubgraphVersionUpdated event
import function handleSubgraphVersionUpdated(
  event: SubgraphVersionUpdatedEvent
): void {
  let subgraph = arbitrumOneSubgraph(event.params.subgraphDeploymentID.toHex());
};

// The event also provides versionMetadata, which you might want to store
// Assuming you have a field in your Subgraph entity to store this metadata
// subgraph.versionMetadata = event.params.versionMetadata

subgraph.save();
