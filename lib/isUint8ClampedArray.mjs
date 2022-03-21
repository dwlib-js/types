import GetIntrinsicOrThrow from '#intrinsics/GetIntrinsicOrThrow';
import FunctionBind from '#primordials/FunctionBind';
import Uint8ClampedArray from '#primordials/Uint8ClampedArray';

const FunctionPrototypeSymbolHasInstance = GetIntrinsicOrThrow('Function.prototype[@@hasInstance]');

const IsUint8ClampedArray = FunctionBind(FunctionPrototypeSymbolHasInstance, Uint8ClampedArray);

export default IsUint8ClampedArray;
