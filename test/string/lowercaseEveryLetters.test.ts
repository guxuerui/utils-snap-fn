import { describe, expect, it } from 'vitest'
import lowercaseEveryLetters from '../../src/playground/string/lowercaseEveryLetters'

describe('lowercaseEveryLetters', () => {
  it('returns empty string if input is empty string', () => {
    expect(lowercaseEveryLetters('')).toBe('')
  })

  it('lowercase every letter of string', () => {
    expect(lowercaseEveryLetters('HELLO WORLD', 'en') === 'hello world').toBe(true)
    expect(lowercaseEveryLetters('VUE') === 'vue').toBe(true)
    expect(lowercaseEveryLetters('THANK YOU JAVASCRIPT') === 'thank you javascript').toBe(true)
  })

  it('does not change lowercase of subsequent letters', () => {
    expect(lowercaseEveryLetters('Hello') === 'HELLO').toBe(false)
    expect(lowercaseEveryLetters('World') === 'WORLD').toBe(false)
    expect(lowercaseEveryLetters('jAVAscript') === 'JAVASCRIPT').toBe(false)
  })
})
