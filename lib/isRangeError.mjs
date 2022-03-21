import GetIntrinsicOrThrow from '#intrinsics/GetIntrinsicOrThrow';
import FunctionBind from '#primordials/FunctionBind';
import RangeError from '#primordials/RangeError';

const FunctionPrototypeSymbolHasInstance = GetIntrinsicOrThrow('Function.prototype[@@hasInstance]');

const IsRangeError = FunctionBind(FunctionPrototypeSymbolHasInstance, RangeError);

export default IsRangeError;
