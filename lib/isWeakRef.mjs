import GetIntrinsic from '#intrinsics/GetIntrinsic';
import GetIntrinsicOrThrow from '#intrinsics/GetIntrinsicOrThrow';
import FunctionBind from '#primordials/FunctionBind';
import ReturnFalse from '#abstract/ReturnFalse';

const FunctionPrototypeSymbolHasInstance = GetIntrinsicOrThrow('Function.prototype[@@hasInstance]');
const WeakRef = GetIntrinsic('WeakRef');

const IsWeakRef = WeakRef ? FunctionBind(FunctionPrototypeSymbolHasInstance, WeakRef) : ReturnFalse;

export default IsWeakRef;
