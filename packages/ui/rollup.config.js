const config = require('@theshop/rollup')

module.exports = config.generateRollupConfig({
    packageDir: __dirname,
    entrypoint: './src/index.ts',
    minify: false,
    scss: true,
    react: {
        runtime: 'automatic',
    },
})
