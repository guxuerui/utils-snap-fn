import { describe, expect, it } from 'vitest'
import isArrayEqual from '../../src/playground/array/isArrayEqual'
import removeDuplicatesObj from '../../src/playground/array/removeDuplicatesObj'

interface User {
  id: number
  name: string
}

describe('removeDuplicatesObj should remove duplicate objects based on the given key', () => {
  const input: User[] = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
    { id: 3, name: 'John' },
    { id: 4, name: 'Bob' },
    { id: 5, name: 'Jane' },
  ]
  const expected: User[] = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
    { id: 4, name: 'Bob' },
  ]
  const actual = removeDuplicatesObj(input, 'name')
  it('should return true when given two equal array', () => {
    expect(isArrayEqual(actual, expected)).toBe(true)
  })

  it('removeDuplicatesObj should return an empty array if the input is empty', () => {
    const input: User[] = []
    const expected: User[] = []
    const actual = removeDuplicatesObj(input, 'name')
    expect(isArrayEqual(actual, expected)).toBe(true)
  })

  it('removeDuplicatesObj should return an empty array if the input is null or undefined', () => {
    const input = undefined
    const expected: User[] = [
      { id: 1, name: 'John' },
      { id: 2, name: 'Jane' },
      { id: 4, name: 'Bob' },
    ]
    const actual = removeDuplicatesObj(input, 'name')
    expect(isArrayEqual(actual, expected)).toBe(false)
  })
})
