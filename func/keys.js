/**
 * @program: loquat-utils
 *
 * @description: 获取对象所有属性
 *
 * @author: entfrm开发团队-王翔
 *
 * @create: 2021-11-18
 **/

import helperCreateGetObjects from './helperCreateGetObjects'

/**
  * 获取对象所有属性
  * 获取(keys)方法
  * @param {Object} obj 对象/数组
  * @return {Array}
  */
const keys = helperCreateGetObjects('keys', 1)

export default keys
