import { describe, expect, it } from 'vitest'
import isIdCard from '../src/playground//regexp/isIdCard'

describe('isIdCard', () => {
  it('should return true when given a valid IdCard value', () => {
    expect(isIdCard('110101199003076119')).toBe(true)
    expect(isIdCard('13068219990824103X')).toBe(true)
    expect(isIdCard('11010119900307611x')).toBe(true)
  })

  it('should return false when given a invalid IdCard value', () => {
    expect(isIdCard('123456')).toBe(false)
    expect(isIdCard('11010119900307611')).toBe(false)
    expect(isIdCard('1321010119900307611')).toBe(false)
    expect(isIdCard('11010119900307611@')).toBe(false)
  })
})
