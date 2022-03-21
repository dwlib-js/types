'use strict';

const GetIntrinsicOrThrow = require('#intrinsics/GetIntrinsicOrThrow');
const FunctionBind = require('#primordials/FunctionBind');
const ReferenceError = require('#primordials/ReferenceError');

const FunctionPrototypeSymbolHasInstance = GetIntrinsicOrThrow('Function.prototype[@@hasInstance]');

const IsReferenceError = FunctionBind(FunctionPrototypeSymbolHasInstance, ReferenceError);

module.exports = IsReferenceError;
