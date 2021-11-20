/**
 * @program: loquat-utils
 *
 * @description: 获取对象值
 *
 * @author: entfrm开发团队-王翔
 *
 * @create: 2021-11-18
 **/

import baseGet from '../internal/baseGet'

/**
 * 获取 'object' 的 'path' 处的值如果解析值为 'undefined'
 * 'defaultValue' 在其位置返回
 *
 * @category Object
 * @param {Object} object 要查询的对象
 * @param {Array|string} path 要获取的属性的路径
 * @param {*} [defaultValue] 为未定义解析值返回的值
 * @returns {*} 返回解析值
 * @example
 *
 * const object = { 'a': [{ 'b': { 'c': 3 } }] }
 *
 * get(object, 'a[0].b.c')
 * // => 3
 *
 * get(object, ['a', '0', 'b', 'c'])
 * // => 3
 *
 * get(object, 'a.b.c', 'default')
 * // => 'default'
 */
function get (object, path, defaultValue) {
  const result = object == null ? undefined : baseGet(object, path)
  return result === undefined ? defaultValue : result
}

export default get
