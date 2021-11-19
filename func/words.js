/**
 * @program: loquat-utils
 *
 * @description: 分词器
 *
 * @author: entfrm开发团队-王翔
 *
 * @create: 2021-11-18
 **/

import unicodeWords from '../internal/unicodeWords'

/** 判断是否需要更健壮的正则表达式来匹配单词的字符串 */
const hasUnicodeWord = RegExp.prototype.test.bind(
  /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/
)

/** 用于匹配由字母数字字符组成的单词. */
const reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g

function asciiWords (string) {
  return string.match(reAsciiWord)
}

/**
 * 将' string '拆分为单词数组。
 *
 * @category String
 * @param {string} [string=''] The string to inspect.
 * @param {RegExp|string} [pattern] The pattern to match words.
 * @returns {Array} Returns the words of `string`.
 * @example
 *
 * 分割规则:可以使用(数学运算符,除了字母数字外的符号,常用标点符号,空白,驼峰命名写法,表情符号)分割
 * 具体实现请参考: RE_UNICODE_WORD正则表达式
 * 具体正则分割逻辑:
 * (?=' + [RS_BREAK, RS_UPPER, '$'].join('|')
 * (?=' + [RS_BREAK, RS_UPPER + RS_MISC_LOWER, '$'].join('|')
 *
 * words('wangXiang')
 * // => ['wang', 'Xiang']
 *
 * words('wang&,&xiang')
 * // => ['wang', 'xiang']
 *
 * words('wang&,&xiang', /[^, ]+/g)
 * // => ["'wang&", '&xiang']
 */
function words (string, pattern) {
  if (pattern === undefined) {
    const result = hasUnicodeWord(string) ? unicodeWords(string) : asciiWords(string)
    return result || []
  }
  return string.match(pattern) || []
}

export default words
