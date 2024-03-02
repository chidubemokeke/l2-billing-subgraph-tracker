import {
  BigInt,
  ByteArray,
  Address,
  Bytes,
  crypto,
  log,
  BigDecimal,
} from "@graphprotocol/graph-ts";

import {
  Account,
  BillingEntry,
  Subgraph,
  SubgraphDeployment,
  SubgraphVersion,
} from "../generated/schema";

// Function to generate a unique ID for a subgraph using a graph account address and a subgraph number
export function getSubgraphID(
  graphAccount: Address, // The graph account address
  subgraphNumber: BigInt // The subgraph number, unique for each subgraph under the same account
): BigInt {
  // Convert the graph account address to a hex string
  let graphAccountStr = graphAccount.toHexString();
  // Convert the subgraph number to a hex string and remove the '0x' prefix
  let subgraphNumberStr = subgraphNumber.toHexString().slice(2);
  // Pad the subgraph number string to ensure it is 64 characters long for consistency
  let number = subgraphNumberStr.padStart(64, "0");
  // Concatenate the graph account string with the padded subgraph number string
  let unhashedSubgraphID = graphAccountStr.concat(number);
  // Hash the concatenated string using the keccak256 algorithm to ensure uniqueness
  let hashedId = Bytes.fromByteArray(
    crypto.keccak256(ByteArray.fromHexString(unhashedSubgraphID))
  );
  // Convert the hashed value to a BigInt after reversing the byte order for correct endianness
  let bigIntRepresentation = BigInt.fromUnsignedBytes(
    changetype<Bytes>(hashedId.reverse())
  );
  // Return the BigInt representation of the hashed subgraph ID
  return bigIntRepresentation;
}

// Function to add the IPFS "Qm" prefix to a given ByteArray
export function addQm(a: ByteArray): ByteArray {
  // Create a new Uint8Array with length 34, as the first two bytes are for the prefix
  let out = new Uint8Array(34);
  // Set the first byte to 0x12, indicating the hash function (SHA-256) used by IPFS
  out[0] = 0x12;
  // Set the second byte to 0x20, indicating the length of the hash (32 bytes)
  out[1] = 0x20;
  // Loop through the input ByteArray (expected to be 32 bytes) and fill the new array
  for (let i = 0; i < 32; i++) {
    out[i + 2] = a[i]; // Start filling from the third byte, after the prefix
  }
  // Convert the Uint8Array back to ByteArray, suitable for IPFS hash storage or operations
  return changetype<ByteArray>(out);
}

// Function to concatenate two ByteArray objects
export function concatByteArrays(a: ByteArray, b: ByteArray): ByteArray {
  // Create a new Uint8Array with size equal to the sum of both input arrays
  let out = new Uint8Array(a.length + b.length);

  // Loop through the first array 'a' and copy its contents into the new array 'out'
  for (let i = 0; i < a.length; i++) {
    out[i] = a[i];
  }

  // Loop through the second array 'b', starting where the first one ended,
  // and copy its contents into 'out'
  for (let j = 0; j < b.length; j++) {
    out[a.length + j] = b[j];
  }

  // Convert the Uint8Array back to ByteArray before returning
  return changetype<ByteArray>(out);
}

// Function to determine the next unique version number for a subgraph based on its graph account and subgraph number.
export function getVersionNumber(
  graphAccount: string, // The unique identifier for the graph account.
  subgraphNumber: string, // The identifier for the subgraph under the account.
  versionNumber: BigInt // The starting point for version numbering.
): BigInt {
  // Concatenates graphAccount, subgraphNumber, and versionNumber to create a unique versionID.
  let versionID = joinID([
    graphAccount,
    subgraphNumber,
    versionNumber.toString(),
  ]);

  // Attempts to load a SubgraphVersion entity with the generated versionID.
  let version = SubgraphVersion.load(versionID);

  // Checks if the version already exists.
  if (version != null) {
    // If it does, increment the versionNumber by 1 to find a unique number.
    versionNumber = versionNumber.plus(BigInt.fromI32(1));
    // Recursively call the function with the new versionNumber.
    return getVersionNumber(graphAccount, subgraphNumber, versionNumber);
  }

  // Once a unique versionNumber is found, return it.
  return versionNumber;
}

export function convertBigIntSubgraphIDToBase58(
  bigIntRepresentation: BigInt
): String {
  // Might need to unpad the BigInt since `fromUnsignedBytes` pads one byte with a zero.
  // Although for the events where the uint256 is provided, we probably don't need to unpad.
  let hexString = bigIntRepresentation.toHexString();
  if (hexString.length % 2 != 0) {
    log.warning(
      "Hex string not even, hex: {}, original: {}. Padding it to even length",
      [hexString, bigIntRepresentation.toString()]
    );
    hexString = "0x0" + hexString.slice(2);
  }
  let bytes = ByteArray.fromHexString(hexString);
  return bytes.toBase58();
}
