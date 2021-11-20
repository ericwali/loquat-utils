/**
 * @program: loquat-utils
 *
 * @description: 判断是否是一个基本数据类型
 *
 * @author: entfrm开发团队-王翔
 *
 * @create: 2021-11-18
 **/

import getTag from '../internal/getTag'

/**
 * 检查 'value' 是否被分类为 'Symbol' 原语或对象
 *
 * @category Lang
 * @param {*} value 要检查的值
 * @returns {boolean} 如果 'value' 是一个符号,则返回 'true' 否则返回 'false'
 * @example
 *
 * isSymbol(Symbol.iterator)
 * // => true
 *
 * isSymbol('abc')
 * // => false
 */
function isSymbol (value) {
  const type = typeof value
  return type === 'symbol' || (type === 'object' && value != null && getTag(value) === '[object Symbol]')
}

export default isSymbol
