'use strict';

const IsInteger = require('./isInteger');

const isUint8 = argument => IsInteger(argument) && argument >= 0 && argument <= 0xff;

module.exports = isUint8;
