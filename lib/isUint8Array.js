'use strict';

const GetIntrinsicOrThrow = require('#intrinsics/GetIntrinsicOrThrow');
const FunctionBind = require('#primordials/FunctionBind');
const Uint8Array = require('#primordials/Uint8Array');

const FunctionPrototypeSymbolHasInstance = GetIntrinsicOrThrow('Function.prototype[@@hasInstance]');

const IsUint8Array = FunctionBind(FunctionPrototypeSymbolHasInstance, Uint8Array);

module.exports = IsUint8Array;
