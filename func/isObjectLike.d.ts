/**
 * 检查 'value' 是否像对象,如果值不是 'null' 那么它就是类对象
 * 并且有一个 'object' 的 'typeof' 结果
 *
 * @category Lang
 * @param {*} value 要检查的值
 * @returns {boolean} 如果 'value' 是类对象,则返回 'true' 否则返回 'false'
 */
export declare function isObjectLike(value?: any): boolean

declare module './ctor' {
  interface LoquatMethods {
    isObjectLike: typeof isObjectLike;
  }
}

export default isObjectLike
