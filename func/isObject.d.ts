/**
 * 检查是否是一个Object的语言类型
 *
 * @param {*} value 要检查的值
 * @returns {boolean} 如果 'value' 是一个对象则返回 'true' 否则返回 'false'
 */
export declare function isObject(value?: any): value is object

declare module './ctor' {
  interface LoquatMethods {
    isObject: typeof isObject;
  }
}

export default isObject
