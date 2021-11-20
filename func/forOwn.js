/**
 * @program: loquat-utils
 *
 * @description: 循环自身对象(左到右)
 *
 * @author: entfrm开发团队-王翔
 *
 * @create: 2021-11-18
 */

/**
 * 遍历对象和的可枚举字符串键控属性
 * 为每个属性调用 'iteratee'
 * 调用迭代对象参数(value, key, object)
 * 迭代函数可能会退出迭代,提前显式返回 'false'
 *
 * @category Object
 * @param {Object} object 要迭代的对象
 * @param {Function} iteratee 每次迭代调用的函数
 * @example
 *
 * function Foo() {
 *   this.a = 1
 *   this.b = 2
 * }
 *
 * Foo.prototype.c = 3
 *
 * forOwn(new Foo, function(value, key) {
 *   console.log(key)
 * })
 * // => Logs 'a' then 'b' (不能保证迭代顺序)
 */
function forOwn (object, iteratee) {
  object = Object(object)
  Object.keys(object).forEach((key) => iteratee(object[key], key, object))
}

export default forOwn
