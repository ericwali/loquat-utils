/**
 * 创建对象的可枚举属性名称的数组
 *
 * 注意: 将非对象值强制转换为对象。更多细节请参阅ES规范
 *
 * @param object 要查询的对象
 * @return 返回属性名数组
 */
export declare function keys(object?: any): string[]

declare module './ctor' {
  interface LoquatMethods {
    keys: typeof keys;
  }
}

export default keys
