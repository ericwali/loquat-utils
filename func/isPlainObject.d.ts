/**
 * 检查是否是一个普通对象
 *
 * @param {*} value 要检查的值
 * @returns {boolean} 如果 'value' 是普通对象,则返回 'true' 否则返回 'false'
 */
export declare function isPlainObject(value?: any): boolean

declare module './ctor' {
  interface LoquatMethods {
    isPlainObject: typeof isPlainObject;
  }
}

export default isPlainObject
