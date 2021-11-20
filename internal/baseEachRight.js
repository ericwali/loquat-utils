/**
 * @program: loquat-utils
 * 基础工具
 * @description: forEachRight的基本实现(包含迭代对象)
 * 右到左
 * @author: entfrm开发团队-王翔
 *
 * @create: 2021-11-18
 **/

import baseForOwnRight from './baseForOwnRight'
import isArrayLike from '../func/isArrayLike'

/**
 * forEachRight的基本实现
 *
 * @param {Array|Object} collection 要迭代的集合
 * @param {Function} iteratee 每次迭代调用的函数
 * @returns {Array|Object} 返回集合
 */
function baseEachRight (collection, iteratee) {
  if (collection == null) {
    return collection
  }
  if (!isArrayLike(collection)) {
    return baseForOwnRight(collection, iteratee)
  }
  const iterable = Object(collection)
  let length = collection.length

  while (length--) {
    if (iteratee(iterable[length], length, iterable) === false) {
      break
    }
  }
  return collection
}

export default baseEachRight
