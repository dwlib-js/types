'use strict';

const GetIntrinsicOrThrow = require('#intrinsics/GetIntrinsicOrThrow');
const FunctionBind = require('#primordials/FunctionBind');
const RangeError = require('#primordials/RangeError');

const FunctionPrototypeSymbolHasInstance = GetIntrinsicOrThrow('Function.prototype[@@hasInstance]');

const IsRangeError = FunctionBind(FunctionPrototypeSymbolHasInstance, RangeError);

module.exports = IsRangeError;
