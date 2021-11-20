/**
 * 检查 'value' 是否与数组类似,一个值被认为是数组类型,如果它是
 * 不是一个函数,并且有一个 'value' 长度,它是一个大于或的整数
 * 等于 '0' 且小于或等于 'Number.MAX_SAFE_INTEGER'
 *
 * @param value 要检查的值
 * @returns 如果 'value' 是数组类,则返回 'true' 否则返回 'false'
 */
export declare function isArrayLike<T>(value: T & string & number): boolean // 只有当T = any

export declare function isArrayLike(value: ((...args: any[]) => any) | null | undefined): value is never

export declare function isArrayLike(value: any): value is { length: number }

declare module './ctor' {
  interface LoquatMethods {
    isArrayLike: typeof isArrayLike;
  }
}

export default isArrayLike
