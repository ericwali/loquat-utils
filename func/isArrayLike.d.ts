/**
 * 判断是否是一个有效的数组
 *
 * @category Lang
 * @param {*} value 要检查的值
 * @returns {boolean} 如果 'value' 是数组类,则返回 'true' 否则返回 'false'
 */
export declare function isArrayLike(value: any): value is ArrayLike<any>

declare module './ctor' {
  interface LoquatMethods {
    isArrayLike: typeof isArrayLike;
  }
}

export default isArrayLike
