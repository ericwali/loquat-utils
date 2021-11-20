/**
 * 判断是否是一个日期
 *
 * @category Lang
 * @param {*} value 要检查的值
 * @returns {boolean} 如果 'value' 是日期对象,则返回 'true' 否则返回 'false'
 */
export declare function isDate(value: any): value is Date

declare module './ctor' {
  interface LoquatMethods {
    isDate: typeof isDate;
  }
}

export default isDate
