import GetIntrinsic from '#intrinsics/GetIntrinsic';
import GetIntrinsicOrThrow from '#intrinsics/GetIntrinsicOrThrow';
import FunctionBind from '#primordials/FunctionBind';
import ReturnFalse from '#abstract/ReturnFalse';

const ObjectPrototypeIsPrototypeOf = GetIntrinsicOrThrow('Object.prototype.isPrototypeOf');
const RegExpStringIteratorPrototype = GetIntrinsic('RegExpStringIteratorPrototype');

const IsRegExpStringIterator = RegExpStringIteratorPrototype ? FunctionBind(ObjectPrototypeIsPrototypeOf, RegExpStringIteratorPrototype) : ReturnFalse;

export default IsRegExpStringIterator;
