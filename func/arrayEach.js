/**
 * @program: loquat-utils
 *
 * @description: 数组迭代器
 *
 * @author: entfrm开发团队-王翔
 *
 * @create: 2021-11-18
 **/

function arrayEach (list, iterate, context) {
  if (list) {
    if (list.forEach) {
      list.forEach(iterate, context)
    } else {
      for (let index = 0, len = list.length; index < len; index++) {
        iterate.call(context, list[index], index, list)
      }
    }
  }
}

export default arrayEach
