/**
 * 检查 'value' 是否是一个有效的数组式长度
 *
 * 注意: 这种方法是松散地基于[按一定长度](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @category Lang
 * @param {*} value 要检查的值
 * @returns {boolean} 如果 'value' 是一个有效长度,则返回 'true' 否则返回 'false'
 */
export declare function isLength(value?: any): boolean

declare module './ctor' {
  interface LoquatMethods {
    isLength: typeof isLength;
  }
}

export default isLength
