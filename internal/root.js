/**
 * @program: loquat-utils
 *
 * @description: 获取根this对象
 * global globalThis, self
 *
 * @author: entfrm开发团队-王翔
 *
 * @create: 2021-11-18
 **/

/** 检测空闲Node.js变量 'global' */
import freeGlobal from './freeGlobal'

/** 检测空闲变量 'globalThis' */
// eslint-disable-next-line no-undef
const freeGlobalThis = typeof globalThis === 'object' && globalThis !== null && globalThis.Object === Object && globalThis

/** 检测自由变量 'self' */
const freeSelf = typeof self === 'object' && self !== null && self.Object === Object && self

/** 用作全局对象的引用 */
const root = freeGlobalThis || freeGlobal || freeSelf || Function('return this')()

export default root
