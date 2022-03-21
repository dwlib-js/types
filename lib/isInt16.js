'use strict';

const IsInteger = require('./isInteger');

const isInt16 = argument => IsInteger(argument) && argument >= -0x8000 && argument <= 0x7fff;

module.exports = isInt16;
