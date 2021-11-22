/**
 * @program: loquat-utils
 *
 * @description: 对象MapKey迭代器
 *
 * @author: entfrm开发团队-王翔
 *
 * @create: 2021-11-18
 */

/**
 * 与 'mapValue' 相反,这个方法创建了一个对象
 * 与 'object' 相同的值和通过运行每个自己的可枚举生成的键
 * 通过 'iteratee' 的 'object' 的字符串键控属性,迭代器被调用三个参数: (value, key, object)
 *
 * @category Object
 * @param {Object} object 要迭代的对象
 * @param {Function} iteratee 每次迭代调用的函数
 * @returns {Object} 返回新的映射对象
 * @example
 *
 * mapKey({ 'a': 1, 'b': 2 }, function(value, key) {
 *   return key + value
 * })
 * // => { 'a1': 1, 'b2': 2 }
 */
function mapKey (object, iteratee) {
  object = Object(object)
  const result = {}

  Object.keys(object).forEach((key) => {
    const value = object[key]
    result[iteratee(value, key, object)] = value
  })
  return result
}

export default mapKey
