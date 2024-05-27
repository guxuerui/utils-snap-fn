import { describe, expect, it } from 'vitest'
import formatTimeLength from '../../src/playground/date/formatTimeLength'

describe('formatTimeLength', () => {
  it('should return seconds when timeLength is less than 60', () => {
    expect(formatTimeLength(45)).toBe('45秒')
  })

  it('should return minutes and seconds when timeLength is between 60 and 3599', () => {
    expect(formatTimeLength(310)).toBe('5分10秒')
    expect(formatTimeLength(3599)).toBe('59分59秒')
  })

  it('should return hours, minutes, and seconds when timeLength is between 3600 and 86399', () => {
    expect(formatTimeLength(7383)).toBe('2小时3分3秒')
    expect(formatTimeLength(86399)).toBe('23小时59分59秒')
  })

  it('should return days, hours, minutes, and seconds when timeLength is 86400 or more', () => {
    expect(formatTimeLength(259200)).toBe('3天0小时0分0秒')
    expect(formatTimeLength(90061)).toBe('1天1小时1分1秒')
  })
})
