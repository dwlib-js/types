'use strict';

const GetIntrinsic = require('#intrinsics/GetIntrinsic');
const ReturnFalse = require('#abstract/ReturnFalse');
const IsBigInt = require('./isBigInt');

const BigInt = GetIntrinsic('BigInt');

let isBigUint64;

if (BigInt) {
  const MAX = BigInt('0xffffffffffffffff');
  const ZERO = BigInt(0);

  isBigUint64 = argument => IsBigInt(argument) && argument >= ZERO && argument <= MAX;
} else {
  isBigUint64 = ReturnFalse;
}

module.exports = isBigUint64;
