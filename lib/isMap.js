'use strict';

const GetIntrinsicOrThrow = require('#intrinsics/GetIntrinsicOrThrow');
const FunctionBind = require('#primordials/FunctionBind');
const Map = require('#primordials/Map');

const FunctionPrototypeSymbolHasInstance = GetIntrinsicOrThrow('Function.prototype[@@hasInstance]');

const IsMap = FunctionBind(FunctionPrototypeSymbolHasInstance, Map);

module.exports = IsMap;
