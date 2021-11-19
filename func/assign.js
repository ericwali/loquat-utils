/**
 * @program: loquat-utils
 *
 * @description: 合并对象(浅合并/深合并)
 *
 * @author: entfrm开发团队-王翔
 *
 * @create: 2021-11-18
 **/

import arrayEach from './arrayEach'
import keys from './keys'
import isArray from './isArray'
import clone from './clone'

const objectAssignFns = Object.assign

function handleAssign (destination, args, isClone) {
  const len = args.length
  for (let source, index = 1; index < len; index++) {
    source = args[index]
    arrayEach(keys(args[index]), isClone ? function (key) {
      destination[key] = clone(source[key], isClone)
    } : function (key) {
      destination[key] = source[key]
    })
  }
  return destination
}

/**
  * 将一个或多个源对象复制到目标对象中
  *
  * @param {Object} target 目标对象
  * @param {...Object}
  * @return {Object}
  */
const assign = function (target, ...args) {
  if (target) {
    if (target === true) {
      if (args.length > 1) {
        target = isArray(target[1]) ? [] : {}
        return handleAssign(target, args, true)
      }
    } else {
      return objectAssignFns ? objectAssignFns.apply(Object, args) : handleAssign(target, args)
    }
  }
  return target
}

export default assign
