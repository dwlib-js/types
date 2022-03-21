import GetIntrinsicOrThrow from '#intrinsics/GetIntrinsicOrThrow';
import FunctionBind from '#primordials/FunctionBind';
import Uint32Array from '#primordials/Uint32Array';

const FunctionPrototypeSymbolHasInstance = GetIntrinsicOrThrow('Function.prototype[@@hasInstance]');

const IsUint32Array = FunctionBind(FunctionPrototypeSymbolHasInstance, Uint32Array);

export default IsUint32Array;
