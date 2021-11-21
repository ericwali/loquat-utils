/**
 * @program: loquat-utils
 *
 * @description: 检查是否是一个日期对象
 *
 * @author: entfrm开发团队-王翔
 *
 * @create: 2021-11-18
 */

import getTag from '../internal/getTag'
import isObjectLike from './isObjectLike'
import nodeTypes from '../internal/nodeTypes'

/** node.js isDate工具辅助 */
const nodeIsDate = nodeTypes && nodeTypes.isDate

/**
 * 检查 'value' 是否被归类为 'Date' 对象
 *
 * @category Lang
 * @param {*} value 要检查的值
 * @returns {boolean} 如果 'value' 是日期对象,则返回 'true' 否则返回 'false'
 * @example
 *
 * isDate(new Date)
 * // => true
 *
 * isDate('Mon April 23 2012')
 * // => false
 */
const isDate = nodeIsDate
  ? (value) => nodeIsDate(value)
  : (value) => isObjectLike(value) && getTag(value) === '[object Date]'

export default isDate
