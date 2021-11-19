/**
 * @program: loquat-utils
 *
 * @description: 检查key是否是路径字符串
 *
 * @author: entfrm开发团队-王翔
 *
 * @create: 2021-11-18
 **/

import isSymbol from '../func/isSymbol'

/** 用于匹配属性路径中的属性名. */
const reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/
const reIsPlainProp = /^\w*$/

/**
 * 检查' value '是否是属性名而不是属性路径。
 *
 * @private
 * @param {*} value 要检查的值。
 * @param {Object} [object] 要查询键的对象。
 * @returns {boolean} 如果`value`是一个属性名，则返回`true`，否则返回`false`。
 */
function isKey (value, object) {
  if (Array.isArray(value)) {
    return false
  }
  const type = typeof value
  if (type === 'number' || type === 'boolean' || value == null || isSymbol(value)) {
    return true
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object))
}

export default isKey
