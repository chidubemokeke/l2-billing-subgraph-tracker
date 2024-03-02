import { ByteArray, Bytes } from "@graphprotocol/graph-ts";
import { bigIntToBytes, stripZeros } from "./bytes";

// Implementation based on https://ethereum.org/en/developers/docs/data-structures-and-encoding/rlp/
export function RLPEncodeArray(input: ByteArray[]): string {
  const output: string[] = []; // in hexstring
  let outputLength = 0; // in bytes

  for (let i = 0; i < input.length; i++) {
    const encoded = RLPEncode(input[i]);
    output.push(encoded);
    outputLength += encoded.length / 2 - 1; // don't count 0x prefix
  }

  const encodedLength = encodeLength(outputLength, 192);
  const concatenatedOutput = output.reduce(
    (acc, val) => acc.concat(Bytes.fromHexString(val)),
    stripZeros(Bytes.empty())
  );
  return encodedLength.concat(concatenatedOutput).toHexString();
}

export function RLPEncode(input: ByteArray): string {
  if (input.length == 1 && input[0] < 128) {
    return input.toHexString();
  }
  const encodedLength = encodeLength(input.length, 128);
  return encodedLength.concat(input).toHexString();
}

export function encodeLength(len: u6, offset: u64): ByteArray {
  if (len < 56) {
    return bigIntToBytes(len + offset);
  }

  const prefix = offset + 55 + bigIntToBytes(len).length;
  return bigIntToBytes(prefix).concat(bigIntToBytes(len));
}
