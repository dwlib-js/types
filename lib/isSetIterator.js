'use strict';

const GetIntrinsicOrThrow = require('#intrinsics/GetIntrinsicOrThrow');
const FunctionBind = require('#primordials/FunctionBind');

const ObjectPrototypeIsPrototypeOf = GetIntrinsicOrThrow('Object.prototype.isPrototypeOf');
const SetIteratorPrototype = GetIntrinsicOrThrow('SetIteratorPrototype');

const IsSetIterator = FunctionBind(ObjectPrototypeIsPrototypeOf, SetIteratorPrototype);

module.exports = IsSetIterator;
