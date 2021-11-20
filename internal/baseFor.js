/**
 * @program: loquat-utils
 * 基础工具
 * @description: baseForOwn的基本实现
 * 左到右
 * @author: entfrm开发团队-王翔
 *
 * @create: 2021-11-18
 */

/**
 * 'baseForOwn' 的基本实现,它遍历 'object'
 * 由 'keysFunc' 返回的属性,并对每个属性调用 'iteratee'
 * iteratee函数可以通过显式返回 'false ' 提前退出迭代
 *
 * @param {Object} object 要迭代的对象
 * @param {Function} iteratee 每次迭代调用的函数
 * @param {Function} keysFunc 获取 'object' 的键的函数
 * @returns {Object} 返回的对象
 */
function baseFor (object, iteratee, keysFunc) {
  const iterable = Object(object)
  const props = keysFunc(object)
  let { length } = props
  let index = -1

  while (length--) {
    const key = props[++index]
    if (iteratee(iterable[key], key, iterable) === false) {
      break
    }
  }
  return object
}

export default baseFor
