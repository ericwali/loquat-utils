/**
 * 检查value是否被分类为类型化数组
 *
 * @param value 要检查的值
 * @return 如果值被正确分类,则返回 'true' 否则返回 'false'
 */
export declare function isTypedArray(value: any): boolean;

declare module './ctor' {
  interface LoquatMethods {
    isTypedArray: typeof isTypedArray;
  }
}

export default isTypedArray
