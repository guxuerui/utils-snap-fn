import { describe, expect, it } from 'vitest'
import isIpv6 from '../src/playground/regexp/isIpv6'

describe('isIpv6', () => {
  it('should return true when given a valid IPV6 address', () => {
    expect(isIpv6('2001:0db8:85a3:0000:0000:8a2e:0370:7334')).toBe(true)
    expect(isIpv6('2001:0DB8:85A3:0000:0000:8A2E:0370:7334')).toBe(true)
    expect(isIpv6('2001:0db8:85a3:0000:0000:8a2e:0370::')).toBe(true)
    expect(isIpv6('2001:0db8:85a3::8a2e:0370:7334')).toBe(true)
    expect(isIpv6('2001:db8::8a2e:370:7334')).toBe(true)
    expect(isIpv6('2001:0db8::1:0:0:1')).toBe(true)
    expect(isIpv6('::1')).toBe(true)
  })

  it('should return false when given an invalid IPV6 address', () => {
    expect(isIpv6('2001:0db8:85a3:0000:0000:8a2e:0370')).toBe(false)
    expect(isIpv6('2001:0db8:85a3g:0000:0000:8a2e:0370:7334')).toBe(false)
    expect(isIpv6('2001:0db8:85a3::8a2e:03707334')).toBe(false)
  })
})
