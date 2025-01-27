import path from 'node:path'

/** @type { import('@storybook/react-webpack5').StorybookConfig } */
const config = {
    stories: [
        '../stories/**/*.stories.tsx',
        '../../../packages/**/*.mdx',
        '../../../packages/**/*.stories.@(js|jsx|mjs|ts|tsx)',
    ],

    addons: [
        getAbsolutePath('@storybook/addon-links'),
        getAbsolutePath('@storybook/addon-essentials'),
        getAbsolutePath('@storybook/addon-onboarding'),
        getAbsolutePath('@storybook/addon-interactions'),
        {
            name: '@storybook/addon-styling-webpack',
            options: {
                rules: [
                    {
                        test: /\.(css|scss|sass)$/i,
                        use: [
                            'style-loader',
                            'css-loader',
                            {
                                loader: 'sass-loader',
                                options: {
                                    implementation: require('sass'),
                                    sassOptions: {
                                        includePaths: ['node_modules/'],
                                    },
                                },
                            },
                        ],
                    },
                ],
            },
        },
        '@storybook/addon-webpack5-compiler-swc',
    ],

    framework: {
        name: getAbsolutePath('@storybook/react-webpack5'),
        options: {
            builder: {},
        },
    },

    swc: () => ({
        jsc: {
            transform: {
                react: {
                    runtime: 'automatic',
                },
            },
        },
    }),

    docs: {},

    typescript: {
        reactDocgen: 'react-docgen-typescript',
    },
}
export default config

function getAbsolutePath(value) {
    return path.dirname(require.resolve(path.join(value, 'package.json')))
}
