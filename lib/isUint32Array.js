'use strict';

const GetIntrinsicOrThrow = require('#intrinsics/GetIntrinsicOrThrow');
const FunctionBind = require('#primordials/FunctionBind');
const Uint32Array = require('#primordials/Uint32Array');

const FunctionPrototypeSymbolHasInstance = GetIntrinsicOrThrow('Function.prototype[@@hasInstance]');

const IsUint32Array = FunctionBind(FunctionPrototypeSymbolHasInstance, Uint32Array);

module.exports = IsUint32Array;
