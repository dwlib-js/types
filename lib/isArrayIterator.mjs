import GetIntrinsicOrThrow from '#intrinsics/GetIntrinsicOrThrow';
import FunctionBind from '#primordials/FunctionBind';

const ArrayIteratorPrototype = GetIntrinsicOrThrow('ArrayIteratorPrototype');
const ObjectPrototypeIsPrototypeOf = GetIntrinsicOrThrow('Object.prototype.isPrototypeOf');

const IsArrayIterator = FunctionBind(ObjectPrototypeIsPrototypeOf, ArrayIteratorPrototype);

export default IsArrayIterator;
