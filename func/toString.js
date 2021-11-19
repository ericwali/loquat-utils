/**
 * @program: loquat-utils
 *
 * @description: 将值转化为String
 *
 * @author: entfrm开发团队-王翔
 *
 * @create: 2021-11-18
 **/

import isSymbol from './isSymbol'

/** 用作各种“Number”常量的引用. */
const INFINITY = 1 / 0

/**
 * 将' value '转换为字符串。' null '返回一个空字符串
 * 和未定义的值。符号' -0 '被保留。
 *
 * @category Lang
 * @param {*} value 要转换的值。
 * @returns {string} 返回转换后的字符串。
 * @example
 *
 * toString(null)
 * // => ''
 *
 * toString(-0)
 * // => '-0'
 *
 * toString([1, 2, 3])
 * // => '1,2,3'
 */
function toString (value) {
  if (value == null) {
    return ''
  }
  // 尽早退出字符串，以避免在某些环境中影响性能。
  if (typeof value === 'string') {
    return value
  }
  if (Array.isArray(value)) {
    // 递归转换值(容易受到调用堆栈限制的影响)。
    return `${value.map((other) => other == null ? other : toString(other))}`
  }
  if (isSymbol(value)) {
    return value.toString()
  }
  const result = `${value}`
  return (result === '0' && (1 / value) === -INFINITY) ? '-0' : result
}

export default toString
