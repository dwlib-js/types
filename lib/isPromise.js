'use strict';

const GetIntrinsicOrThrow = require('#intrinsics/GetIntrinsicOrThrow');
const FunctionBind = require('#primordials/FunctionBind');
const Promise = require('#primordials/Promise');

const FunctionPrototypeSymbolHasInstance = GetIntrinsicOrThrow('Function.prototype[@@hasInstance]');

const IsPromise = FunctionBind(FunctionPrototypeSymbolHasInstance, Promise);

module.exports = IsPromise;
