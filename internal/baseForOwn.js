/**
 * @program: loquat-utils
 * 基础工具
 * @description: forOwn的基本实现(循环自身对象)
 * 左到右
 * @author: entfrm开发团队-王翔
 *
 * @create: 2021-11-18
 */

import baseFor from './baseFor'
import keys from '../func/keys'

/**
 * 'forOwn' 的基本实现
 *
 * @param {Object} object 要迭代的对象
 * @param {Function} iteratee 每次迭代调用的函数
 * @returns {Object} 返回的对象
 */
function baseForOwn (object, iteratee) {
  return object && baseFor(object, iteratee, keys)
}

export default baseForOwn
