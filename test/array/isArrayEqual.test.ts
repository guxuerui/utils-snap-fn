import { describe, expect, it } from 'vitest'
import isArrayEqual from '../../src/playground/array/isArrayEqual'

describe('isArrayEqual', () => {
  it('should return true when given two equal array', () => {
    expect(isArrayEqual([], [])).toBe(true)
    expect(isArrayEqual([1, 2, 3], [1, 2, 3])).toBe(true)
    expect(isArrayEqual(['1', '2', '3'], ['1', '2', '3'])).toBe(true)
  })

  it('should return false when given two not equal array', () => {
    expect(isArrayEqual([1, 2, 3], [1, 2, 4])).toBe(false)
    expect(isArrayEqual([1, 2, 3], [1, 2])).toBe(false)
    expect(isArrayEqual([1, 2, 3], [1, 2, 3, 4])).toBe(false)
    expect(isArrayEqual([1, 2, 3], [3, 2, 1])).toBe(false)
    expect(isArrayEqual(null, [3, 2, 1])).toBe(false)
    expect(isArrayEqual(['', '', ''], null)).toBe(false)
    expect(isArrayEqual(['', '', ''], undefined)).toBe(false)
    expect(isArrayEqual(['11', '2', '3'], ['1', '2', '3'])).toBe(false)
    expect(isArrayEqual(['', '', ''], [3, 2, 1])).toBe(false)
    expect(isArrayEqual([null, null, null], [1, 2, 3])).toBe(false)
  })
})
