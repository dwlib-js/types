import GetIntrinsicOrThrow from '#intrinsics/GetIntrinsicOrThrow';
import ObjectCreate from '#primordials/ObjectCreate';
import ReflectDefineProperty from '#primordials/ReflectDefineProperty';
import IsAggregateError from './isAggregateError.mjs';
import IsArray from './isArray.mjs';
import IsArrayBuffer from './isArrayBuffer.mjs';
import IsArrayBufferView from './isArrayBufferView.mjs';
import IsArrayIterator from './isArrayIterator.mjs';
import IsArrayLike from './isArrayLike.mjs';
import IsAsyncFunction from './isAsyncFunction.mjs';
import IsAsyncGenerator from './isAsyncGenerator.mjs';
import IsAsyncGeneratorFunction from './isAsyncGeneratorFunction.mjs';
import IsAsyncIterable from './isAsyncIterable.mjs';
import IsAsyncIterator from './isAsyncIterator.mjs';
import IsBigInt from './isBigInt.mjs';
import IsBigInt64 from './isBigInt64.mjs';
import IsBigInt64Array from './isBigInt64Array.mjs';
import IsBigUint64 from './isBigUint64.mjs';
import IsBigUint64Array from './isBigUint64Array.mjs';
import IsBoolean from './isBoolean.mjs';
import IsBufferSource from './isBufferSource.mjs';
import IsCallable from './isCallable.mjs';
import IsClassConstructor from './isClassConstructor.mjs';
import IsConstructor from './isConstructor.mjs';
import IsDataView from './isDataView.mjs';
import IsDate from './isDate.mjs';
import IsError from './isError.mjs';
import IsFinalizationRegistry from './isFinalizationRegistry.mjs';
import IsFinite from './isFinite.mjs';
import IsFloat32Array from './isFloat32Array.mjs';
import IsFloat64Array from './isFloat64Array.mjs';
import IsFunction from './isFunction.mjs';
import IsGenerator from './isGenerator.mjs';
import IsGeneratorFunction from './isGeneratorFunction.mjs';
import IsIndex from './isIndex.mjs';
import IsInfinity from './isInfinity.mjs';
import IsInt8 from './isInt8.mjs';
import IsInt8Array from './isInt8Array.mjs';
import IsInt16 from './isInt16.mjs';
import IsInt16Array from './isInt16Array.mjs';
import IsInt32 from './isInt32.mjs';
import IsInt32Array from './isInt32Array.mjs';
import IsInteger from './isInteger.mjs';
import IsIterable from './isIterable.mjs';
import IsIterator from './isIterator.mjs';
import IsMap from './isMap.mjs';
import IsMapIterator from './isMapIterator.mjs';
import IsNaN from './isNaN.mjs';
import IsNegativeZero from './isNegativeZero.mjs';
import IsNull from './isNull.mjs';
import IsNullable from './isNullable.mjs';
import IsNumber from './isNumber.mjs';
import IsNumeric from './isNumeric.mjs';
import IsObject from './isObject.mjs';
import IsObjectOrNull from './isObjectOrNull.mjs';
import IsPrimitive from './isPrimitive.mjs';
import IsPromise from './isPromise.mjs';
import IsPropertyKey from './isPropertyKey.mjs';
import IsRangeError from './isRangeError.mjs';
import IsReferenceError from './isReferenceError.mjs';
import IsRegExp from './isRegExp.mjs';
import IsRegExpStringIterator from './isRegExpStringIterator.mjs';
import IsSafeInteger from './isSafeInteger.mjs';
import IsSet from './isSet.mjs';
import IsSetIterator from './isSetIterator.mjs';
import IsSharedArrayBuffer from './isSharedArrayBuffer.mjs';
import IsString from './isString.mjs';
import IsStringIterator from './isStringIterator.mjs';
import IsSymbol from './isSymbol.mjs';
import IsSyntaxError from './isSyntaxError.mjs';
import IsTypedArray from './isTypedArray.mjs';
import IsTypeError from './isTypeError.mjs';
import IsUint8 from './isUint8.mjs';
import IsUint8Array from './isUint8Array.mjs';
import IsUint8ClampedArray from './isUint8ClampedArray.mjs';
import IsUint16 from './isUint16.mjs';
import IsUint16Array from './isUint16Array.mjs';
import IsUint32 from './isUint32.mjs';
import IsUint32Array from './isUint32Array.mjs';
import IsUndefined from './isUndefined.mjs';
import IsURIError from './isURIError.mjs';
import IsWeakMap from './isWeakMap.mjs';
import IsWeakRef from './isWeakRef.mjs';
import IsWeakSet from './isWeakSet.mjs';

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

export default Types;
