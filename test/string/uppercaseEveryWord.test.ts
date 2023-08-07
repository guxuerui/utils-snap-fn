import { describe, expect, it } from 'vitest'
import uppercaseEveryWord from '../../src/playground/string/uppercaseEveryWord'

describe('uppercaseEveryWord', () => {
  it('returns empty string if input is empty string', () => {
    expect(uppercaseEveryWord('')).toBe('')
  })

  it('capitalizes first letter of string', () => {
    expect(uppercaseEveryWord('hello world') === 'Hello World').toBe(true)
    expect(uppercaseEveryWord('world') === 'World').toBe(true)
    expect(uppercaseEveryWord('thank you JavaScript') === 'Thank You JavaScript').toBe(true)
  })

  it('does not change capitalization of subsequent letters', () => {
    expect(uppercaseEveryWord('hELLO') === 'hELLO').toBe(false)
    expect(uppercaseEveryWord('World') === 'world').toBe(false)
    expect(uppercaseEveryWord('jAVAscript') === 'JAVASCRIPT').toBe(false)
  })
})
