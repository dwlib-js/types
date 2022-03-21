import IsObject from './isObject.mjs';

const isPrimitive = argument => !IsObject(argument);

export default isPrimitive;
