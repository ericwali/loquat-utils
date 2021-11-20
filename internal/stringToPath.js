/**
 * @program: loquat-utils
 *
 * @description:  将路径string格式转换为数组格式
 *
 * @author: entfrm开发团队-王翔
 *
 * @create: 2021-11-18
 **/

import memoizeCapped from './memoizeCapped'

const charCodeOfDot = '.'.charCodeAt(0)
const reEscapeChar = /\\(\\)?/g
const rePropName = RegExp(
  // 匹配任何不是圆点或括号的东西
  '[^.[\\]]+' + '|' +
  // 或匹配括号内的属性名
  '\\[(?:' +
    // 匹配一个非字符串表达式
    '([^"\'][^[]*)' + '|' +
    // 或匹配字符串(支持转义字符)
    '(["\'])((?:(?!\\2)[^\\\\]|\\\\.)*?)\\2' +
  ')\\]' + '|' +
  // 或者将""匹配为连续的点或空括号之间的空格
  '(?=(?:\\.|\\[\\])(?:\\.|\\[\\]|$))'
  , 'g')

/**
 * 将 'string' 转换为属性路径数组
 *
 * @param {string} string要转换的字符串
 * @returns {Array} 返回属性路径数组
 */
const stringToPath = memoizeCapped((string) => {
  const result = []
  if (string.charCodeAt(0) === charCodeOfDot) {
    result.push('')
  }
  string.replace(rePropName, (match, expression, quote, subString) => {
    let key = match
    if (quote) {
      key = subString.replace(reEscapeChar, '$1')
    }
    else if (expression) {
      key = expression.trim()
    }
    result.push(key)
  })
  return result
})

export default stringToPath
