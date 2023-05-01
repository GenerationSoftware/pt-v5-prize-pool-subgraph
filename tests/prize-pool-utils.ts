import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  ClaimedPrize,
  ManagerTransferred,
  OwnershipOffered,
  OwnershipTransferred
} from "../generated/PrizePool/PrizePool"

export function createClaimedPrizeEvent(
  drawId: BigInt,
  vault: Address,
  winner: Address,
  tier: i32,
  payout: BigInt,
  to: Address,
  fee: BigInt,
  feeRecipient: Address
): ClaimedPrize {
  let claimedPrizeEvent = changetype<ClaimedPrize>(newMockEvent())

  claimedPrizeEvent.parameters = new Array()

  claimedPrizeEvent.parameters.push(
    new ethereum.EventParam("drawId", ethereum.Value.fromUnsignedBigInt(drawId))
  )
  claimedPrizeEvent.parameters.push(
    new ethereum.EventParam("vault", ethereum.Value.fromAddress(vault))
  )
  claimedPrizeEvent.parameters.push(
    new ethereum.EventParam("winner", ethereum.Value.fromAddress(winner))
  )
  claimedPrizeEvent.parameters.push(
    new ethereum.EventParam(
      "tier",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(tier))
    )
  )
  claimedPrizeEvent.parameters.push(
    new ethereum.EventParam("payout", ethereum.Value.fromUnsignedBigInt(payout))
  )
  claimedPrizeEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  claimedPrizeEvent.parameters.push(
    new ethereum.EventParam("fee", ethereum.Value.fromUnsignedBigInt(fee))
  )
  claimedPrizeEvent.parameters.push(
    new ethereum.EventParam(
      "feeRecipient",
      ethereum.Value.fromAddress(feeRecipient)
    )
  )

  return claimedPrizeEvent
}

export function createManagerTransferredEvent(
  previousManager: Address,
  newManager: Address
): ManagerTransferred {
  let managerTransferredEvent = changetype<ManagerTransferred>(newMockEvent())

  managerTransferredEvent.parameters = new Array()

  managerTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousManager",
      ethereum.Value.fromAddress(previousManager)
    )
  )
  managerTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "newManager",
      ethereum.Value.fromAddress(newManager)
    )
  )

  return managerTransferredEvent
}

export function createOwnershipOfferedEvent(
  pendingOwner: Address
): OwnershipOffered {
  let ownershipOfferedEvent = changetype<OwnershipOffered>(newMockEvent())

  ownershipOfferedEvent.parameters = new Array()

  ownershipOfferedEvent.parameters.push(
    new ethereum.EventParam(
      "pendingOwner",
      ethereum.Value.fromAddress(pendingOwner)
    )
  )

  return ownershipOfferedEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}
