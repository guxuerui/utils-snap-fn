/**
 * 判断是否为Safari浏览器
 * @returns 返回布尔值，true表示是Safari浏览器，false表示不是
 */

export default function isSafari() {
  return /Safari/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent)
}
