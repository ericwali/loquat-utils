/**
 * 检查 'value' 是否被分类为 'Number' 原语或对象
 *
 * 注意: 要排除 'Infinity','-Infinity' 和 'NaN' 这些被归类为数字的词,请使用 'Number.isFinite' 方法
 *
 * @param {*} value 要检查的值
 * @returns {boolean} 如果 'value' 是一个数字,则返回 'true' 否则返回 'false'
 */
export declare function isNumber(value?: any): value is number

declare module './ctor' {
  interface LoquatMethods {
    isNumber: typeof isNumber;
  }
}

export default isNumber
