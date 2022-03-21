import GetIntrinsicOrThrow from '#intrinsics/GetIntrinsicOrThrow';
import FunctionBind from '#primordials/FunctionBind';
import Int16Array from '#primordials/Int16Array';

const FunctionPrototypeSymbolHasInstance = GetIntrinsicOrThrow('Function.prototype[@@hasInstance]');

const IsInt16Array = FunctionBind(FunctionPrototypeSymbolHasInstance, Int16Array);

export default IsInt16Array;
