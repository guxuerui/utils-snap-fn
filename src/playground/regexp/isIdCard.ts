/**
 * 判断输入的字符串或数字是否为身份证号码
 * @param str - 待判断的字符串或数字
 * @returns 返回布尔值，true表示是身份证号码，false表示不是
 */

export default function isIdCard(str: string | number): boolean {
  return /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/.test(`${str}`)
}
