import IsInteger from './isInteger.mjs';

const isUint32 = argument => IsInteger(argument) && argument >= 0 && argument <= 0xffffffff;

export default isUint32;
