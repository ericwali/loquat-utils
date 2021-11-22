/**
 * 通过运行 'array' 的每个元素到 'iteratee' 来创建一个值数组
 * 使用三个参数调用迭代器: (value, index, array)
 *
 * @param {Array} array 要迭代的数组
 * @param {Function} iteratee 每次迭代调用的函数
 * @returns {Array} 返回新的映射数组
 */
export declare function map<T, TResult>(collection: T[] | null | undefined, iteratee: (value: T, index: number, collection: T[]) => TResult): TResult[]

export declare function map<T, TResult>(collection: ArrayLike<T> | null | undefined, iteratee: (value: T, index: number, collection: ArrayLike<T>) => TResult): TResult[]

export declare function map<T>(collection: ArrayLike<T> | { [index: string]: T } | { [index: number]: T } | null | undefined): T[]

export declare function map<T extends object, TResult>(collection: T | null | undefined, iteratee: (value: T[keyof T], key: string, collection: T) => TResult): TResult[]

export declare function map<T, K extends keyof T>(collection: ArrayLike<T> | { [index: string]: T } | { [index: number]: T } | null | undefined, iteratee: K): Array<T[K]>

export declare function map<T>(collection: ArrayLike<T>| { [index: string]: T } | { [index: number]: T } | null | undefined, iteratee?: string): any[]

export declare function map<T>(collection: ArrayLike<T> | { [index: string]: T } | { [index: number]: T } | null | undefined, iteratee?: object): boolean[]

declare module './ctor' {
    interface LoquatMethods {
        map: typeof map;
    }
}

export default map
