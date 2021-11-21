/**
 * @program: loquat-utils
 *
 * @description: 检查是否是一个数字
 *
 * @author: entfrm开发团队-王翔
 *
 * @create: 2021-11-18
 */

import getTag from '../internal/getTag'
import isObjectLike from './isObjectLike'

/**
 * 检查 'value' 是否被分类为 'Number' 原语或对象
 *
 * 注意: 要排除 'Infinity','-Infinity' 和 'NaN' 这些被归类为数字的词,请使用 'Number.isFinite' 方法
 *
 * @category Lang
 * @param {*} value 要检查的值
 * @returns {boolean} 如果 'value' 是一个数字,则返回 'true' 否则返回 'false'
 * @example
 *
 * isNumber(3)
 * // => true
 *
 * isNumber(Number.MIN_VALUE)
 * // => true
 *
 * isNumber(Infinity)
 * // => true
 *
 * isNumber('3')
 * // => false
 */
function isNumber (value) {
  return typeof value === 'number' || (isObjectLike(value) && getTag(value) === '[object Number]')
}

export default isNumber
