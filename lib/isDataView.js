'use strict';

const GetIntrinsicOrThrow = require('#intrinsics/GetIntrinsicOrThrow');
const DataView = require('#primordials/DataView');
const FunctionBind = require('#primordials/FunctionBind');

const FunctionPrototypeSymbolHasInstance = GetIntrinsicOrThrow('Function.prototype[@@hasInstance]');

const IsDataView = FunctionBind(FunctionPrototypeSymbolHasInstance, DataView);

module.exports = IsDataView;
