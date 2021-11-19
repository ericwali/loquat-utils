/**
 * @program: loquat-utils
 *
 * @description: 创建 判断对象是否是指定类型 函数
 *
 * @author: entfrm开发团队-王翔
 *
 * @create: 2021-11-18
 **/

import objectToString from './staticObjectToString'

function createInInObjectString (type) {
  return function (obj) {
    return '[object ' + type + ']' === objectToString.call(obj)
  }
}

export default createInInObjectString
