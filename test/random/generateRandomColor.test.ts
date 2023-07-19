import { assert, describe, expect, it } from 'vitest'
import randomColor from '../../src/playground/random/randomColor'

describe('generateRandomColor', () => {
  it('should returns a string', () => {
    expect(typeof randomColor('hex') === 'string').toBe(true)
  })

  it('should returns a valid hex color', () => {
    const color = randomColor('hex')
    assert.match(color, /^#[0-9A-F]{6}$/i)
  })
})
