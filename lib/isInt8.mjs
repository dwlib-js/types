import IsInteger from './isInteger.mjs';

const isInt8 = argument => IsInteger(argument) && argument >= -0x80 && argument <= 0x7f;

export default isInt8;
