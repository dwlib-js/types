import IsIndex from './isIndex.mjs';
import IsObject from './isObject.mjs';

const isArrayLike = argument => {
  if (!IsObject(argument)) {
    return false;
  }
  const length = argument.length;
  return IsIndex(length);
}

export default isArrayLike;
