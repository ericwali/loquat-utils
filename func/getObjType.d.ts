/**
 * 获取对象类型
 *
 * @param {*} obj 检查的对象
 * @return {String} 返回定义后的简短类型
 */
export declare function getObjType(obj: any): string

declare module './ctor' {
  interface LoquatMethods {
    getObjType: typeof getObjType;
  }
}

export default getObjType
