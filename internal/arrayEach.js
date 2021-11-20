/**
 * @program: loquat-utils
 *
 * @description: forEach数组迭代函数(左到右)
 *
 * @author: entfrm开发团队-王翔
 *
 * @create: 2021-11-18
 **/

/**
 * 数组的' forEach '的专门版本
 *
 * @param {Array} [array] 要迭代的数组
 * @param {Function} iteratee 每次迭代调用的函数
 * @returns {Array} 返回的数组
 */
function arrayEach (array, iteratee) {
  let index = -1
  const length = array.length

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break
    }
  }
  return array
}

export default arrayEach
