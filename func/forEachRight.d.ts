import { List, ListIterator, ObjectIterator } from '../internal/definition'

/**
 * 这个方法类似于 'forEach' 除了它从右到左遍历集合的元素
 *
 * @param collection 要迭代的集合
 * @param iteratee 每次迭代调用的函数
 */
export declare function forEachRight<T>(collection: T[], iteratee?: (value: T, index: number, collection: T[]) => any): T[]

export declare function forEachRight(collection: string, iteratee?: (char: string, index: number, string: string) => any): string

export declare function forEachRight<T>(collection: List<T>, iteratee?: ListIterator<T, any>): List<T>

export declare function forEachRight<T extends object>(collection: T, iteratee?: ObjectIterator<T, any>): T

export declare function forEachRight<T, TArray extends T[] | null | undefined>(collection: TArray & (T[] | null | undefined), iteratee?: (value: T, index: number, collection: T[]) => any): TArray

export declare function forEachRight<TString extends string | null | undefined>(collection: TString, iteratee?: (char: string, index: number, string: string) => any): TString

export declare function forEachRight<T, TList extends List<T> | null | undefined>(collection: TList & (List<T> | null | undefined), iteratee?: ListIterator<T, any>): TList

export declare function forEachRight<T extends object>(collection: T | null | undefined, iteratee?: ObjectIterator<T, any>): T | null | undefined

declare module './ctor' {
  interface LoquatMethods {
    forEachRight: typeof forEachRight;
  }
}

export default forEachRight
