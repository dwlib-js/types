'use strict';

const GetIntrinsic = require('#intrinsics/GetIntrinsic');
const GetIntrinsicOrThrow = require('#intrinsics/GetIntrinsicOrThrow');
const FunctionBind = require('#primordials/FunctionBind');
const ReturnFalse = require('#abstract/ReturnFalse');

const AsyncGeneratorPrototype = GetIntrinsic('AsyncGeneratorPrototype');
const ObjectPrototypeIsPrototypeOf = GetIntrinsicOrThrow('Object.prototype.isPrototypeOf');

const IsAsyncGenerator = AsyncGeneratorPrototype ? FunctionBind(ObjectPrototypeIsPrototypeOf, AsyncGeneratorPrototype) : ReturnFalse;

module.exports = IsAsyncGenerator;
