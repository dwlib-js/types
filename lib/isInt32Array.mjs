import GetIntrinsicOrThrow from '#intrinsics/GetIntrinsicOrThrow';
import FunctionBind from '#primordials/FunctionBind';
import Int32Array from '#primordials/Int32Array';

const FunctionPrototypeSymbolHasInstance = GetIntrinsicOrThrow('Function.prototype[@@hasInstance]');

const IsInt32Array = FunctionBind(FunctionPrototypeSymbolHasInstance, Int32Array);

export default IsInt32Array;
