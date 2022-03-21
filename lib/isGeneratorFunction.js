'use strict';

const GetIntrinsicOrThrow = require('#intrinsics/GetIntrinsicOrThrow');
const FunctionBind = require('#primordials/FunctionBind');
const GeneratorFunction = require('#primordials/GeneratorFunction');

const FunctionPrototypeSymbolHasInstance = GetIntrinsicOrThrow('Function.prototype[@@hasInstance]');

const IsGeneratorFunction = FunctionBind(FunctionPrototypeSymbolHasInstance, GeneratorFunction);

module.exports = IsGeneratorFunction;
