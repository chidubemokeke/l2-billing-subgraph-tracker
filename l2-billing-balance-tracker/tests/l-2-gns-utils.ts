import { newMockEvent } from "matchstick-as"
import { ethereum, Bytes, Address, BigInt } from "@graphprotocol/graph-ts"
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
} from "../generated/L2GNS/L2GNS"

export function createContractSyncedEvent(
  nameHash: Bytes,
  contractAddress: Address
): ContractSynced {
  let contractSyncedEvent = changetype<ContractSynced>(newMockEvent())

  contractSyncedEvent.parameters = new Array()

  contractSyncedEvent.parameters.push(
    new ethereum.EventParam("nameHash", ethereum.Value.fromFixedBytes(nameHash))
  )
  contractSyncedEvent.parameters.push(
    new ethereum.EventParam(
      "contractAddress",
      ethereum.Value.fromAddress(contractAddress)
    )
  )

  return contractSyncedEvent
}

export function createCounterpartGNSAddressUpdatedEvent(
  _counterpart: Address
): CounterpartGNSAddressUpdated {
  let counterpartGnsAddressUpdatedEvent =
    changetype<CounterpartGNSAddressUpdated>(newMockEvent())

  counterpartGnsAddressUpdatedEvent.parameters = new Array()

  counterpartGnsAddressUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "_counterpart",
      ethereum.Value.fromAddress(_counterpart)
    )
  )

  return counterpartGnsAddressUpdatedEvent
}

export function createCuratorBalanceReceivedEvent(
  _l1SubgraphId: BigInt,
  _l2SubgraphID: BigInt,
  _l2Curator: Address,
  _tokens: BigInt
): CuratorBalanceReceived {
  let curatorBalanceReceivedEvent = changetype<CuratorBalanceReceived>(
    newMockEvent()
  )

  curatorBalanceReceivedEvent.parameters = new Array()

  curatorBalanceReceivedEvent.parameters.push(
    new ethereum.EventParam(
      "_l1SubgraphId",
      ethereum.Value.fromUnsignedBigInt(_l1SubgraphId)
    )
  )
  curatorBalanceReceivedEvent.parameters.push(
    new ethereum.EventParam(
      "_l2SubgraphID",
      ethereum.Value.fromUnsignedBigInt(_l2SubgraphID)
    )
  )
  curatorBalanceReceivedEvent.parameters.push(
    new ethereum.EventParam(
      "_l2Curator",
      ethereum.Value.fromAddress(_l2Curator)
    )
  )
  curatorBalanceReceivedEvent.parameters.push(
    new ethereum.EventParam(
      "_tokens",
      ethereum.Value.fromUnsignedBigInt(_tokens)
    )
  )

  return curatorBalanceReceivedEvent
}

export function createCuratorBalanceReturnedToBeneficiaryEvent(
  _l1SubgraphID: BigInt,
  _l2Curator: Address,
  _tokens: BigInt
): CuratorBalanceReturnedToBeneficiary {
  let curatorBalanceReturnedToBeneficiaryEvent =
    changetype<CuratorBalanceReturnedToBeneficiary>(newMockEvent())

  curatorBalanceReturnedToBeneficiaryEvent.parameters = new Array()

  curatorBalanceReturnedToBeneficiaryEvent.parameters.push(
    new ethereum.EventParam(
      "_l1SubgraphID",
      ethereum.Value.fromUnsignedBigInt(_l1SubgraphID)
    )
  )
  curatorBalanceReturnedToBeneficiaryEvent.parameters.push(
    new ethereum.EventParam(
      "_l2Curator",
      ethereum.Value.fromAddress(_l2Curator)
    )
  )
  curatorBalanceReturnedToBeneficiaryEvent.parameters.push(
    new ethereum.EventParam(
      "_tokens",
      ethereum.Value.fromUnsignedBigInt(_tokens)
    )
  )

  return curatorBalanceReturnedToBeneficiaryEvent
}

