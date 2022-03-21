'use strict';

const GetIntrinsicOrThrow = require('#intrinsics/GetIntrinsicOrThrow');
const FunctionBind = require('#primordials/FunctionBind');
const Set = require('#primordials/Set');

const FunctionPrototypeSymbolHasInstance = GetIntrinsicOrThrow('Function.prototype[@@hasInstance]');

const IsSet = FunctionBind(FunctionPrototypeSymbolHasInstance, Set);

module.exports = IsSet;
