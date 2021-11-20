/**
 * @program: loquat-utils
 * 基础工具
 * @description: get的基本实现
 *
 * @author: entfrm开发团队-王翔
 *
 * @create: 2021-11-18
 **/

import castPath from './castPath'
import toKey from './toKey'

/**
 * 不支持默认值的 'get' 的基本实现
 *
 * @private
 * @param {Object} object 要查询的对象
 * @param {Array|string} path 要获取的属性的路径
 * @returns {*} Returns 解析后的价值
 */
function baseGet (object, path) {
  path = castPath(path, object)

  let index = 0
  const length = path.length

  while (object != null && index < length) {
    object = object[toKey(path[index++])]
  }
  return (index && index === length) ? object : undefined
}

export default baseGet
