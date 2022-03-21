'use strict';

const isNumeric = argument => {
  const type = typeof argument;
  return type === 'number' || type === 'bigint';
}

module.exports = isNumeric;
