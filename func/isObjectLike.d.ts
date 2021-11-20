/**
 * 判断是否是一个有效的对象
 *
 * @category Lang
 * @param {*} value 要检查的值
 * @returns {boolean} 如果 'value' 是类对象,则返回 'true', 否则返回 'false'
 */
export declare function isObjectLike(value: any): boolean

declare module './ctor' {
  interface LoquatMethods {
    isObjectLike: typeof isObjectLike;
  }
}

export default isObjectLike
