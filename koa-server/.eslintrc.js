module.exports = {
    root: true,
    env: {
        es6: true,
        node: true,
        commonjs: true
    },
    extends: [
        'eslint:recommended'
    ],
    parserOptions: {
        sourceType: 'module'
    },
    overrides: [
        {
            files: ['*.ts'],
            parser: '@typescript-eslint/parser',
            extends: [
                'plugin:@typescript-eslint/recommended'
            ],
            plugins: [
                '@typescript-eslint'
            ],
            rules: {
                '@typescript-eslint/no-var-requires': [0]
            }
        }
    ],
    rules: {
        // 缩进
        indent: [2, 4],

        // 引号
        quotes: [2, 'single'],

        // 对象属性引号
        'quote-props': [2, 'as-needed'],

        // 对象最后一项不加,
        'comma-dangle': [2, 'never'],

        // 末尾加;
        semi: ['error', 'always'],

        // 行不允许空格
        'no-trailing-spaces': [2, {skipBlankLines: true}],

        // 大括号空格
        'object-curly-spacing': [2, 'never'],

        // if-else try-cache换行
        'brace-style': [2, 'stroustrup'],

        // 文件结尾空行
        'eol-last': [2, 'always'],

        // 空行的数量
        'no-multiple-empty-lines': [2, {max: 2, maxEOF: 1}]
    }
};
