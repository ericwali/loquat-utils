/**
 * @program: loquat-utils
 *
 * @description: 获取对象类型
 *
 * @author: entfrm开发团队-王翔
 *
 * @create: 2021-11-18
 **/

import objectToString from './staticObjectToString'

/**
 * 获取对象类型
 *
 * @param {Object} obj 对象/数组
 * @return {String}
 */
function getObjType (obj) {
  const map = {
    '[object Boolean]': 'boolean',
    '[object Number]': 'number',
    '[object String]': 'string',
    '[object Function]': 'function',
    '[object Array]': 'array',
    '[object Date]': 'date',
    '[object RegExp]': 'regExp',
    '[object Undefined]': 'undefined',
    '[object Null]': 'null',
    '[object Object]': 'object',
    '[object Set]': 'set',
    '[object Map]': 'map'
  }
  if (obj instanceof Element) {
    return 'element'
  }
  return map[objectToString.call(obj)]
}

export default getObjType
