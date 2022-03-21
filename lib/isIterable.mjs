import GetIntrinsicOrThrow from '#intrinsics/GetIntrinsicOrThrow';
import IsCallable from './isCallable.mjs';

const SymbolIterator = GetIntrinsicOrThrow('@@iterator');

const isIterable = argument => {
  if (argument == null) {
    return false;
  }
  const iterator = argument[SymbolIterator];
  return IsCallable(iterator);
}

export default isIterable;
