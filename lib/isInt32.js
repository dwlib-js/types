'use strict';

const IsInteger = require('./isInteger');

const isInt32 = argument => IsInteger(argument) && argument >= -0x80000000 && argument <= 0x7fffffff;

module.exports = isInt32;
