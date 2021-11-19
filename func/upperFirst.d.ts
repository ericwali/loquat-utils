/**
 * 首字母大写
*/
export declare function upperFirst(value: string): string

declare module './ctor' {
  interface LoquatMethods {
    upperFirst: typeof upperFirst;
  }
}

export default upperFirst
