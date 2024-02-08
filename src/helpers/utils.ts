
import {
  Account as AccountEntity,
  Subgraph as SubgraphEntity,
  SubgraphDeployment as SubgraphDeploymentEntity,
} from "../../generated/schema";



// Helper function to fetch or create a Subgraph entity published to L2.
export function l2Subgraph(subgraphId: string): SubgraphEntity {
  let subgraph = SubgraphEntity.load(subgraphId);
  if (!subgraph) {
    subgraph = new SubgraphEntity(subgraphId);
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
    deployment.blocknumber = deployment.blocknumber;
    deployment.timestamp = deployment.timestamp;
    deployment.stakedTokens = deployment.stakedTokens;
    deployment.signalAmount = deployment.signalAmount;

    deployment.save();
  }
  return deployment;
}

// Fetches or creates SubgraphMetadata from IPFS and ensures the entity is updated.
/*export function ensureSubgraphMetadata(metadataId: string): SubgraphMetadata {
  let metadata = SubgraphMetadata.load(metadataId);
  if (metadata == null) {
    metadata = new SubgraphMetadata(metadataId);
    // Here, you'd fetch and populate metadata from IPFS.
    // For now, we'll use placeholders.
    metadata.name = "Placeholder Name"; // Replace with actual data from IPFS.
    metadata.description = "Placeholder Description"; // Replace with actual data from IPFS.
    // Populate other fields as necessary.
    metadata.save();
  }
  return metadata;
}*/

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
