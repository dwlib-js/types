'use strict';

const GetIntrinsic = require('#intrinsics/GetIntrinsic');
const GetIntrinsicOrThrow = require('#intrinsics/GetIntrinsicOrThrow');
const FunctionBind = require('#primordials/FunctionBind');
const ReturnFalse = require('#abstract/ReturnFalse');

const FunctionPrototypeSymbolHasInstance = GetIntrinsicOrThrow('Function.prototype[@@hasInstance]');
const WeakRef = GetIntrinsic('WeakRef');

const IsWeakRef = WeakRef ? FunctionBind(FunctionPrototypeSymbolHasInstance, WeakRef) : ReturnFalse;

module.exports = IsWeakRef;
