import { describe, expect, it } from 'vitest'
import generateRandomNum from '../../src/playground/random/randomNum'

describe('generateRandomNum', () => {
  it('should generate a random num of min and max', () => {
    const min = 1
    const max = 10
    const result = generateRandomNum(min, max)
    expect(result >= min).toBe(true)
    expect(result <= max).toBe(true)
    expect(typeof result === 'number').toBe(true)
  })

  it('should generate a random num', () => {
    const min = 1
    const max = 10
    const result = generateRandomNum(min, max)
    expect(result < min).toBe(false)
    expect(result > max).toBe(false)
    expect(typeof result === 'string').toBe(false)
  })
})
