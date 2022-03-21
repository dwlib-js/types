'use strict';

const GetIntrinsicOrThrow = require('#intrinsics/GetIntrinsicOrThrow');
const FunctionBind = require('#primordials/FunctionBind');
const Uint16Array = require('#primordials/Uint16Array');

const FunctionPrototypeSymbolHasInstance = GetIntrinsicOrThrow('Function.prototype[@@hasInstance]');

const IsUint16Array = FunctionBind(FunctionPrototypeSymbolHasInstance, Uint16Array);

module.exports = IsUint16Array;
