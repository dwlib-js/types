import GetIntrinsicOrThrow from '#intrinsics/GetIntrinsicOrThrow';
import FunctionBind from '#primordials/FunctionBind';
import SyntaxError from '#primordials/SyntaxError';

const FunctionPrototypeSymbolHasInstance = GetIntrinsicOrThrow('Function.prototype[@@hasInstance]');

const IsSyntaxError = FunctionBind(FunctionPrototypeSymbolHasInstance, SyntaxError);

export default IsSyntaxError;
