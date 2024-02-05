import { Bytes } from "@graphprotocol/graph-ts";
import {
  Account as CuratorEntity,
  Subgraph as SubgraphEntity,
  SubgraphDeployment as SubgraphDeploymentEntity,
} from "../../generated/schema";

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
    subgraph.save();
  }
  return subgraph;
}

// Helper function to fetch or create a SubgraphDeployment entity.
export function newDeployment(
  deploymentId: string,
  subgraph: SubgraphEntity
): SubgraphDeploymentEntity {
  let deployment = SubgraphDeploymentEntity.load(deploymentId);
  if (!deployment) {
    deployment = new SubgraphDeploymentEntity(deploymentId);
    deployment.subgraph = subgraph.id;
    deployment.save();
  }
  return deployment;
}

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
