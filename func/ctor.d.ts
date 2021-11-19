import SetupDefaults from './setupDefaults'

/**
 * 版本信息
 */
export const VERSION: string

/**
 * 设置全局参数
 * @param options 全局参数
 */
export function setup(options: SetupDefaults): SetupDefaults

/**
 * 将您自己的实用函数扩展到 XEUtils
 * @param methods 函数集
 */
export function mixin(...methods: {[key: string]: any}[]): void

export interface LoquatMethods {
  VERSION: typeof VERSION;
  setup: typeof setup;
  mixin: typeof mixin;
  // 扩展属性定义
  [propertys: string]: any;
}

/**
 * JavaScript 函数库、工具类
 */
declare const LoquatUtils: LoquatMethods

export default LoquatUtils
