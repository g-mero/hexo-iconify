import babel from '@rollup/plugin-babel'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import terser from '@rollup/plugin-terser'
import json from '@rollup/plugin-json'

export default {
  input: 'src/index.ts', //入口文件
  output: {
    file: 'dist/hexo-iconify.js', //打包后的存放文件
    format: 'cjs', //输出格式 amd es6 iife umd cjs
  },
  plugins: [
    resolve({
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
    }),
    commonjs(),
    json(),
    babel({
      babelHelpers: 'bundled',
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
      exclude: 'mode_modules/**',
    }),
    terser(),
  ],
  external:['hexo-front-matter','hexo-fs','hexo-util','@iconify/utils','@iconify/json']
}
