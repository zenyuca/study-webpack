const path = require('path')

module.exports = {
  // 文件入口
  entry: './src/index.js',
  // 出口配置
  output: {
    // 打包完成的文件名
    filename: 'bundle.js',
    // 打包文件的输出路径
    path: path.resolve(__dirname, 'dist')
  }
}
