import { nodeResolve } from '@rollup/plugin-node-resolve'
import terser from '@rollup/plugin-terser'
import babel from '@rollup/plugin-babel'
import typescript from '@rollup/plugin-typescript'
import pkg from './package.json' assert { type: 'json' }

module.exports = {
  input: './src/main.ts',
  output: [
    {
      file: pkg.browser, // 输出路径
      format: 'umd', // 输出的模块协议 umd
      name: pkg.name,
      exports: 'named',
      sourcemap: true,
      esModule: false,
    },
    {
      file: pkg.module, // 输出路径
      format: 'esm', // 输出的模块协议 esm
      exports: 'named',
      sourcemap: true,
    },
    {
      file: pkg.main, // 输出路径
      format: 'cjs', // 输出的模块协议 cjs
      exports: 'named',
      sourcemap: true,
    },
  ],
  plugins: [
    nodeResolve(),
    babel({
      babelHelpers: 'bundled',
      exclude: 'node_modules/**', // 指定哪些文件夹时不进行babel编译的
    }),
    terser(),
    typescript(),
  ],
  external: [], // 表示哪些模块是外部引用, 即使开启了 resolve 这里面的模块仍然是外部引用
}
