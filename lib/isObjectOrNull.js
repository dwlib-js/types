'use strict';

const isObjectOrNull = argument => {
  const type = typeof argument;
  return type === 'object' || type === 'function';
}

module.exports = isObjectOrNull;
