/**
 * 官方文档 https://prettier.io/docs/en/options.html
 */
module.exports = {
  // 一行不能超过多少个字符，超过强制换行，默认是 80
  printWidth: 120,
  // 每行缩进多少个空格，默认 2
  tabWidth: 2,
  // 是否使用 tab 键缩进，默认 false
  useTabs: false,
  // 末尾是否添加分号，默认 true
  semi: false,
  // 字符串是否使用单引号，默认 false
  singleQuote: true,
  // 对象键是否使用引号，默认 as-needed，(consistent，preserve，可选)
  quoteProps: 'as-needed',
  // jsx 是否使用单引号，默认 false
  jsxSingleQuote: false,
  // 对象，数组最后一个元素是否添加逗号，默认 es5 (none, all, 可选)
  trailingComma: 'none',
  // 对象，数组最左边和最右边是否添加空格，默认 true
  bracketSpacing: true,
  // jsx 第一个标签的尖括号是否换行，默认 false
  jsxBracketSameLine: false,
  proseWrap: 'preserve',
  // 箭头函数参数是否添加括号，默认 always
  arrowParens: 'avoid',
  // html 多余空格处理方式，默认 css (strict, ignore, 可选)
  htmlWhitespaceSensitivity: 'css',
  // vue 文件中的 script 和 style 标签的代码是否缩进
  vueIndentScriptAndStyle: false,
  // 每行结束的隐藏字符，默认 lf (crlf, cr, auto)
  endOfLine: 'auto'
}
