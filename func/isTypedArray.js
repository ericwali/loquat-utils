/**
 * @program: loquat-utils
 *
 * @description: 判断是否是一个类型化数组
 *
 * @author: entfrm开发团队-王翔
 *
 * @create: 2021-11-18
 **/

import getTag from '../internal/getTag'
import nodeTypes from '../internal/nodeTypes'
import isObjectLike from './isObjectLike'

/** 用于匹配类型化数组的 'toStringTag' 值 */
const reTypedTag = /^\[object (?:Float(?:32|64)|(?:Int|Uint)(?:8|16|32)|Uint8Clamped)Array\]$/

/** node.js isTypedArray工具辅助 */
const nodeIsTypedArray = nodeTypes && nodeTypes.isTypedArray

/**
 * 检查 'value' 是否被分类为类型化数组
 *
 * @category Lang
 * @param {*} value 要检查的值
 * @returns {boolean} 如果 'value' 是一个类型化数组,则返回 'true' 否则返回 'false'
 * @example
 *
 * isTypedArray(new Uint8Array)
 * // => true
 *
 * isTypedArray([])
 * // => false
 */
const isTypedArray = nodeIsTypedArray
  ? (value) => nodeIsTypedArray(value)
  : (value) => isObjectLike(value) && reTypedTag.test(getTag(value))

export default isTypedArray
