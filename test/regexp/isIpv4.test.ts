import { describe, expect, it } from 'vitest'
import isIpv4 from '../../src/playground/regexp/isIpv4'

describe('isIpv4', () => {
  it('should return true when given a valid IPV4 address', () => {
    expect(isIpv4('0.0.0.0')).toBe(true)
    expect(isIpv4('192.168.0.1')).toBe(true)
    expect(isIpv4('255.255.255.255')).toBe(true)
  })

  it('should return false when given an invalid IPV4 address', () => {
    expect(isIpv4('256.0.0.0')).toBe(false)
    expect(isIpv4('192.168.0.')).toBe(false)
    expect(isIpv4('192.168.0.1.2')).toBe(false)
  })
})
