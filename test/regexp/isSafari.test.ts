import { assert, describe, it } from 'vitest'
import { JSDOM } from 'jsdom'
import isSafari from '../../src/playground/regexp/isSafari'

describe('isSafari', () => {
  const dom = new JSDOM('<!DOCTYPE html><p>Hello world</p>')
  Object.defineProperty(global, 'navigator', {
    value: dom.window.navigator,
    writable: true,
  })
  it('should return true when userAgent is Safari', () => {
    Object.defineProperty(global.navigator, 'userAgent', {
      value: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Safari/537.36',
      writable: true,
    })
    assert.equal(isSafari(), true)
  })
  it('should return false when userAgent is Chrome', () => {
    Object.defineProperty(global.navigator, 'userAgent', {
      value: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.81 Safari/537.36',
      writable: true,
    })
    assert.equal(isSafari(), false)
  })
})
