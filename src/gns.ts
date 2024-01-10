import { BigInt } from "@graphprotocol/graph-ts";
import { SubgraphPublished as SubgraphPublishedEvent } from "../generated/GNS/GNS";
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
