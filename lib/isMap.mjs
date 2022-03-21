import GetIntrinsicOrThrow from '#intrinsics/GetIntrinsicOrThrow';
import FunctionBind from '#primordials/FunctionBind';
import Map from '#primordials/Map';

const FunctionPrototypeSymbolHasInstance = GetIntrinsicOrThrow('Function.prototype[@@hasInstance]');

const IsMap = FunctionBind(FunctionPrototypeSymbolHasInstance, Map);

export default IsMap;
