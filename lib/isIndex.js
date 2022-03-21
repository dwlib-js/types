'use strict';

const IsSafeInteger = require('./isSafeInteger');

const isIndex = argument => IsSafeInteger(argument) && argument >= 0;

module.exports = isIndex;
