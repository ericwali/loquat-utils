/**
 * @program: loquat-utils
 *
 * @description: forEachRight数组迭代函数(右到左)
 *
 * @author: entfrm开发团队-王翔
 *
 * @create: 2021-11-18
 */

/**
 * 数组的 'forEachRight' 的专门版本
 *
 * @param {Array} [array] 要迭代的数组
 * @param {Function} iteratee 每次迭代调用的函数
 * @returns {Array} 返回的数组
 */
function arrayEachRight (array, iteratee) {
  let length = array == null ? 0 : array.length

  while (length--) {
    if (iteratee(array[length], length, array) === false) {
      break
    }
  }
  return array
}

export default arrayEachRight
