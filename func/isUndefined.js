/**
 * @program: loquat-utils
 *
 * @description: 检查是否是一个undefined的语言类型
 *
 * @author: entfrm开发团队-王翔
 *
 * @create: 2021-11-18
 */

/**
 * 检查 'value' 是否为 'undefined'
 *
 * @category Lang
 * @param {*} value 要检查的值
 * @returns {boolean} 如果 'value 为 'undefined' 则返回 'true' 否则返回 'false'
 * @example
 *
 * isUndefined(void 0)
 * // => true
 *
 * isUndefined(null)
 * // => false
 */
function isUndefined (value) {
  return value === undefined
}

export default isUndefined