export function createGRTWithdrawnEvent(
  subgraphID: BigInt,
  curator: Address,
  nSignalBurnt: BigInt,
  withdrawnGRT: BigInt
): GRTWithdrawn {
  let grtWithdrawnEvent = changetype<GRTWithdrawn>(newMockEvent())

  grtWithdrawnEvent.parameters = new Array()

  grtWithdrawnEvent.parameters.push(
    new ethereum.EventParam(
      "subgraphID",
      ethereum.Value.fromUnsignedBigInt(subgraphID)
    )
  )
  grtWithdrawnEvent.parameters.push(
    new ethereum.EventParam("curator", ethereum.Value.fromAddress(curator))
  )
  grtWithdrawnEvent.parameters.push(
    new ethereum.EventParam(
      "nSignalBurnt",
      ethereum.Value.fromUnsignedBigInt(nSignalBurnt)
    )
  )
  grtWithdrawnEvent.parameters.push(
    new ethereum.EventParam(
      "withdrawnGRT",
      ethereum.Value.fromUnsignedBigInt(withdrawnGRT)
    )
  )

  return grtWithdrawnEvent
}

export function createLegacySubgraphClaimedEvent(
  graphAccount: Address,
  subgraphNumber: BigInt
): LegacySubgraphClaimed {
  let legacySubgraphClaimedEvent = changetype<LegacySubgraphClaimed>(
    newMockEvent()
  )

  legacySubgraphClaimedEvent.parameters = new Array()

  legacySubgraphClaimedEvent.parameters.push(
    new ethereum.EventParam(
      "graphAccount",
      ethereum.Value.fromAddress(graphAccount)
    )
  )
  legacySubgraphClaimedEvent.parameters.push(
    new ethereum.EventParam(
      "subgraphNumber",
      ethereum.Value.fromUnsignedBigInt(subgraphNumber)
    )
  )

  return legacySubgraphClaimedEvent
}

export function createParameterUpdatedEvent(param: string): ParameterUpdated {
  let parameterUpdatedEvent = changetype<ParameterUpdated>(newMockEvent())

  parameterUpdatedEvent.parameters = new Array()

  parameterUpdatedEvent.parameters.push(
    new ethereum.EventParam("param", ethereum.Value.fromString(param))
  )

  return parameterUpdatedEvent
}

export function createSetControllerEvent(controller: Address): SetController {
  let setControllerEvent = changetype<SetController>(newMockEvent())

  setControllerEvent.parameters = new Array()

  setControllerEvent.parameters.push(
    new ethereum.EventParam(
      "controller",
      ethereum.Value.fromAddress(controller)
    )
  )

  return setControllerEvent
}

export function createSetDefaultNameEvent(
  graphAccount: Address,
  nameSystem: BigInt,
  nameIdentifier: Bytes,
  name: string
): SetDefaultName {
  let setDefaultNameEvent = changetype<SetDefaultName>(newMockEvent())

  setDefaultNameEvent.parameters = new Array()

  setDefaultNameEvent.parameters.push(
    new ethereum.EventParam(
      "graphAccount",
      ethereum.Value.fromAddress(graphAccount)
    )
  )
  setDefaultNameEvent.parameters.push(
    new ethereum.EventParam(
      "nameSystem",
      ethereum.Value.fromUnsignedBigInt(nameSystem)
    )
  )
  setDefaultNameEvent.parameters.push(
    new ethereum.EventParam(
      "nameIdentifier",
      ethereum.Value.fromFixedBytes(nameIdentifier)
    )
  )
  setDefaultNameEvent.parameters.push(
    new ethereum.EventParam("name", ethereum.Value.fromString(name))
  )

  return setDefaultNameEvent
}

export function createSignalBurnedEvent(
  subgraphID: BigInt,
  curator: Address,
  nSignalBurnt: BigInt,
  vSignalBurnt: BigInt,
  tokensReceived: BigInt
): SignalBurned {
  let signalBurnedEvent = changetype<SignalBurned>(newMockEvent())

  signalBurnedEvent.parameters = new Array()

  signalBurnedEvent.parameters.push(
    new ethereum.EventParam(
      "subgraphID",
      ethereum.Value.fromUnsignedBigInt(subgraphID)
    )
  )
  signalBurnedEvent.parameters.push(
    new ethereum.EventParam("curator", ethereum.Value.fromAddress(curator))
  )
  signalBurnedEvent.parameters.push(
    new ethereum.EventParam(
      "nSignalBurnt",
      ethereum.Value.fromUnsignedBigInt(nSignalBurnt)
    )
  )
  signalBurnedEvent.parameters.push(
    new ethereum.EventParam(
      "vSignalBurnt",
      ethereum.Value.fromUnsignedBigInt(vSignalBurnt)
    )
  )
  signalBurnedEvent.parameters.push(
    new ethereum.EventParam(
      "tokensReceived",
      ethereum.Value.fromUnsignedBigInt(tokensReceived)
    )
  )

  return signalBurnedEvent
}

