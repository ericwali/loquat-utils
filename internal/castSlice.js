import slice from '../func/slice'

/**
 * 如果需要，将' array '强制转换为slice。
 *
 * @private
 * @param {Array} array 要检查的数组。
 * @param {number} start 一开始的位置。
 * @param {number} [end=array.length] 最后的位置。
 * @returns {Array} 返回强制转换的片。
 */
function castSlice (array, start, end) {
  const { length } = array
  end = end === undefined ? length : end
  return (!start && end >= length) ? array : slice(array, start, end)
}

export default castSlice
