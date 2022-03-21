import GetIntrinsicOrThrow from '#intrinsics/GetIntrinsicOrThrow';
import Float64Array from '#primordials/Float64Array';
import FunctionBind from '#primordials/FunctionBind';

const FunctionPrototypeSymbolHasInstance = GetIntrinsicOrThrow('Function.prototype[@@hasInstance]');

const IsFloat64Array = FunctionBind(FunctionPrototypeSymbolHasInstance, Float64Array);

export default IsFloat64Array;
