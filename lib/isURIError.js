'use strict';

const GetIntrinsicOrThrow = require('#intrinsics/GetIntrinsicOrThrow');
const FunctionBind = require('#primordials/FunctionBind');
const URIError = require('#primordials/URIError');

const FunctionPrototypeSymbolHasInstance = GetIntrinsicOrThrow('Function.prototype[@@hasInstance]');

const IsURIError = FunctionBind(FunctionPrototypeSymbolHasInstance, URIError);

module.exports = IsURIError;
