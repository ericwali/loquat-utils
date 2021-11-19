/**
 * 通过将拉丁-1补充字母转换为基本的拉丁字母并删除组合来消除字符串的毛刺
 * 变音符号。
 *
 * @param string 检查的字符串。
 * @return 返回去毛刺字符串。
 */
export declare function deburr(string?: string): string

declare module './ctor' {
  interface LoquatMethods {
    clone: typeof deburr;
  }
}

export default deburr
