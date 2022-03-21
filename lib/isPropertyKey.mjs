const isPropertyKey = argument => {
  const type = typeof argument;
  return type === 'string' || type === 'symbol';
}

export default isPropertyKey;
