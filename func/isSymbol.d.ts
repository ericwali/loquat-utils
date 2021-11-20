/**
 * 检查 'value' 是否被分类为 'Symbol' 原语或对象
 *
 * @param value 要检查的值
 * @returns 如果 'value' 正确分类,则返回 'true' 否则返回 'false'
 */

export declare function isSymbol(value: any): boolean

declare module './ctor' {
  interface LoquatMethods {
    isSymbol: typeof isSymbol;
  }
}

export default isSymbol
