import GetIntrinsicOrThrow from '#intrinsics/GetIntrinsicOrThrow';
import FunctionBind from '#primordials/FunctionBind';
import ReferenceError from '#primordials/ReferenceError';

const FunctionPrototypeSymbolHasInstance = GetIntrinsicOrThrow('Function.prototype[@@hasInstance]');

const IsReferenceError = FunctionBind(FunctionPrototypeSymbolHasInstance, ReferenceError);

export default IsReferenceError;
