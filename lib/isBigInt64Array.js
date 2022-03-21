'use strict';

const GetIntrinsic = require('#intrinsics/GetIntrinsic');
const GetIntrinsicOrThrow = require('#intrinsics/GetIntrinsicOrThrow');
const FunctionBind = require('#primordials/FunctionBind');
const ReturnFalse = require('#abstract/ReturnFalse');

const BigInt64Array = GetIntrinsic('BigInt64Array');
const FunctionPrototypeSymbolHasInstance = GetIntrinsicOrThrow('Function.prototype[@@hasInstance]');

const IsBigInt64Array = BigInt64Array ? FunctionBind(FunctionPrototypeSymbolHasInstance, BigInt64Array) : ReturnFalse;

module.exports = IsBigInt64Array;
