import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';
import json from '@rollup/plugin-json';

export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/bundle.cjs.js',
      format: 'cjs',
      sourcemap: true,
      exports: 'auto',
    },
    {
      file: 'dist/bundle.esm.js',
      format: 'es',
      sourcemap: true,
    },
    {
      file: 'dist/bundle.umd.js',
      format: 'umd',
      name: 'PrintifySDKJavaScript',
      sourcemap: true,
    },
  ],
  plugins: [
    resolve(), // Resolves node_modules imports
    commonjs(), // Converts CommonJS modules to ES6
    json(),
    typescript(), // Compiles TypeScript
    terser(), // Minifies the bundle
  ],
};
