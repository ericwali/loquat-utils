/**
 * @program: loquat-utils
 * 基础工具
 * @description: baseForOwnRight的基本实现
 * 右到左
 * @author: entfrm开发团队-王翔
 *
 * @create: 2021-11-18
 */

/**
 * 这个函数与 'baseFor' 类似,只是它遍历属性顺序正好相反
 *
 * @param {Object} object 要迭代的对象
 * @param {Function} iteratee 每次迭代调用的函数
 * @param {Function} keysFunc 获取 'object' 的键的函数
 * @returns {Object} 返回的对象
 */
function baseForRight (object, iteratee, keysFunc) {
  const iterable = Object(object)
  const props = keysFunc(object)
  let { length } = props

  while (length--) {
    const key = props[length]
    if (iteratee(iterable[key], key, iterable) === false) {
      break
    }
  }
  return object
}

export default baseForRight
