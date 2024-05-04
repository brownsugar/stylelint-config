import typescript from 'rollup-plugin-typescript2'

const bundles = {
  scss: {
    cjs: true,
    es: true,
  },
}
export default Object.keys(bundles)
  .map(name => {
    const { cjs, es } = bundles[name]
    return {
      input: `src/${name}.ts`,
      output: [
        cjs && {
          dir: 'dist',
          format: 'cjs',
          entryFileNames: '[name].cjs',
        },
        es && {
          dir: 'dist',
          format: 'es',
          entryFileNames: '[name].mjs',
        },
      ],
      plugins: [
        typescript(),
      ],
    }
  })
