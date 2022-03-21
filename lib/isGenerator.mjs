import GetIntrinsicOrThrow from '#intrinsics/GetIntrinsicOrThrow';
import FunctionBind from '#primordials/FunctionBind';

const GeneratorPrototype = GetIntrinsicOrThrow('GeneratorPrototype');
const ObjectPrototypeIsPrototypeOf = GetIntrinsicOrThrow('Object.prototype.isPrototypeOf');

const IsGenerator = FunctionBind(ObjectPrototypeIsPrototypeOf, GeneratorPrototype);

export default IsGenerator;
