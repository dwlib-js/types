import GetIntrinsicOrThrow from '#intrinsics/GetIntrinsicOrThrow';
import FunctionBind from '#primordials/FunctionBind';
import Int8Array from '#primordials/Int8Array';

const FunctionPrototypeSymbolHasInstance = GetIntrinsicOrThrow('Function.prototype[@@hasInstance]');

const IsInt8Array = FunctionBind(FunctionPrototypeSymbolHasInstance, Int8Array);

export default IsInt8Array;
