/**
 * 将值转化为String
 *
 * @category Lang
 * @param {*} value 要转换的值
 * @returns {string} 返回转换后的字符串
*/
export declare function toString(value: any): string

declare module './ctor' {
  interface LoquatMethods {
   merge: typeof toString;
  }
}

export default toString
