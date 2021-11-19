/**
 * @program: loquat-utils
 *
 * @description: each迭代器
 *
 * @author: entfrm开发团队-王翔
 *
 * @create: 2021-11-18
 **/

import isArray from './isArray'
import arrayEach from './arrayEach'
import objectEach from './objectEach'

/**
  * 迭代器
  *
  * @param {Object} obj 对象/数组
  * @param {Function} iterate(item, index, obj) 回调
  * @param {Object} context 上下文
  * @return {Object}
  */
function each (obj, iterate, context) {
  if (obj) {
    return (isArray(obj) ? arrayEach : objectEach)(obj, iterate, context)
  }
  return obj
}

export default each
