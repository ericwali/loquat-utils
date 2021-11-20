import { List, ListIterator, Dictionary, DictionaryIterator, ObjectIterator } from '../internal/definition'
/**
 * 通用迭代器(右到左)
 * @param collection 数组
 * @param iteratee 回调
 * @param context 上下文
 */
export declare function eachRight<T>(collection: T[], iteratee?: ListIterator<T, any>, context?: any): T[]

export declare function eachRight<T>(collection: List<T>, iteratee?: ListIterator<T, any>, context?: any): List<T>

/**
 * 通用迭代器(右到左)
 * @param collection 对象
 * @param iteratee 回调
 * @param context 上下文
 */
export declare function eachRight<T>(collection: Dictionary<T>, iteratee?: DictionaryIterator<T, any>, context?: any): Dictionary<T>

export declare function eachRight<T extends {}>(collection: T, iteratee?: ObjectIterator<any, any>, context?: any): T

export declare function eachRight<T extends {}, TValue>(collection: T, iteratee?: ObjectIterator<TValue, any>, context?: any): T

declare module './ctor' {
  interface LoquatMethods {
    eachRight: typeof eachRight;
  }
}

export default eachRight
