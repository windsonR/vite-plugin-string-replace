import { defineConfig } from 'tsup'

export default defineConfig({
  entry: [
    './src/index.ts'
  ],
  sourcemap: true,
  splitting: false,
  dts: true,
  format: ['esm', 'cjs']
})
