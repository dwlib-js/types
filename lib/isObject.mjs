import IsObjectOrNull from './isObjectOrNull.mjs';

const isObject = argument => argument != null && IsObjectOrNull(argument);

export default isObject;
