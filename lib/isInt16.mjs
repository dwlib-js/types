import IsInteger from './isInteger.mjs';

const isInt16 = argument => IsInteger(argument) && argument >= -0x8000 && argument <= 0x7fff;

export default isInt16;
