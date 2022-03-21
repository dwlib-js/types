'use strict';

const GetIntrinsicOrThrow = require('#intrinsics/GetIntrinsicOrThrow');
const Date = require('#primordials/Date');
const FunctionBind = require('#primordials/FunctionBind');

const FunctionPrototypeSymbolHasInstance = GetIntrinsicOrThrow('Function.prototype[@@hasInstance]');

const IsDate = FunctionBind(FunctionPrototypeSymbolHasInstance, Date);

module.exports = IsDate;
