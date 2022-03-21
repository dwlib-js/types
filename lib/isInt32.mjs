import IsInteger from './isInteger.mjs';

const isInt32 = argument => IsInteger(argument) && argument >= -0x80000000 && argument <= 0x7fffffff;

export default isInt32;
