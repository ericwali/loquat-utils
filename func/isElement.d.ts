/**
 * 判断是否是一个DOM元素
 *
 * @category Lang
 * @param {*} value 要检查的值
 * @returns {boolean} 如果 'value' 是DOM元素则返回 'true' 否则返回 'false'
 */
export declare function isElement(value?: any): boolean

declare module './ctor' {
  interface LoquatMethods {
    isElement: typeof isElement;
  }
}

export default isElement
