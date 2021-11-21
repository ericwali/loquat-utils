/**
 * 判断是否是一个有效的对象与有效的数组
 *
 * @param {*} value 要检查的值
 * @returns {boolean} 如果 'value' 是一个有效的对象与有效的数组,则返回 'true' 否则返回 'false'
 */
export declare function isArrayLikeObject<T>(value: T & string & number): boolean // 只有当T = any

export declare function isArrayLikeObject(value: ((...args: any[]) => any) | Function | string | boolean | number | null | undefined): value is never

export declare function isArrayLikeObject<T extends object>(value: T | ((...args: any[]) => any) | Function | string | boolean | number | null | undefined): value is T & { length: number }

declare module './ctor' {
  interface LoquatMethods {
    isArrayLikeObject: typeof isArrayLikeObject;
  }
}

export default isArrayLikeObject
