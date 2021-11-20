/**
 * 判断是否是一个缓冲区
 *
 * @category Lang
 * @param {*} value 要检查的值
 * @returns {boolean} 如果 'value' 是一个缓冲区,则返回 'true' 否则返回 'false'
 */
export declare function isBuffer(value: any): boolean

declare module './ctor' {
  interface LoquatMethods {
    isBuffer: typeof isBuffer;
  }
}

export default isBuffer
