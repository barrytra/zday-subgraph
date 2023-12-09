import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import { PositionClosed, PositionOpened } from "../generated/zDay/zDay"

export function createPositionClosedEvent(
  user: Address,
  exitPrice: BigInt,
  profitOrLoss: BigInt
): PositionClosed {
  let positionClosedEvent = changetype<PositionClosed>(newMockEvent())

  positionClosedEvent.parameters = new Array()

  positionClosedEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  positionClosedEvent.parameters.push(
    new ethereum.EventParam(
      "exitPrice",
      ethereum.Value.fromUnsignedBigInt(exitPrice)
    )
  )
  positionClosedEvent.parameters.push(
    new ethereum.EventParam(
      "profitOrLoss",
      ethereum.Value.fromSignedBigInt(profitOrLoss)
    )
  )

  return positionClosedEvent
}

export function createPositionOpenedEvent(
  user: Address,
  side: i32,
  collateral: BigInt,
  size: BigInt,
  entryPrice: BigInt,
  openTime: BigInt,
  maxLoss: BigInt
): PositionOpened {
  let positionOpenedEvent = changetype<PositionOpened>(newMockEvent())

  positionOpenedEvent.parameters = new Array()

  positionOpenedEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  positionOpenedEvent.parameters.push(
    new ethereum.EventParam(
      "side",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(side))
    )
  )
  positionOpenedEvent.parameters.push(
    new ethereum.EventParam(
      "collateral",
      ethereum.Value.fromUnsignedBigInt(collateral)
    )
  )
  positionOpenedEvent.parameters.push(
    new ethereum.EventParam("size", ethereum.Value.fromUnsignedBigInt(size))
  )
  positionOpenedEvent.parameters.push(
    new ethereum.EventParam(
      "entryPrice",
      ethereum.Value.fromUnsignedBigInt(entryPrice)
    )
  )
  positionOpenedEvent.parameters.push(
    new ethereum.EventParam(
      "openTime",
      ethereum.Value.fromUnsignedBigInt(openTime)
    )
  )
  positionOpenedEvent.parameters.push(
    new ethereum.EventParam(
      "maxLoss",
      ethereum.Value.fromUnsignedBigInt(maxLoss)
    )
  )

  return positionOpenedEvent
}
