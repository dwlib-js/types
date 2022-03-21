'use strict';

const IsIndex = require('./isIndex');
const IsObject = require('./isObject');

const isArrayLike = argument => {
  if (!IsObject(argument)) {
    return false;
  }
  const length = argument.length;
  return IsIndex(length);
}

module.exports = isArrayLike;
