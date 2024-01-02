import { JSONValue, JSONValueKind, BigDecimal } from "@graphprotocol/graph-ts";

// Converts a JSONValue to a string if it's of kind STRING, otherwise returns an empty string
export function jsonToString(val: JSONValue | null): string {
  return val?.kind === JSONValueKind.STRING ? val.toString() : "";
}

// Converts a JSONValue array to an array of strings, skipping non-string elements
export function jsonToArrayString(val: JSONValue | null): string[] {
  if (val?.kind === JSONValueKind.ARRAY) {
    // Filter the array to keep only string elements and convert them to strings
    return val
      .toArray()
      .filter((element) => element.kind === JSONValueKind.STRING)
      .map((element) => element.toString());
  }
  return []; // Returns an empty array if the input is not an array or contains no string elements
}

// Initializes a constant zero BigDecimal
export const zeroBD = BigDecimal.fromString("0");
