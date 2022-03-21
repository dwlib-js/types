import GetIntrinsic from '#intrinsics/GetIntrinsic';
import GetIntrinsicOrThrow from '#intrinsics/GetIntrinsicOrThrow';
import FunctionBind from '#primordials/FunctionBind';
import ReturnFalse from '#abstract/ReturnFalse';

const FunctionPrototypeSymbolHasInstance = GetIntrinsicOrThrow('Function.prototype[@@hasInstance]');
const SharedArrayBuffer = GetIntrinsic('SharedArrayBuffer');

const IsSharedArrayBuffer = SharedArrayBuffer ? FunctionBind(FunctionPrototypeSymbolHasInstance, SharedArrayBuffer) : ReturnFalse;

export default IsSharedArrayBuffer;
