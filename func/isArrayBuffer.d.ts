/**
 * 判断是否是一个数组缓冲区
 *
 * @category Lang
 * @param {*} value 要检查的值
 * @returns {boolean} 如果 'value' 是一个数组缓冲区,则返回 'true' 否则返回 'false'
 */
export declare function isArrayBuffer(value?: any): value is ArrayBuffer

declare module './ctor' {
  interface LoquatMethods {
    isArrayBuffer: typeof isArrayBuffer;
  }
}

export default isArrayBuffer
