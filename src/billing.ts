/*import { BigInt } from "@graphprotocol/graph-ts";
import {
  TokensAdded as TokensAddedEvent,
  TokensRemoved as TokensRemovedEvent,
  TokensPulled as TokensPulledEvent,
  TokensRescued as TokensRescuedEvent,
  billing,
} from "../generated/Billing/Billing";
import { createOrLoadAccount } from "./helpers/utils";
import { BillingEntry } from "../generated/schema";

// Handle the TokensRemoved event
export function handleTokensRemoved(event: TokensRemovedEvent): void {
  let account = createOrLoadAccount(event.params.from.toHexString());
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
}

// Handle the TokensAdded event
export function handleTokensAdded(event: TokensAddedEvent): void {
  let account = createOrLoadAccount(event.params.user.toHex());
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
*/

// Import necessary libraries and generated types
import { BigInt } from "@graphprotocol/graph-ts";
import { TokensAdded } from "../generated/Billing/Billing";
import { Account, BillingEntry, Subgraph } from "../generated/schema";

export function handleTokensAdded(event: TokensAdded): void {
  let accountId = event.params.user.toHex();
  let account = Account.load(accountId);
  if (account == null) {
    account = new Account(accountId);
    account.createdAt = event.block.timestamp;
    account.address = event.params.user;
    // Initialize account fields as necessary
  }

  // Logic to update account balance goes here
  // Assuming account.balance is maintained elsewhere or needs to be computed

  let billingEntryId =
    event.transaction.hash.toHex() + "-" + event.logIndex.toString();
  let billingEntry = new BillingEntry(billingEntryId);
  billingEntry.balance = BigInt.zero(); // Update this with actual logic
  billingEntry.tokensIn = event.params.amount;
  billingEntry.withdrawnQueryFees = BigInt.zero(); // Assuming initial value or calculate as needed
  billingEntry.timestamp = event.block.timestamp;
  billingEntry.account = accountId;
  // billingEntry.subgraph = ...; // Associate with the correct Subgraph ID
  // billingEntry.deployments = ...; // Associate with the correct SubgraphDeployment ID

  account.save();
  billingEntry.save();
}
