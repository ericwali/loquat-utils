/**
 * 检查value是否为缓冲区
 *
 * @param value 要检查的值
 * @return 如果 'value' 是缓冲区则返回 'true' 否则返回 'false'
 */
export declare function isBuffer(value?: any): boolean

declare module './ctor' {
  interface LoquatMethods {
    isBuffer: typeof isBuffer;
  }
}

export default isBuffer
