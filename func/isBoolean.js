/**
 * @program: loquat-utils
 *
 * @description: 检查是否是一个布尔
 *
 * @author: entfrm开发团队-王翔
 *
 * @create: 2021-11-18
 */

import getTag from '../internal/getTag'
import isObjectLike from './isObjectLike'

/**
 * 检查 'value' 是否被分类为布尔原语或对象
 *
 * @category Lang
 * @param {*} value 要检查的值
 * @returns {boolean} 如果 'value' 是布尔值,则返回 'true' 否则返回 'false'
 * @example
 *
 * isBoolean(false)
 * // => true
 *
 * isBoolean(null)
 * // => false
 */
function isBoolean (value) {
  return value === true || value === false || (isObjectLike(value) && getTag(value) === '[object Boolean]')
}

export default isBoolean
