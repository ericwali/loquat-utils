/**
 * 将字符串拆分为其单词数组
 *
 * @param string 要检查的字符串
 * @param pattern 匹配单词的模式
 * @return 返回字符串的单词
 */
export declare function words(string?: string, pattern?: string|RegExp): string[]

declare module './ctor' {
  interface LoquatMethods {
    property: typeof words;
  }
}

export default words
