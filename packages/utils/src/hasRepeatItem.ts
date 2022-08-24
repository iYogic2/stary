/**
 * @description 判断数组内的元素有没有重复的
 * @description 数组内的元素一定是简单数据类型，可比较的，复杂类型将永远返回true，失去了对比的意义
 * @returns boolean
 * @example
 *      var a = null // hasRepeatItem(a) => Error
 *      var a = [] // hasRepeatItem(a) => false
 *      var a = [1,2] // hasRepeatItem(a) => false
 *      var a = [1,1,2,3] // hasRepeatItem(a) => true
 *      var a = ['1','2','3','1'] // hasRepeatItem(a) => true
 */

type TrepeatItem = string | number | boolean | null | undefined;
type IrepeatArray = TrepeatItem[];

export function hasRepeatItem(array: IrepeatArray): boolean {
  if (array && Array.isArray(array)) {
    const newAarry = Array.from(new Set(array));
    return !(newAarry.length === array.length);
  } else {
    throw new Error('数据必须是数组');
  }
}
