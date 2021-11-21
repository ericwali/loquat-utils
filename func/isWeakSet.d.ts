/**
 * 检查 'value' 是否被分类为 'WeakSet' 对象
 *
 * @param value 要检查的值
 * @returns 如果值被正确分类,则返回 'true' 否则返回 'false'
 */
export declare function isWeakSet(value?: any): value is WeakSet<object>

declare module './ctor' {
  interface LoquatMethods {
    isWeakSet: typeof isWeakSet;
  }
}

export default isWeakSet
