import GetIntrinsicOrThrow from '#intrinsics/GetIntrinsicOrThrow';
import FunctionBind from '#primordials/FunctionBind';

const FunctionPrototypeSymbolHasInstance = GetIntrinsicOrThrow('Function.prototype[@@hasInstance]');
const TypedArray = GetIntrinsicOrThrow('TypedArray');

const IsTypedArray = FunctionBind(FunctionPrototypeSymbolHasInstance, TypedArray);

export default IsTypedArray;
