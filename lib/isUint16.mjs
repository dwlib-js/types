import IsInteger from './isInteger.mjs';

const isUint16 = argument => IsInteger(argument) && argument >= 0 && argument <= 0xffff;

export default isUint16;
