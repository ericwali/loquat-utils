/**
 * @program: loquat-utils
 *
 * @description: 检查是否是一个参数对象
 *
 * @author: entfrm开发团队-王翔
 *
 * @create: 2021-11-18
 */

import getTag from '../internal/getTag'
import isObjectLike from './isObjectLike'

/**
 * 检查 'value' 是否可能是 'arguments' 对象
 *
 * @category Lang
 * @param {*} value 要检查的值
 * @returns {boolean} 如果 'value' 是参数对象则返回 'true' 否则返回 'false'
 * @example
 *
 * isArguments(function() { return arguments }())
 * // => true
 *
 * isArguments([1, 2, 3])
 * // => false
 */
function isArguments (value) {
  return isObjectLike(value) && getTag(value) === '[object Arguments]'
}

export default isArguments
