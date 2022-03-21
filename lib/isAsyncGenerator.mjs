import GetIntrinsic from '#intrinsics/GetIntrinsic';
import GetIntrinsicOrThrow from '#intrinsics/GetIntrinsicOrThrow';
import FunctionBind from '#primordials/FunctionBind';
import ReturnFalse from '#abstract/ReturnFalse';

const AsyncGeneratorPrototype = GetIntrinsic('AsyncGeneratorPrototype');
const ObjectPrototypeIsPrototypeOf = GetIntrinsicOrThrow('Object.prototype.isPrototypeOf');

const IsAsyncGenerator = AsyncGeneratorPrototype ? FunctionBind(ObjectPrototypeIsPrototypeOf, AsyncGeneratorPrototype) : ReturnFalse;

export default IsAsyncGenerator;
