import typescript from '@rollup/plugin-typescript'
import dts from 'rollup-plugin-dts'

const input = 'src/index.ts'

export default [
  // ── Config 1: bundle the JavaScript (both formats) ──
  {
    input,
    output: [
      {
        file: 'dist/index.mjs',
        format: 'esm',
        sourcemap: true,
      },
      {
        file: 'dist/index.cjs',
        format: 'cjs',
        sourcemap: true,
        exports: 'named',
      },
    ],
    plugins: [
      typescript({
        tsconfig: './tsconfig.json',
        declaration: false,
        declarationMap: false,
      }),
    ],
  },

  // ── Config 2: bundle the type declarations ──
  {
    input,
    output: [
      { file: 'dist/index.d.ts', format: 'esm' },
      { file: 'dist/index.d.cts', format: 'esm' },
    ],
    plugins: [dts()],
  },
]