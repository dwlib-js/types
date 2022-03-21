import GetIntrinsic from '#intrinsics/GetIntrinsic';
import ReturnFalse from '#abstract/ReturnFalse';
import IsCallable from './isCallable.mjs';

const SymbolAsyncIterator = GetIntrinsic('@@asyncIterator');

let isAsyncIterable;

if (SymbolAsyncIterator) {
  isAsyncIterable = argument => {
    if (argument == null) {
      return false;
    }
    const iterator = argument[SymbolAsyncIterator];
    return IsCallable(iterator);
  }
} else {
  isAsyncIterable = ReturnFalse;
}

export default isAsyncIterable;
