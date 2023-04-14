/**
 *
 * @param str 待处理的字符串
 * @returns 首字母大写的字符串
 * @description 将字符串的首字母转为大写并返回
**/

export default function capitalsFirstLetter(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1)
}
