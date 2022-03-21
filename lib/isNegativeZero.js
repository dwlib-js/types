'use strict';

const isNegativeZero = argument => argument === 0 && (1 / argument) === -Infinity;

module.exports = isNegativeZero;
