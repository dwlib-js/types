import IsInteger from './isInteger.mjs';

const isUint8 = argument => IsInteger(argument) && argument >= 0 && argument <= 0xff;

export default isUint8;
