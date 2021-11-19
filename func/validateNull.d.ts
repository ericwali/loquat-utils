/**
 * 对象是否为空
 * @param val 对象
 */
export declare function validateNull(val: any): boolean;

declare module './ctor' {
  interface LoquatMethods {
    validateNull: typeof validateNull;
  }
}

export default validateNull
