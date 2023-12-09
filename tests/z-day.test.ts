import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address, BigInt } from "@graphprotocol/graph-ts"
import { PositionClosed } from "../generated/schema"
import { PositionClosed as PositionClosedEvent } from "../generated/zDay/zDay"
import { handlePositionClosed } from "../src/z-day"
import { createPositionClosedEvent } from "./z-day-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let user = Address.fromString("0x0000000000000000000000000000000000000001")
    let exitPrice = BigInt.fromI32(234)
    let profitOrLoss = BigInt.fromI32(234)
    let newPositionClosedEvent = createPositionClosedEvent(
      user,
      exitPrice,
      profitOrLoss
    )
    handlePositionClosed(newPositionClosedEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("PositionClosed created and stored", () => {
    assert.entityCount("PositionClosed", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "PositionClosed",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "user",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "PositionClosed",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "exitPrice",
      "234"
    )
    assert.fieldEquals(
      "PositionClosed",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "profitOrLoss",
      "234"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
