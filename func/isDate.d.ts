/**
 * 检查value是否被分类为Date对象
 *
 * @param value 要检查的值
 * @return 如果值被正确分类,则返回 'true' 否则返回 'false'
 */
export declare function isDate(value?: any): value is Date

declare module './ctor' {
  interface LoquatMethods {
    isDate: typeof isDate;
  }
}

export default isDate
