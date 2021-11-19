/**
 * @program: loquat-utils
 *
 * @description: 获取对象key值时是否是字符串或符号
 *
 * @author: entfrm开发团队-王翔
 *
 * @create: 2021-11-18
 **/

import isSymbol from '../func/isSymbol'

/** 用作各种“Number”常量的引用。 */
const INFINITY = 1 / 0

/**
 * 如果' value '不是字符串或符号，则将其转换为字符串键。
 *
 * @private
 * @param {*} value需要检查的值。
 * @returns {string|symbol} 返回键。
 */
function toKey (value) {
  if (typeof value === 'string' || isSymbol(value)) {
    return value
  }
  const result = `${value}`
  return (result === '0' && (1 / value) === -INFINITY) ? '-0' : result
}

export default toKey
