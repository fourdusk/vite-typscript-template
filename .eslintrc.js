// 参考文档 https://segmentfault.com/a/1190000017461203
module.exports = {
  // 根目录标识
  root: true,
  // 解析器
  parser: 'vue-eslint-parser',
  // 解析器配置项
  parserOptions: {
    // 这里的 parser 是针对 .vue 文件的
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    ecmaVersion: 2020,
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      globalReturn: true,
      impliedStrict: true,
      jsx: true
    }
  },
  // 运行环境
  env: {
    browser: true,
    node: true
  },
  // 自定义全局变量
  globals: {},
  // 插件
  plugins: ['vue'],
  // 扩展规则
  extends: [
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended'
  ],
  // 规则共享参数
  settings: {},
  // 针对特定文件的配置
  overrides: [],
  // 自定义规则
  rules: {
    'vue/no-deprecated-props-default-this': 0,
    'vue/experimental-script-setup-vars': 0,
    'vue/singleline-html-element-content-newline': 0
  }
}
