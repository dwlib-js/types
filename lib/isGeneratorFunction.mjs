import GetIntrinsicOrThrow from '#intrinsics/GetIntrinsicOrThrow';
import FunctionBind from '#primordials/FunctionBind';
import GeneratorFunction from '#primordials/GeneratorFunction';

const FunctionPrototypeSymbolHasInstance = GetIntrinsicOrThrow('Function.prototype[@@hasInstance]');

const IsGeneratorFunction = FunctionBind(FunctionPrototypeSymbolHasInstance, GeneratorFunction);

export default IsGeneratorFunction;
