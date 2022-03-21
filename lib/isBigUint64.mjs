import GetIntrinsic from '#intrinsics/GetIntrinsic';
import ReturnFalse from '#abstract/ReturnFalse';
import IsBigInt from './isBigInt.mjs';

const BigInt = GetIntrinsic('BigInt');

let isBigUint64;

if (BigInt) {
  const MAX = BigInt('0xffffffffffffffff');
  const ZERO = BigInt(0);

  isBigUint64 = argument => IsBigInt(argument) && argument >= ZERO && argument <= MAX;
} else {
  isBigUint64 = ReturnFalse;
}

export default isBigUint64;
