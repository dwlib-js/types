'use strict';

const GetIntrinsic = require('#intrinsics/GetIntrinsic');
const GetIntrinsicOrThrow = require('#intrinsics/GetIntrinsicOrThrow');
const FunctionBind = require('#primordials/FunctionBind');
const ReturnFalse = require('#abstract/ReturnFalse');

const AsyncGeneratorFunction = GetIntrinsic('AsyncGeneratorFunction');
const FunctionPrototypeSymbolHasInstance = GetIntrinsicOrThrow('Function.prototype[@@hasInstance]');

const IsAsyncGeneratorFunction = AsyncGeneratorFunction ? FunctionBind(FunctionPrototypeSymbolHasInstance, AsyncGeneratorFunction) : ReturnFalse;

module.exports = IsAsyncGeneratorFunction;
