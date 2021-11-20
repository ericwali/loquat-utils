import { NumericDictionary } from '../internal/definition'

/**
 * 获取对象路径处的属性值,如果解析的值未定义,则使用defaultValue代替它
 *
 * @param object 要查询的对象
 * @param path 要获取的属性的路径
 * @param defaultValue 如果解析值未定义则返回的值
 * @return 返回解析值
 */
export declare function get<TObject extends object, TKey extends keyof TObject>(object: TObject, path: TKey | [TKey]): TObject[TKey]

export declare function get<TObject extends object, TKey extends keyof TObject>(object: TObject | null | undefined, path: TKey | [TKey]): TObject[TKey] | undefined

export declare function get<TObject extends object, TKey extends keyof TObject, TDefault>(object: TObject | null | undefined, path: TKey | [TKey], defaultValue: TDefault): Exclude<TObject[TKey], undefined> | TDefault

export declare function get<TObject extends object, TKey1 extends keyof TObject, TKey2 extends keyof TObject[TKey1]>(object: TObject | null | undefined, path: [TKey1, TKey2]): TObject[TKey1][TKey2] | undefined

export declare function get<TObject extends object, TKey1 extends keyof TObject, TKey2 extends keyof TObject[TKey1], TDefault>(object: TObject | null | undefined, path: [TKey1, TKey2], defaultValue: TDefault): Exclude<TObject[TKey1][TKey2], undefined> | TDefault

export declare function get<TObject extends object, TKey1 extends keyof TObject, TKey2 extends keyof TObject[TKey1], TKey3 extends keyof TObject[TKey1][TKey2]>(object: TObject | null | undefined, path: [TKey1, TKey2, TKey3]): TObject[TKey1][TKey2][TKey3] | undefined

export declare function get<TObject extends object, TKey1 extends keyof TObject, TKey2 extends keyof TObject[TKey1], TKey3 extends keyof TObject[TKey1][TKey2], TDefault>(object: TObject | null | undefined, path: [TKey1, TKey2, TKey3], defaultValue: TDefault): Exclude<TObject[TKey1][TKey2][TKey3], undefined> | TDefault

export declare function get<TObject extends object, TKey1 extends keyof TObject, TKey2 extends keyof TObject[TKey1], TKey3 extends keyof TObject[TKey1][TKey2], TKey4 extends keyof TObject[TKey1][TKey2][TKey3]>(object: TObject | null | undefined, path: [TKey1, TKey2, TKey3, TKey4]): TObject[TKey1][TKey2][TKey3][TKey4] | undefined

export declare function get<TObject extends object, TKey1 extends keyof TObject, TKey2 extends keyof TObject[TKey1], TKey3 extends keyof TObject[TKey1][TKey2], TKey4 extends keyof TObject[TKey1][TKey2][TKey3], TDefault>(object: TObject | null | undefined, path: [TKey1, TKey2, TKey3, TKey4], defaultValue: TDefault): Exclude<TObject[TKey1][TKey2][TKey3][TKey4], undefined> | TDefault

export declare function get<T>(object: NumericDictionary<T>, path: number): T

export declare function get<T>(object: NumericDictionary<T> | null | undefined, path: number): T | undefined

export declare function get<T, TDefault>(object: NumericDictionary<T> | null | undefined, path: number, defaultValue: TDefault): T | TDefault

export declare function get<TDefault>(object: null | undefined, path: string | number | symbol | ReadonlyArray<string | number | symbol>, defaultValue: TDefault): TDefault

export declare function get(object: null | undefined, path: string | number | symbol | ReadonlyArray<string | number | symbol>,): undefined

export declare function get(object: any, path: string | number | symbol | ReadonlyArray<string | number | symbol>, defaultValue?: any): any

declare module './ctor' {
  interface LoquatMethods {
    get: typeof get;
  }
}

export default get
