/**
 * @program: loquat-utils
 *
 * @description: 对象迭代器
 *
 * @author: entfrm开发团队-王翔
 *
 * @create: 2021-11-18
 **/

import hasOwnProp from './hasOwnProp'

function objectEach (obj, iterate, context) {
  if (obj) {
    for (const key in obj) {
      if (hasOwnProp(obj, key)) {
        iterate.call(context, obj[key], key, obj)
      }
    }
  }
}

export default objectEach
