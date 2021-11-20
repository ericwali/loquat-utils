/**
 * @program: loquat-utils
 *
 * @description: 检查字符串是否包含表情符号
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
const rsZWJ = '\\u200d'

/** 用[来自星体层的零宽度接合器或编码点]检测字符串(http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/) */
const reHasUnicode = RegExp(`[${rsZWJ + rsAstralRange + rsComboRange + rsVarRange}]`)

/**
 * 检查' string '是否包含Unicode符号
 *
 * @param {string} string 要检查的字符串
 * @returns {boolean} 如果找到符号则返回' true ',否则返回' false '
 */
function hasUnicode (string) {
  return reHasUnicode.test(string)
}

export default hasUnicode
