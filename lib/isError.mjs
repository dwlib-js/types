import GetIntrinsicOrThrow from '#intrinsics/GetIntrinsicOrThrow';
import Error from '#primordials/Error';
import FunctionBind from '#primordials/FunctionBind';

const FunctionPrototypeSymbolHasInstance = GetIntrinsicOrThrow('Function.prototype[@@hasInstance]');

const IsError = FunctionBind(FunctionPrototypeSymbolHasInstance, Error);

export default IsError;
