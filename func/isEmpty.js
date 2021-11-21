/**
 * @program: loquat-utils
 *
 * @description: 判断对象是否为空
 *
 * @author: entfrm开发团队-王翔
 *
 * @create: 2021-11-18
 */

import getTag from '../internal/getTag'
import isArguments from './isArguments'
import isArrayLike from './isArrayLike'
import isBuffer from './isBuffer'
import isPrototype from '../internal/isPrototype'
import isTypedArray from './isTypedArray'

/** 用于检查对象本身的属性 */
const hasOwnProperty = Object.prototype.hasOwnProperty

/**
 * 检查 'value' 是否为空对象、集合、映射或集合
 *
 * 如果对象没有自己的可枚举字符串键控属性,则认为它们是空的
 *
 * 类似数组的值,如 'arguments' 对象、数组、缓冲区、字符串等
 * 如果类似jquery的集合的长度为 '0' 则会被认为是空的
 * 类似地,如果map和set的 'size' 为 '0' 则它们被认为是空的
 *
 * @category Lang
 * @param {*} value 要检查的值
 * @returns {boolean} 如果 'value' 为空,则返回 'true' 否则返回 'false'
 * @example
 *
 * isEmpty(null)
 * // => true
 *
 * isEmpty(true)
 * // => true
 *
 * isEmpty(1)
 * // => true
 *
 * isEmpty([1, 2, 3])
 * // => false
 *
 * isEmpty('abc')
 * // => false
 *
 * isEmpty({ 'a': 1 })
 * // => false
 */
function isEmpty (value) {
  if (value == null) {
    return true
  }
  if (isArrayLike(value) &&
      (Array.isArray(value) || typeof value === 'string' || typeof value.splice === 'function' ||
        isBuffer(value) || isTypedArray(value) || isArguments(value))) {
    return !value.length
  }
  const tag = getTag(value)
  if (tag === '[object Map]' || tag === '[object Set]') {
    return !value.size
  }
  if (isPrototype(value)) {
    return !Object.keys(value).length
  }
  for (const key in value) {
    if (hasOwnProperty.call(value, key)) {
      return false
    }
  }
  return true
}

export default isEmpty
