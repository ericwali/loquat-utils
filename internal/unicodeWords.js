/**
 * @program: loquat-utils
 *
 * @description: 将unicode编码字符串拆分为单词
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

/** 用于组成unicode字符类. */
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
// 匹配印刷符号
const rsDingbatRange = '\\u2700-\\u27bf'
// 匹配小写字母包含拉丁
const rsLowerRange = 'a-z\\xdf-\\xf6\\xf8-\\xff'
// 匹配数学运算符
const rsMathOpRange = '\\xac\\xb1\\xd7\\xf7'
// 匹配除了字母数字外的符号: https://www.ascii-code.com/
const rsNonCharRange = '\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf'
// 匹配常用标点符号
const rsPunctuationRange = '\\u2000-\\u206f'
// 匹配空白
const rsSpaceRange = ' \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000'
// 匹配大写字母包含拉丁
const rsUpperRange = 'A-Z\\xc0-\\xd6\\xd8-\\xde'
// 匹配表情符号变种字体: https://www.emojidaquan.com/emoji-variation-selector-16
const rsVarRange = '\\ufe0e\\ufe0f'
// 定义分割字符,可以使用(数学运算符,除了字母数字外的符号,常用标点符号,空白)分割
const rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange

/** 用于组合unicode捕获组. */
// 匹配单引号跟右单引号('’)
const rsApos = "['\u2019]"
const rsBreak = `[${rsBreakRange}]`
const rsCombo = `[${rsComboRange}]`
const rsDigit = '\\d'
const rsDingbat = `[${rsDingbatRange}]`
const rsLower = `[${rsLowerRange}]`
// 不匹配除了字母外的字符的一些杂项符号比如一些表情符号等等
const rsMisc = `[^${rsAstralRange}${rsBreakRange + rsDigit + rsDingbatRange + rsLowerRange + rsUpperRange}]`
// 匹配ud83c高半区中低半区为udffb-udfff的表情字符
const rsFitz = '\\ud83c[\\udffb-\\udfff]'
// 匹配表情代理对时的渲染修改字符: http://www.ruanyifeng.com/blog/2017/04/emoji.html
const rsModifier = `(?:${rsCombo}|${rsFitz})`
const rsNonAstral = `[^${rsAstralRange}]`
// 匹配代理区域ud83c高半区中低半区为udde6-uddff的表情字符
const rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}'
// 匹配高半区跟低半区一对,总共四个字节,例如占用4个字节的表情符号
const rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]'
const rsUpper = `[${rsUpperRange}]`
// 匹配零宽度连接符: https://www.emojiall.com/zh-hans/help-emoji-zwj-sequences
const rsZWJ = '\\u200d'

/** 用于组合unicode正则表达式。 */
const rsMiscLower = `(?:${rsLower}|${rsMisc})`
const rsMiscUpper = `(?:${rsUpper}|${rsMisc})`
// 反对以'(d|ll|m|re|s|t|ve)的字母出现0次或1次不被拆分(d'd=>["d'd"])
const rsOptContrLower = `(?:${rsApos}(?:d|ll|m|re|s|t|ve))?`
// 反对以'(D|LL|M|RE|S|T|VE)的字母出现0次或1次不被拆分(D'D=>["D'D"])
const rsOptContrUpper = `(?:${rsApos}(?:D|LL|M|RE|S|T|VE))?`
const reOptMod = `${rsModifier}?`
const rsOptVar = `[${rsVarRange}]?`
const rsOptJoin = `(?:${rsZWJ}(?:${[rsNonAstral, rsRegional, rsSurrPair].join('|')})${rsOptVar + reOptMod})*`
// 支持特定的字母连接数字并且不会被拆分(1st|2nd|3rd|4,5,6...th)(123rd=>["123rd"])
const rsOrdLower = '\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])'
// 支持特定的字母连接数字并且不会被拆分(1ST|2ND|3RD|4,5,6...TH)(123RD=>["123RD"])
const rsOrdUpper = '\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])'
const rsSeq = rsOptVar + reOptMod + rsOptJoin
const rsEmoji = `(?:${[rsDingbat, rsRegional, rsSurrPair].join('|')})${rsSeq}`

/** 用于匹配复杂的单词或复合词 **/
const reUnicodeWords = RegExp([
  `${rsUpper}?${rsLower}+${rsOptContrLower}(?=${[rsBreak, rsUpper, '$'].join('|')})`,
  `${rsMiscUpper}+${rsOptContrUpper}(?=${[rsBreak, rsUpper + rsMiscLower, '$'].join('|')})`,
  `${rsUpper}?${rsMiscLower}+${rsOptContrLower}`,
  `${rsUpper}+${rsOptContrUpper}`,
  rsOrdUpper,
  rsOrdLower,
  `${rsDigit}+`,
  rsEmoji
].join('|'), 'g')

/**
 * 将Unicode ' string '拆分为包含其单词的数组。
 *
 * @private
 * @param {string} 要检查的字符串。
 * @returns {Array} 返回' string '的单词。
 */
function unicodeWords (string) {
  return string.match(reUnicodeWords)
}

export default unicodeWords
