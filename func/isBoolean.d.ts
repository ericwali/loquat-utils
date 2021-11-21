/**
 * 检查value是否被分类为布尔原语或对象
 *
 * @param value 要检查的值
 * @return 如果值被正确分类,则返回 'true' 否则返回 'false'
 */
export declare function isBoolean(value?: any): value is boolean

declare module './ctor' {
  interface LoquatMethods {
    isBoolean: typeof isBoolean;
  }
}

export default isBoolean
