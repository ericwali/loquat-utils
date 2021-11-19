/**
 * 判断是否数组
 * @param val 值
 */
export declare function isArray(val: any): val is any[]

declare module './ctor' {
  interface LoquatMethods {
    isArray: typeof isArray;
  }
}

export default isArray
