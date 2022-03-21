'use strict';

const GetIntrinsicOrThrow = require('#intrinsics/GetIntrinsicOrThrow');
const FunctionBind = require('#primordials/FunctionBind');

const FunctionPrototypeSymbolHasInstance = GetIntrinsicOrThrow('Function.prototype[@@hasInstance]');
const TypedArray = GetIntrinsicOrThrow('TypedArray');

const IsTypedArray = FunctionBind(FunctionPrototypeSymbolHasInstance, TypedArray);

module.exports = IsTypedArray;