export function createSignalMintedEvent(
  subgraphID: BigInt,
  curator: Address,
  nSignalCreated: BigInt,
  vSignalCreated: BigInt,
  tokensDeposited: BigInt
): SignalMinted {
  let signalMintedEvent = changetype<SignalMinted>(newMockEvent())

  signalMintedEvent.parameters = new Array()

  signalMintedEvent.parameters.push(
    new ethereum.EventParam(
      "subgraphID",
      ethereum.Value.fromUnsignedBigInt(subgraphID)
    )
  )
  signalMintedEvent.parameters.push(
    new ethereum.EventParam("curator", ethereum.Value.fromAddress(curator))
  )
  signalMintedEvent.parameters.push(
    new ethereum.EventParam(
      "nSignalCreated",
      ethereum.Value.fromUnsignedBigInt(nSignalCreated)
    )
  )
  signalMintedEvent.parameters.push(
    new ethereum.EventParam(
      "vSignalCreated",
      ethereum.Value.fromUnsignedBigInt(vSignalCreated)
    )
  )
  signalMintedEvent.parameters.push(
    new ethereum.EventParam(
      "tokensDeposited",
      ethereum.Value.fromUnsignedBigInt(tokensDeposited)
    )
  )

  return signalMintedEvent
}

export function createSignalTransferredEvent(
  subgraphID: BigInt,
  from: Address,
  to: Address,
  nSignalTransferred: BigInt
): SignalTransferred {
  let signalTransferredEvent = changetype<SignalTransferred>(newMockEvent())

  signalTransferredEvent.parameters = new Array()

  signalTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "subgraphID",
      ethereum.Value.fromUnsignedBigInt(subgraphID)
    )
  )
  signalTransferredEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  signalTransferredEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  signalTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "nSignalTransferred",
      ethereum.Value.fromUnsignedBigInt(nSignalTransferred)
    )
  )

  return signalTransferredEvent
}

export function createSubgraphDeprecatedEvent(
  subgraphID: BigInt,
  withdrawableGRT: BigInt
): SubgraphDeprecated {
  let subgraphDeprecatedEvent = changetype<SubgraphDeprecated>(newMockEvent())

  subgraphDeprecatedEvent.parameters = new Array()

  subgraphDeprecatedEvent.parameters.push(
    new ethereum.EventParam(
      "subgraphID",
      ethereum.Value.fromUnsignedBigInt(subgraphID)
    )
  )
  subgraphDeprecatedEvent.parameters.push(
    new ethereum.EventParam(
      "withdrawableGRT",
      ethereum.Value.fromUnsignedBigInt(withdrawableGRT)
    )
  )

  return subgraphDeprecatedEvent
}

export function createSubgraphL2TransferFinalizedEvent(
  _l2SubgraphID: BigInt
): SubgraphL2TransferFinalized {
  let subgraphL2TransferFinalizedEvent =
    changetype<SubgraphL2TransferFinalized>(newMockEvent())

  subgraphL2TransferFinalizedEvent.parameters = new Array()

  subgraphL2TransferFinalizedEvent.parameters.push(
    new ethereum.EventParam(
      "_l2SubgraphID",
      ethereum.Value.fromUnsignedBigInt(_l2SubgraphID)
    )
  )

  return subgraphL2TransferFinalizedEvent
}

export function createSubgraphMetadataUpdatedEvent(
  subgraphID: BigInt,
  subgraphMetadata: Bytes
): SubgraphMetadataUpdated {
  let subgraphMetadataUpdatedEvent = changetype<SubgraphMetadataUpdated>(
    newMockEvent()
  )

  subgraphMetadataUpdatedEvent.parameters = new Array()

  subgraphMetadataUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "subgraphID",
      ethereum.Value.fromUnsignedBigInt(subgraphID)
    )
  )
  subgraphMetadataUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "subgraphMetadata",
      ethereum.Value.fromFixedBytes(subgraphMetadata)
    )
  )

  return subgraphMetadataUpdatedEvent
}

export function createSubgraphNFTUpdatedEvent(
  subgraphNFT: Address
): SubgraphNFTUpdated {
  let subgraphNftUpdatedEvent = changetype<SubgraphNFTUpdated>(newMockEvent())

  subgraphNftUpdatedEvent.parameters = new Array()

  subgraphNftUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "subgraphNFT",
      ethereum.Value.fromAddress(subgraphNFT)
    )
  )

  return subgraphNftUpdatedEvent
}

