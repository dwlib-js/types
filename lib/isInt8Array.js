'use strict';

const GetIntrinsicOrThrow = require('#intrinsics/GetIntrinsicOrThrow');
const FunctionBind = require('#primordials/FunctionBind');
const Int8Array = require('#primordials/Int8Array');

const FunctionPrototypeSymbolHasInstance = GetIntrinsicOrThrow('Function.prototype[@@hasInstance]');

const IsInt8Array = FunctionBind(FunctionPrototypeSymbolHasInstance, Int8Array);

module.exports = IsInt8Array;
