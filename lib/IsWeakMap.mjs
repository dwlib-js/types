import GetIntrinsicOrThrow from '#intrinsics/GetIntrinsicOrThrow';
import FunctionBind from '#primordials/FunctionBind';
import WeakMap from '#primordials/WeakMap';

const FunctionPrototypeSymbolHasInstance = GetIntrinsicOrThrow('Function.prototype[@@hasInstance]');

const IsWeakMap = FunctionBind(FunctionPrototypeSymbolHasInstance, WeakMap);

export default IsWeakMap;
