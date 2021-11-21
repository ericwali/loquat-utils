/**
 * 检查 'value' 是否被分类为 'WeakMap对象
 *
 * @param value 要检查的值
 * @returns 如果值被正确分类,则返回 'true' 否则返回 'false'
 */
export declare function isWeakMap(value?: any): value is WeakMap<object, any>

declare module './ctor' {
  interface LoquatMethods {
    isWeakMap: typeof isWeakMap;
  }
}

export default isWeakMap
