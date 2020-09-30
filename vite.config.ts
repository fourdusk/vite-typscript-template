import { SharedConfig } from 'vite'
import path from 'path'

const pathResolve = (pathStr: string) => {
  return path.resolve(__dirname, pathStr)
}

const config: SharedConfig = {
  // 别名
  alias: {
    '@': pathResolve('./src')
  },
  // 不支持导出 ES module 的依赖包需要添加
  optimizeDeps: {
    include: []
  },
  // css 预处理器参数选项
  cssPreprocessOptions: {
    less: {
      modifyVars: {}
    }
  }
}

module.exports = config
