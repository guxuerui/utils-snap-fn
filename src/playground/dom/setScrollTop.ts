/**
 * @param value 滚动的距离
*/

export default function setScrollTop(value: number): void {
  window.scrollTo({ top: value, behavior: 'smooth' })
}
