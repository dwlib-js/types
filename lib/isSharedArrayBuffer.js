'use strict';

const GetIntrinsic = require('#intrinsics/GetIntrinsic');
const GetIntrinsicOrThrow = require('#intrinsics/GetIntrinsicOrThrow');
const FunctionBind = require('#primordials/FunctionBind');
const ReturnFalse = require('#abstract/ReturnFalse');

const FunctionPrototypeSymbolHasInstance = GetIntrinsicOrThrow('Function.prototype[@@hasInstance]');
const SharedArrayBuffer = GetIntrinsic('SharedArrayBuffer');

const IsSharedArrayBuffer = SharedArrayBuffer ? FunctionBind(FunctionPrototypeSymbolHasInstance, SharedArrayBuffer) : ReturnFalse;

module.exports = IsSharedArrayBuffer;
