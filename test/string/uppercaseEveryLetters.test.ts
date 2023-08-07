import { describe, expect, it } from 'vitest'
import uppercaseEveryLetters from '../../src/playground/string/uppercaseEveryLetters'

describe('uppercaseEveryLetters', () => {
  it('returns empty string if input is empty string', () => {
    expect(uppercaseEveryLetters('')).toBe('')
  })

  it('capitalizes first letter of string', () => {
    expect(uppercaseEveryLetters('hello world') === 'HELLO WORLD').toBe(true)
    expect(uppercaseEveryLetters('vue') === 'VUE').toBe(true)
    expect(uppercaseEveryLetters('thank you JavaScript') === 'THANK YOU JAVASCRIPT').toBe(true)
  })

  it('does not change capitalization of subsequent letters', () => {
    expect(uppercaseEveryLetters('hELLO') === 'hELLO').toBe(false)
    expect(uppercaseEveryLetters('World') === 'world').toBe(false)
    expect(uppercaseEveryLetters('jAVAscript') === 'JAvascript').toBe(false)
  })
})
