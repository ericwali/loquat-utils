/**
 * @program: loquat-utils
 *
 * @description: 获取Node.js的全局this
 *
 * @author: entfrm开发团队-王翔
 *
 * @create: 2021-11-18
 **/

/** 从Node.js中检测自由变量 'global' */
const freeGlobal = typeof global === 'object' && global !== null && global.Object === Object && global

export default freeGlobal
