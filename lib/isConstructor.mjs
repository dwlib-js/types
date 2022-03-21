import Object from '#primordials/Object';
import ReflectConstruct from '#primordials/ReflectConstruct';
import IsFunction from './isFunction.mjs';

const isConstructor = argument => {
  if (!IsFunction(argument)) {
    return false;
  }
  try {
    ReflectConstruct(Object, [], argument);
  } catch (e) {
    return false;
  }
  return true;
}

export default isConstructor;
