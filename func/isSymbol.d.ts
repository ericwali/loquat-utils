/**
 * 判断是否是一个基本数据类型
 *
 * @category Lang
 * @param {*} value 要检查的值
 * @returns {boolean} 如果 'value' 是一个符号,则返回 'true' 否则返回 'false'
 */
export declare function isSymbol(value: any): value is symbol

declare module './ctor' {
  interface LoquatMethods {
    isSymbol: typeof isSymbol;
  }
}

export default isSymbol
