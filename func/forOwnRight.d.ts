import { Dictionary, DictionaryIterator, ObjectIterator } from '../internal/definition'

/**
 * 这个方法类似 'forOwn' 除了它以相反的顺序遍历对象的属性
 *
 * @param collection 要迭代的对象
 * @param iteratee 每次迭代调用的函数
 * @param context iteratee的this绑定
 * @return 返回对象
 */
export declare function forOwnRight<T>(object: Dictionary<T>, iteratee?: DictionaryIterator<T, any>, context?: any): Dictionary<T>

export declare function forOwnRight<T extends {}>(object: T, iteratee?: ObjectIterator<any, any>, context?: any): T

declare module './ctor' {
  interface LoquatMethods {
    forOwnRight: typeof forOwnRight;
  }
}

export default forOwnRight
