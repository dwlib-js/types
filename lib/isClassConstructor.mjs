import GetIntrinsicOrThrow from '#intrinsics/GetIntrinsicOrThrow';
import FunctionBind from '#primordials/FunctionBind';
import FunctionToString from '#primordials/FunctionToString';
import IsFunction from './isFunction.mjs';

const RegExpPrototypeTest = GetIntrinsicOrThrow('RegExp.prototype.test');

const SourceTextStartsWithClass = FunctionBind(RegExpPrototypeTest, /^\s*class/);

const isClassConstructor = argument => {
  if (!IsFunction(argument)) {
    return false;
  }
  const sourceText = FunctionToString(argument);
  return SourceTextStartsWithClass(sourceText);
}

export default isClassConstructor;
