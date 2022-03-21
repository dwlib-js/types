'use strict';

const GetIntrinsic = require('#intrinsics/GetIntrinsic');
const GetIntrinsicOrThrow = require('#intrinsics/GetIntrinsicOrThrow');
const FunctionBind = require('#primordials/FunctionBind');
const ReturnFalse = require('#abstract/ReturnFalse');

const AsyncIteratorPrototype = GetIntrinsic('AsyncIteratorPrototype');
const ObjectPrototypeIsPrototypeOf = GetIntrinsicOrThrow('Object.prototype.isPrototypeOf');

const IsAsyncIterator = AsyncIteratorPrototype ? FunctionBind(ObjectPrototypeIsPrototypeOf, AsyncIteratorPrototype) : ReturnFalse;

module.exports = IsAsyncIterator;
