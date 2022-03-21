import GetIntrinsic from '#intrinsics/GetIntrinsic';
import GetIntrinsicOrThrow from '#intrinsics/GetIntrinsicOrThrow';
import FunctionBind from '#primordials/FunctionBind';
import ReturnFalse from '#abstract/ReturnFalse';

const AsyncFunction = GetIntrinsic('AsyncFunction');
const FunctionPrototypeSymbolHasInstance = GetIntrinsicOrThrow('Function.prototype[@@hasInstance]');

const IsAsyncFunction = AsyncFunction ? FunctionBind(FunctionPrototypeSymbolHasInstance, AsyncFunction) : ReturnFalse;

export default IsAsyncFunction;
