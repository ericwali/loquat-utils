/**
 * @program: loquat-utils
 *
 * @description: 判断是否数组
 *
 * @author: entfrm开发团队-王翔
 *
 * @create: 2021-11-18
 **/

import helperCreateInInObjectString from './helperCreateInInObjectString'

/**
  * 判断是否数组
  *
  * @param {Object} obj 对象
  * @return {Boolean}
  */
const isArray = Array.isArray || helperCreateInInObjectString('Array')

export default isArray
