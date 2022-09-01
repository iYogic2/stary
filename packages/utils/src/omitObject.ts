import { cloneDeep } from 'lodash';
/**
 * @description 判断给定对象内包含的，包含和不包含的集合格式多少
 * @param (paramObj,filterArray)  paramObj给定的对象，filterArray过率的数组
 * @returns [inlineObj,outSideObj] inlineObj包含的对象集合 outSideObj不包含的对象集合
 * @example
 *      omitObject(paramObj:{a:1,b:3}, filterArray: ["a"]) // [{a:1},{b:3}]
 *      omitObject(paramObj:{a:1,b:3}, filterArray: []) // [{a:1,b:3},{}]
 *      omitObject(paramObj:{a:1,b:3}, filterArray: ["c"]) // [{},{a:1,b:3}]
 */

export interface paramObj {
  [key: string]: any;
}
export type filterArray = string[] | [];

export default function omitObject(paramObj: paramObj, filterArray: filterArray) {
  if (!(paramObj && typeof paramObj === 'object' && Object.prototype.toString.call(paramObj).includes('Object'))) {
    return [{}, {}];
  }

  const paramObjCopy = cloneDeep(paramObj);
  const inlineObj: paramObj = {};
  let outSideObj: paramObj = {};

  if (filterArray && Array.isArray(filterArray)) {
    filterArray.forEach((item) => {
      if (paramObjCopy[item]) {
        inlineObj[item] = paramObjCopy[item];
        delete paramObjCopy[item];
      }
    });
  }
  outSideObj = paramObjCopy;

  return [inlineObj, outSideObj];
}
