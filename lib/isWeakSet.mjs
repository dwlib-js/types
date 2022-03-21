import GetIntrinsicOrThrow from '#intrinsics/GetIntrinsicOrThrow';
import FunctionBind from '#primordials/FunctionBind';
import WeakSet from '#primordials/WeakSet';

const FunctionPrototypeSymbolHasInstance = GetIntrinsicOrThrow('Function.prototype[@@hasInstance]');

const IsWeakSet = FunctionBind(FunctionPrototypeSymbolHasInstance, WeakSet);

export default IsWeakSet;
