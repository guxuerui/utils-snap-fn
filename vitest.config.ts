import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    environment: 'node',
    globals: true,
    threads: false,
    watch: false,
    include: ['**/*.test.{js,tsx,ts}'],
  },
})
