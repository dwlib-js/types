'use strict';

const IsArrayBuffer = require('./isArrayBuffer');
const IsArrayBufferView = require('./isArrayBufferView');

const isBufferSource = argument => IsArrayBuffer(argument) || IsArrayBufferView(argument);

module.exports = isBufferSource;
