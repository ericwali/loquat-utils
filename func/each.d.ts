import { List, ListIterator, Dictionary, DictionaryIterator, ObjectIterator } from '../internal/definition'

/**
 * 通用迭代器(左到右)
 * @param collection 数组
 * @param iteratee 回调
 * @param context 上下文
 */
export declare function each<T>(collection: T[], iteratee?: ListIterator<T, any>, context?: any): T[]

export declare function each<T>(collection: List<T>, iteratee?: ListIterator<T, any>, context?: any): List<T>

/**
 * 通用迭代器(左到右)
 * @param collection 对象
 * @param iteratee 回调
 * @param context 上下文
 */
export declare function each<T>(collection: Dictionary<T>, iteratee?: DictionaryIterator<T, any>, context?: any): Dictionary<T>

export declare function each<T extends {}>(collection: T, iteratee?: ObjectIterator<any, any>, context?: any): T

export declare function each<T extends {}, TValue>(collection: T, iteratee?: ObjectIterator<TValue, any>, context?: any): T

declare module './ctor' {
  interface LoquatMethods {
    each: typeof each;
  }
}

export default each
