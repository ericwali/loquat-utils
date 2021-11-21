/**
 * 检查 'value' 是否为 'undefined'
 *
 * @param value 要检查的值
 * @return 如果 'value 为 'undefined' 则返回 'true' 否则返回 'false'
 */
export declare function isUndefined(value: any): value is undefined

declare module './ctor' {
  interface LoquatMethods {
    isUndefined: typeof isUndefined;
  }
}

export default isUndefined
