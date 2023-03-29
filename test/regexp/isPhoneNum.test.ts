import { describe, expect, it } from 'vitest'
import isPhoneNum from '../../src/playground/regexp/isPhoneNum'

describe('isPhoneNum', () => {
  it('should return true for valid China mobile phone number', () => {
    expect(isPhoneNum('13912345678')).toBe(true)
    expect(isPhoneNum('18776543210')).toBe(true)
    expect(isPhoneNum(15898765432)).toBe(true)
    expect(isPhoneNum('19234567890')).toBe(true)
  })

  it('should return false for invalid China mobile phone number', () => {
    expect(isPhoneNum('12345678901')).toBe(false)
    expect(isPhoneNum('136123456789')).toBe(false)
    expect(isPhoneNum('hello world')).toBe(false)
    expect(isPhoneNum('')).toBe(false)
    expect(isPhoneNum(undefined)).toBe(false)
    expect(isPhoneNum(null)).toBe(false)
    expect(isPhoneNum(12345678901)).toBe(false)
    expect(isPhoneNum(1234567890)).toBe(false)
    expect(isPhoneNum(123456789012)).toBe(false)
    expect(isPhoneNum('1234567890a')).toBe(false)
    expect(isPhoneNum('a12345678901')).toBe(false)
  })
})
