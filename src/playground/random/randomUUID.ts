/**
 * 生成随机UUID
 * @returns 随机的UUID
 * @description 使用当前时间和 Math.random() 函数生成一个唯一的 UUID，其中包含 32 个十六进制字符和 4 个破折号
 */

export default function generateUUID() {
  let d = new Date().getTime()
  if (typeof performance !== 'undefined' && typeof performance.now === 'function')
    d += performance.now() // use high-precision timer if available

  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = (d + Math.random() * 16) % 16 | 0
    d = Math.floor(d / 16)
    return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16)
  })
}
