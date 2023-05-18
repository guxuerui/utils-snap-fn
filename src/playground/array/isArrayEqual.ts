/**
 * 判断两个数组是否相等(数组内元素是否相同)
 * @param arr1 arr2 待比较的数组
 * @returns 返回布尔值，true表示相等，false表示不相等
 * @description 首先判断两个数组是否同一引用，如果是就直接返回 true; 如果其中一个数组是 null 或 undefined 就返回 false; 如果两个数组长度不同就返回 false; 最后遍历每个元素进行对比，如果任意一个元素不相等就返回 false ，否则返回 true
 */

export default function isArrayEqual(arr1: any[], arr2: any[]): boolean {
  if (arr1 === arr2)
    return true

  if (arr1 instanceof Date && arr2 instanceof Date)
    return arr1.getTime() === arr2.getTime()

  if (!arr1 || !arr2 || (typeof arr1 !== 'object' && typeof arr2 !== 'object'))
    return arr1 === arr2

  // This means the elements are objects
  // If they are not the same type of objects
  // @ts-expect-error required
  if (arr1.prototype !== arr2.prototype)
    return false

  const keys = Object.keys(arr1)
  if (keys.length !== Object.keys(arr2).length)
    return false

  // Check recursively for every key in both
  return keys.every((k: any) => isArrayEqual(arr1[k], arr2[k]))
}
