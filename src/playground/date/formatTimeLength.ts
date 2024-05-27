/**
 * Format time length.
 * @param timeLength The time length in seconds.
 * @returns The formatted time length.
 *
*/

export default function formatTimeLength(timeLength: number) {
  if (timeLength < 60)
    return `${timeLength}秒`

  const minutes = Math.floor(timeLength / 60)
  const seconds = timeLength % 60

  if (timeLength < 3600)
    return `${minutes}分${seconds}秒`

  const hours = Math.floor(timeLength / 3600)
  const remainingMinutes = Math.floor((timeLength % 3600) / 60)
  const remainingSeconds = timeLength % 60

  if (timeLength < 86400)
    return `${hours}小时${remainingMinutes}分${remainingSeconds}秒`

  const days = Math.floor(timeLength / 86400)
  const remainingHours = Math.floor((timeLength % 86400) / 3600)
  const finalMinutes = Math.floor((timeLength % 3600) / 60)
  const finalSeconds = timeLength % 60

  return `${days}天${remainingHours}小时${finalMinutes}分${finalSeconds}秒`
}
