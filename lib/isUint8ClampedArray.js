'use strict';

const GetIntrinsicOrThrow = require('#intrinsics/GetIntrinsicOrThrow');
const FunctionBind = require('#primordials/FunctionBind');
const Uint8ClampedArray = require('#primordials/Uint8ClampedArray');

const FunctionPrototypeSymbolHasInstance = GetIntrinsicOrThrow('Function.prototype[@@hasInstance]');

const IsUint8ClampedArray = FunctionBind(FunctionPrototypeSymbolHasInstance, Uint8ClampedArray);

module.exports = IsUint8ClampedArray;
