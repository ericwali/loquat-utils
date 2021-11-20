/**
 * @program: loquat-utils
 *
 * @description: 获取node.js工具类
 *
 * @author: entfrm开发团队-王翔
 *
 * @create: 2021-11-18
 */

import freeGlobal from './freeGlobal'

/** 检测自由变量 'exports' */
const freeExports = typeof exports === 'object' && exports !== null && !exports.nodeType && exports

/** 检测自由变量 'module' */
const freeModule = freeExports && typeof module === 'object' && module !== null && !module.nodeType && module

/** 检测流行的CommonJS扩展 'module.exports' */
const moduleExports = freeModule && freeModule.exports === freeExports

/** 从Node.js中检测空闲变量 'process' */
const freeProcess = moduleExports && freeGlobal.process

/** 用于更快的访问Node.js工具类 */
const nodeTypes = ((() => {
  try {
    /* 检测公共的实效 Node.js v10+的types的助手 */
    /* Node.js弃用代码:DEP0103. */
    const typesHelper = freeModule && freeModule.require && freeModule.require('util').types
    /* Node.js的遗留process.binding('util')早于v10 */
    return typesHelper || (freeProcess && freeProcess.binding && freeProcess.binding('util'))
  } catch (e) {}
})())

export default nodeTypes
