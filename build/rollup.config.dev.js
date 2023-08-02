import commonjs from '@rollup/plugin-commonjs';
import resolver from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import esbuild from 'rollup-plugin-esbuild';
import json from '@rollup/plugin-json';
import path from 'path';

export default {
    input: './src/index.ts',
    output: {
        file: path.resolve(__dirname, '../dist/index.js'),
        format: 'cjs'
    },
    plugins: [
        json(),
        resolver(),
        commonjs(),
        esbuild.default(),
        babel({
            babelHelpers: 'bundled'
        })
    ]
};
