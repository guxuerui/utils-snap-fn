/**
 * 判断是否为IPV4地址
 * @param str 待测试的IP地址
 * @returns 返回布尔值，true表示是IPV4地址，false表示不是
 */

export default function isIpv4(str: string): boolean {
  return /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(str)
}
