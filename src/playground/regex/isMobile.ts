/**
 * 判断输入的字符串或数字是否为中国大陆手机号码
 * @param v - 待判断的字符串或数字
 * @returns 返回布尔值，true表示是中国大陆手机号码，false表示不是
 */

export default function isMobile(v: string | number): boolean {
  return /^1[0-9][0-9]\d{8}$/.test(`${v}`)
}
