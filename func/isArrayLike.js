/**
 * @program: loquat-utils
 *
 * @description: 判断是否是一个有效的数组
 *
 * @author: entfrm开发团队-王翔
 *
 * @create: 2021-11-18
 */

import isLength from './isLength'

/**
 * 检查 'value' 是否与数组类似。一个值被认为是数组类型,如果它是
 * 不是一个函数,并且有一个 'value' 长度,它是一个大于或的整数
 * 等于 '0' 且小于或等于 'Number.MAX_SAFE_INTEGER'
 *
 * @category Lang
 * @param {*} value 要检查的值
 * @returns {boolean} 如果 'value' 是有效数组,则返回 'true' 否则返回 'false'
 * @example
 *
 * isArrayLike([1, 2, 3])
 * // => true
 *
 * isArrayLike(document.body.children)
 * // => true
 *
 * isArrayLike('abc')
 * // => true
 *
 * isArrayLike(Function)
 * // => false
 */
function isArrayLike (value) {
  return value != null && typeof value !== 'function' && isLength(value.length)
}

export default isArrayLike
