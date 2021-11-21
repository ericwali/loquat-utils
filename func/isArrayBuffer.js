/**
 * @program: loquat-utils
 *
 * @description: 判断是否是一个数组缓冲区
 *
 * @author: entfrm开发团队-王翔
 *
 * @create: 2021-11-18
 */

import getTag from '../internal/getTag'
import isObjectLike from './isObjectLike'
import nodeTypes from '../internal/nodeTypes'

/** node.js isArrayBuffer工具辅助 */
const nodeIsArrayBuffer = nodeTypes && nodeTypes.isArrayBuffer

/**
 * 检查 'value' 是否被分类为 'ArrayBuffer' 对象
 *
 * @category Lang
 * @param {*} value 要检查的值
 * @returns {boolean} 如果 'value' 是一个数组缓冲区,则返回 'true' 否则返回 'false'
 * @example
 *
 * isArrayBuffer(new ArrayBuffer(2))
 * // => true
 *
 * isArrayBuffer(new Array(2))
 * // => false
 */
const isArrayBuffer = nodeIsArrayBuffer
  ? (value) => nodeIsArrayBuffer(value)
  : (value) => isObjectLike(value) && getTag(value) === '[object ArrayBuffer]'

export default isArrayBuffer
