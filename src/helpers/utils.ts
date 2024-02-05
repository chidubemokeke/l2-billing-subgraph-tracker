import { BigInt, Bytes, Address } from "@graphprotocol/graph-ts";
import {
  Account as CuratorEntity,
  Subgraph as SubgraphEntity,
  SubgraphDeployment as SubgraphDeploymentEntity,
  Account,
} from "../../generated/schema";

/*// Helper functions to create or load an Account
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
*/

// Helper function to fetch or create a Curator/Account entity.
export function createOrLoadAccount(address: Bytes): CuratorEntity {
  let accountId = address.toHex();
  let account = CuratorEntity.load(accountId);
  if (!account) {
    account = new CuratorEntity(accountId);
    account.address = address;
    account.timestamp = account.timestamp;
    account.save();
  }
  return account;
}

// Helper function to fetch or create a Subgraph entity published to L2.
export function l2Subgraph(
  subgraphId: string,
  ownerAddress: Bytes
): SubgraphEntity {
  let subgraph = SubgraphEntity.load(subgraphId);
  if (!subgraph) {
    subgraph = new SubgraphEntity(subgraphId);
    subgraph.owner = ownerAddress.toHexString();
    // Initialize other necessary fields for a Subgraph entity.
    subgraph.save();
  }
  return subgraph;
}

// Helper function to fetch or create a SubgraphDeployment entity.
export function newDeployment(
  deploymentId: string,
  subgraph: Subgraph
): SubgraphDeploymentEntity {
  let deployment = SubgraphDeploymentEntity.load(deploymentId);
  if (deployment == null) {
    deployment = new SubgraphDeploymentEntity(deploymentId);
    deployment.signal = subgraph.id; // Assuming 'signal' field denotes the associated Subgraph ID.
    // Initialize other necessary fields for a SubgraphDeployment entity.
    deployment.save();
  }
  return deployment;
}
