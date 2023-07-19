/**
 * @returns 随机生成的色值
 * @description 随机生成十六进制的颜色色值
 */
import randomNum from './randomNum'

export default function randomColor(type?: string, opacity?: number) {
  switch (type) {
    case 'hex':
      return `#${(`00000${(Math.random() * 0x1000000 << 0).toString(16)}`).slice(-6)}`
    case 'rgb':
      return `rgba(${randomNum(0, 255)}, ${randomNum(0, 255)}, ${randomNum(0, 255)}, ${opacity ?? 1})`
    default:
      return ''
  }
}
