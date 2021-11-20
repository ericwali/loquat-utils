import { List, ListIterator, Dictionary, DictionaryIterator, ObjectIterator } from '../internal/definition'

/**
 * 这个方法类似于 'forEach' 除了它从右到左遍历集合的元素
 *
 * @param collection 数组
 * @param iteratee 回调
 * @param context 上下文
 */

export declare function forEachRight<T>(collection: T[], iteratee?: ListIterator<T, any>, context?: any): T[]

export declare function forEachRight<T>(collection: List<T>, iteratee?: ListIterator<T, any>, context?: any): List<T>

/**
 * 这个方法类似于 'forEach' 除了它从右到左遍历集合的元素
 *
 * @param collection 对象
 * @param iteratee 回调
 * @param context 上下文
 */
export declare function forEachRight<T>(collection: Dictionary<T>, iteratee?: DictionaryIterator<T, any>, thisArg?: any): Dictionary<T>

export declare function forEachRight<T extends {}>(collection: T, iteratee?: ObjectIterator<any, any>, thisArgs?: any): T

export declare function forEachRight<T extends {}, TValue>(collection: T, iteratee?: ObjectIterator<TValue, any>, thisArgs?: any): T

declare module './ctor' {
  interface LoquatMethods {
    forEachRight: typeof forEachRight;
  }
}

export default forEachRight
