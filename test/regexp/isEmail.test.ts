import { describe, expect, it } from 'vitest'
import isEmail from '../../src/playground/regexp/isEmail'

describe('isEmail', () => {
  it('should return true when given a valid email address', () => {
    expect(isEmail('test@example.com')).toBe(true)
    expect(isEmail('test+123@example.com')).toBe(true)
    expect(isEmail('test-123@example.com')).toBe(true)
    expect(isEmail('test.123@example.com')).toBe(true)
    expect(isEmail('test_123@example.com')).toBe(true)
    expect(isEmail('test@sub.example.com')).toBe(true)
    expect(isEmail('test@example.co.uk')).toBe(true)
    expect(isEmail('test@example.io')).toBe(true)
  })

  it('should return false when given an invalid email address', () => {
    expect(isEmail('test')).toBe(false)
    expect(isEmail('test@')).toBe(false)
    expect(isEmail('test@example')).toBe(false)
    expect(isEmail('test@example.')).toBe(false)
    expect(isEmail('test@example..com')).toBe(false)
    expect(isEmail('test@.example.com')).toBe(false)
    expect(isEmail('test@sub.example..com')).toBe(false)
  })
})
