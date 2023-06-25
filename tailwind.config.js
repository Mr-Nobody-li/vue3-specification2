/*
 * @Author: yujingbo
 * @Date: 2022-12
 * @LastEditors: Mr-Nobody-li
 * @LastEditTime: 2023-06
 * @Description: tailwind.config
 */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,ts}'],
  theme: {
    extend: {},
    fontSize: {
      xs: '.75rem',
      sm: '.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
}
