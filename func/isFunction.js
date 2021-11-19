/**
 * @program: loquat-utils
 *
 * @description: 判断是否是函数
 *
 * @author: entfrm开发团队-王翔
 *
 * @create: 2021-11-18
 **/

import helperCreateInTypeof from './helperCreateInTypeof'

/**
  * 判断是否函数
  *
  * @param {Object} obj 对象
  * @return {Boolean}
  */
const isFunction = helperCreateInTypeof('function')

export default isFunction
