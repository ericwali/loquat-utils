/**
 * @program: loquat-utils
 *
 * @description: LoquatUtils核心构造函数
 *
 * @author: entfrm开发团队-王翔
 *
 * @create: 2021-11-18
 **/

'use strict'
import setupDefaults from './setupDefaults'
import arrayEach from './arrayEach'
import isFunction from './isFunction'
import each from './each'
import assign from './assign'

const LoquatUtils = function () {}

/**
 * 提供给第三方扩展工具方法
 * @param {...Object} args
 */
function mixin (...args) {
  arrayEach(args, function (methods) {
    each(methods, function (fn, name) {
      LoquatUtils[name] = isFunction(fn) ? function () {
        const result = fn.apply(LoquatUtils.$context, args)
        LoquatUtils.$context = null
        return result
      } : fn
    })
  })
}

function setup (options) {
  return assign(setupDefaults, options)
}

LoquatUtils.VERSION = '@VERSION'
LoquatUtils.mixin = mixin
LoquatUtils.setup = setup

export default LoquatUtils
