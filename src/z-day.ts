import {
  PositionClosed as PositionClosedEvent,
  PositionOpened as PositionOpenedEvent
} from "../generated/zDay/zDay"
import { PositionClosed, PositionOpened } from "../generated/schema"

export function handlePositionClosed(event: PositionClosedEvent): void {
  let entity = new PositionClosed(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.user = event.params.user
  entity.exitPrice = event.params.exitPrice
  entity.profitOrLoss = event.params.profitOrLoss

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlePositionOpened(event: PositionOpenedEvent): void {
  let entity = new PositionOpened(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.user = event.params.user
  entity.side = event.params.side
  entity.collateral = event.params.collateral
  entity.size = event.params.size
  entity.entryPrice = event.params.entryPrice
  entity.openTime = event.params.openTime
  entity.maxLoss = event.params.maxLoss

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
