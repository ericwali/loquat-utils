/**
 * @program: loquat-utils
 *
 * @description: 指定方法后的返回值组成的新数组
 *
 * @author: entfrm开发团队-王翔
 *
 * @create: 2021-11-18
 **/

import each from './each'

/**
  * 指定方法后的返回值组成的新数组
  *
  * @param {Object} obj 对象/数组
  * @param {Function} iterate(item, index, obj) 回调
  * @param {Object} context 上下文
  * @return {Array}
  */
function map (obj, iterate, context, ...args) {
  const result = []
  if (obj && arguments.length > 1) {
    if (obj.map) {
      return obj.map(iterate, context)
    } else {
      each(obj, function () {
        result.push(iterate.apply(context, args))
      })
    }
  }
  return result
}

export default map
