/**
 * @program: loquat-utils
 *
 * @description: 创建一个由 'object' 的可枚举属性名组成的数组
 *
 * @author: entfrm开发团队-王翔
 *
 * @create: 2021-11-18
 **/

import arrayLikeKeys from '../internal/arrayLikeKeys'
import isArrayLike from './isArrayLike'

/**
 * 创建一个由 'object' 的可枚举属性名组成的数组
 *
 * 注意: 非对象值被强制转换为对象。看到[这是spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 *
 * @category Object
 * @param {Object} object 要查询的对象。
 * @returns {Array} 返回属性名数组。
 * @example
 *
 * function Foo() {
 *   this.a = 1
 *   this.b = 2
 * }
 *
 * Foo.prototype.c = 3
 *
 * keys(new Foo)
 * // => ['a', 'b'] (不能保证迭代顺序)
 *
 * keys('hi')
 * // => ['0', '1']
 */
function keys (object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : Object.keys(Object(object))
}

export default keys
