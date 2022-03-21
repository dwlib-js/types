'use strict';

const GetIntrinsicOrThrow = require('#intrinsics/GetIntrinsicOrThrow');
const ArrayBuffer = require('#primordials/ArrayBuffer');
const FunctionBind = require('#primordials/FunctionBind');

const FunctionPrototypeSymbolHasInstance = GetIntrinsicOrThrow('Function.prototype[@@hasInstance]');

const IsArrayBuffer = FunctionBind(FunctionPrototypeSymbolHasInstance, ArrayBuffer);

module.exports = IsArrayBuffer;
