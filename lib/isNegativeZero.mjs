const isNegativeZero = argument => argument === 0 && (1 / argument) === -Infinity;

export default isNegativeZero;
