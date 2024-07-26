import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import json from '@rollup/plugin-json';
import typescript from 'rollup-plugin-typescript2';
import dts from 'rollup-plugin-dts';

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: 'dist/index.cjs.js',
        format: 'cjs',
        sourcemap: true,
        exports: 'auto',
      },
      {
        file: 'dist/index.esm.js',
        format: 'es',
        sourcemap: true,
      },
    ],
    plugins: [
      resolve(), // Resolves node_modules imports
      commonjs(), // Converts CommonJS modules to ES6
      json(),
      typescript({
        rollupCommonJSResolveHack: false,
        clean: true,
      }),
      terser(), // Minifies the bundle
    ],
  },
  {
    input: 'dist/index.d.ts',
    output: [{ file: 'dist/index.d.mts', format: 'es' }],
    plugins: [dts()],
  },
];
