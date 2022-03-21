import GetIntrinsic from '#intrinsics/GetIntrinsic';
import GetIntrinsicOrThrow from '#intrinsics/GetIntrinsicOrThrow';
import FunctionBind from '#primordials/FunctionBind';
import ReturnFalse from '#abstract/ReturnFalse';

const FinalizationRegistry = GetIntrinsic('FinalizationRegistry');
const FunctionPrototypeSymbolHasInstance = GetIntrinsicOrThrow('Function.prototype[@@hasInstance]');

const IsFinalizationRegistry = FinalizationRegistry ? FunctionBind(FunctionPrototypeSymbolHasInstance, FinalizationRegistry) : ReturnFalse;

export default IsFinalizationRegistry;
