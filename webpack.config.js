const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
  // 文件入口
  entry: {
    app: './src/index.js',
    print: './src/print.js'
  },
  // 出口配置
  output: {
    // 打包完成的文件名
    filename: '[name].bundle.js',
    // 打包文件的输出路径
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    // 自动生成 html 文件，文件自动关联所有打包好的资源
    new HtmlWebpackPlugin({
      title: 'Output Management'
    }),
    // 每次构建时都先删除 dist 文件夹，然后再生成它。
    new CleanWebpackPlugin(['dist'])
  ]
}
