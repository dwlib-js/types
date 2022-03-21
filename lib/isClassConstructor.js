'use strict';

const GetIntrinsicOrThrow = require('#intrinsics/GetIntrinsicOrThrow');
const FunctionBind = require('#primordials/FunctionBind');
const FunctionToString = require('#primordials/FunctionToString');
const IsFunction = require('./isFunction');

const RegExpPrototypeTest = GetIntrinsicOrThrow('RegExp.prototype.test');

const SourceTextStartsWithClass = FunctionBind(RegExpPrototypeTest, /^\s*class/);

const isClassConstructor = argument => {
  if (!IsFunction(argument)) {
    return false;
  }
  const sourceText = FunctionToString(argument);
  return SourceTextStartsWithClass(sourceText);
}

module.exports = isClassConstructor;
