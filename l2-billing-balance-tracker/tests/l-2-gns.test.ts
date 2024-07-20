import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Bytes, Address, BigInt } from "@graphprotocol/graph-ts"
import { ContractSynced } from "../generated/schema"
import { ContractSynced as ContractSyncedEvent } from "../generated/L2GNS/L2GNS"
import { handleContractSynced } from "../src/l-2-gns"
import { createContractSyncedEvent } from "./l-2-gns-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let nameHash = Bytes.fromI32(1234567890)
    let contractAddress = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let newContractSyncedEvent = createContractSyncedEvent(
      nameHash,
      contractAddress
    )
    handleContractSynced(newContractSyncedEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("ContractSynced created and stored", () => {
    assert.entityCount("ContractSynced", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "ContractSynced",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "nameHash",
      "1234567890"
    )
    assert.fieldEquals(
      "ContractSynced",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "contractAddress",
      "0x0000000000000000000000000000000000000001"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
