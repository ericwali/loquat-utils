/**
 * 将 'value' 转换为非1的字符串,返回一个空字符串
 * 对于 'null' 和 'undefined' 值,符号 '-0' 被保留
 *
 * @param value 要处理的值
 * @returns 返回的字符串
 */
export declare function toString(value: any): string

declare module './ctor' {
  interface LoquatMethods {
   merge: typeof toString;
  }
}

export default toString
