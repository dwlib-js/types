'use strict';

const GetIntrinsic = require('#intrinsics/GetIntrinsic');
const GetIntrinsicOrThrow = require('#intrinsics/GetIntrinsicOrThrow');
const FunctionBind = require('#primordials/FunctionBind');
const ReturnFalse = require('#abstract/ReturnFalse');

const AsyncFunction = GetIntrinsic('AsyncFunction');
const FunctionPrototypeSymbolHasInstance = GetIntrinsicOrThrow('Function.prototype[@@hasInstance]');

const IsAsyncFunction = AsyncFunction ? FunctionBind(FunctionPrototypeSymbolHasInstance, AsyncFunction) : ReturnFalse;

module.exports = IsAsyncFunction;
