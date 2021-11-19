/**
 * @program: loquat-utils
 *
 * @description: 合并对象(深合并)
 *
 * @author: entfrm开发团队-王翔
 *
 * @create: 2021-11-18
 **/

import isArray from './isArray'
import isPlainObject from './isPlainObject'
import each from './each'

function handleMerge (target, source) {
  if ((isPlainObject(target) && isPlainObject(source)) || (isArray(target) && isArray(source))) {
    each(source, function (obj, key) {
      target[key] = handleMerge(target[key], obj)
    })
    return target
  }
  return source
}

/**
  * 将一个或多个源对象合并到目标对象中
  *
  * @param {Object} target 目标对象
  * @param {...Object}
  * @return {Object}
  */
const merge = function (target, ...args) {
  if (!target) {
    target = {}
  }
  for (let source, index = 1; index < args.length; index++) {
    source = args[index]
    if (source) {
      handleMerge(target, source)
    }
  }
  return target
}

export default merge
