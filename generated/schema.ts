// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Account extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Account entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Account must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Account", id.toString(), this);
    }
  }

  static loadInBlock(id: string): Account | null {
    return changetype<Account | null>(store.get_in_block("Account", id));
  }

  static load(id: string): Account | null {
    return changetype<Account | null>(store.get("Account", id));
  }

  get id(): string {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get createdAt(): i32 {
    let value = this.get("createdAt");
    if (!value || value.kind == ValueKind.NULL) {
      return 0;
    } else {
      return value.toI32();
    }
  }

  set createdAt(value: i32) {
    this.set("createdAt", Value.fromI32(value));
  }

  get queryFeesPaid(): BigInt {
    let value = this.get("queryFeesPaid");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set queryFeesPaid(value: BigInt) {
    this.set("queryFeesPaid", Value.fromBigInt(value));
  }

  get billingBalance(): BigInt {
    let value = this.get("billingBalance");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set billingBalance(value: BigInt) {
    this.set("billingBalance", Value.fromBigInt(value));
  }

  get subgraphs(): Array<string> {
    let value = this.get("subgraphs");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toStringArray();
    }
  }
}

export class Subgraph extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Subgraph entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Subgraph must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Subgraph", id.toString(), this);
    }
  }

  static loadInBlock(id: string): Subgraph | null {
    return changetype<Subgraph | null>(store.get_in_block("Subgraph", id));
  }

  static load(id: string): Subgraph | null {
    return changetype<Subgraph | null>(store.get("Subgraph", id));
  }

  get id(): string {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get owner(): string {
    let value = this.get("owner");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set owner(value: string) {
    this.set("owner", Value.fromString(value));
  }

  get name(): string {
    let value = this.get("name");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set name(value: string) {
    this.set("name", Value.fromString(value));
  }

  get previousVersionHash(): BigInt {
    let value = this.get("previousVersionHash");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set previousVersionHash(value: BigInt) {
    this.set("previousVersionHash", Value.fromBigInt(value));
  }

  get currentVersionHash(): Bytes {
    let value = this.get("currentVersionHash");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set currentVersionHash(value: Bytes) {
    this.set("currentVersionHash", Value.fromBytes(value));
  }

  get previousBalance(): BigInt {
    let value = this.get("previousBalance");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set previousBalance(value: BigInt) {
    this.set("previousBalance", Value.fromBigInt(value));
  }

  get queryFees(): BigInt {
    let value = this.get("queryFees");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set queryFees(value: BigInt) {
    this.set("queryFees", Value.fromBigInt(value));
  }
}

export class L2SubgraphMetadata extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save L2SubgraphMetadata entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type L2SubgraphMetadata must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("L2SubgraphMetadata", id.toString(), this);
    }
  }

  static loadInBlock(id: string): L2SubgraphMetadata | null {
    return changetype<L2SubgraphMetadata | null>(
      store.get_in_block("L2SubgraphMetadata", id)
    );
  }

  static load(id: string): L2SubgraphMetadata | null {
    return changetype<L2SubgraphMetadata | null>(
      store.get("L2SubgraphMetadata", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get metadataHash(): Bytes {
    let value = this.get("metadataHash");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set metadataHash(value: Bytes) {
    this.set("metadataHash", Value.fromBytes(value));
  }

  get ipfsMetadataHash(): Bytes {
    let value = this.get("ipfsMetadataHash");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set ipfsMetadataHash(value: Bytes) {
    this.set("ipfsMetadataHash", Value.fromBytes(value));
  }

  get tokenID(): BigInt {
    let value = this.get("tokenID");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set tokenID(value: BigInt) {
    this.set("tokenID", Value.fromBigInt(value));
  }

  get Uri(): Bytes {
    let value = this.get("Uri");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set Uri(value: Bytes) {
    this.set("Uri", Value.fromBytes(value));
  }

  get description(): string | null {
    let value = this.get("description");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set description(value: string | null) {
    if (!value) {
      this.unset("description");
    } else {
      this.set("description", Value.fromString(<string>value));
    }
  }

  get image(): string | null {
    let value = this.get("image");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set image(value: string | null) {
    if (!value) {
      this.unset("image");
    } else {
      this.set("image", Value.fromString(<string>value));
    }
  }

  get nftImage(): string | null {
    let value = this.get("nftImage");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set nftImage(value: string | null) {
    if (!value) {
      this.unset("nftImage");
    } else {
      this.set("nftImage", Value.fromString(<string>value));
    }
  }

  get codeRepository(): string | null {
    let value = this.get("codeRepository");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set codeRepository(value: string | null) {
    if (!value) {
      this.unset("codeRepository");
    } else {
      this.set("codeRepository", Value.fromString(<string>value));
    }
  }

  get website(): string | null {
    let value = this.get("website");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set website(value: string | null) {
    if (!value) {
      this.unset("website");
    } else {
      this.set("website", Value.fromString(<string>value));
    }
  }

  get displayName(): string | null {
    let value = this.get("displayName");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set displayName(value: string | null) {
    if (!value) {
      this.unset("displayName");
    } else {
      this.set("displayName", Value.fromString(<string>value));
    }
  }
}

export class SubgraphDeployment extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save SubgraphDeployment entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type SubgraphDeployment must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("SubgraphDeployment", id.toString(), this);
    }
  }

  static loadInBlock(id: string): SubgraphDeployment | null {
    return changetype<SubgraphDeployment | null>(
      store.get_in_block("SubgraphDeployment", id)
    );
  }

  static load(id: string): SubgraphDeployment | null {
    return changetype<SubgraphDeployment | null>(
      store.get("SubgraphDeployment", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get ipfsHash(): string {
    let value = this.get("ipfsHash");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set ipfsHash(value: string) {
    this.set("ipfsHash", Value.fromString(value));
  }

  get createdAt(): i32 {
    let value = this.get("createdAt");
    if (!value || value.kind == ValueKind.NULL) {
      return 0;
    } else {
      return value.toI32();
    }
  }

  set createdAt(value: i32) {
    this.set("createdAt", Value.fromI32(value));
  }
}

export class Transaction extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Transaction entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Transaction must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Transaction", id.toString(), this);
    }
  }

  static loadInBlock(id: string): Transaction | null {
    return changetype<Transaction | null>(
      store.get_in_block("Transaction", id)
    );
  }

  static load(id: string): Transaction | null {
    return changetype<Transaction | null>(store.get("Transaction", id));
  }

  get id(): string {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get account(): string {
    let value = this.get("account");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set account(value: string) {
    this.set("account", Value.fromString(value));
  }

  get amount(): BigInt {
    let value = this.get("amount");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set amount(value: BigInt) {
    this.set("amount", Value.fromBigInt(value));
  }

  get timestamp(): BigInt | null {
    let value = this.get("timestamp");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set timestamp(value: BigInt | null) {
    if (!value) {
      this.unset("timestamp");
    } else {
      this.set("timestamp", Value.fromBigInt(<BigInt>value));
    }
  }
}
