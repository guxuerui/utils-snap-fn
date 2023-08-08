/**
 * @param str 待处理的字符串
 * @param locale 区域语言
 * @returns 每个单词全部字母小写的字符串
 * @description 将字符串中的每个单词全部母转为小写并返回
**/

export default function lowercaseEveryLetters(str: string, locale?: string | string[]): string {
  return str.replace(/\b\w+/g, (match: string) => match.toLocaleLowerCase(locale))
}
