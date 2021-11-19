/**
 *获取对象路径处的属性值。如果解析的值未定义，则使用defaultValue代替它。
 *
 * @param object 要查询的对象。
 * @param path 要获取的属性的路径。
 * @param defaultValue 如果解析值未定义则返回的值。
 * @return 返回解析值。
 */
export declare function get<TObject, TResult>(object: TObject, path: string | string[], defaultValue?: TResult): TResult

declare module './ctor' {
  interface LoquatMethods {
    get: typeof get;
  }
}

export default get
