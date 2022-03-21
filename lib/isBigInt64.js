'use strict';

const GetIntrinsic = require('#intrinsics/GetIntrinsic');
const ReturnFalse = require('#abstract/ReturnFalse');
const IsBigInt = require('./isBigInt');

const BigInt = GetIntrinsic('BigInt');

let isBigInt64;

if (BigInt) {
  const MAX = BigInt('0x7fffffffffffffff');
  const MIN = -BigInt('0x8000000000000000');

  isBigInt64 = argument => IsBigInt(argument) && argument >= MIN && argument <= MAX;
} else {
  isBigInt64 = ReturnFalse;
}

module.exports = isBigInt64;
