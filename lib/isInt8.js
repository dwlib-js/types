'use strict';

const IsInteger = require('./isInteger');

const isInt8 = argument => IsInteger(argument) && argument >= -0x80 && argument <= 0x7f;

module.exports = isInt8;
