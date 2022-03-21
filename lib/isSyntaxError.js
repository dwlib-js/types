'use strict';

const GetIntrinsicOrThrow = require('#intrinsics/GetIntrinsicOrThrow');
const FunctionBind = require('#primordials/FunctionBind');
const SyntaxError = require('#primordials/SyntaxError');

const FunctionPrototypeSymbolHasInstance = GetIntrinsicOrThrow('Function.prototype[@@hasInstance]');

const IsSyntaxError = FunctionBind(FunctionPrototypeSymbolHasInstance, SyntaxError);

module.exports = IsSyntaxError;
