/**
 * @program: loquat-utils
 * 基础工具
 * @description: forOwnRight的基本实现(循环自身对象)
 * 右到左
 * @author: entfrm开发团队-王翔
 *
 * @create: 2021-11-18
 **/

import baseForRight from './baseForRight'
import keys from '../func/keys'

/**
 * 'forOwnRight' 的基本实现
 *
 * @param {Object} object 要迭代的对象
 * @param {Function} iteratee 每次迭代调用的函数
 * @returns {Object} 返回的对象
 */
function baseForOwnRight (object, iteratee) {
  return object && baseForRight(object, iteratee, keys)
}

export default baseForOwnRight
