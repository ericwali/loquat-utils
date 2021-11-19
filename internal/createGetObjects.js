/**
 * @program: loquat-utils
 *
 * @description: 创建 获取对象中的指定方法 函数
 *
 * @author: entfrm开发团队-王翔
 *
 * @create: 2021-11-18
 **/

import each from './each'

/**
 * 获取对象方法
 * @param {String} name 对象方法
 * @param {Number} getIndex 控制指数(1:获取外部值, 2:获取对象全部属性数组格式)
 * @param {Object} args 外部对象
 * @return {Function} proMethod
 */
function createGetObjects (name, getIndex, ...args) {
  const proMethod = Object[name]
  return function (obj) {
    const result = []
    if (obj) {
      if (proMethod) {
        return proMethod(obj)
      }
      each(obj, getIndex > 1 ? function (key) {
        result.push(['' + key, obj[key]])
      } : function () {
        result.push(args[getIndex])
      })
    }
    return result
  }
}

export default createGetObjects
