import { Bytes, BigInt, Address } from "@graphprotocol/graph-ts";

import { PrizeClaim } from "../../generated/schema";
import { loadOrCreateDraw } from "./Draw";
import { loadOrCreateVault } from "./Vault";
import { loadOrCreateAccount } from "./Account";

// Generate ID for PrizeClaim entity
export const generateCompositeId = (
  _vaultId: string,
  _winnerId: string,
  _drawId: string,
  _tier: string
): string => `${_vaultId}-${_winnerId}-${_drawId}-${_tier}`;

export const createPrizeClaim = (
  _drawId: BigInt,
  _vaultId: Address,
  _winnerId: Address,
  _tier: i32,
  _payout: BigInt,
  _to: Bytes,
  _fee: BigInt,
  _feeRecipientId: Bytes,
  _timestamp: BigInt
): PrizeClaim => {
  const prizeClaimId = generateCompositeId(
    _vaultId.toHexString(),
    _winnerId.toHexString(),
    _drawId.toString(),
    _tier.toString()
  );

  // Ensure other entities are initialized
  loadOrCreateDraw(_drawId);
  loadOrCreateVault(_vaultId);
  loadOrCreateAccount(_winnerId);
  loadOrCreateAccount(_feeRecipientId);

  // Initialize PrizeClaim entity
  const prizeClaim = new PrizeClaim(prizeClaimId);
  prizeClaim.draw = _drawId.toString();
  prizeClaim.vault = _vaultId;
  prizeClaim.winner = _winnerId;
  prizeClaim.tier = _tier;
  prizeClaim.payout = _payout;
  prizeClaim.to = _to;
  prizeClaim.fee = _fee;
  prizeClaim.feeRecipient = _feeRecipientId;
  prizeClaim.timestamp = _timestamp;

  // Save PrizeClaim entity
  prizeClaim.save();

  return prizeClaim;
};
