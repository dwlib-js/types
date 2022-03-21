'use strict';

const GetIntrinsicOrThrow = require('#intrinsics/GetIntrinsicOrThrow');
const FunctionBind = require('#primordials/FunctionBind');
const WeakSet = require('#primordials/WeakSet');

const FunctionPrototypeSymbolHasInstance = GetIntrinsicOrThrow('Function.prototype[@@hasInstance]');

const IsWeakSet = FunctionBind(FunctionPrototypeSymbolHasInstance, WeakSet);

module.exports = IsWeakSet;
