// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt,
} from "@graphprotocol/graph-ts";

export class CollectorUpdated extends ethereum.Event {
  get params(): CollectorUpdated__Params {
    return new CollectorUpdated__Params(this);
  }
}

export class CollectorUpdated__Params {
  _event: CollectorUpdated;

  constructor(event: CollectorUpdated) {
    this._event = event;
  }

  get collector(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get enabled(): boolean {
    return this._event.parameters[1].value.toBoolean();
  }
}

export class InsufficientBalanceForRemoval extends ethereum.Event {
  get params(): InsufficientBalanceForRemoval__Params {
    return new InsufficientBalanceForRemoval__Params(this);
  }
}

export class InsufficientBalanceForRemoval__Params {
  _event: InsufficientBalanceForRemoval;

  constructor(event: InsufficientBalanceForRemoval) {
    this._event = event;
  }

  get from(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get to(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class L1BillingConnectorUpdated extends ethereum.Event {
  get params(): L1BillingConnectorUpdated__Params {
    return new L1BillingConnectorUpdated__Params(this);
  }
}

export class L1BillingConnectorUpdated__Params {
  _event: L1BillingConnectorUpdated;

  constructor(event: L1BillingConnectorUpdated) {
    this._event = event;
  }

  get l1BillingConnector(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class L2TokenGatewayUpdated extends ethereum.Event {
  get params(): L2TokenGatewayUpdated__Params {
    return new L2TokenGatewayUpdated__Params(this);
  }
}

export class L2TokenGatewayUpdated__Params {
  _event: L2TokenGatewayUpdated;

  constructor(event: L2TokenGatewayUpdated) {
    this._event = event;
  }

  get l2TokenGateway(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class NewOwnership extends ethereum.Event {
  get params(): NewOwnership__Params {
    return new NewOwnership__Params(this);
  }
}

export class NewOwnership__Params {
  _event: NewOwnership;

  constructor(event: NewOwnership) {
    this._event = event;
  }

  get from(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get to(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class NewPendingOwnership extends ethereum.Event {
  get params(): NewPendingOwnership__Params {
    return new NewPendingOwnership__Params(this);
  }
}

export class NewPendingOwnership__Params {
  _event: NewPendingOwnership;

  constructor(event: NewPendingOwnership) {
    this._event = event;
  }

  get from(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get to(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class TokensAdded extends ethereum.Event {
  get params(): TokensAdded__Params {
    return new TokensAdded__Params(this);
  }
}

export class TokensAdded__Params {
  _event: TokensAdded;

  constructor(event: TokensAdded) {
    this._event = event;
  }

  get user(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class TokensPulled extends ethereum.Event {
  get params(): TokensPulled__Params {
    return new TokensPulled__Params(this);
  }
}

export class TokensPulled__Params {
  _event: TokensPulled;

  constructor(event: TokensPulled) {
    this._event = event;
  }

  get user(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class TokensRemoved extends ethereum.Event {
  get params(): TokensRemoved__Params {
    return new TokensRemoved__Params(this);
  }
}

export class TokensRemoved__Params {
  _event: TokensRemoved;

  constructor(event: TokensRemoved) {
    this._event = event;
  }

  get from(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get to(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class TokensRescued extends ethereum.Event {
  get params(): TokensRescued__Params {
    return new TokensRescued__Params(this);
  }
}

export class TokensRescued__Params {
  _event: TokensRescued;

  constructor(event: TokensRescued) {
    this._event = event;
  }

  get to(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get token(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class Billing extends ethereum.SmartContract {
  static bind(address: Address): Billing {
    return new Billing("Billing", address);
  }

  governor(): Address {
    let result = super.call("governor", "governor():(address)", []);

    return result[0].toAddress();
  }

  try_governor(): ethereum.CallResult<Address> {
    let result = super.tryCall("governor", "governor():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  isCollector(param0: Address): boolean {
    let result = super.call("isCollector", "isCollector(address):(bool)", [
      ethereum.Value.fromAddress(param0),
    ]);

    return result[0].toBoolean();
  }

  try_isCollector(param0: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall("isCollector", "isCollector(address):(bool)", [
      ethereum.Value.fromAddress(param0),
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  l1BillingConnector(): Address {
    let result = super.call(
      "l1BillingConnector",
      "l1BillingConnector():(address)",
      [],
    );

    return result[0].toAddress();
  }

  try_l1BillingConnector(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "l1BillingConnector",
      "l1BillingConnector():(address)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  l2TokenGateway(): Address {
    let result = super.call("l2TokenGateway", "l2TokenGateway():(address)", []);

    return result[0].toAddress();
  }

  try_l2TokenGateway(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "l2TokenGateway",
      "l2TokenGateway():(address)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  pendingGovernor(): Address {
    let result = super.call(
      "pendingGovernor",
      "pendingGovernor():(address)",
      [],
    );

    return result[0].toAddress();
  }

  try_pendingGovernor(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "pendingGovernor",
      "pendingGovernor():(address)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  userBalances(param0: Address): BigInt {
    let result = super.call("userBalances", "userBalances(address):(uint256)", [
      ethereum.Value.fromAddress(param0),
    ]);

    return result[0].toBigInt();
  }

  try_userBalances(param0: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "userBalances",
      "userBalances(address):(uint256)",
      [ethereum.Value.fromAddress(param0)],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get _collector(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _token(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _governor(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get _l2TokenGateway(): Address {
    return this._call.inputValues[3].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class AcceptOwnershipCall extends ethereum.Call {
  get inputs(): AcceptOwnershipCall__Inputs {
    return new AcceptOwnershipCall__Inputs(this);
  }

  get outputs(): AcceptOwnershipCall__Outputs {
    return new AcceptOwnershipCall__Outputs(this);
  }
}

export class AcceptOwnershipCall__Inputs {
  _call: AcceptOwnershipCall;

  constructor(call: AcceptOwnershipCall) {
    this._call = call;
  }
}

export class AcceptOwnershipCall__Outputs {
  _call: AcceptOwnershipCall;

  constructor(call: AcceptOwnershipCall) {
    this._call = call;
  }
}

export class AddCall extends ethereum.Call {
  get inputs(): AddCall__Inputs {
    return new AddCall__Inputs(this);
  }

  get outputs(): AddCall__Outputs {
    return new AddCall__Outputs(this);
  }
}

export class AddCall__Inputs {
  _call: AddCall;

  constructor(call: AddCall) {
    this._call = call;
  }

  get _amount(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class AddCall__Outputs {
  _call: AddCall;

  constructor(call: AddCall) {
    this._call = call;
  }
}

export class AddToCall extends ethereum.Call {
  get inputs(): AddToCall__Inputs {
    return new AddToCall__Inputs(this);
  }

  get outputs(): AddToCall__Outputs {
    return new AddToCall__Outputs(this);
  }
}

export class AddToCall__Inputs {
  _call: AddToCall;

  constructor(call: AddToCall) {
    this._call = call;
  }

  get _to(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class AddToCall__Outputs {
  _call: AddToCall;

  constructor(call: AddToCall) {
    this._call = call;
  }
}

export class AddToManyCall extends ethereum.Call {
  get inputs(): AddToManyCall__Inputs {
    return new AddToManyCall__Inputs(this);
  }

  get outputs(): AddToManyCall__Outputs {
    return new AddToManyCall__Outputs(this);
  }
}

export class AddToManyCall__Inputs {
  _call: AddToManyCall;

  constructor(call: AddToManyCall) {
    this._call = call;
  }

  get _to(): Array<Address> {
    return this._call.inputValues[0].value.toAddressArray();
  }

  get _amount(): Array<BigInt> {
    return this._call.inputValues[1].value.toBigIntArray();
  }
}

export class AddToManyCall__Outputs {
  _call: AddToManyCall;

  constructor(call: AddToManyCall) {
    this._call = call;
  }
}

export class OnTokenTransferCall extends ethereum.Call {
  get inputs(): OnTokenTransferCall__Inputs {
    return new OnTokenTransferCall__Inputs(this);
  }

  get outputs(): OnTokenTransferCall__Outputs {
    return new OnTokenTransferCall__Outputs(this);
  }
}

export class OnTokenTransferCall__Inputs {
  _call: OnTokenTransferCall;

  constructor(call: OnTokenTransferCall) {
    this._call = call;
  }

  get _from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _data(): Bytes {
    return this._call.inputValues[2].value.toBytes();
  }
}

export class OnTokenTransferCall__Outputs {
  _call: OnTokenTransferCall;

  constructor(call: OnTokenTransferCall) {
    this._call = call;
  }
}

export class PullCall extends ethereum.Call {
  get inputs(): PullCall__Inputs {
    return new PullCall__Inputs(this);
  }

  get outputs(): PullCall__Outputs {
    return new PullCall__Outputs(this);
  }
}

export class PullCall__Inputs {
  _call: PullCall;

  constructor(call: PullCall) {
    this._call = call;
  }

  get _user(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _to(): Address {
    return this._call.inputValues[2].value.toAddress();
  }
}

export class PullCall__Outputs {
  _call: PullCall;

  constructor(call: PullCall) {
    this._call = call;
  }
}

export class PullManyCall extends ethereum.Call {
  get inputs(): PullManyCall__Inputs {
    return new PullManyCall__Inputs(this);
  }

  get outputs(): PullManyCall__Outputs {
    return new PullManyCall__Outputs(this);
  }
}

export class PullManyCall__Inputs {
  _call: PullManyCall;

  constructor(call: PullManyCall) {
    this._call = call;
  }

  get _users(): Array<Address> {
    return this._call.inputValues[0].value.toAddressArray();
  }

  get _amounts(): Array<BigInt> {
    return this._call.inputValues[1].value.toBigIntArray();
  }

  get _to(): Address {
    return this._call.inputValues[2].value.toAddress();
  }
}

export class PullManyCall__Outputs {
  _call: PullManyCall;

  constructor(call: PullManyCall) {
    this._call = call;
  }
}

export class RemoveCall extends ethereum.Call {
  get inputs(): RemoveCall__Inputs {
    return new RemoveCall__Inputs(this);
  }

  get outputs(): RemoveCall__Outputs {
    return new RemoveCall__Outputs(this);
  }
}

export class RemoveCall__Inputs {
  _call: RemoveCall;

  constructor(call: RemoveCall) {
    this._call = call;
  }

  get _to(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class RemoveCall__Outputs {
  _call: RemoveCall;

  constructor(call: RemoveCall) {
    this._call = call;
  }
}

export class RemoveFromL1Call extends ethereum.Call {
  get inputs(): RemoveFromL1Call__Inputs {
    return new RemoveFromL1Call__Inputs(this);
  }

  get outputs(): RemoveFromL1Call__Outputs {
    return new RemoveFromL1Call__Outputs(this);
  }
}

export class RemoveFromL1Call__Inputs {
  _call: RemoveFromL1Call;

  constructor(call: RemoveFromL1Call) {
    this._call = call;
  }

  get _from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _amount(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class RemoveFromL1Call__Outputs {
  _call: RemoveFromL1Call;

  constructor(call: RemoveFromL1Call) {
    this._call = call;
  }
}

export class RescueTokensCall extends ethereum.Call {
  get inputs(): RescueTokensCall__Inputs {
    return new RescueTokensCall__Inputs(this);
  }

  get outputs(): RescueTokensCall__Outputs {
    return new RescueTokensCall__Outputs(this);
  }
}

export class RescueTokensCall__Inputs {
  _call: RescueTokensCall;

  constructor(call: RescueTokensCall) {
    this._call = call;
  }

  get _to(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _token(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _amount(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class RescueTokensCall__Outputs {
  _call: RescueTokensCall;

  constructor(call: RescueTokensCall) {
    this._call = call;
  }
}

export class SetCollectorCall extends ethereum.Call {
  get inputs(): SetCollectorCall__Inputs {
    return new SetCollectorCall__Inputs(this);
  }

  get outputs(): SetCollectorCall__Outputs {
    return new SetCollectorCall__Outputs(this);
  }
}

export class SetCollectorCall__Inputs {
  _call: SetCollectorCall;

  constructor(call: SetCollectorCall) {
    this._call = call;
  }

  get _collector(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _enabled(): boolean {
    return this._call.inputValues[1].value.toBoolean();
  }
}

export class SetCollectorCall__Outputs {
  _call: SetCollectorCall;

  constructor(call: SetCollectorCall) {
    this._call = call;
  }
}

export class SetL1BillingConnectorCall extends ethereum.Call {
  get inputs(): SetL1BillingConnectorCall__Inputs {
    return new SetL1BillingConnectorCall__Inputs(this);
  }

  get outputs(): SetL1BillingConnectorCall__Outputs {
    return new SetL1BillingConnectorCall__Outputs(this);
  }
}

export class SetL1BillingConnectorCall__Inputs {
  _call: SetL1BillingConnectorCall;

  constructor(call: SetL1BillingConnectorCall) {
    this._call = call;
  }

  get _l1BillingConnector(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetL1BillingConnectorCall__Outputs {
  _call: SetL1BillingConnectorCall;

  constructor(call: SetL1BillingConnectorCall) {
    this._call = call;
  }
}

export class SetL2TokenGatewayCall extends ethereum.Call {
  get inputs(): SetL2TokenGatewayCall__Inputs {
    return new SetL2TokenGatewayCall__Inputs(this);
  }

  get outputs(): SetL2TokenGatewayCall__Outputs {
    return new SetL2TokenGatewayCall__Outputs(this);
  }
}

export class SetL2TokenGatewayCall__Inputs {
  _call: SetL2TokenGatewayCall;

  constructor(call: SetL2TokenGatewayCall) {
    this._call = call;
  }

  get _l2TokenGateway(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetL2TokenGatewayCall__Outputs {
  _call: SetL2TokenGatewayCall;

  constructor(call: SetL2TokenGatewayCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get _newGovernor(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}
