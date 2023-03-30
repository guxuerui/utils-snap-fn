import { describe, expect, it } from 'vitest'
import generateUUID from '../../src/playground/random/randomUUID'
import isValidUUID from '../../src/playground/regexp/isValidUUID'

describe('generateUUID', () => {
  it('should generate a valid UUID', () => {
    const uuid = generateUUID()
    expect(isValidUUID(uuid)).toBe(true)
  })

  it('should generate a unique UUID each time', () => {
    const uuid1 = generateUUID()
    const uuid2 = generateUUID()
    expect(uuid1 === uuid2).toBe(false)
  })
})
