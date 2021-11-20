/**
 * 判断是否是一个参数对象
 *
 * @category Lang
 * @param {*} value 要检查的值
 * @returns {boolean} 如果 'value' 是参数对象则返回 'true' 否则返回 'false'
 */
export declare function isArguments(value: any): value is IArguments

declare module './ctor' {
  interface LoquatMethods {
    isArguments: typeof isArguments;
  }
}

export default isArguments
