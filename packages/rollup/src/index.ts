import path from 'node:path'

import babel from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'
import resolve from '@rollup/plugin-node-resolve'
import terser from '@rollup/plugin-terser'
import builtins from 'builtin-modules'
import postcss from 'rollup-plugin-postcss'
import preserveDirectives from 'rollup-plugin-preserve-directives'
import {typescriptPaths} from 'rollup-plugin-typescript-paths'

import type {RollupOptions, OutputOptions, ModuleFormat} from 'rollup'

const SUPPORT_MODULES: readonly ModuleFormat[] = ['cjs', 'esm']

interface GenerateRollupConfigOptions {
    entrypoint: string | Record<'index' & string, string>
    packageDir: string
    extensions?: string[]
    react: false | {runtime: 'classic' | 'automatic'}
    scss: false
    supportModules?: readonly ModuleFormat[]
}

export function generateRollupConfig({
    entrypoint,
    packageDir,
    extensions = ['.ts', '.tsx'],
    react = {runtime: 'classic'},
    scss = false,
    supportModules = SUPPORT_MODULES,
}: GenerateRollupConfigOptions): RollupOptions[] {
    const packageJSON = require(path.join(packageDir, 'package.json'))

    const outputPath = packageJSON.exports ? packageJSON.exports['.'] : packageJSON.main

    const input: Record<'index' | string, string> =
        typeof entrypoint === 'string'
            ? {index: path.join(packageDir, entrypoint)}
            : Object.fromEntries(Object.entries(entrypoint).map(([key, value]) => [key, path.join(packageDir, value)]))

    return supportModules.map((module) => {
        const isCommonJS = module === 'cjs'
        const isESM = module === 'esm'

        const buildOutput =
            typeof outputPath === 'object'
                ? normalizeOutput(isCommonJS ? outputPath.require : outputPath.import)
                : outputPath

        const output: OutputOptions[] = [
            {
                format: module,
                dir: path.dirname(buildOutput),
                ...(isESM
                    ? {
                          entryFileNames: `[name]${path.extname(buildOutput)}`,
                          preserveModulesRoot: path.dirname(input.index),
                          preserveModules: true,
                          interop: 'esModule',
                      }
                    : {
                          exports: 'auto',
                          interop: 'auto',
                      }),
            },
        ]

        const plugins = [
            typescriptPaths({preserveExtensions: true, tsConfigPath: path.join(packageDir, 'tsconfig.json')}),
            resolve({
                extensions,
            }),
            commonjs(),
            babel({
                babelHelpers: 'bundled',
                exclude: /node_modules/,
                extensions,
                presets: getBabelPresets({react}),
                plugins: [
                    ['@babel/plugin-proposal-decorators', {version: '2022-03'}],
                    '@babel/plugin-transform-class-properties',
                ],
            }),
            json(),
            ...(scss === false
                ? []
                : [
                      postcss({
                          modules: true,
                          extensions: ['.scss'],
                          use: {
                              sass: {
                                  includePaths: [path.resolve('node_modules')],
                              },
                              stylus: undefined,
                              less: undefined,
                          },
                      }),
                  ]),
            terser(),
            preserveDirectives(),
        ]

        return {
            input,
            output,
            plugins,
            external: [
                ...Object.keys(packageJSON?.dependencies || []),
                ...Object.keys(packageJSON?.peerDependencies || []),
                ...builtins,
                ...(react && react.runtime === 'automatic' ? ['react/jsx-runtime'] : []),
            ],
        }
    })
}

function normalizeOutput(exportPath: string | {default: string}) {
    return typeof exportPath === 'string' ? exportPath : exportPath?.default
}

function getBabelPresets({react}: Pick<GenerateRollupConfigOptions, 'react'>) {
    const presetEnvironment = [
        '@babel/preset-env',
        {
            useBuiltIns: 'usage',
            corejs: {version: 3.29, proposals: false},
        },
    ]

    if (!react) {
        return [presetEnvironment, '@babel/preset-typescript']
    }

    return [presetEnvironment, '@babel/preset-typescript', ['@babel/preset-react', {runtime: react.runtime}]]
}
