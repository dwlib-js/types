import GetIntrinsic from '#intrinsics/GetIntrinsic';
import GetIntrinsicOrThrow from '#intrinsics/GetIntrinsicOrThrow';
import FunctionBind from '#primordials/FunctionBind';
import ReturnFalse from '#abstract/ReturnFalse';

const AsyncGeneratorFunction = GetIntrinsic('AsyncGeneratorFunction');
const FunctionPrototypeSymbolHasInstance = GetIntrinsicOrThrow('Function.prototype[@@hasInstance]');

const IsAsyncGeneratorFunction = AsyncGeneratorFunction ? FunctionBind(FunctionPrototypeSymbolHasInstance, AsyncGeneratorFunction) : ReturnFalse;

export default IsAsyncGeneratorFunction;
