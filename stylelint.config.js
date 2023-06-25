/*
 * @Author: Mr-Nobody-li
 * @Date: 2022-07
 * @LastEditors: Mr-Nobody-li
 * @LastEditTime: 2023-06
 * @Description: stylelint配置文件
 */
module.exports = {
  extends: ['stylelint-config-recess-order', 'stylelint-config-standard-vue'],
  ignoreFiles: ['**/*.js', '**/*.jsx', '**/*.tsx', '**/*.ts'],
  defaultSeverity: 'error',
  rules: {
    'no-empty-source': null,
    'selector-class-pattern': null,
  },
}
