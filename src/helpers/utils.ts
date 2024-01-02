import { BigInt, Bytes } from "@graphprotocol/graph-ts";
import {
  Account as AccountEntity,
  Subgraph as SubgraphEntity,
} from "../../generated/schema";

// Helper functions to create or load an Account
export function createOrLoadAccount(id: string): AccountEntity {
  let account = AccountEntity.load(id);
  if (!account) {
    account = new AccountEntity(id);
  }
  return account;
}

// Helper Function to create new subgraph entity published to L2
export function arbitrumOneSubgraph(
  subgraphDeploymentID: string
): SubgraphEntity {
  let subgraph = SubgraphEntity.load(subgraphDeploymentID.toString());

  if (!subgraph) {
    subgraph = new SubgraphEntity(subgraphDeploymentID);
  }
  return subgraph;
}
