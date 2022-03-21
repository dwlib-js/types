'use strict';

const GetIntrinsicOrThrow = require('#intrinsics/GetIntrinsicOrThrow');
const FunctionBind = require('#primordials/FunctionBind');
const Int16Array = require('#primordials/Int16Array');

const FunctionPrototypeSymbolHasInstance = GetIntrinsicOrThrow('Function.prototype[@@hasInstance]');

const IsInt16Array = FunctionBind(FunctionPrototypeSymbolHasInstance, Int16Array);

module.exports = IsInt16Array;
