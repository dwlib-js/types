import GetIntrinsic from '#intrinsics/GetIntrinsic';
import GetIntrinsicOrThrow from '#intrinsics/GetIntrinsicOrThrow';
import FunctionBind from '#primordials/FunctionBind';
import ReturnFalse from '#abstract/ReturnFalse';

const BigUint64Array = GetIntrinsic('BigUint64Array');
const FunctionPrototypeSymbolHasInstance = GetIntrinsicOrThrow('Function.prototype[@@hasInstance]');

const IsBigUint64Array = BigUint64Array ? FunctionBind(FunctionPrototypeSymbolHasInstance, BigUint64Array) : ReturnFalse;

export default IsBigUint64Array;
