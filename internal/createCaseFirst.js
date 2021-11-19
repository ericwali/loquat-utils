import castSlice from './castSlice'
import hasUnicode from './hasUnicode'
import stringToArray from './stringToArray'

/**
 * 创建一个类似于' lowerFirst '的函数。
 *
 * @private
 * @param {string} methodName要使用的大小写方法的名称。
 * @returns {Function} 返回新的case函数。
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
