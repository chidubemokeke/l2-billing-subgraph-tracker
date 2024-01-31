import { BigInt } from "@graphprotocol/graph-ts";
import {
  TokensAdded as TokensAddedEvent,
  TokensRemoved as TokensRemovedEvent,
  TokensPulled as TokensPulledEvent,
  TokensRescued as TokensRescuedEvent,
} from "../generated/Billing/Billing";
import { createOrLoadAccount } from "./helpers/utils";

// Handle the TokensRemoved event
export function handleTokensRemoved(event: TokensRemovedEvent): void {
  let account = createOrLoadAccount(event.params.from.toHexString());
  account.balance = account.billingBalance.minus(event.params.amount);
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
