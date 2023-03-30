import { describe, expect, it } from 'vitest'
import generateUUID from '../../src/playground/random/randomUUID'

describe('generateUUID', () => {
  it('should generate a valid UUID', () => {
    const uuid = generateUUID()
    const uuidRegex = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[4][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}$/
    expect(uuidRegex.test(uuid)).toBe(true)
  })

  it('should generate a unique UUID each time', () => {
    const uuid1 = generateUUID()
    const uuid2 = generateUUID()
    expect(uuid1 === uuid2).toBe(false)
  })
})
