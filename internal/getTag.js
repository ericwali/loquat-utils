/**
 * @program: loquat-utils
 *
 * @description: 获取对象类型标签
 *
 * @author: entfrm开发团队-王翔
 *
 * @create: 2021-11-18
 */

const objectToString = Object.prototype.toString

/**
 * 获取value的 'toStringTag'
 *
 * @param {*}value要查询的值
 * @returns {string} 返回 'toStringTag'
 */
function getTag (value) {
  if (value == null) {
    return value === undefined ? '[object Undefined]' : '[object Null]'
  }
  return objectToString.call(value)
}

export default getTag
