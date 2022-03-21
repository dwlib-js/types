'use strict';

const GetIntrinsicOrThrow = require('#intrinsics/GetIntrinsicOrThrow');
const FunctionBind = require('#primordials/FunctionBind');
const TypeError = require('#primordials/TypeError');

const FunctionPrototypeSymbolHasInstance = GetIntrinsicOrThrow('Function.prototype[@@hasInstance]');

const IsTypeError = FunctionBind(FunctionPrototypeSymbolHasInstance, TypeError);

module.exports = IsTypeError;
