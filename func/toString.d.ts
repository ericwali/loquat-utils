/**
 * 将值转化为String
*/
export declare function toString(value: any): string

declare module './ctor' {
  interface LoquatMethods {
   merge: typeof toString;
  }
}

export default toString
