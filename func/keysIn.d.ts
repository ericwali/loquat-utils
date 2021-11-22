/**
 * 创建对象的自有和继承的可枚举属性名称的数组
 *
 * 注意: 非对象值被强制转换为对象
 *
 * @param object 要查询的对象
 * @return 一组属性名称
 */
export declare function keysIn(object?: any): string[]

declare module './ctor' {
    interface LoquatMethods {
        keysIn: typeof keysIn;
    }
}

export default keysIn
