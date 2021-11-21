/**
 * @program: loquat-utils
 *
 * @description: 检查是否是一个Object的语言类型
 *
 * @author: entfrm开发团队-王翔
 *
 * @create: 2021-11-18
 */

/**
 * 检查value是否是Object的语言类型
 * (e.g.arrays, functions, objects, regexes, new Number(0), new String(''))
 *
 * @category Lang
 * @param {*} value 要检查的值
 * @returns {boolean} 如果 'value' 是一个对象,则返回 'true' 否则返回 'false'
 * @example
 *
 * isObject({})
 * // => true
 *
 * isObject([1, 2, 3])
 * // => true
 *
 * isObject(Function)
 * // => true
 *
 * isObject(null)
 * // => false
 */
function isObject (value) {
  const type = typeof value
  return value != null && (type === 'object' || type === 'function')
}

export default isObject
