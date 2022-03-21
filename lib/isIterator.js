'use strict';

const GetIntrinsicOrThrow = require('#intrinsics/GetIntrinsicOrThrow');
const FunctionBind = require('#primordials/FunctionBind');

const IteratorPrototype = GetIntrinsicOrThrow('IteratorPrototype');
const ObjectPrototypeIsPrototypeOf = GetIntrinsicOrThrow('Object.prototype.isPrototypeOf');

const IsIterator = FunctionBind(ObjectPrototypeIsPrototypeOf, IteratorPrototype);

module.exports = IsIterator;
