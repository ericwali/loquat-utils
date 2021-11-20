/**
 * @program: loquat-utils
 *
 * @description: 创建字符串首字母处理函数
 *
 * @author: entfrm开发团队-王翔
 *
 * @create: 2021-11-18
 */

import castSlice from './castSlice'
import hasUnicode from './hasUnicode'
import stringToArray from './stringToArray'

/**
 * 创建处理字符串第一个函数
 *
 * @param {string} methodName 要使用的大小写方法的名称
 * @returns {Function} 返回新的case函数
 */
function createCaseFirst (methodName) {
  return (string) => {
    if (!string) {
      return ''
    }

    const strSymbols = hasUnicode(string)
      ? stringToArray(string)
      : undefined

    const chr = strSymbols
      ? strSymbols[0]
      : string[0]

    const trailing = strSymbols
      ? castSlice(strSymbols, 1).join('')
      : string.slice(1)

    return chr[methodName]() + trailing
  }
}

export default createCaseFirst
