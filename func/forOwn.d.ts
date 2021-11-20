import { Dictionary, DictionaryIterator, ObjectIterator } from '../internal/definition'

/**
 * 迭代对象自己的可枚举属性,为每个属性调用iteratee。iteratee是
 * 绑定到context并使用三个参数调用:(value, key, object)迭代函数可能会退出
 * 通过显式返回false来提前迭代
 *
 * @param collection 要迭代的对象
 * @param iteratee 每次迭代调用的函数
 * @param context iteratee的this绑定
 * @return 返回对象
 */

export declare function forOwn<T>(object: Dictionary<T>, iteratee?: DictionaryIterator<T, any>, context?: any): Dictionary<T>

export declare function forOwn<T extends {}>(object: T, iteratee?: ObjectIterator<any, any>, context?: any): T

declare module './ctor' {
  interface LoquatMethods {
    forOwn: typeof forOwn;
  }
}

export default forOwn
