/**
 * @program: loquat-utils
 *
 * @description: 对象克隆(浅/深)
 *
 * @author: entfrm开发团队-王翔
 *
 * @create: 2021-11-18
 **/

import isArray from './isArray'
import isPlainObject from './isPlainObject'
import getObjType from './getObjType'
import objectMap from './objectMap'
import map from './map'

function handleObjectAndArrayClone (func, obj, deep) {
  return func(obj, deep ? function (val) {
    return copyValue(val, deep)
  } : function (val) {
    return val
  })
}

function handleValueClone (val, deep) {
  if (deep && val) {
    const Ctor = val.constructor
    switch (getObjType(val)) {
      case 'date':
      case 'regExp':
        return new Ctor(val.valueOf())
      case 'set': {
        const set = new Ctor()
        val.forEach(function (v) {
          set.add(v)
        })
        return set
      }
      case 'map': {
        const map = new Ctor()
        val.forEach(function (v, k) {
          map.set(k, v)
        })
        return map
      }
    }
  }
  return val
}

function copyValue (val, deep) {
  if (isPlainObject(val)) {
    return handleObjectAndArrayClone(objectMap, val, deep)
  } else if (isArray(val)) {
    return handleObjectAndArrayClone(map, val, deep)
  }
  return handleValueClone(val, deep)
}

/**
  * 浅拷贝/深拷贝
  *
  * @param {Object} obj 对象/数组
  * @param {Boolean} deep 是否深拷贝 默认深克隆
  * @return {Object}
  */
function clone (obj, deep = true) {
  if (obj) {
    return copyValue(obj, deep)
  }
  return obj
}

export default clone
