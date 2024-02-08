import { BigInt, Bytes, Address } from "@graphprotocol/graph-ts";
import {
  TokensAdded as TokensAddedEvent,
  TokensRemoved as TokensRemovedEvent,
  TokensPulled as TokensPulledEvent,
  TokensRescued as TokensRescuedEvent,
} from "../generated/Billing/Billing";
import { CuratorBalanceReceived as CuratorBalanceReceivedEvent } from "../generated/L2GNS/L2GNS";
import {
  Account,
  BillingEntry,
  Subgraph,
  SubgraphDeployment,
  SubgraphVersion,
} from "../generated/schema";
import {
  createOrLoadAccount,
  l2Subgraph,
  newDeployment,
} from "./helpers/utils";

// Handles the 'TokensAdded' event by creating or updating relevant entities.
export function handleTokensAdded(event: TokensAddedEvent): void {
  // Provide'user' (address receiving tokens) and 'amount' (tokens added).
  let account = createOrLoadAccount(event.params.user);
  let tokensAmount = event.params.amount;

  // Placeholder: Determine the correct subgraph and deployment based on additional context or event parameters.
  // This context is essential for linking the BillingEntry to the correct Subgraph and Deployment.
  let subgraphId = Subgraph.load(event.params);
  let deploymentId = "determinedDeploymentId"; // Example: Determine from context.

  let subgraph = l2Subgraph(subgraphId, account.address);
  let deployment = newDeployment(deploymentId, subgraph);

  // Create a new BillingEntry to record the tokens added.
  let billingEntry = new BillingEntry(event.transaction.hash.toHex());
  billingEntry.account = account.id;
  billingEntry.subgraph = subgraph.id;
  billingEntry.deployment = deployment.id;
  billingEntry.tokensIn = tokensAmount;
  billingEntry.timestamp = event.block.timestamp;

  // Assuming balance and withdrawnQueryFees need to be calculated or updated based on current state.
  // For simplicity, this example does not perform those calculations.
  billingEntry.balance = BigInt.zero(); // Placeholder: Calculate based on current state.
  billingEntry.withdrawnQueryFees = BigInt.zero(); // Placeholder: Update as needed.

  billingEntry.save();
}

// Handle the TokensAdded event
/*export function handleTokensAdded(event: TokensAddedEvent): void {
  let billingEntryId = event.transaction.hash.toHexString();
  
  // Create a new BillingEntry entity or load it if it already exists (unlikely for new events).
  let billingEntry = new BillingEntry(billingEntr

  account. = account.billingBalance.plus(event.params.amount);

  // Check if queryFeesPaid exists; if not, set it to zero
  if (
    account.queryFeesPaid === null ||
    account.queryFeesPaid == BigInt.zero()
  ) {
    account.queryFeesPaid = BigInt.zero();
  } else {
    // Convert queryFeesPaid to BigInt if it's not already
    account.queryFeesPaid = account.queryFeesPaid;
  }
  account.save();
}


// Handle the TokensRemoved event
/*export function handleTokensRemoved(event: TokensRemovedEvent): void {
  let account = createOrLoadAccount(event.params.from);
  account. = event.params.amount;
  account.queryFeesPaid = account.queryFeesPaid.minus(event.params.amount);
  account.save();
}

// Handle the TokensPulled event
export function handleTokensPulled(event: TokensPulledEvent): void {
  let account = createOrLoadAccount(event.params.user.toHex());
  account.billingBalance = account.billingBalance.minus(event.params.amount);
  account.queryFeesPaid = account.queryFeesPaid.minus(event.params.amount);
  account.save();
}*/
