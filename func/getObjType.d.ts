/**
 * 获取对象类型
 * @param obj 对象
 */
export declare function getObjType(obj: any): string

declare module './ctor' {
  interface LoquatMethods {
    getObjType: typeof getObjType;
  }
}

export default getObjType
