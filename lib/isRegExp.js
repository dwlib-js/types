'use strict';

const GetIntrinsicOrThrow = require('#intrinsics/GetIntrinsicOrThrow');
const FunctionBind = require('#primordials/FunctionBind');
const RegExp = require('#primordials/RegExp');

const FunctionPrototypeSymbolHasInstance = GetIntrinsicOrThrow('Function.prototype[@@hasInstance]');

const IsRegExp = FunctionBind(FunctionPrototypeSymbolHasInstance, RegExp);

module.exports = IsRegExp;
