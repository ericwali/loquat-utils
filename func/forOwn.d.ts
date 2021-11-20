import { ObjectIterator } from '../internal/definition'

/**
 * 迭代对象自己的可枚举属性,为每个属性调用iteratee,iteratee是
 * 用三个参数调用:(value, key, object),迭代函数可能会退出
 * 通过显式返回false来提前迭代
 *
 * @param object 要迭代的对象
 * @param iteratee 每次迭代调用的函数
 * @return 返回对象
 */
export declare function forOwn<T>(object: T, iteratee?: ObjectIterator<T, any>): T

export declare function forOwn<T>(object: T | null | undefined, iteratee?: ObjectIterator<T, any>): T | null | undefined

declare module './ctor' {
  interface LoquatMethods {
    forOwn: typeof forOwn;
  }
}

export default forOwn
