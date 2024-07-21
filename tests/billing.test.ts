import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address, BigInt } from "@graphprotocol/graph-ts"
import { CollectorUpdated } from "../generated/schema"
import { CollectorUpdated as CollectorUpdatedEvent } from "../generated/Billing/Billing"
import { handleCollectorUpdated } from "../src/billing"
import { createCollectorUpdatedEvent } from "./billing-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let collector = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let enabled = "boolean Not implemented"
    let newCollectorUpdatedEvent = createCollectorUpdatedEvent(
      collector,
      enabled
    )
    handleCollectorUpdated(newCollectorUpdatedEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("CollectorUpdated created and stored", () => {
    assert.entityCount("CollectorUpdated", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "CollectorUpdated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "collector",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "CollectorUpdated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "enabled",
      "boolean Not implemented"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
