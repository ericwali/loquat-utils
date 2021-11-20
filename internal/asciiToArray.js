/**
 * @program: loquat-utils
 *
 * @description: ascii编码字符串转换为字符数组
 *
 * @author: entfrm开发团队-王翔
 *
 * @create: 2021-11-18
 */

/**
 * 将ASCII 'string' 转换为数组
 *
 * @param {string} string 要转换的字符串
 * @returns {Array} 返回转换后的数组
 */
function asciiToArray (string) {
  return string.split('')
}

export default asciiToArray
