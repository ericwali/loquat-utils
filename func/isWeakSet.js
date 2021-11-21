/**
 * @program: loquat-utils
 *
 * @description: 检查是否是一个弱引用Set
 *
 * @author: entfrm开发团队-王翔
 *
 * @create: 2021-11-18
 */

import getTag from '../internal/getTag'
import isObjectLike from './isObjectLike'

/**
 * 检查 'value' 是否被分类为 'WeakSet' 对象
 *
 * @category Lang
 * @param {*} value 要检查的值
 * @returns {boolean} 如果 'value' 是 'WeakSet' 则返回 'true' 否则返回 'false'
 * @example
 *
 * isWeakSet(new WeakSet)
 * // => true
 *
 * isWeakSet(new Set)
 * // => false
 */
function isWeakSet (value) {
  return isObjectLike(value) && getTag(value) === '[object WeakSet]'
}

export default isWeakSet
