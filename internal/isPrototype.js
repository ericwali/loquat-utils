/**
 * @program: loquat-utils
 *
 * @description: 判断是否是一个是原型对象
 *
 * @author: entfrm开发团队-王翔
 *
 * @create: 2021-11-18
 **/

/** 用于内置方法引用 */
const objectProto = Object.prototype

/**
 * 检查 'value' 是否可能是原型对象
 *
 * @param {*} value 要检查的值
 * @returns {boolean} 如果 'value' 是一个原型,则返回 'true' 否则返回 'false'
 */
function isPrototype (value) {
  const Ctor = value && value.constructor
  const proto = (typeof Ctor === 'function' && Ctor.prototype) || objectProto

  return value === proto
}

export default isPrototype
