import { nodeResolve } from '@rollup/plugin-node-resolve'
import postcss from 'rollup-plugin-postcss'
import commonjs from "@rollup/plugin-commonjs"
import typescript from '@rollup/plugin-typescript'

const extensions = ['.js', '.jsx', '.ts', '.tsx']

/**
 * @type {import("rollup").RollupOptions}
 */
const config = {
  external: ['react'],
  input: './src/index.ts',
  output: {
    file: 'dist/index.js',
    format: 'esm',
    sourcemap: true,
  },
  plugins: [
    nodeResolve({ extensions }),
    commonjs(),
    postcss({ extract: "styles/index.css", modules: true }),
    typescript(),
  ],
}

export default config
