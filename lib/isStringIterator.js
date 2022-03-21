'use strict';

const GetIntrinsicOrThrow = require('#intrinsics/GetIntrinsicOrThrow');
const FunctionBind = require('#primordials/FunctionBind');

const ObjectPrototypeIsPrototypeOf = GetIntrinsicOrThrow('Object.prototype.isPrototypeOf');
const StringIteratorPrototype = GetIntrinsicOrThrow('StringIteratorPrototype');

const IsStringIterator = FunctionBind(ObjectPrototypeIsPrototypeOf, StringIteratorPrototype);

module.exports = IsStringIterator;
