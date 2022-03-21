'use strict';

const GetIntrinsicOrThrow = require('#intrinsics/GetIntrinsicOrThrow');
const IsCallable = require('./isCallable');

const SymbolIterator = GetIntrinsicOrThrow('@@iterator');

const isIterable = argument => {
  if (argument == null) {
    return false;
  }
  const iterator = argument[SymbolIterator];
  return IsCallable(iterator);
}

module.exports = isIterable;
