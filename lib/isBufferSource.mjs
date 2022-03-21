import IsArrayBuffer from './isArrayBuffer.mjs';
import IsArrayBufferView from './isArrayBufferView.mjs';

const isBufferSource = argument => IsArrayBuffer(argument) || IsArrayBufferView(argument);

export default isBufferSource;
