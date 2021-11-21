/**
 * @program: loquat-utils
 *
 * @description: 检查是否是一个有效的数组式长度
 *
 * @author: entfrm开发团队-王翔
 *
 * @create: 2021-11-18
 */

/** 用作各种'Number'常量的引用 */
const MAX_SAFE_INTEGER = 9007199254740991

/**
 * 检查 'value' 是否是一个有效的数组式长度
 *
 * 注意: 这种方法是松散地基于[按一定长度](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @category Lang
 * @param {*} value 要检查的值
 * @returns {boolean} 如果 'value' 是一个有效长度,则返回 'true' 否则返回 'false'
 * @example
 *
 * isLength(3)
 * // => true
 *
 * isLength(Number.MIN_VALUE)
 * // => false
 *
 * isLength(Infinity)
 * // => false
 *
 * isLength('3')
 * // => false
 */
function isLength (value) {
  return typeof value === 'number' &&
    value > -1 && value % 1 === 0 && value <= MAX_SAFE_INTEGER
}

export default isLength
