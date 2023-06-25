/*
 * @Author: Mr-Nobody-li
 * @Date: 2022-07
 * @LastEditors: Mr-Nobody-li
 * @LastEditTime: 2023-06
 * @Description:eslint
 */
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    'padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        prev: ['function', 'export'],
        next: ['function', 'export'],
      },
      { blankLine: 'always', prev: 'const', next: 'block-like' },
      { blankLine: 'always', prev: 'block-like', next: 'const' },
    ],
    'no-undef': 'warn',
    // 数组函数需要有返回值
    'array-callback-return': 'error',
    // 函数复杂度不能超过20
    complexity: ['error', { max: 20 }],
    // 使用 === 而不是 ==
    eqeqeq: ['error', 'smart'],
    // 当存在更简单的替代方案时，不允许使用三元运算符
    'no-unneeded-ternary': 'error',
    // 强制块语句的最大可嵌套深度
    'max-depth': ['error', 3],
    // 限制函数定义中最大参数个数
    'max-params': ['error', 4],
    // 强制回调函数最大嵌套深度
    'max-nested-callbacks': [1, 3],
    // 强制文件的最大行数
    'max-lines': ['warn', 300],
    // 建议使用const
    'prefer-const': [
      'error',
      {
        // 在解构中，所有变量都应该是const
        destructuring: 'all',
      },
    ],
    // 使用点号
    'dot-notation': 'error',
    // 适配eslint 未使用的变量
    '@typescript-eslint/no-unused-vars': 'error',
    // 允许非空断言
    '@typescript-eslint/no-non-null-assertion': 'off',
    // 允许自定义模块和命名空间
    '@typescript-eslint/no-namespace': 'off',
    // 允许对this设置alias
    '@typescript-eslint/no-this-alias': 'off',
    // 允许使用any类型
    '@typescript-eslint/no-explicit-any': ['off'],
    // 强制定义对象时使用interface，而不是type
    '@typescript-eslint/consistent-type-definitions': 'warn',
    // interface,type,enum需要使用大驼峰
    '@typescript-eslint/naming-convention': [
      'warn',
      { selector: ['interface', 'typeAlias', 'enum'], format: ['PascalCase'] },
    ],
    // 强制标签自闭合
    'vue/html-self-closing': [
      'warn',
      {
        html: {
          void: 'always',
          normal: 'never',
          component: 'always',
        },
        svg: 'always',
        math: 'always',
      },
    ],
    // 添加组件命名忽略规则
    'vue/multi-word-component-names': [
      'warn',
      {
        ignores: ['index'], // 在这个数组中加入需要忽略的组件名
      },
    ],
    // 要求组件的非必选 props 声明默认值
    'vue/require-default-prop': 'off',
    // 强制组件的 props 属性中的属性名必须为短横线
    'vue/v-on-event-hyphenation': 'off',
    // 在单行元素的内容前后需要换行
    'vue/singleline-html-element-content-newline': 'off',
    // 对自定义props强制使用属性命名样式(短横线)
    'vue/attribute-hyphenation': 'off',
  },
}
