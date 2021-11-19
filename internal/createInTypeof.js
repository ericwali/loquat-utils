/**
 * @program: loquat-utils
 *
 * @description: 创建 typeof判断 函数
 *
 * @author: entfrm开发团队-王翔
 *
 * @create: 2021-11-18
 **/

function createInTypeof (type) {
  return function (obj) {
    return typeof obj === type
  }
}

export default createInTypeof
