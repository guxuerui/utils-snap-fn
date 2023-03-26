import { describe, expect, it } from 'vitest'
import isMobile from '../../src/playground/regexp/isMobile'

describe('isMobile', () => {
  it('should return true for valid China mobile phone number', () => {
    expect(isMobile('13912345678')).toBe(true)
    expect(isMobile('18776543210')).toBe(true)
    expect(isMobile(15898765432)).toBe(true)
    expect(isMobile('19234567890')).toBe(true)
  })

  it('should return false for invalid China mobile phone number', () => {
    expect(isMobile('12345678901')).toBe(false)
    expect(isMobile('136123456789')).toBe(false)
    expect(isMobile('hello world')).toBe(false)
    expect(isMobile('')).toBe(false)
    expect(isMobile(undefined)).toBe(false)
    expect(isMobile(null)).toBe(false)
    expect(isMobile(12345678901)).toBe(false)
    expect(isMobile(1234567890)).toBe(false)
    expect(isMobile(123456789012)).toBe(false)
    expect(isMobile('1234567890a')).toBe(false)
    expect(isMobile('a12345678901')).toBe(false)
  })
})
