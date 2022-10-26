module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier'
  ],
  plugins: ['@typescript-eslint'],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 'latest',
    sourceType: 'module',
    jsxPragma: 'React',
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    'no-debugger':
      process.env.NODE_ENV === 'development' ? 'off' : 'error',
    'no-undef': 'off',
    // 数组函数需要有返回值
    'array-callback-return': 'error',
    // 函数复杂度不能超过20
    complexity: ['error', { max: 20 }],
    // 使用 === 而不是 ==
    eqeqeq: ['error', 'smart'],
    // 多个运算符需要用（）分隔
    // 'no-mixed-operators': 'error',
    // 当存在更简单的替代方案时，不允许使用三元运算符
    'no-unneeded-ternary': 'error',
    // 强制块语句的最大可嵌套深度
    'max-depth': ['error', 4],
    // 限制函数定义中最大参数个数
    'max-params': ['error', 3],
    // 强制回调函数最大嵌套深度
    'max-nested-callbacks': [1, 3],
    // 强制文件的最大行数
    'max-lines': ['error', 300],
    // 建议使用const
    'prefer-const': [
      'error',
      {
        // 在解构中，所有变量都应该是const
        destructuring: 'all'
      }
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
    // 强制标签自闭合
    'vue/html-self-closing': [
      'warn',
      {
        html: {
          void: 'always',
          normal: 'never',
          component: 'always'
        },
        svg: 'always',
        math: 'always'
      }
    ]
  }
}
