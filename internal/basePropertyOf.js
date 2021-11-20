/**
 * @program: loquat-utils
 * 基础工具
 * @description: 获取对象属性
 *
 * @author: entfrm开发团队-王翔
 *
 * @create: 2021-11-18
 */

/**
 * 不支持深度路径的 'propertyOf' 的基本实现
 *
 * @param {Object} object要查询的对象
 * @returns {Function} 返回新的访问器函数
 */
function basePropertyOf (object) {
  return (key) => object == null ? undefined : object[key]
}

export default basePropertyOf
