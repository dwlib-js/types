import GetIntrinsicOrThrow from '#intrinsics/GetIntrinsicOrThrow';
import FunctionBind from '#primordials/FunctionBind';
import Uint8Array from '#primordials/Uint8Array';

const FunctionPrototypeSymbolHasInstance = GetIntrinsicOrThrow('Function.prototype[@@hasInstance]');

const IsUint8Array = FunctionBind(FunctionPrototypeSymbolHasInstance, Uint8Array);

export default IsUint8Array;
