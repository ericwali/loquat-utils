/**
 * @program: loquat-utils
 *
 * @description: 返回一个获取对象属性的函数
 *
 * @author: entfrm开发团队-王翔
 *
 * @create: 2021-11-18
 **/

import validateNull from './validateNull'

/**
 * 返回一个获取对象属性的函数
 *
 * @param {String} name 属性名
 * @param {Object} defs 空值
 */
function property (name, defs) {
  return function (obj) {
    return validateNull(obj) ? defs : obj[name]
  }
}

export default property
