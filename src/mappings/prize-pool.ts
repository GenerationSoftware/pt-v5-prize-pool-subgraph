import {
  ClaimedPrize,
  ManagerTransferred,
  OwnershipOffered,
  OwnershipTransferred,
} from "../../generated/PrizePool/PrizePool";
import { createPrizeClaim } from "../helpers/PrizeClaim";

export function handleClaimedPrize(event: ClaimedPrize): void {
  const drawId = event.params.drawId;
  const vault = event.params.vault;
  const winner = event.params.winner;
  const tier = event.params.tier;
  const payout = event.params.payout;
  const to = event.params.to;
  const fee = event.params.fee;
  const feeRecipient = event.params.feeRecipient;

  const timestamp = event.block.timestamp;
  createPrizeClaim(
    drawId,
    vault,
    winner,
    tier,
    payout,
    to,
    fee,
    feeRecipient,
    timestamp
  );
}

export function handleManagerTransferred(event: ManagerTransferred): void {}

export function handleOwnershipOffered(event: OwnershipOffered): void {}

export function handleOwnershipTransferred(event: OwnershipTransferred): void {}
