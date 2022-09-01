import { defineConfig } from 'rollup';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';

export default defineConfig({
  input: './src/index.ts',
  external: ['lodash', /node_modules/],
  output: [
    {
      file: 'dist/esm/bundle.esm.js',
      format: 'esm'
    },
    {
      file: 'dist/umd/index.umd.js',
      format: 'umd',
      name: 'starryUtils"'
    }
  ],
  plugins: [typescript(), resolve()],
  watch: {
    exclude: 'node_modules/**'
  }
});
