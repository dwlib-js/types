'use strict';

const IsInteger = require('./isInteger');

const isUint16 = argument => IsInteger(argument) && argument >= 0 && argument <= 0xffff;

module.exports = isUint16;
