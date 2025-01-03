import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import json from '@rollup/plugin-json';
import typescript from 'rollup-plugin-typescript2';
import dts from 'rollup-plugin-dts';

export default [
  // Generate bundles for ESM/CommonJS
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
    external: ['axios'],
    plugins: [
      resolve(),
      commonjs(),
      json(),
      typescript({
        rollupCommonJSResolveHack: false,
        clean: true,
      }),
      terser(),
    ],
  },
  // Generate a .d.ts file to group all types
  {
    input: 'dist/index.d.ts',
    output: [{ file: 'dist/index.d.mts', format: 'es' }],
    plugins: [dts()],
  },
];
