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
  },
  module: {
    // 规则列表
    rules: [
      // 第一个规则
      {
        // 使用正则找到所有的 .css 文件
        test: /\.css$/,
        // 加载器列表
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(gif|png|jpg|svg)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  }
}
