import { BigInt, log } from "@graphprotocol/graph-ts";
import {
  SubgraphPublished as SubgraphPublishedEvent,
  SubgraphMetadataUpdated as SubgraphMetadataUpdatedEvent,
} from "./helpers/";
import { l2Subgraph } from "./helpers/subgraphHelpers";
import {
  fetchSubgraphMetadata,
  extractIpfsHashFromEventData,
} from "../helpers/utils.metadata";
import { SubgraphMetadata, SubgraphDeployment } from "../generated/schema";

// Handle SubgraphPublished event
export function handleSubgraphPublished(event: SubgraphPublishedEvent): void {
  let subgraph = l2Subgraph(event.params.subgraphDeploymentID.toHex());
  subgraph.previousBalance = event.params.reserveRatio;
  subgraph.previousVersionHash = event.params.subgraphID;
  subgraph.currentVersionHash = event.params.subgraphDeploymentID;
  subgraph.queryFees = BigInt.zero();
  subgraph.save();
}

// Handle SubgraphMetadataUpdated event
export function handleSubgraphMetadata(
  event: SubgraphMetadataUpdatedEvent
): void {
  // Extracting the IPFS hash from the event data
  const ipfsHash = extractIpfsHashFromEventData(event);

  if (ipfsHash) {
    // If the IPFS hash is available, fetch the metadata
    let subgraphMetadata = fetchSubgraphMetadata(
      new L2SubgraphMetadata(event.params.subgraphMetadata.toHex()),
      ipfsHash
    );
    // Save the updated metadata
    subgraphMetadata.save();
  } else {
    // Handle the case where the IPFS hash couldn't be extracted
    // or isn't available in the event data
    // Log an error
    log.error("IPFS hash not available", []);
  }
}

// Mapping for SubgraphDeployment entity
export function createOrUpdateSubgraphDeployment(
  ipfsHash: string,
  createdAt: BigInt
): void {
  let subgraphDeployment = SubgraphDeployment.load(ipfsHash);

  if (!subgraphDeployment) {
    subgraphDeployment = new SubgraphDeployment(ipfsHash);
    subgraphDeployment.createdAt = createdAt.toI32();
  }

  subgraphDeployment.save();
}

// Mapping for Transaction entity
export function createTransaction(
  accountId: string,
  amount: BigInt,
  timestamp: BigInt
): void {
  let transaction = new Transaction(accountId + timestamp.toString());
  transaction.account = accountId;
  transaction.amount = amount;
  transaction.timestamp = timestamp;
  transaction.save();
}
