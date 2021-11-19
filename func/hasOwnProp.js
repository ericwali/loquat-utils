/**
 * @program: loquat-utils
 *
 * @description: 判断对象自身属性中是否具有指定的属性
 *
 * @author: entfrm开发团队-王翔
 *
 * @create: 2021-11-18
 **/

/**
  * 判断对象自身属性中是否具有指定的属性
  *
  * @param {Object} obj 对象
  * @param {String/Number} key 键值
  * @return {Boolean}
  */
function hasOwnProp (obj, key) {
  return obj && obj.hasOwnProperty ? Object.prototype.hasOwnProperty.call(obj, key) : false
}

export default hasOwnProp
