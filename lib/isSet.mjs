import GetIntrinsicOrThrow from '#intrinsics/GetIntrinsicOrThrow';
import FunctionBind from '#primordials/FunctionBind';
import Set from '#primordials/Set';

const FunctionPrototypeSymbolHasInstance = GetIntrinsicOrThrow('Function.prototype[@@hasInstance]');

const IsSet = FunctionBind(FunctionPrototypeSymbolHasInstance, Set);

export default IsSet;
