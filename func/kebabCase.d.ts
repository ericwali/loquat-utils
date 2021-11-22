/**
 * 将字符串转换为kebab的情况
 *
 * @param string 要转换的字符串
 * @return 返回kebab大小写字符串。
 */
export declare function kebabCase(string?: string): string

declare module './ctor' {
  interface LoquatMethods {
    getObjType: typeof kebabCase;
  }
}

export default kebabCase
