'use strict';

const Object = require('#primordials/Object');
const ReflectConstruct = require('#primordials/ReflectConstruct');
const IsFunction = require('./isFunction');

const isConstructor = argument => {
  if (!IsFunction(argument)) {
    return false;
  }
  try {
    ReflectConstruct(Object, [], argument);
  } catch (e) {
    return false;
  }
  return true;
}

module.exports = isConstructor;
