/**
 * @program: loquat-utils
 *
 * @description: 判断是否一个普通对象
 *
 * @author: entfrm开发团队-王翔
 *
 * @create: 2021-11-18
 **/

/**
  * 判断是否对象
  *
  * @param {Object} obj 对象
  * @return {Boolean}
  */
function isPlainObject (obj) {
  return obj ? obj.constructor === Object : false
}

export default isPlainObject
