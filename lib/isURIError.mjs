import GetIntrinsicOrThrow from '#intrinsics/GetIntrinsicOrThrow';
import FunctionBind from '#primordials/FunctionBind';
import URIError from '#primordials/URIError';

const FunctionPrototypeSymbolHasInstance = GetIntrinsicOrThrow('Function.prototype[@@hasInstance]');

const IsURIError = FunctionBind(FunctionPrototypeSymbolHasInstance, URIError);

export default IsURIError;
