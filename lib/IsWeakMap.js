'use strict';

const GetIntrinsicOrThrow = require('#intrinsics/GetIntrinsicOrThrow');
const FunctionBind = require('#primordials/FunctionBind');
const WeakMap = require('#primordials/WeakMap');

const FunctionPrototypeSymbolHasInstance = GetIntrinsicOrThrow('Function.prototype[@@hasInstance]');

const IsWeakMap = FunctionBind(FunctionPrototypeSymbolHasInstance, WeakMap);

module.exports = IsWeakMap;
