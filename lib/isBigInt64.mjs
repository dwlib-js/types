import GetIntrinsic from '#intrinsics/GetIntrinsic';
import ReturnFalse from '#abstract/ReturnFalse';
import IsBigInt from './isBigInt.mjs';

const BigInt = GetIntrinsic('BigInt');

let isBigInt64;

if (BigInt) {
  const MAX = BigInt('0x7fffffffffffffff');
  const MIN = -BigInt('0x8000000000000000');

  isBigInt64 = argument => IsBigInt(argument) && argument >= MIN && argument <= MAX;
} else {
  isBigInt64 = ReturnFalse;
}

export default isBigInt64;
