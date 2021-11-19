/**
 * @program: loquat-utils
 *
 * @description: 对象是否为空
 *
 * @author: entfrm开发团队-王翔
 *
 * @create: 2021-11-18
 **/

import clone from './clone'

/**
 * 验证数据是否为空
 * @param val 检查值
 * @return {Boolean}
 */
function validateNull (val) {
  // 特殊判断
  if (val && parseInt(val) === 0) return false
  if (val instanceof Date || typeof val === 'boolean' || typeof val === 'number') return false
  if (val instanceof Array) {
    if (val.length === 0) return true
  } else if (val instanceof Object) {
    val = clone(val)
    for (const o in val) {
      return false
    }
    return true
  } else {
    if (
      val === 'null' ||
      val == null ||
      val === 'undefined' ||
      val === undefined ||
      val === ''
    ) {
      return true
    }
    return false
  }
  return false
}

export default validateNull
