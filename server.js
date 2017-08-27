const express = require('express')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')

const app = express()
const config = require('./webpack.config.js')
const compiler = webpack(config)

app.use(webpackDevMiddleware(compiler, {
  publicPush: config.output.publicPath
}))

const port = 3000
app.listen(port, () => {
  console.log(`应用正在监听本机${port}端口。`)
})