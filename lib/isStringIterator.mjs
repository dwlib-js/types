import GetIntrinsicOrThrow from '#intrinsics/GetIntrinsicOrThrow';
import FunctionBind from '#primordials/FunctionBind';

const ObjectPrototypeIsPrototypeOf = GetIntrinsicOrThrow('Object.prototype.isPrototypeOf');
const StringIteratorPrototype = GetIntrinsicOrThrow('StringIteratorPrototype');

const IsStringIterator = FunctionBind(ObjectPrototypeIsPrototypeOf, StringIteratorPrototype);

export default IsStringIterator;
