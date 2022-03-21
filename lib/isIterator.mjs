import GetIntrinsicOrThrow from '#intrinsics/GetIntrinsicOrThrow';
import FunctionBind from '#primordials/FunctionBind';

const IteratorPrototype = GetIntrinsicOrThrow('IteratorPrototype');
const ObjectPrototypeIsPrototypeOf = GetIntrinsicOrThrow('Object.prototype.isPrototypeOf');

const IsIterator = FunctionBind(ObjectPrototypeIsPrototypeOf, IteratorPrototype);

export default IsIterator;
