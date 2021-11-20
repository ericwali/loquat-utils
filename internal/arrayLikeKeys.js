/**
 * @program: loquat-utils
 *
 * @description: 创建一个由 'object' 的可枚举属性名组成的数组
 *
 * @author: entfrm开发团队-王翔
 *
 * @create: 2021-11-18
 **/

import isArguments from '../func/isArguments'
import isBuffer from '../func/isBuffer'
import isIndex from './isIndex'
import isTypedArray from '../func/isTypedArray'

/** 用于检查对象本身的属性. */
const hasOwnProperty = Object.prototype.hasOwnProperty

/**
 * 创建一个数组，其中包含数组类' value '的可枚举属性名。
 *
 * @param {*} value 要查询的值
 * @param {boolean} inherited 指定返回继承的属性名
 * @returns {Array} 返回属性名数组
 */
function arrayLikeKeys (value, inherited) {
  const isArr = Array.isArray(value)
  const isArg = !isArr && isArguments(value)
  const isBuff = !isArr && !isArg && isBuffer(value)
  const isType = !isArr && !isArg && !isBuff && isTypedArray(value)
  const skipIndexes = isArr || isArg || isBuff || isType
  const length = value.length
  const result = new Array(skipIndexes ? length : 0)
  let index = skipIndexes ? -1 : length
  while (++index < length) {
    result[index] = `${index}`
  }
  for (const key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
        // Safari 9 has enumerable `arguments.length` in strict mode.
          (key === 'length' ||
           // Skip index properties.
           isIndex(key, length))
        ))) {
      result.push(key)
    }
  }
  return result
}

export default arrayLikeKeys
