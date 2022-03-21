import GetIntrinsicOrThrow from '#intrinsics/GetIntrinsicOrThrow';
import DataView from '#primordials/DataView';
import FunctionBind from '#primordials/FunctionBind';

const FunctionPrototypeSymbolHasInstance = GetIntrinsicOrThrow('Function.prototype[@@hasInstance]');

const IsDataView = FunctionBind(FunctionPrototypeSymbolHasInstance, DataView);

export default IsDataView;
