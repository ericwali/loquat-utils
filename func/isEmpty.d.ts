/**
 * 检查值是否为空,一个值被认为是空的,除非它是一个参数对象、数组、字符串或
 * 长度大于0的类似jquery的集合,或具有自己的可枚举属性的对象
 *
 * @param value 要检查的值
 * @return 如果 'value' 为空则返回 'true' 否则返回 'false'
 */
export declare function isEmpty(value?: any): boolean

declare module './ctor' {
  interface LoquatMethods {
    isEmpty: typeof isEmpty;
  }
}

export default isEmpty
