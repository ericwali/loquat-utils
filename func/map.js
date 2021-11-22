/**
 * @program: loquat-utils
 *
 * @description: 数组Map迭代器
 *
 * @author: entfrm开发团队-王翔
 *
 * @create: 2021-11-18
 */

/**
 * 通过运行 'array' 的每个元素到 'iteratee' 来创建一个值数组
 * 使用三个参数调用迭代器: (value, index, array)
 *
 * @category Array
 * @param {Array} array 要迭代的数组
 * @param {Function} iteratee 每次迭代调用的函数
 * @returns {Array} 返回新的映射数组
 * @example
 *
 * function square(n) {
 *   return n * n
 * }
 *
 * map([4, 8], square)
 * // => [16, 64]
 */
function map (array, iteratee) {
  let index = -1
  const length = array == null ? 0 : array.length
  const result = new Array(length)

  while (++index < length) {
    result[index] = iteratee(array[index], index, array)
  }
  return result
}

export default map
