/**
 * @program: loquat-utils
 *
 * @description: 转换路径
 *
 * @author: entfrm开发团队-王翔
 *
 * @create: 2021-11-18
 **/

import isKey from './isKey'
import stringToPath from './stringToPath'

/**
 * 如果不是路径数组,则将 'value' 强制转换为路径数组
 *
 * @param {*} value 要检查的值
 * @param {Object} [object] 要查询键的对象
 * @returns {Array} 返回强制转换的属性路径数组
 */
function castPath (value, object) {
  if (Array.isArray(value)) {
    return value
  }
  return isKey(value, object) ? [value] : stringToPath(value)
}

export default castPath
