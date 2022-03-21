import GetIntrinsicOrThrow from '#intrinsics/GetIntrinsicOrThrow';
import FunctionBind from '#primordials/FunctionBind';

const MapIteratorPrototype = GetIntrinsicOrThrow('MapIteratorPrototype');
const ObjectPrototypeIsPrototypeOf = GetIntrinsicOrThrow('Object.prototype.isPrototypeOf');

const IsMapIterator = FunctionBind(ObjectPrototypeIsPrototypeOf, MapIteratorPrototype);

export default IsMapIterator;
