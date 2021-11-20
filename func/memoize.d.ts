/** 缓存Map **/
interface MapCache {
  /**
   * 从缓存中移除 'key' 及其值
   * @param key 要删除的值的键
   * @return 如果成功删除条目,则返回 'true' 否则返回 'false'
   */
  delete(key: any): boolean;
  /**
   * 获取 'key' 的缓存值
   * @param key 要获取的值的键
   * @return 返回缓存的值
   */
  get(key: any): any;
  /**
   * 检查 'key' 是否存在缓存值
   * @param key 要检查的key
   * @return 如果存在key条目,则返回 'true' 否则返回 'false'
   */
  has(key: any): boolean;
  /**
   * 设置 'value' 到 'key' 的缓存
   * @param key 要缓存的值的键
   * @param value 要缓存的值
   * @return 返回缓存对象
   */
  set(key: any, value: any): this;
  /**
   * 从映射中删除所有键值项
   */
  clear?: () => void;
}

export declare function memoize <T extends (...args: any[]) => any>(func: T, resolver?: (...args: any[]) => any): T & { cache: MapCache }

/**
 * 创建一个函数来记忆func的结果,如果提供了解析器,它将确定缓存键
 * 根据提供给记忆函数的参数存储结果,默认情况下,第一个参数
 * 提供给memoized函数的被强制转换为字符串并用作缓存键
 * 调用func记忆功能的这种绑定
 *
 * @param func 使其输出被记忆的函数
 * @param resolver 解析缓存键的函数
 * @return 返回新的记忆函数
 */
declare module './ctor' {
  interface LoquatMethods {
    memoize: {
      <T extends (...args: any[]) => any>(func: T, resolver?: (...args: any[]) => any): T & { cache: MapCache };
      Cache: { new (): MapCache };
    };
  }
}

export default memoize
