'use strict';

const GetIntrinsicOrThrow = require('#intrinsics/GetIntrinsicOrThrow');
const Error = require('#primordials/Error');
const FunctionBind = require('#primordials/FunctionBind');

const FunctionPrototypeSymbolHasInstance = GetIntrinsicOrThrow('Function.prototype[@@hasInstance]');

const IsError = FunctionBind(FunctionPrototypeSymbolHasInstance, Error);

module.exports = IsError;
