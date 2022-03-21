import GetIntrinsicOrThrow from '#intrinsics/GetIntrinsicOrThrow';
import FunctionBind from '#primordials/FunctionBind';
import RegExp from '#primordials/RegExp';

const FunctionPrototypeSymbolHasInstance = GetIntrinsicOrThrow('Function.prototype[@@hasInstance]');

const IsRegExp = FunctionBind(FunctionPrototypeSymbolHasInstance, RegExp);

export default IsRegExp;
