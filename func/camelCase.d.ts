/**
 * 将字符串转换为驼峰大小写。
 *
 * @param string 要转换的字符串。
 * @return 返回驼峰格式字符串。
 */
export declare function camelCase(string?: string): string

declare module './ctor' {
  interface LoquatMethods {
    camelCase: typeof camelCase;
  }
}

export default camelCase
