import { List, ListIterator, ObjectIterator } from '../internal/definition'

/**
 * 在集合的元素上迭代,为每个元素调用iteratee,用三个参数调用迭代对象:
 * (value, index|key, collection) 迭代函数可以通过显式返回false提早退出迭代
 *
 * 注意: 与其他 'Collections' 方法,具有 'length' 属性的对象将像数组一样迭代
 * 为了避免这种行为 'forIn' 或 'forOwn' 可以用于对象迭代
 *
 * @param collection 要迭代的集合
 * @param iteratee 每次迭代调用的函数
 */
export declare function forEach<T>(collection: T[], iteratee?: (value: T, index: number, collection: T[]) => any): T[]

export declare function forEach(collection: string, iteratee?: (char: string, index: number, string: string) => any): string

export declare function forEach<T>(collection: List<T>, iteratee?: ListIterator<T, any>): List<T>

export declare function forEach<T extends object>(collection: T, iteratee?: ObjectIterator<T, any>): T

export declare function forEach<T, TArray extends T[] | null | undefined>(collection: TArray & (T[] | null | undefined), iteratee?: (value: T, index: number, collection: T[]) => any): TArray

export declare function forEach<TString extends string | null | undefined>(collection: TString, iteratee?: (char: string, index: number, string: string) => any): TString

export declare function forEach<T, TList extends List<T> | null | undefined>(collection: TList & (List<T> | null | undefined), iteratee?: ListIterator<T, any>): TList

export declare function forEach<T extends object>(collection: T | null | undefined, iteratee?: ObjectIterator<T, any>): T | null | undefined

declare module './ctor' {
  interface LoquatMethods {
    forEach: typeof forEach;
  }
}

export default forEach
