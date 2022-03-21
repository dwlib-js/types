'use strict';

const GetIntrinsicOrThrow = require('#intrinsics/GetIntrinsicOrThrow');
const FunctionBind = require('#primordials/FunctionBind');
const Int32Array = require('#primordials/Int32Array');

const FunctionPrototypeSymbolHasInstance = GetIntrinsicOrThrow('Function.prototype[@@hasInstance]');

const IsInt32Array = FunctionBind(FunctionPrototypeSymbolHasInstance, Int32Array);

module.exports = IsInt32Array;
