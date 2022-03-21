import IsSafeInteger from './isSafeInteger.mjs';

const isIndex = argument => IsSafeInteger(argument) && argument >= 0;

export default isIndex;
