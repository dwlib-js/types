import GetIntrinsicOrThrow from '#intrinsics/GetIntrinsicOrThrow';
import FunctionBind from '#primordials/FunctionBind';
import Uint16Array from '#primordials/Uint16Array';

const FunctionPrototypeSymbolHasInstance = GetIntrinsicOrThrow('Function.prototype[@@hasInstance]');

const IsUint16Array = FunctionBind(FunctionPrototypeSymbolHasInstance, Uint16Array);

export default IsUint16Array;
