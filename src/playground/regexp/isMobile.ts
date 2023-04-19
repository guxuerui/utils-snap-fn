/**
 * 判断是否为移动端设备
 * @returns 返回布尔值，true表示是移动端设备，false表示不是
 */

export default function isMobile() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
}
