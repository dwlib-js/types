import GetIntrinsicOrThrow from '#intrinsics/GetIntrinsicOrThrow';
import Float32Array from '#primordials/Float32Array';
import FunctionBind from '#primordials/FunctionBind';

const FunctionPrototypeSymbolHasInstance = GetIntrinsicOrThrow('Function.prototype[@@hasInstance]');

const IsFloat32Array = FunctionBind(FunctionPrototypeSymbolHasInstance, Float32Array);

export default IsFloat32Array;
