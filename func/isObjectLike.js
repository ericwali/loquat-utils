/**
 * @program: loquat-utils
 *
 * @description: 判断是否是一个有效的对象
 *
 * @author: entfrm开发团队-王翔
 *
 * @create: 2021-11-18
 **/

/**
 * 检查 'value' 是否像对象。如果值不是 'null',那么它就是类对象
 * 并且有一个 'object' 的 'typeof' 结果
 *
 * @category Lang
 * @param {*} value 要检查的值
 * @returns {boolean} 如果 'value' 是类对象,则返回 'true', 否则返回 'false'
 * @example
 *
 * isObjectLike({})
 * // => true
 *
 * isObjectLike([1, 2, 3])
 * // => true
 *
 * isObjectLike(Function)
 * // => false
 *
 * isObjectLike(null)
 * // => false
 */
function isObjectLike (value) {
  return typeof value === 'object' && value !== null
}

export default isObjectLike
