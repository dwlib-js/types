'use strict';

const GetIntrinsicOrThrow = require('#intrinsics/GetIntrinsicOrThrow');
const FunctionBind = require('#primordials/FunctionBind');

const MapIteratorPrototype = GetIntrinsicOrThrow('MapIteratorPrototype');
const ObjectPrototypeIsPrototypeOf = GetIntrinsicOrThrow('Object.prototype.isPrototypeOf');

const IsMapIterator = FunctionBind(ObjectPrototypeIsPrototypeOf, MapIteratorPrototype);

module.exports = IsMapIterator;
