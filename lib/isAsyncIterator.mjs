import GetIntrinsic from '#intrinsics/GetIntrinsic';
import GetIntrinsicOrThrow from '#intrinsics/GetIntrinsicOrThrow';
import FunctionBind from '#primordials/FunctionBind';
import ReturnFalse from '#abstract/ReturnFalse';

const AsyncIteratorPrototype = GetIntrinsic('AsyncIteratorPrototype');
const ObjectPrototypeIsPrototypeOf = GetIntrinsicOrThrow('Object.prototype.isPrototypeOf');

const IsAsyncIterator = AsyncIteratorPrototype ? FunctionBind(ObjectPrototypeIsPrototypeOf, AsyncIteratorPrototype) : ReturnFalse;

export default IsAsyncIterator;
