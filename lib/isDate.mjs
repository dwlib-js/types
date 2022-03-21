import GetIntrinsicOrThrow from '#intrinsics/GetIntrinsicOrThrow';
import Date from '#primordials/Date';
import FunctionBind from '#primordials/FunctionBind';

const FunctionPrototypeSymbolHasInstance = GetIntrinsicOrThrow('Function.prototype[@@hasInstance]');

const IsDate = FunctionBind(FunctionPrototypeSymbolHasInstance, Date);

export default IsDate;
