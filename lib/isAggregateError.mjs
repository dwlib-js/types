import GetIntrinsic from '#intrinsics/GetIntrinsic';
import GetIntrinsicOrThrow from '#intrinsics/GetIntrinsicOrThrow';
import FunctionBind from '#primordials/FunctionBind';
import ReturnFalse from '#abstract/ReturnFalse';

const AggregateError = GetIntrinsic('AggregateError');
const FunctionPrototypeSymbolHasInstance = GetIntrinsicOrThrow('Function.prototype[@@hasInstance]');

const IsAggregateError = AggregateError ? FunctionBind(FunctionPrototypeSymbolHasInstance, AggregateError) : ReturnFalse;

export default IsAggregateError;
