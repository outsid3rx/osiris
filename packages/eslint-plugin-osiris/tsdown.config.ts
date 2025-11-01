import { defineConfig } from 'tsdown'

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs'],
  target: 'node14',
  clean: true,
  dts: true,
  sourcemap: true,
})
