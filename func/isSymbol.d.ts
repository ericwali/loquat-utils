/**
 * 判断是否是一个基本数据类型
 * @param val 值
 */
export declare function isSymbol(value: any): value is symbol

declare module './ctor' {
  interface LoquatMethods {
    isSymbol: typeof isSymbol;
  }
}

export default isSymbol
