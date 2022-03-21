'use strict';

const GetIntrinsicOrThrow = require('#intrinsics/GetIntrinsicOrThrow');
const FunctionBind = require('#primordials/FunctionBind');

const GeneratorPrototype = GetIntrinsicOrThrow('GeneratorPrototype');
const ObjectPrototypeIsPrototypeOf = GetIntrinsicOrThrow('Object.prototype.isPrototypeOf');

const IsGenerator = FunctionBind(ObjectPrototypeIsPrototypeOf, GeneratorPrototype);

module.exports = IsGenerator;