export function createSubgraphPublishedEvent(
  subgraphID: BigInt,
  subgraphDeploymentID: Bytes,
  reserveRatio: BigInt
): SubgraphPublished {
  let subgraphPublishedEvent = changetype<SubgraphPublished>(newMockEvent())

  subgraphPublishedEvent.parameters = new Array()

  subgraphPublishedEvent.parameters.push(
    new ethereum.EventParam(
      "subgraphID",
      ethereum.Value.fromUnsignedBigInt(subgraphID)
    )
  )
  subgraphPublishedEvent.parameters.push(
    new ethereum.EventParam(
      "subgraphDeploymentID",
      ethereum.Value.fromFixedBytes(subgraphDeploymentID)
    )
  )
  subgraphPublishedEvent.parameters.push(
    new ethereum.EventParam(
      "reserveRatio",
      ethereum.Value.fromUnsignedBigInt(reserveRatio)
    )
  )

  return subgraphPublishedEvent
}

export function createSubgraphReceivedFromL1Event(
  _l1SubgraphID: BigInt,
  _l2SubgraphID: BigInt,
  _owner: Address,
  _tokens: BigInt
): SubgraphReceivedFromL1 {
  let subgraphReceivedFromL1Event = changetype<SubgraphReceivedFromL1>(
    newMockEvent()
  )

  subgraphReceivedFromL1Event.parameters = new Array()

  subgraphReceivedFromL1Event.parameters.push(
    new ethereum.EventParam(
      "_l1SubgraphID",
      ethereum.Value.fromUnsignedBigInt(_l1SubgraphID)
    )
  )
  subgraphReceivedFromL1Event.parameters.push(
    new ethereum.EventParam(
      "_l2SubgraphID",
      ethereum.Value.fromUnsignedBigInt(_l2SubgraphID)
    )
  )
  subgraphReceivedFromL1Event.parameters.push(
    new ethereum.EventParam("_owner", ethereum.Value.fromAddress(_owner))
  )
  subgraphReceivedFromL1Event.parameters.push(
    new ethereum.EventParam(
      "_tokens",
      ethereum.Value.fromUnsignedBigInt(_tokens)
    )
  )

  return subgraphReceivedFromL1Event
}

export function createSubgraphUpgradedEvent(
  subgraphID: BigInt,
  vSignalCreated: BigInt,
  tokensSignalled: BigInt,
  subgraphDeploymentID: Bytes
): SubgraphUpgraded {
  let subgraphUpgradedEvent = changetype<SubgraphUpgraded>(newMockEvent())

  subgraphUpgradedEvent.parameters = new Array()

  subgraphUpgradedEvent.parameters.push(
    new ethereum.EventParam(
      "subgraphID",
      ethereum.Value.fromUnsignedBigInt(subgraphID)
    )
  )
  subgraphUpgradedEvent.parameters.push(
    new ethereum.EventParam(
      "vSignalCreated",
      ethereum.Value.fromUnsignedBigInt(vSignalCreated)
    )
  )
  subgraphUpgradedEvent.parameters.push(
    new ethereum.EventParam(
      "tokensSignalled",
      ethereum.Value.fromUnsignedBigInt(tokensSignalled)
    )
  )
  subgraphUpgradedEvent.parameters.push(
    new ethereum.EventParam(
      "subgraphDeploymentID",
      ethereum.Value.fromFixedBytes(subgraphDeploymentID)
    )
  )

  return subgraphUpgradedEvent
}

export function createSubgraphVersionUpdatedEvent(
  subgraphID: BigInt,
  subgraphDeploymentID: Bytes,
  versionMetadata: Bytes
): SubgraphVersionUpdated {
  let subgraphVersionUpdatedEvent = changetype<SubgraphVersionUpdated>(
    newMockEvent()
  )

  subgraphVersionUpdatedEvent.parameters = new Array()

  subgraphVersionUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "subgraphID",
      ethereum.Value.fromUnsignedBigInt(subgraphID)
    )
  )
  subgraphVersionUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "subgraphDeploymentID",
      ethereum.Value.fromFixedBytes(subgraphDeploymentID)
    )
  )
  subgraphVersionUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "versionMetadata",
      ethereum.Value.fromFixedBytes(versionMetadata)
    )
  )

  return subgraphVersionUpdatedEvent
}
