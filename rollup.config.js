import { nodeResolve } from '@rollup/plugin-node-resolve'
import terser from '@rollup/plugin-terser'
import babel from '@rollup/plugin-babel'
import typescript from '@rollup/plugin-typescript'
import pkg from './package.json' assert { type: 'json' }
const input = ['src/main.ts']
export default [
  {
    // UMD
    input,
    plugins: [
      nodeResolve({
        extensions: ['.js', '.ts'],
      }),
      babel({
        babelHelpers: 'bundled',
      }),
      terser(),
      typescript(),
    ],
    output: {
      file: `dist/${pkg.name}.min.js`,
      format: 'umd',
      name: pkg.name, // this is the name of the global object
      esModule: false,
      exports: 'named',
      sourcemap: true,
    },
  },
  // ESM and CJS
  {
    input,
    plugins: [
      nodeResolve({
        extensions: ['.js', '.ts'],
      }),
      typescript(),
    ],
    output: [
      {
        dir: 'dist/esm',
        format: 'esm',
        exports: 'named',
        sourcemap: true,
      },
      {
        dir: 'dist/cjs',
        format: 'cjs',
        exports: 'named',
        sourcemap: true,
      },
    ],
  },
]
