/**
 * @program: loquat-utils
 *
 * @description: 全局定义通用类型
 *
 * @author: entfrm开发团队-王翔
 *
 * @create: 2021-11-18
 **/

export interface List<T> {
    [index: number]: T;
    length: number;
}

export interface ListIterator<T, TResult> {
    (value: T, index: number, collection: List<T>): TResult;
}

export interface ObjectIterator<T, TResult> {
    (element: T, key?: string, collection?: any): TResult;
}

interface StringRepresentable {
    toString(): string;
}
