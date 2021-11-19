/**
 * 创建缓存记忆函数
 * @param {Function} fn 函数的输出被记下来。
 * @param {Function} [resolver] 解析缓存键的函数。
 */

/** 缓存函数 **/
interface MemoizedFunction extends Function {
  cache: MapCache;
}

/** 缓存Map **/
interface MapCache {
  /**
   * Removes `key` and its value from the cache.
   * @param key The key of the value to remove.
   * @return Returns `true` if the entry was removed successfully, else `false`.
   */
  delete(key: string): boolean;

  /**
   * Gets the cached value for `key`.
   * @param key The key of the value to get.
   * @return Returns the cached value.
   */
  get(key: string): any;

  /**
   * Checks if a cached value for `key` exists.
   * @param key The key of the entry to check.
   * @return Returns `true` if an entry for `key` exists, else `false`.
   */
  has(key: string): boolean;

  /**
   * Sets `value` to `key` of the cache.
   * @param key The key of the value to cache.
   * @param value The value to cache.
   * @return Returns the cache object.
   */
  set(key: string, value: any): any;
}

export declare function memoize<T extends Function>(func: T, resolver?: Function): T & MemoizedFunction

declare module './ctor' {
  interface LoquatMethods {
    memoize: {
      <T extends Function>(func: T, resolver?: Function): T & MemoizedFunction;
      Cache: MapCache;
    };
  }
}

export default memoize
