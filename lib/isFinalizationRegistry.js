'use strict';

const GetIntrinsic = require('#intrinsics/GetIntrinsic');
const GetIntrinsicOrThrow = require('#intrinsics/GetIntrinsicOrThrow');
const FunctionBind = require('#primordials/FunctionBind');
const ReturnFalse = require('#abstract/ReturnFalse');

const FinalizationRegistry = GetIntrinsic('FinalizationRegistry');
const FunctionPrototypeSymbolHasInstance = GetIntrinsicOrThrow('Function.prototype[@@hasInstance]');

const IsFinalizationRegistry = FinalizationRegistry ? FunctionBind(FunctionPrototypeSymbolHasInstance, FinalizationRegistry) : ReturnFalse;

module.exports = IsFinalizationRegistry;
