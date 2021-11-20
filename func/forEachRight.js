/**
 * @program: loquat-utils
 *
 * @description: forEach迭代器(右到左)
 *
 * @author: entfrm开发团队-王翔
 *
 * @create: 2021-11-18
 */

import arrayEachRight from '../internal/arrayEachRight'
import baseEachRight from '../internal/baseEachRight'

/**
 * 这个方法类似于 'forEach' 除了它遍历的元素 'collection' 从右到左
 *
 * @category Collection
 * @param {Array|Object} collection 要迭代的集合
 * @param {Function} iteratee 每次迭代调用的函数
 * @returns {Array|Object} 返回集合
 * @example
 *
 * forEachRight([1, 2], value => console.log(value))
 * // => Logs '2' then '1'
 */
function forEachRight (collection, iteratee) {
  const func = Array.isArray(collection) ? arrayEachRight : baseEachRight
  return func(collection, iteratee)
}

export default forEachRight
