/**
 * @program: loquat-utils
 *
 * @description: 判断是否是一个有效的类,数组索引
 *
 * @author: entfrm开发团队-王翔
 *
 * @create: 2021-11-18
 **/

/** 用作各种 'Number' 常量的引用 */
const MAX_SAFE_INTEGER = 9007199254740991

/** 用于检测无符号整数值 */
const reIsUint = /^(?:0|[1-9]\d*)$/

/**
 * 检查 'value' 是否是一个有效的类,数组索引
 *
 * @param {*} value 要检查的值
 * @param {number} [length=MAX_SAFE_INTEGER] 有效索引的上界
 * @returns {boolean} 如果 'value' 是一个有效的索引,则返回 'true' 否则返回 'false'
 */
function isIndex (value, length) {
  const type = typeof value
  length = length == null ? MAX_SAFE_INTEGER : length

  return !!length &&
    (type === 'number' ||
      (type !== 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 === 0 && value < length)
}

export default isIndex
