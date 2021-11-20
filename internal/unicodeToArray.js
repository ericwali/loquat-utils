/**
 * @program: loquat-utils
 *
 * @description: unicode编码字符串转换为字符数组
 *
 * 用于组合unicode字符类,前缀请使用rs全名RecordSplit(记录分割符)
 * 需要正则表达式帮助请参考: https://regexr.com/
 * 更多帮助请参考:
 * https://unicode-table.com/cn/blocks/
 * https://unicode-table.com/cn/blocks/combining-diacritical-marks/
 * https://zh.wikipedia.org/wiki/Unicode%E5%AD%97%E7%AC%A6%E5%B9%B3%E9%9D%A2%E6%98%A0%E5%B0%84
 *
 * @author: entfrm开发团队-王翔
 *
 * @create: 2021-11-18
 **/

/** 用于组合unicode字符类 */
// 匹配代理对(高半区): https://cloud.tencent.com/developer/article/1641938
const rsAstralRange = '\\ud800-\\udfff'
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
// 匹配表情符号变种字体: https://www.emojidaquan.com/emoji-variation-selector-16
const rsVarRange = '\\ufe0e\\ufe0f'

/** 用于组合unicode捕获组 */
const rsAstral = `[${rsAstralRange}]`
const rsCombo = `[${rsComboRange}]`
const rsFitz = '\\ud83c[\\udffb-\\udfff]'
const rsModifier = `(?:${rsCombo}|${rsFitz})`
const rsNonAstral = `[^${rsAstralRange}]`
const rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}'
const rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]'
const rsZWJ = '\\u200d'

/** 用于组合unicode正则表达式 */
const reOptMod = `${rsModifier}?`
const rsOptVar = `[${rsVarRange}]?`
const rsOptJoin = `(?:${rsZWJ}(?:${[rsNonAstral, rsRegional, rsSurrPair].join('|')})${rsOptVar + reOptMod})*`
const rsSeq = rsOptVar + reOptMod + rsOptJoin
const rsNonAstralCombo = `${rsNonAstral}${rsCombo}?`
const rsSymbol = `(?:${[rsNonAstralCombo, rsCombo, rsRegional, rsSurrPair, rsAstral].join('|')})`

/** 用于匹配[字符串符号](https://mathiasbynens.be/notes/javascript-unicode) */
const reUnicode = RegExp(`${rsFitz}(?=${rsFitz})|${rsSymbol + rsSeq}`, 'g')

/**
 * 将Unicode ' string '转换为数组
 *
 * @param {string} string 要转换的字符串
 * @returns {Array} 返回转换后的数组
 */
function unicodeToArray (string) {
  return string.match(reUnicode) || []
}

export default unicodeToArray
