import commonjs from '@rollup/plugin-commonjs';
import resolver from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import {default as esbuildPlugin} from 'rollup-plugin-esbuild';
import json from '@rollup/plugin-json';
import path, {resolve} from 'path';
import alias from '@rollup/plugin-alias';
const {default: esbuild} = esbuildPlugin;

/** @type{import('rollup').InputOptions} */
export default {
    input: './src/index.ts',
    output: {
        file: path.resolve(__dirname, '../dist/index.js'),
        format: 'cjs'
    },
    plugins: [
        alias({
            entries: [
                {find: '@', replacement: resolve(__dirname, '../src')}
            ]
        }),
        json(),
        commonjs(),
        resolver({
            extensions: ['.mjs', '.js', '.ts', '.json', '.node']
        }),
        esbuild(),
        babel({
            babelHelpers: 'bundled'
        })
    ]
};
