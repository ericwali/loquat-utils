/**
 * 'mapValues' 的反面: 此方法创建一个与生成的对象和键具有相同值的对象
 * 通过 'iteratee' 运行对象的每个自己的可枚举属性
 *
 * @param object 要迭代的对象
 * @param iteratee 每次迭代调用的函数
 * @return 返回新的映射对象
 */
export declare function mapKeys<T>(object: ArrayLike<T> | null | undefined, iteratee?: (value: T, index: number, collection: ArrayLike<T>) => unknown): { [index: string]: T }

export declare function mapKeys<T extends object>(object: T | null | undefined, iteratee?: (value: T[keyof T], key: string, collection: T) => unknown): { [index: string]: T[keyof T] }

declare module './ctor' {
    interface LoquatMethods {
        mapKeys: typeof mapKeys;
    }
}

export default mapKeys
