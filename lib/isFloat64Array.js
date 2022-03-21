'use strict';

const GetIntrinsicOrThrow = require('#intrinsics/GetIntrinsicOrThrow');
const Float64Array = require('#primordials/Float64Array');
const FunctionBind = require('#primordials/FunctionBind');

const FunctionPrototypeSymbolHasInstance = GetIntrinsicOrThrow('Function.prototype[@@hasInstance]');

const IsFloat64Array = FunctionBind(FunctionPrototypeSymbolHasInstance, Float64Array);

module.exports = IsFloat64Array;
