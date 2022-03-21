import GetIntrinsicOrThrow from '#intrinsics/GetIntrinsicOrThrow';
import FunctionBind from '#primordials/FunctionBind';

const ObjectPrototypeIsPrototypeOf = GetIntrinsicOrThrow('Object.prototype.isPrototypeOf');
const SetIteratorPrototype = GetIntrinsicOrThrow('SetIteratorPrototype');

const IsSetIterator = FunctionBind(ObjectPrototypeIsPrototypeOf, SetIteratorPrototype);

export default IsSetIterator;
