/**
 * @program: loquat-utils
 *
 * @description: 将字符串转换为数组
 *
 * @author: entfrm开发团队-王翔
 *
 * @create: 2021-11-18
 **/

import asciiToArray from './asciiToArray'
import hasUnicode from './hasUnicode'
import unicodeToArray from './unicodeToArray'

/**
 * 将' string '转换为数组
 *
 * @param {string} string 要转换的字符串
 * @returns {Array} 返回转换后的数组
 */
function stringToArray (string) {
  return hasUnicode(string)
    ? unicodeToArray(string)
    : asciiToArray(string)
}

export default stringToArray
