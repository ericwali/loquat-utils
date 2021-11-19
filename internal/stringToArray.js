import asciiToArray from './asciiToArray'
import hasUnicode from './hasUnicode'
import unicodeToArray from './unicodeToArray'

/**
 * 将' string '转换为数组。
 *
 * @private
 * @param {string} string 要转换的字符串。
 * @returns {Array} 返回转换后的数组。
 */
function stringToArray (string) {
  return hasUnicode(string)
    ? unicodeToArray(string)
    : asciiToArray(string)
}

export default stringToArray
