/**
 * @returns 随机生成的色值
 * @description 随机生成十六进制的颜色色值
 */

export default function randomColor() {
  return `#${(`00000${(Math.random() * 0x1000000 << 0).toString(16)}`).slice(-6)}`
}
