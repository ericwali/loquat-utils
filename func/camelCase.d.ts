/**
 * 将' string '转换为[驼峰大小写](https://en.wikipedia.org/wiki/CamelCase)
 *
 * @category String
 * @param {string} [string=''] 要转换的字符串
 * @returns {string} 返回驼峰格式字符串
 */
export declare function camelCase(string?: string): string

declare module './ctor' {
  interface LoquatMethods {
    camelCase: typeof camelCase;
  }
}

export default camelCase
