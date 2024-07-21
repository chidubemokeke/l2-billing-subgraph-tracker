import {
  CollectorUpdated as CollectorUpdatedEvent,
  InsufficientBalanceForRemoval as InsufficientBalanceForRemovalEvent,
  L1BillingConnectorUpdated as L1BillingConnectorUpdatedEvent,
  L2TokenGatewayUpdated as L2TokenGatewayUpdatedEvent,
  NewOwnership as NewOwnershipEvent,
  NewPendingOwnership as NewPendingOwnershipEvent,
  TokensAdded as TokensAddedEvent,
  TokensPulled as TokensPulledEvent,
  TokensRemoved as TokensRemovedEvent,
  TokensRescued as TokensRescuedEvent,
} from "../generated/Billing/Billing"
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
  TokensRescued,
} from "../generated/schema"

export function handleCollectorUpdated(event: CollectorUpdatedEvent): void {
  let entity = new CollectorUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.collector = event.params.collector
  entity.enabled = event.params.enabled

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleInsufficientBalanceForRemoval(
  event: InsufficientBalanceForRemovalEvent,
): void {
  let entity = new InsufficientBalanceForRemoval(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.from = event.params.from
  entity.to = event.params.to
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleL1BillingConnectorUpdated(
  event: L1BillingConnectorUpdatedEvent,
): void {
  let entity = new L1BillingConnectorUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.l1BillingConnector = event.params.l1BillingConnector

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleL2TokenGatewayUpdated(
  event: L2TokenGatewayUpdatedEvent,
): void {
  let entity = new L2TokenGatewayUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.l2TokenGateway = event.params.l2TokenGateway

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleNewOwnership(event: NewOwnershipEvent): void {
  let entity = new NewOwnership(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.from = event.params.from
  entity.to = event.params.to

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleNewPendingOwnership(
  event: NewPendingOwnershipEvent,
): void {
  let entity = new NewPendingOwnership(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.from = event.params.from
  entity.to = event.params.to

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTokensAdded(event: TokensAddedEvent): void {
  let entity = new TokensAdded(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.user = event.params.user
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTokensPulled(event: TokensPulledEvent): void {
  let entity = new TokensPulled(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.user = event.params.user
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTokensRemoved(event: TokensRemovedEvent): void {
  let entity = new TokensRemoved(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.from = event.params.from
  entity.to = event.params.to
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTokensRescued(event: TokensRescuedEvent): void {
  let entity = new TokensRescued(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.to = event.params.to
  entity.token = event.params.token
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
