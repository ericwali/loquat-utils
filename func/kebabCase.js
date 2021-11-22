/**
 * @program: loquat-utils
 *
 * @description: 字符串转下划线
 *
 * @author: entfrm开发团队-王翔
 *
 * @create: 2021-11-18
 */

import words from './words'
import toString from './toString'

/**
 * 将字符串转下划线 (https://en.wikipedia.org/wiki/Letter_case#Special_case_styles)
 *
 * @category String
 * @param {string} [string=''] 要转换的字符串
 * @returns {string} 返回烤肉串大小写字符串
 * @example
 *
 * kebabCase('Foo Bar')
 * // => 'foo-bar'
 *
 * kebabCase('fooBar')
 * // => 'foo-bar'
 *
 * kebabCase('__FOO_BAR__')
 * // => 'foo-bar'
 */
const kebabCase = (string) => (
  words(toString(string).replace(/['\u2019]/g, '')).reduce((result, word, index) => (
    result + (index ? '-' : '') + word.toLowerCase()
  ), '')
)

export default kebabCase
