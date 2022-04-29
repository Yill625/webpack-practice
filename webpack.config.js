const path = require('path');

const config = {
  mode: 'development', // 模式
  entry: './src/main.css', // 打包入口地址
  output: {
    filename: 'main.css', // 输出文件名
    path: path.join(__dirname, 'dist') // 输出文件目录
  }
}

module.exports = config