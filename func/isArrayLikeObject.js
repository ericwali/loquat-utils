/**
 * @program: loquat-utils
 *
 * @description: 判断是否是一个有效的对象与有效的数组
 *
 * @author: entfrm开发团队-王翔
 *
 * @create: 2021-11-18
 */

import isArrayLike from './isArrayLike.js'
import isObjectLike from './isObjectLike.js'

/**
 * 这个方法类似于 'isArrayLike' 除了它也检查 'value' 是一个对象
 *
 * @category Lang
 * @param {*} value 要检查的值
 * @returns {boolean} 如果 'value' 是一个类数组对象,则返回 'true' 否则返回 'false'
 * @example
 *
 * isArrayLikeObject([1, 2, 3])
 * // => true
 *
 * isArrayLikeObject(document.body.children)
 * // => true
 *
 * isArrayLikeObject('abc')
 * // => false
 *
 * isArrayLikeObject(Function)
 * // => false
 */
function isArrayLikeObject (value) {
  return isObjectLike(value) && isArrayLike(value)
}

export default isArrayLikeObject
