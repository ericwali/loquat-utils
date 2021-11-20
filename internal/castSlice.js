/**
 * @program: loquat-utils
 *
 * @description: 判断是否需要分割数组,如果需要则强制分割
 *
 * @author: entfrm开发团队-王翔
 *
 * @create: 2021-11-18
 */

import slice from '../func/slice'

/**
 * 如果需要,将 'array' 强制转换为slice
 *
 * @param {Array} array 要检查的数组
 * @param {number} start 一开始的位置
 * @param {number} [end=array.length] 最后的位置
 * @returns {Array} 返回强制转换的片
 */
function castSlice (array, start, end) {
  const { length } = array
  end = end === undefined ? length : end
  return (!start && end >= length) ? array : slice(array, start, end)
}

export default castSlice
