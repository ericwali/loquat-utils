/**
 * @program: loquat-utils
 *
 * @description: 检查是否是一个弱引用Map
 *
 * @author: entfrm开发团队-王翔
 *
 * @create: 2021-11-18
 */

import getTag from '../internal/getTag'
import isObjectLike from './isObjectLike'

/**
 * 检查 'value' 是否被分类为 'WeakMap' 对象
 *
 * @category Lang
 * @param {*} value 要检查的值
 * @returns {boolean} 如果 'value' 是 'WeakMap' 则返回 'true' 否则返回 'false'
 * @example
 *
 * isWeakMap(new WeakMap)
 * // => true
 *
 * isWeakMap(new Map)
 * // => false
 */
function isWeakMap (value) {
  return isObjectLike(value) && getTag(value) === '[object WeakMap]'
}

export default isWeakMap
