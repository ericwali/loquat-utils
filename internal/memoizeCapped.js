/**
 * @program: loquat-utils
 *
 * @description: 创建有缓存大小限制大小的缓存记忆函数
 *
 * @author: entfrm开发团队-王翔
 *
 * @create: 2021-11-18
 */

import memoize from '../func/memoize'

/** 用作最大的内存缓存大小 */
const MAX_MEMOIZE_SIZE = 500

/**
 * 一个专门的 'memoize' 版本,它清除了记忆的函数
 * 当超过MAX_MEMOIZE_SIZE时缓存
 *
 * @param {Function} 函数的输出被记下来
 * @returns {Function} 返回新的记忆函数
 */
function memoizeCapped (func) {
  const result = memoize(func, (key) => {
    const { cache } = result
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear()
    }
    return key
  })

  return result
}

export default memoizeCapped
