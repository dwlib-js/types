const isObjectOrNull = argument => {
  const type = typeof argument;
  return type === 'object' || type === 'function';
}

export default isObjectOrNull;
