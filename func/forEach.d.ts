import { List, ListIterator, Dictionary, DictionaryIterator, ObjectIterator } from '../internal/definition'

/**
 * 遍历集合的元素，为每个元素调用iteratee。迭代对象被绑定到context
 * 用三个参数调用:
 * (value, index|key, collection) 迭代函数可以通过显式返回false提早退出迭代
 *
 * 注意: 与其他集合方法一样，具有 'length' 属性的对象也像数组一样被迭代。来
 * 避免这种行为 'forIn' 或 'forOwn' 可用于对象迭代
 *
 * @param collection 数组
 * @param iteratee 回调
 * @param context 上下文
 */
export declare function forEach<T>(collection: T[], iteratee?: ListIterator<T, any>, context?: any): T[]

export declare function forEach<T>(collection: List<T>, iteratee?: ListIterator<T, any>, context?: any): List<T>

/**
 * 遍历集合的元素，为每个元素调用iteratee。迭代对象被绑定到context
 * 用三个参数调用:
 * (value, index|key, collection) 迭代函数可以通过显式返回false提早退出迭代
 *
 * 注意: 与其他集合方法一样，具有 'length' 属性的对象也像数组一样被迭代。来
 * 避免这种行为 'forIn' 或 'forOwn' 可用于对象迭代
 *
 * @param collection 对象
 * @param iteratee 回调
 * @param context 上下文
 */
export declare function forEach<T>(collection: Dictionary<T>, iteratee?: DictionaryIterator<T, any>, context?: any): Dictionary<T>

export declare function forEach<T extends {}>(collection: T, iteratee?: ObjectIterator<any, any>, context?: any): T

export declare function forEach<T extends {}, TValue>(collection: T, iteratee?: ObjectIterator<TValue, any>, thisArgs?: any): T

declare module './ctor' {
  interface LoquatMethods {
    forEach: typeof forEach;
  }
}

export default forEach
