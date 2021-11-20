/**
 * 判断是否是一个类型化数组
 *
 * @category Lang
 * @param {*} value 要检查的值
 * @returns {boolean} 如果 'value' 是一个类型化数组,则返回 'true' 否则返回 'false'
 */
export declare function isTypedArray(value: any): boolean

declare module './ctor' {
  interface LoquatMethods {
    isTypedArray: typeof isTypedArray;
  }
}

export default isTypedArray
