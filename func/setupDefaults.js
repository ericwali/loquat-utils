/**
 * @program: loquat-utils
 *
 * @description: 设置全局默认配置
 *
 * @author: entfrm开发团队-王翔
 *
 * @create: 2021-11-18
 **/

'use strict'
const setupDefaults = {
  cookies: {
    path: '/'
  },
  treeOptions: {
    parentKey: 'parentId',
    key: 'id',
    children: 'children'
  },
  formatString: 'yyyy-MM-dd HH:mm:ss',
  dateDiffRules: [
    ['yyyy', 31536000000],
    ['MM', 2592000000],
    ['dd', 86400000],
    ['HH', 3600000],
    ['mm', 60000],
    ['ss', 1000],
    ['S', 0]
  ]
}

export default setupDefaults
