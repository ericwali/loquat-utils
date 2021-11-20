/**
 * @program: loquat-utils
 *
 * @description: forEach迭代器(左到右)
 *
 * @author: entfrm开发团队-王翔
 *
 * @create: 2021-11-18
 **/

import arrayEach from '../internal/arrayEach'
import baseEach from '../internal/baseEach'

/**
 * 迭代' collection '中的元素,并为每个元素调用' iteratee '
 * iteratee有三个参数被调用:(value, index|key, collection)
 * Iteratee函数可以通过显式返回' false '提前退出迭代
 *
 * 注意: 与其他集合方法一样，具有 'length' 属性的对象也像数组一样被迭代。来
 * 避免这种行为 'forIn' 或 'forOwn' 可用于对象迭代
 *
 * @category Collection
 * @param {Array|Object} collection 要迭代的集合
 * @param {Function} iteratee 每次迭代调用的函数
 * @returns {Array|Object} 返回集合
 * @example
 *
 * forEach([1, 2], value => console.log(value))
 * // => Logs `1` then `2`
 *
 * forEach({ 'a': 1, 'b': 2 }, (value, key) => console.log(key))
 * // => Logs 'a' then 'b' (不能保证迭代顺序)
 */
function forEach (collection, iteratee) {
  const func = Array.isArray(collection) ? arrayEach : baseEach
  return func(collection, iteratee)
}

export default forEach
