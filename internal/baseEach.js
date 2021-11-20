/**
 * @program: loquat-utils
 * 基础工具
 * @description: forEach的基本实现(包含迭代对象)
 * 左到右
 * @author: entfrm开发团队-王翔
 *
 * @create: 2021-11-18
 **/

import baseForOwn from './baseForOwn'
import isArrayLike from '../func/isArrayLike'

/**
 * 'forEach' 的基本实现
 *
 * @param {Array|Object} collection 要迭代的集合
 * @param {Function} iteratee 每次迭代调用的函数
 * @returns {Array|Object} 返回集合
 */
function baseEach (collection, iteratee) {
  if (collection == null) {
    return collection
  }
  if (!isArrayLike(collection)) {
    return baseForOwn(collection, iteratee)
  }
  const length = collection.length
  const iterable = Object(collection)
  let index = -1

  while (++index < length) {
    if (iteratee(iterable[index], index, iterable) === false) {
      break
    }
  }
  return collection
}

export default baseEach
