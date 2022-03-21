'use strict';

const isPropertyKey = argument => {
  const type = typeof argument;
  return type === 'string' || type === 'symbol';
}

module.exports = isPropertyKey;
