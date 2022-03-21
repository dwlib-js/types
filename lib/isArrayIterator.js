'use strict';

const GetIntrinsicOrThrow = require('#intrinsics/GetIntrinsicOrThrow');
const FunctionBind = require('#primordials/FunctionBind');

const ArrayIteratorPrototype = GetIntrinsicOrThrow('ArrayIteratorPrototype');
const ObjectPrototypeIsPrototypeOf = GetIntrinsicOrThrow('Object.prototype.isPrototypeOf');

const IsArrayIterator = FunctionBind(ObjectPrototypeIsPrototypeOf, ArrayIteratorPrototype);

module.exports = IsArrayIterator;
