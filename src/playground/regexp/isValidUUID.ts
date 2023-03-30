/**
 * 判断输入的字符串是否为合法的UUID
 * @param str - 待判断的字符串
 * @returns 返回布尔值，true表示是合法的UUID，false表示不是
 */

export default function isValidUUID(str: string) {
  return /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[4][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}$/.test(str)
}
