'use strict';

const GetIntrinsicOrThrow = require('#intrinsics/GetIntrinsicOrThrow');
const ObjectCreate = require('#primordials/ObjectCreate');
const ReflectDefineProperty = require('#primordials/ReflectDefineProperty');
const IsAggregateError = require('./isAggregateError');
const IsArray = require('./isArray');
const IsArrayBuffer = require('./isArrayBuffer');
const IsArrayBufferView = require('./isArrayBufferView');
const IsArrayIterator = require('./isArrayIterator');
const IsArrayLike = require('./isArrayLike');
const IsAsyncFunction = require('./isAsyncFunction');
const IsAsyncGenerator = require('./isAsyncGenerator');
const IsAsyncGeneratorFunction = require('./isAsyncGeneratorFunction');
const IsAsyncIterable = require('./isAsyncIterable');
const IsAsyncIterator = require('./isAsyncIterator');
const IsBigInt = require('./isBigInt');
const IsBigInt64 = require('./isBigInt64');
const IsBigInt64Array = require('./isBigInt64Array');
const IsBigUint64 = require('./isBigUint64');
const IsBigUint64Array = require('./isBigUint64Array');
const IsBoolean = require('./isBoolean');
const IsBufferSource = require('./isBufferSource');
const IsCallable = require('./isCallable');
const IsClassConstructor = require('./isClassConstructor');
const IsConstructor = require('./isConstructor');
const IsDataView = require('./isDataView');
const IsDate = require('./isDate');
const IsError = require('./isError');
const IsFinalizationRegistry = require('./isFinalizationRegistry');
const IsFinite = require('./isFinite');
const IsFloat32Array = require('./isFloat32Array');
const IsFloat64Array = require('./isFloat64Array');
const IsFunction = require('./isFunction');
const IsGenerator = require('./isGenerator');
const IsGeneratorFunction = require('./isGeneratorFunction');
const IsIndex = require('./isIndex');
const IsInfinity = require('./isInfinity');
const IsInt8 = require('./isInt8');
const IsInt8Array = require('./isInt8Array');
const IsInt16 = require('./isInt16');
const IsInt16Array = require('./isInt16Array');
const IsInt32 = require('./isInt32');
const IsInt32Array = require('./isInt32Array');
const IsInteger = require('./isInteger');
const IsIterable = require('./isIterable');
const IsIterator = require('./isIterator');
const IsMap = require('./isMap');
const IsMapIterator = require('./isMapIterator');
const IsNaN = require('./isNaN');
const IsNegativeZero = require('./isNegativeZero');
const IsNull = require('./isNull');
const IsNullable = require('./isNullable');
const IsNumber = require('./isNumber');
const IsNumeric = require('./isNumeric');
const IsObject = require('./isObject');
const IsObjectOrNull = require('./isObjectOrNull');
const IsPrimitive = require('./isPrimitive');
const IsPromise = require('./isPromise');
const IsPropertyKey = require('./isPropertyKey');
const IsRangeError = require('./isRangeError');
const IsReferenceError = require('./isReferenceError');
const IsRegExp = require('./isRegExp');
const IsRegExpStringIterator = require('./isRegExpStringIterator');
const IsSafeInteger = require('./isSafeInteger');
const IsSet = require('./isSet');
const IsSetIterator = require('./isSetIterator');
const IsSharedArrayBuffer = require('./isSharedArrayBuffer');
const IsString = require('./isString');
const IsStringIterator = require('./isStringIterator');
const IsSymbol = require('./isSymbol');
const IsSyntaxError = require('./isSyntaxError');
const IsTypedArray = require('./isTypedArray');
const IsTypeError = require('./isTypeError');
const IsUint8 = require('./isUint8');
const IsUint8Array = require('./isUint8Array');
const IsUint8ClampedArray = require('./isUint8ClampedArray');
const IsUint16 = require('./isUint16');
const IsUint16Array = require('./isUint16Array');
const IsUint32 = require('./isUint32');
const IsUint32Array = require('./isUint32Array');
const IsUndefined = require('./isUndefined');
const IsURIError = require('./isURIError');
const IsWeakMap = require('./isWeakMap');
const IsWeakRef = require('./isWeakRef');
const IsWeakSet = require('./isWeakSet');

const ObjectPrototype = GetIntrinsicOrThrow('Object.prototype');
const SymbolToStringTag = GetIntrinsicOrThrow('@@toStringTag');

