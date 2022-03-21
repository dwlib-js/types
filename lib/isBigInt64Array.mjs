import GetIntrinsic from '#intrinsics/GetIntrinsic';
import GetIntrinsicOrThrow from '#intrinsics/GetIntrinsicOrThrow';
import FunctionBind from '#primordials/FunctionBind';
import ReturnFalse from '#abstract/ReturnFalse';

const BigInt64Array = GetIntrinsic('BigInt64Array');
const FunctionPrototypeSymbolHasInstance = GetIntrinsicOrThrow('Function.prototype[@@hasInstance]');

const IsBigInt64Array = BigInt64Array ? FunctionBind(FunctionPrototypeSymbolHasInstance, BigInt64Array) : ReturnFalse;

export default IsBigInt64Array;
