import GetIntrinsicOrThrow from '#intrinsics/GetIntrinsicOrThrow';
import ArrayBuffer from '#primordials/ArrayBuffer';
import FunctionBind from '#primordials/FunctionBind';

const FunctionPrototypeSymbolHasInstance = GetIntrinsicOrThrow('Function.prototype[@@hasInstance]');

const IsArrayBuffer = FunctionBind(FunctionPrototypeSymbolHasInstance, ArrayBuffer);

export default IsArrayBuffer;
