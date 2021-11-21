/**
 * @program: loquat-utils
 *
 * @description: 检查是否是一个DOM元素
 *
 * @author: entfrm开发团队-王翔
 *
 * @create: 2021-11-18
 */

import isObjectLike from './isObjectLike'
import isPlainObject from './isPlainObject'

/**
 * 检查 'value' 是否可能是DOM元素
 *
 * @category Lang
 * @param {*} value 要检查的值
 * @returns {boolean} 如果 'value' 是DOM元素则返回 'true' 否则返回 'false'
 * @example
 *
 * isElement(document.body)
 * // => true
 *
 * isElement('<body>')
 * // => false
 */
function isElement (value) {
  return isObjectLike(value) && value.nodeType === 1 && !isPlainObject(value)
}

export default isElement
