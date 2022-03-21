import GetIntrinsicOrThrow from '#intrinsics/GetIntrinsicOrThrow';
import FunctionBind from '#primordials/FunctionBind';
import Promise from '#primordials/Promise';

const FunctionPrototypeSymbolHasInstance = GetIntrinsicOrThrow('Function.prototype[@@hasInstance]');

const IsPromise = FunctionBind(FunctionPrototypeSymbolHasInstance, Promise);

export default IsPromise;
