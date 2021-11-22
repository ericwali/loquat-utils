/**
 * @program: loquat-utils
 *
 * @description: 创建对象的可枚举属性名称和继承的可枚举属性名称的数组
 *
 * @author: entfrm开发团队-王翔
 *
 * @create: 2021-11-18
 */

/**
 * 创建一个包含 'object' 自己和继承的可枚举属性名称的数组
 *
 *
 * @category Object
 * @param {Object} object 要查询的对象
 * @returns {Array} 返回属性名称数组
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (不保证迭代顺序)
 */
function keysIn (object) {
  const result = []
  for (const key in object) {
    result.push(key)
  }
  return result
}

export default keysIn
