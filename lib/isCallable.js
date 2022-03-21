'use strict';

const IsClassConstructor = require('./isClassConstructor');
const IsFunction = require('./isFunction');

const isCallable = argument => IsFunction(argument) && !IsClassConstructor(argument);

module.exports = isCallable;
