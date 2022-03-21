const isNumeric = argument => {
  const type = typeof argument;
  return type === 'number' || type === 'bigint';
}

export default isNumeric;
