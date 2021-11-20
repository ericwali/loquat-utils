/**
 * 将 'string' 的第一个字符转换为大写字母
 *
 * @param string 要转换的字符串
 * @return 返回转换后的字符串
 */
export declare function upperFirst(string: string): string

declare module './ctor' {
  interface LoquatMethods {
    upperFirst: typeof upperFirst;
  }
}

export default upperFirst
