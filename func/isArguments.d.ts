/**
 * 检查value是否被分类为参数对象
 *
 * @param value 要检查的值
 * @return 如果值被正确分类,则返回true,否则返回false
 */
export declare function isArguments(value?: any): value is IArguments

declare module './ctor' {
  interface LoquatMethods {
    isArguments: typeof isArguments;
  }
}

export default isArguments
