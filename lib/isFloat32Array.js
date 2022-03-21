'use strict';

const GetIntrinsicOrThrow = require('#intrinsics/GetIntrinsicOrThrow');
const Float32Array = require('#primordials/Float32Array');
const FunctionBind = require('#primordials/FunctionBind');

const FunctionPrototypeSymbolHasInstance = GetIntrinsicOrThrow('Function.prototype[@@hasInstance]');

const IsFloat32Array = FunctionBind(FunctionPrototypeSymbolHasInstance, Float32Array);

module.exports = IsFloat32Array;
