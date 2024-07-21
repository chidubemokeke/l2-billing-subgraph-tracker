import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  CollectorUpdated,
  InsufficientBalanceForRemoval,
  L1BillingConnectorUpdated,
  L2TokenGatewayUpdated,
  NewOwnership,
  NewPendingOwnership,
  TokensAdded,
  TokensPulled,
  TokensRemoved,
  TokensRescued
} from "../generated/Billing/Billing"

export function createCollectorUpdatedEvent(
  collector: Address,
  enabled: boolean
): CollectorUpdated {
  let collectorUpdatedEvent = changetype<CollectorUpdated>(newMockEvent())

  collectorUpdatedEvent.parameters = new Array()

  collectorUpdatedEvent.parameters.push(
    new ethereum.EventParam("collector", ethereum.Value.fromAddress(collector))
  )
  collectorUpdatedEvent.parameters.push(
    new ethereum.EventParam("enabled", ethereum.Value.fromBoolean(enabled))
  )

  return collectorUpdatedEvent
}

export function createInsufficientBalanceForRemovalEvent(
  from: Address,
  to: Address,
  amount: BigInt
): InsufficientBalanceForRemoval {
  let insufficientBalanceForRemovalEvent =
    changetype<InsufficientBalanceForRemoval>(newMockEvent())

  insufficientBalanceForRemovalEvent.parameters = new Array()

  insufficientBalanceForRemovalEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  insufficientBalanceForRemovalEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  insufficientBalanceForRemovalEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return insufficientBalanceForRemovalEvent
}

export function createL1BillingConnectorUpdatedEvent(
  l1BillingConnector: Address
): L1BillingConnectorUpdated {
  let l1BillingConnectorUpdatedEvent = changetype<L1BillingConnectorUpdated>(
    newMockEvent()
  )

  l1BillingConnectorUpdatedEvent.parameters = new Array()

  l1BillingConnectorUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "l1BillingConnector",
      ethereum.Value.fromAddress(l1BillingConnector)
    )
  )

  return l1BillingConnectorUpdatedEvent
}

export function createL2TokenGatewayUpdatedEvent(
  l2TokenGateway: Address
): L2TokenGatewayUpdated {
  let l2TokenGatewayUpdatedEvent = changetype<L2TokenGatewayUpdated>(
    newMockEvent()
  )

  l2TokenGatewayUpdatedEvent.parameters = new Array()

  l2TokenGatewayUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "l2TokenGateway",
      ethereum.Value.fromAddress(l2TokenGateway)
    )
  )

  return l2TokenGatewayUpdatedEvent
}

export function createNewOwnershipEvent(
  from: Address,
  to: Address
): NewOwnership {
  let newOwnershipEvent = changetype<NewOwnership>(newMockEvent())

  newOwnershipEvent.parameters = new Array()

  newOwnershipEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  newOwnershipEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )

  return newOwnershipEvent
}

export function createNewPendingOwnershipEvent(
  from: Address,
  to: Address
): NewPendingOwnership {
  let newPendingOwnershipEvent = changetype<NewPendingOwnership>(newMockEvent())

  newPendingOwnershipEvent.parameters = new Array()

  newPendingOwnershipEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  newPendingOwnershipEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )

  return newPendingOwnershipEvent
}

export function createTokensAddedEvent(
  user: Address,
  amount: BigInt
): TokensAdded {
  let tokensAddedEvent = changetype<TokensAdded>(newMockEvent())

  tokensAddedEvent.parameters = new Array()

  tokensAddedEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  tokensAddedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return tokensAddedEvent
}

export function createTokensPulledEvent(
  user: Address,
  amount: BigInt
): TokensPulled {
  let tokensPulledEvent = changetype<TokensPulled>(newMockEvent())

  tokensPulledEvent.parameters = new Array()

  tokensPulledEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  tokensPulledEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return tokensPulledEvent
}

export function createTokensRemovedEvent(
  from: Address,
  to: Address,
  amount: BigInt
): TokensRemoved {
  let tokensRemovedEvent = changetype<TokensRemoved>(newMockEvent())

  tokensRemovedEvent.parameters = new Array()

  tokensRemovedEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  tokensRemovedEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  tokensRemovedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return tokensRemovedEvent
}

export function createTokensRescuedEvent(
  to: Address,
  token: Address,
  amount: BigInt
): TokensRescued {
  let tokensRescuedEvent = changetype<TokensRescued>(newMockEvent())

  tokensRescuedEvent.parameters = new Array()

  tokensRescuedEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  tokensRescuedEvent.parameters.push(
    new ethereum.EventParam("token", ethereum.Value.fromAddress(token))
  )
  tokensRescuedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return tokensRescuedEvent
}
