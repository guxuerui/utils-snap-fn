/**
 * 判断是否为邮箱地址
 * @param str 待测试的邮箱地址
 * @returns 返回布尔值，true表示是邮箱地址，false表示不是
 */

export default function isEmail(str: string): boolean {
  return /^(?=.{1,254}$)[A-Za-z0-9._%+-]+@(?:[A-Za-z0-9-]+\.)+[A-Za-z]{2,}$/.test(str)
}
