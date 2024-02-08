import { Bytes } from "@graphprotocol/graph-ts";
import { Account as AccountEntity } from "../../generated/schema";

export function createOrLoadAccount(address: Bytes): AccountEntity {
  let accountId = address.toHexString();
  let account = AccountEntity.load(accountId);
  if (!account) {
    account = new AccountEntity(accountId);
    account.address = address;
    account.save();
  }
  return account;
}
