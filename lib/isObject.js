'use strict';

const IsObjectOrNull = require('./isObjectOrNull');

const isObject = argument => argument != null && IsObjectOrNull(argument);

module.exports = isObject;
