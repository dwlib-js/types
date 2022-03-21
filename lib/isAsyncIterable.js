'use strict';

const GetIntrinsic = require('#intrinsics/GetIntrinsic');
const ReturnFalse = require('#abstract/ReturnFalse');
const IsCallable = require('./isCallable');

const SymbolAsyncIterator = GetIntrinsic('@@asyncIterator');

let isAsyncIterable;

if (SymbolAsyncIterator) {
  isAsyncIterable = argument => {
    if (argument == null) {
      return false;
    }
    const iterator = argument[SymbolAsyncIterator];
    return IsCallable(iterator);
  }
} else {
  isAsyncIterable = ReturnFalse;
}

module.exports = isAsyncIterable;
