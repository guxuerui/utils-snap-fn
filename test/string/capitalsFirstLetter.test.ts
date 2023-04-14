import { describe, expect, it } from 'vitest'
import capitalsFirstLetter from '../../src/playground/string/capitalsFirstLetter'

describe('capitalsFirstLetter', () => {
  it('returns empty string if input is empty string', () => {
    expect(capitalsFirstLetter('')).toBe('')
  })

  it('capitalizes first letter of string', () => {
    expect(capitalsFirstLetter('hello') === 'Hello').toBe(true)
    expect(capitalsFirstLetter('world') === 'World').toBe(true)
    expect(capitalsFirstLetter('JavaScript') === 'JavaScript').toBe(true)
  })

  it('does not change capitalization of subsequent letters', () => {
    expect(capitalsFirstLetter('hELLO') === 'hELLO').toBe(false)
    expect(capitalsFirstLetter('World') === 'world').toBe(false)
    expect(capitalsFirstLetter('jAVAscript') === 'JAVASCRIPT').toBe(false)
  })
})
