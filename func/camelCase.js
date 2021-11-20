/**
 * @program: loquat-utils
 *
 * @description: 字符串转驼峰
 *
 * @author: entfrm开发团队-王翔
 *
 * @create: 2021-11-18
 **/

import upperFirst from './upperFirst'
import words from './words'
import toString from './toString'

/**
 * 将' string '转换为[驼峰大小写](https://en.wikipedia.org/wiki/CamelCase)
 *
 * @category String
 * @param {string} [string=''] 要转换的字符串
 * @returns {string} 返回驼峰格式字符串
 * @example
 *
 * camelCase('Foo Bar')
 * // => 'fooBar'
 *
 * camelCase('--foo-bar--')
 * // => 'fooBar'
 *
 * camelCase('__FOO_BAR__')
 * // => 'fooBar'
 */
const camelCase = (string) => (
  words(toString(string).replace(/['\u2019]/g, '')).reduce((result, word, index) => {
    word = word.toLowerCase()
    return result + (index ? upperFirst(word) : word)
  }, '')
)

export default camelCase
