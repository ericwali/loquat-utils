/**
 * 创建从开始到结束的数组切片，但不包括该切片。
 *
 * @param array 要切片的数组。
 * @param start 一开始的位置。
 * @param end 最后的位置。
 * @return 返回数组的切片。
 */
export declare function slice<T>(array: T[], start?: number, end?: number): T[]

declare module './ctor' {
  interface LoquatMethods {
    slice: typeof slice;
  }
}

export default slice
