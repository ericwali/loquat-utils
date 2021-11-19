/** 用于组合unicode字符类。 */
const rsAstralRange = '\\ud800-\\udfff'
const rsComboMarksRange = '\\u0300-\\u036f'
const reComboHalfMarksRange = '\\ufe20-\\ufe2f'
const rsComboSymbolsRange = '\\u20d0-\\u20ff'
const rsComboMarksExtendedRange = '\\u1ab0-\\u1aff'
const rsComboMarksSupplementRange = '\\u1dc0-\\u1dff'
const rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange + rsComboMarksExtendedRange + rsComboMarksSupplementRange
const rsVarRange = '\\ufe0e\\ufe0f'

/** 用于组合unicode捕获组。 */
const rsZWJ = '\\u200d'

/** 用[来自星体层的零宽度接合器或编码点]检测字符串(http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */
const reHasUnicode = RegExp(`[${rsZWJ + rsAstralRange + rsComboRange + rsVarRange}]`)

/**
 * 检查' string '是否包含Unicode符号。
 *
 * @private
 * @param {string} 要检查的字符串。
 * @returns {boolean} 如果找到符号则返回' true '，否则返回' false '。
 */
function hasUnicode (string) {
  return reHasUnicode.test(string)
}

export default hasUnicode
