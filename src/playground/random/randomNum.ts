/**
 *
 * @param min 最小值
 * @param max 最大值
 * @returns 生成的随机数
 * @description 生成指定范围[min, max]的随机数
 */

export default function randomNum(min: number, max: number): number {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}
