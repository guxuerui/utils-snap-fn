import { describe, expect, it } from 'vitest'
import isMobile from '../../src/playground/regexp/isMobile'

describe('isMobile', () => {
  it('should return true when user agent is from mobile device', () => {
    const mobileUA = 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0.1 Mobile/15E148 Safari/604.1'
    Object.defineProperty(window.navigator, 'userAgent', { value: mobileUA, writable: true })
    expect(isMobile()).toBe(true)
  })

  it('should return false when user agent is from desktop device', () => {
    const desktopUA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Safari/537.36'
    Object.defineProperty(window.navigator, 'userAgent', { value: desktopUA, writable: true })
    expect(isMobile()).toBe(false)
  })
})
