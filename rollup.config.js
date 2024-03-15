import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import terser from '@rollup/plugin-terser'
import typescript from '@rollup/plugin-typescript'
import excludeDependenciesFromBundle from 'rollup-plugin-exclude-dependencies-from-bundle'
import filesize from 'rollup-plugin-filesize'

/** @type {import('rollup').RollupOptions} */
export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/index.js',
      format: 'es'
    }
  ],
  plugins: [
    nodeResolve(),
    commonjs(),
    json(),
    typescript({ tsconfig: 'tsconfig.build.json' }),
    excludeDependenciesFromBundle(),
    terser(),
    filesize()
  ]
}
