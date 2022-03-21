'use strict';

const GetIntrinsic = require('#intrinsics/GetIntrinsic');
const GetIntrinsicOrThrow = require('#intrinsics/GetIntrinsicOrThrow');
const FunctionBind = require('#primordials/FunctionBind');
const ReturnFalse = require('#abstract/ReturnFalse');

const ObjectPrototypeIsPrototypeOf = GetIntrinsicOrThrow('Object.prototype.isPrototypeOf');
const RegExpStringIteratorPrototype = GetIntrinsic('RegExpStringIteratorPrototype');

const IsRegExpStringIterator = RegExpStringIteratorPrototype ? FunctionBind(ObjectPrototypeIsPrototypeOf, RegExpStringIteratorPrototype) : ReturnFalse;

module.exports = IsRegExpStringIterator;
