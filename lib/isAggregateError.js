'use strict';

const GetIntrinsic = require('#intrinsics/GetIntrinsic');
const GetIntrinsicOrThrow = require('#intrinsics/GetIntrinsicOrThrow');
const FunctionBind = require('#primordials/FunctionBind');
const ReturnFalse = require('#abstract/ReturnFalse');

const AggregateError = GetIntrinsic('AggregateError');
const FunctionPrototypeSymbolHasInstance = GetIntrinsicOrThrow('Function.prototype[@@hasInstance]');

const IsAggregateError = AggregateError ? FunctionBind(FunctionPrototypeSymbolHasInstance, AggregateError) : ReturnFalse;

module.exports = IsAggregateError;
