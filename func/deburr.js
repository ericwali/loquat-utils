/**
 * @program: loquat-utils
 *
 * @description: 去除字符串中的一些毛刺
 *
 * @author: entfrm开发团队-王翔
 *
 * @create: 2021-11-18
 */

import deburrLetter from '../internal/deburrLetter'

/** 用于匹配拉丁Unicode字母(不包括数学运算符) */
const reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g

/** 用于组成unicode字符类 */
// 结合附加符号
const rsComboMarksRange = '\\u0300-\\u036f'
// 组合用半符号
const reComboHalfMarksRange = '\\ufe20-\\ufe2f'
// 组合用记号
const rsComboSymbolsRange = '\\u20d0-\\u20ff'
const rsComboMarksExtendedRange = '\\u1ab0-\\u1aff'
const rsComboMarksSupplementRange = '\\u1dc0-\\u1dff'
// 匹配组合符号
const rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange + rsComboMarksExtendedRange + rsComboMarksSupplementRange

/** 用于组合unicode捕获组 */
const rsCombo = `[${rsComboRange}]`

/**
 * 用于匹配 [结合变音符号] (https://en.wikipedia.org/wiki/Combining_Diacritical_Marks) 和
 * [为符号组合变音符号](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks_for_Symbols)
 */
const reComboMark = RegExp(rsCombo, 'g')

/**
 * 去除字符串中的一些毛刺
 * 带发音符号的拉丁字母,组合变音符号
 *
 * 替换说明:替换那些带发音符号的拉丁字母(á->a)
 * Latin-1补充块: https://en.wikipedia.org/wiki/Latin-1_Supplement_(Unicode_block)#Character_table
 * 拉丁语扩展A块.: https://en.wikipedia.org/wiki/Latin_Extended-A
 * 删除说明:删除变音符号
 * 结合变音符号: https://en.wikipedia.org/wiki/Combining_Diacritical_Marks
 *
 * @category String
 * @param {string} [string='']  要去毛刺的字符串
 * @returns {string} 返回去毛刺的字符串
 * @example
 *
 * deburr('wángxiáng');
 * // => 'wangxiang'
 */
function deburr (string) {
  return string && string.replace(reLatin, deburrLetter).replace(reComboMark, '')
}

export default deburr
