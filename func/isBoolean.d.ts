/**
 * 判断是否是一个有效的对象与有效的数组
 *
 * @category Lang
 * @param {*} value 要检查的值
 * @returns {boolean} 如果 'value' 是一个类数组对象,则返回 'true' 否 'false'
 */
export declare function isArrayLikeObject(value: any): boolean

declare module './ctor' {
  interface LoquatMethods {
    isArrayLikeObject: typeof isArrayLikeObject;
  }
}

export default isArrayLikeObject
