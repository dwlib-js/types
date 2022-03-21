'use strict';

const IsObject = require('./isObject');

const isPrimitive = argument => !IsObject(argument);

module.exports = isPrimitive;
