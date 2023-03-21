export default function isMobile(v: string | number): boolean {
  return /^1[0-9][0-9]\d{8}$/.test(`${v}`)
}
