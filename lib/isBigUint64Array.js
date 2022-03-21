'use strict';

const GetIntrinsic = require('#intrinsics/GetIntrinsic');
const GetIntrinsicOrThrow = require('#intrinsics/GetIntrinsicOrThrow');
const FunctionBind = require('#primordials/FunctionBind');
const ReturnFalse = require('#abstract/ReturnFalse');

const BigUint64Array = GetIntrinsic('BigUint64Array');
const FunctionPrototypeSymbolHasInstance = GetIntrinsicOrThrow('Function.prototype[@@hasInstance]');

const IsBigUint64Array = BigUint64Array ? FunctionBind(FunctionPrototypeSymbolHasInstance, BigUint64Array) : ReturnFalse;

module.exports = IsBigUint64Array;
