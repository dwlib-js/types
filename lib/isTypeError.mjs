import GetIntrinsicOrThrow from '#intrinsics/GetIntrinsicOrThrow';
import FunctionBind from '#primordials/FunctionBind';
import TypeError from '#primordials/TypeError';

const FunctionPrototypeSymbolHasInstance = GetIntrinsicOrThrow('Function.prototype[@@hasInstance]');

const IsTypeError = FunctionBind(FunctionPrototypeSymbolHasInstance, TypeError);

export default IsTypeError;
