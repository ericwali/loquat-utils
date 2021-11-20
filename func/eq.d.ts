/**
 * 执行一个[`相同的值为零`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
 * 比较两个值,以确定它们是否相等
 *
 * @category Lang
 * @param {*} value 要比较的值
 * @param {*} other 要比较的另一个值
 * @returns {boolean} 如果值相等则返回 'true' 否则返回 'false'
 */
export declare function eq(value: any, other: any): boolean

declare module './ctor' {
  interface LoquatMethods {
    eq: typeof eq;
  }
}

export default eq
