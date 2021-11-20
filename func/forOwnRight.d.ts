import { ObjectIterator } from '../internal/definition'

/**
 * 这个方法类似于 'forOwn' 除了它遍历的属性 'object' 的顺序相反
 *
 * @param object 要迭代的对象
 * @param iteratee 每次迭代调用的函数
 * @return 返回对象
 */
export declare function forOwnRight<T>(object: T, iteratee?: ObjectIterator<T, any>): T

export declare function forOwnRight<T>(object: T | null | undefined, iteratee?: ObjectIterator<T, any>): T | null | undefined

declare module './ctor' {
  interface LoquatMethods {
    forOwnRight: typeof forOwnRight;
  }
}

export default forOwnRight
