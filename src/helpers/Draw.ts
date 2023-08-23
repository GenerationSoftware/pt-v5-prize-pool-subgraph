import { Draw } from "../../generated/schema";
import { BigInt } from "@graphprotocol/graph-ts";

export const loadOrCreateDraw = (drawId: i32): Draw => {
  const draw = Draw.load(drawId.toString());

  if (!!draw) {
    return draw;
  }

  const newDraw = new Draw(drawId.toString());
  newDraw.numericalId = BigInt.fromI32(drawId);
  newDraw.save();

  return newDraw;
};
