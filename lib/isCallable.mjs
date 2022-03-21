import IsClassConstructor from './isClassConstructor.mjs';
import IsFunction from './isFunction.mjs';

const isCallable = argument => IsFunction(argument) && !IsClassConstructor(argument);

export default isCallable;
