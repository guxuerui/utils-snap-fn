import { describe, expect, it, vi } from 'vitest'
import copyToClipboard from '../../src/playground/browser/copyToClipboard'

describe('copyToClipboard', () => {
  it('copyToClipboard writes text to clipboard', async () => {
    const data = 'hello world'
    const mockClipboard = {
      writeText: vi.fn(),
    }

    // Replace the global clipboard object with our mock
    // clipboard object for this test
    Object.defineProperty(window, 'navigator', {
      value: { clipboard: mockClipboard },
      configurable: true,
    })

    await copyToClipboard(data)

    expect(mockClipboard.writeText).toHaveBeenCalledWith(data)
  })

  it('copyToClipboard calls callback if provided', async () => {
    const data = 'hello world'
    const mockCallback = vi.fn()

    const mockClipboard = {
      writeText: vi.fn(),
    }

    // Replace the global clipboard object with our mock
    // clipboard object for this test
    Object.defineProperty(window, 'navigator', {
      value: { clipboard: mockClipboard },
      configurable: true,
    })

    await copyToClipboard(data, mockCallback)

    expect(mockCallback).toHaveBeenCalled()
  })

  it('copyToClipboard logs error to console', async () => {
    const data = null

    const mockClipboard = {
      writeText: vi.fn().mockRejectedValue(new Error('Clipboard write failed')),
    }

    // Replace the global clipboard object with our mock
    // clipboard object for this test
    Object.defineProperty(window, 'navigator', {
      value: { clipboard: mockClipboard },
      configurable: true,
    })

    const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => { })

    await copyToClipboard(data)

    expect(consoleSpy).toHaveBeenCalledWith(expect.any(String))

    consoleSpy.mockRestore()
  })
})
