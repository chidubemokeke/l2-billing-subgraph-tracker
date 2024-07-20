import {
  ContractSynced as ContractSyncedEvent,
  CounterpartGNSAddressUpdated as CounterpartGNSAddressUpdatedEvent,
  CuratorBalanceReceived as CuratorBalanceReceivedEvent,
  CuratorBalanceReturnedToBeneficiary as CuratorBalanceReturnedToBeneficiaryEvent,
  GRTWithdrawn as GRTWithdrawnEvent,
  LegacySubgraphClaimed as LegacySubgraphClaimedEvent,
  ParameterUpdated as ParameterUpdatedEvent,
  SetController as SetControllerEvent,
  SetDefaultName as SetDefaultNameEvent,
  SignalBurned as SignalBurnedEvent,
  SignalMinted as SignalMintedEvent,
  SignalTransferred as SignalTransferredEvent,
  SubgraphDeprecated as SubgraphDeprecatedEvent,
  SubgraphL2TransferFinalized as SubgraphL2TransferFinalizedEvent,
  SubgraphMetadataUpdated as SubgraphMetadataUpdatedEvent,
  SubgraphNFTUpdated as SubgraphNFTUpdatedEvent,
  SubgraphPublished as SubgraphPublishedEvent,
  SubgraphReceivedFromL1 as SubgraphReceivedFromL1Event,
  SubgraphUpgraded as SubgraphUpgradedEvent,
  SubgraphVersionUpdated as SubgraphVersionUpdatedEvent
} from "../generated/L2GNS/L2GNS"
import {
  ContractSynced,
  CounterpartGNSAddressUpdated,
  CuratorBalanceReceived,
  CuratorBalanceReturnedToBeneficiary,
  GRTWithdrawn,
  LegacySubgraphClaimed,
  ParameterUpdated,
  SetController,
  SetDefaultName,
  SignalBurned,
  SignalMinted,
  SignalTransferred,
  SubgraphDeprecated,
  SubgraphL2TransferFinalized,
  SubgraphMetadataUpdated,
  SubgraphNFTUpdated,
  SubgraphPublished,
  SubgraphReceivedFromL1,
  SubgraphUpgraded,
  SubgraphVersionUpdated
} from "../generated/schema"

export function handleContractSynced(event: ContractSyncedEvent): void {
  let entity = new ContractSynced(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.nameHash = event.params.nameHash
  entity.contractAddress = event.params.contractAddress

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleCounterpartGNSAddressUpdated(
  event: CounterpartGNSAddressUpdatedEvent
): void {
  let entity = new CounterpartGNSAddressUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._counterpart = event.params._counterpart

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleCuratorBalanceReceived(
  event: CuratorBalanceReceivedEvent
): void {
  let entity = new CuratorBalanceReceived(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._l1SubgraphId = event.params._l1SubgraphId
  entity._l2SubgraphID = event.params._l2SubgraphID
  entity._l2Curator = event.params._l2Curator
  entity._tokens = event.params._tokens

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleCuratorBalanceReturnedToBeneficiary(
  event: CuratorBalanceReturnedToBeneficiaryEvent
): void {
  let entity = new CuratorBalanceReturnedToBeneficiary(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._l1SubgraphID = event.params._l1SubgraphID
  entity._l2Curator = event.params._l2Curator
  entity._tokens = event.params._tokens

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleGRTWithdrawn(event: GRTWithdrawnEvent): void {
  let entity = new GRTWithdrawn(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.subgraphID = event.params.subgraphID
  entity.curator = event.params.curator
  entity.nSignalBurnt = event.params.nSignalBurnt
  entity.withdrawnGRT = event.params.withdrawnGRT

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleLegacySubgraphClaimed(
  event: LegacySubgraphClaimedEvent
): void {
  let entity = new LegacySubgraphClaimed(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.graphAccount = event.params.graphAccount
  entity.subgraphNumber = event.params.subgraphNumber

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleParameterUpdated(event: ParameterUpdatedEvent): void {
  let entity = new ParameterUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.param = event.params.param

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSetController(event: SetControllerEvent): void {
  let entity = new SetController(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.controller = event.params.controller

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSetDefaultName(event: SetDefaultNameEvent): void {
  let entity = new SetDefaultName(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.graphAccount = event.params.graphAccount
  entity.nameSystem = event.params.nameSystem
  entity.nameIdentifier = event.params.nameIdentifier
  entity.name = event.params.name

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSignalBurned(event: SignalBurnedEvent): void {
  let entity = new SignalBurned(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.subgraphID = event.params.subgraphID
  entity.curator = event.params.curator
  entity.nSignalBurnt = event.params.nSignalBurnt
  entity.vSignalBurnt = event.params.vSignalBurnt
  entity.tokensReceived = event.params.tokensReceived

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSignalMinted(event: SignalMintedEvent): void {
  let entity = new SignalMinted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.subgraphID = event.params.subgraphID
  entity.curator = event.params.curator
  entity.nSignalCreated = event.params.nSignalCreated
  entity.vSignalCreated = event.params.vSignalCreated
  entity.tokensDeposited = event.params.tokensDeposited

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSignalTransferred(event: SignalTransferredEvent): void {
  let entity = new SignalTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.subgraphID = event.params.subgraphID
  entity.from = event.params.from
  entity.to = event.params.to
  entity.nSignalTransferred = event.params.nSignalTransferred

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSubgraphDeprecated(event: SubgraphDeprecatedEvent): void {
  let entity = new SubgraphDeprecated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.subgraphID = event.params.subgraphID
  entity.withdrawableGRT = event.params.withdrawableGRT

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSubgraphL2TransferFinalized(
  event: SubgraphL2TransferFinalizedEvent
): void {
  let entity = new SubgraphL2TransferFinalized(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._l2SubgraphID = event.params._l2SubgraphID

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSubgraphMetadataUpdated(
  event: SubgraphMetadataUpdatedEvent
): void {
  let entity = new SubgraphMetadataUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.subgraphID = event.params.subgraphID
  entity.subgraphMetadata = event.params.subgraphMetadata

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSubgraphNFTUpdated(event: SubgraphNFTUpdatedEvent): void {
  let entity = new SubgraphNFTUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.subgraphNFT = event.params.subgraphNFT

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSubgraphPublished(event: SubgraphPublishedEvent): void {
  let entity = new SubgraphPublished(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.subgraphID = event.params.subgraphID
  entity.subgraphDeploymentID = event.params.subgraphDeploymentID
  entity.reserveRatio = event.params.reserveRatio

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSubgraphReceivedFromL1(
  event: SubgraphReceivedFromL1Event
): void {
  let entity = new SubgraphReceivedFromL1(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._l1SubgraphID = event.params._l1SubgraphID
  entity._l2SubgraphID = event.params._l2SubgraphID
  entity._owner = event.params._owner
  entity._tokens = event.params._tokens

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSubgraphUpgraded(event: SubgraphUpgradedEvent): void {
  let entity = new SubgraphUpgraded(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.subgraphID = event.params.subgraphID
  entity.vSignalCreated = event.params.vSignalCreated
  entity.tokensSignalled = event.params.tokensSignalled
  entity.subgraphDeploymentID = event.params.subgraphDeploymentID

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSubgraphVersionUpdated(
  event: SubgraphVersionUpdatedEvent
): void {
  let entity = new SubgraphVersionUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.subgraphID = event.params.subgraphID
  entity.subgraphDeploymentID = event.params.subgraphDeploymentID
  entity.versionMetadata = event.params.versionMetadata

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
