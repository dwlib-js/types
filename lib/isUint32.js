'use strict';

const IsInteger = require('./isInteger');

const isUint32 = argument => IsInteger(argument) && argument >= 0 && argument <= 0xffffffff;

module.exports = isUint32;
