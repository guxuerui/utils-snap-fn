/**
 * 判断两个数组是否相等
 * @param arr1 arr2 待比较的数组
 * @returns 返回布尔值，true表示相等，false表示不相等
 * @description 首先判断两个数组是否同一引用，如果是就直接返回 true; 如果其中一个数组是 null 或 undefined 就返回 false; 如果两个数组长度不同就返回 false; 最后遍历每个元素进行对比，如果任意一个元素不相等就返回 false ，否则返回 true
 */

export default function isArrayEqual(arr1: any[], arr2: any[]): boolean {
  if (arr1 === arr2)
    return true
  if (arr1 == null || arr2 == null)
    return false
  if (arr1.length !== arr2.length)
    return false

  for (let i = 0; i < arr1.length; ++i) {
    if (arr1[i] !== arr2[i])
      return false
  }

  return true
}
