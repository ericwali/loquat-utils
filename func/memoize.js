/**
 * @program: loquat-utils
 *
 * @description: 创建缓存记忆函数
 *
 * @author: entfrm开发团队-王翔
 *
 * @create: 2021-11-18
 */

/**
 * 创建一个函数来记忆 'func' 的结果
 * 如果 'resolver' 方法确定用于存储结果的缓存键
 * 提供给记忆函数的参数,默认情况下,第一个参数
 * 提供给记忆函数,用作映射缓存键
 * 'func' 是通过记忆函数的 'this' 绑定调用的
 *
 * 注意:缓存是作为memoized的 'cache' 属性暴露的函数
 * 其创建可以通过替换 'memoize.Cache'
 * 构造函数的实例实现[Map](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * 方法接口有 'clear','delete','get','has','set'
 *
 * @param {Function} 函数的输出被记下来
 * @param {Function} [resolver] 解析缓存键的函数
 * @returns {Function} Returns 新的记忆函数
 * @example
 *
 * const object = { 'a': 1, 'b': 2 }
 * const other = { 'c': 3, 'd': 4 }
 *
 * const values = memoize(values)
 * values(object)
 * // => [1, 2]
 *
 * values(other)
 * // => [3, 4]
 *
 * object.a = 2
 * values(object)
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b'])
 * values(object)
 * // => ['a', 'b']
 *
 * // Replace `memoize.Cache`.
 * memoize.Cache = WeakMap
 */
function memoize (func, resolver) {
  if (typeof func !== 'function' || (resolver != null && typeof resolver !== 'function')) {
    throw new TypeError('Expected a function')
  }
  const memoized = function (...args) {
    const key = resolver ? resolver.apply(this, args) : args[0]
    const cache = memoized.cache

    if (cache.has(key)) {
      return cache.get(key)
    }
    const result = func.apply(this, args)
    memoized.cache = cache.set(key, result) || cache
    return result
  }
  memoized.cache = new (memoize.Cache || Map)()
  return memoized
}

memoize.Cache = Map

export default memoize
