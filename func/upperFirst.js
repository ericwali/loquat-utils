/**
 * @program: loquat-utils
 *
 * @description: 字符串首字母大写
 *
 * @author: entfrm开发团队-王翔
 *
 * @create: 2021-11-18
 **/

import createCaseFirst from '../internal/createCaseFirst'

/**
 * 将' string '的第一个字符转换为大写字母
 *
 * @category String
 * @param {string} [string=''] 要转换的字符串
 * @returns {string} 返回转换后的字符串
 * @example
 *
 * upperFirst('fred')
 * // => 'Fred'
 *
 * upperFirst('FRED')
 * // => 'FRED'
 */
const upperFirst = createCaseFirst('toUpperCase')

export default upperFirst