const Types = ObjectCreate(ObjectPrototype, {
  isAggregateError: {
    value: IsAggregateError
  },
  isArray: {
    value: IsArray
  },
  isArrayBuffer: {
    value: IsArrayBuffer
  },
  isArrayBufferView: {
    value: IsArrayBufferView
  },
  isArrayIterator: {
    value: IsArrayIterator
  },
  isArrayLike: {
    value: IsArrayLike
  },
  isAsyncFunction: {
    value: IsAsyncFunction
  },
  isAsyncGenerator: {
    value: IsAsyncGenerator
  },
  isAsyncGeneratorFunction: {
    value: IsAsyncGeneratorFunction
  },
  isAsyncIterable: {
    value: IsAsyncIterable
  },
  isAsyncIterator: {
    value: IsAsyncIterator
  },
  isBigInt: {
    value: IsBigInt
  },
  isBigInt64: {
    value: IsBigInt64
  },
  isBigInt64Array: {
    value: IsBigInt64Array
  },
  isBigUint64: {
    value: IsBigUint64
  },
  isBigUint64Array: {
    value: IsBigUint64Array
  },
  isBoolean: {
    value: IsBoolean
  },
  isBufferSource: {
    value: IsBufferSource
  },
  isCallable: {
    value: IsCallable
  },
  isClassConstructor: {
    value: IsClassConstructor
  },
  isConstructor: {
    value: IsConstructor
  },
  isDataView: {
    value: IsDataView
  },
  isDate: {
    value: IsDate
  },
  isError: {
    value: IsError
  },
  isFinalizationRegistry: {
    value: IsFinalizationRegistry
  },
  isFinite: {
    value: IsFinite
  },
  isFloat32Array: {
    value: IsFloat32Array
  },
  isFloat64Array: {
    value: IsFloat64Array
  },
  isFunction: {
    value: IsFunction
  },
  isGenerator: {
    value: IsGenerator
  },
  isGeneratorFunction: {
    value: IsGeneratorFunction
  },
  isIndex: {
    value: IsIndex
  },
  isInfinity: {
    value: IsInfinity
  },
  isInt8: {
    value: IsInt8
  },
  isInt8Array: {
    value: IsInt8Array
  },
  isInt16: {
    value: IsInt16
  },
  isInt16Array: {
    value: IsInt16Array
  },
  isInt32: {
    value: IsInt32
  },
  isInt32Array: {
    value: IsInt32Array
  },
  isInteger: {
    value: IsInteger
  },
  isIterable: {
    value: IsIterable
  },
  isIterator: {
    value: IsIterator
  },
  isMap: {
    value: IsMap
  },
  isMapIterator: {
    value: IsMapIterator
  },
  isNaN: {
    value: IsNaN
  },
  isNegativeZero: {
    value: IsNegativeZero
  },
  isNull: {
    value: IsNull
  },
  isNullable: {
    value: IsNullable
  },
  isNumber: {
    value: IsNumber
  },
  isNumeric: {
    value: IsNumeric
  },
  isObject: {
    value: IsObject
  },
  isObjectOrNull: {
    value: IsObjectOrNull
  },
  isPrimitive: {
    value: IsPrimitive
  },
  isPromise: {
    value: IsPromise
  },
  isPropertyKey: {
    value: IsPropertyKey
  },
  isRangeError: {
    value: IsRangeError
  },
  isReferenceError: {
    value: IsReferenceError
  },
  isRegExp: {
    value: IsRegExp
  },
  isRegExpStringIterator: {
    value: IsRegExpStringIterator
  },
  isSafeInteger: {
    value: IsSafeInteger
  },
  isSet: {
    value: IsSet
  },
  isSetIterator: {
    value: IsSetIterator
  },
  isSharedArrayBuffer: {
    value: IsSharedArrayBuffer
  },
  isString: {
    value: IsString
  },
  isStringIterator: {
    value: IsStringIterator
  },
  isSymbol: {
    value: IsSymbol
  },
  isSyntaxError: {
    value: IsSyntaxError
  },
  isTypedArray: {
    value: IsTypedArray
  },
  isTypeError: {
    value: IsTypeError
  },
  isUint8: {
    value: IsUint8
  },
  isUint8Array: {
    value: IsUint8Array
  },
  isUint8ClampedArray: {
    value: IsUint8ClampedArray
  },
  isUint16: {
    value: IsUint16
  },
  isUint16Array: {
    value: IsUint16Array
  },
  isUint32: {
    value: IsUint32
  },
  isUint32Array: {
    value: IsUint32Array
  },
  isUndefined: {
    value: IsUndefined
  },
  isURIError: {
    value: IsURIError
  },
  isWeakMap: {
    value: IsWeakMap
  },
  isWeakRef: {
    value: IsWeakRef
  },
  isWeakSet: {
    value: IsWeakSet
  }
});
ReflectDefineProperty(Types, SymbolToStringTag, {
  value: 'Types'
});

module.exports = Types;
