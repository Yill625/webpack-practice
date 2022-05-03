const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const MiniCssExtractPlugin= require('mini-css-extract-plugin')

module.exports = {
  devtool: 'source-map',
  mode: 'development', // 模式
  entry: './src/index.js', // 打包入口地址
  output: {
    filename: 'bundle.js', // 输出文件名
    path: path.join(__dirname, 'dist') // 输出文件目录
  },
  module: { 
    rules: [
      {
        test: /\.(s[ac]|c)ss$/i, //匹配所有的 css 文件
        use: [MiniCssExtractPlugin.loader,'css-loader','postcss-loader','sass-loader'] // use: 对应的 Loader 名称
      },
      {
        test: /\.(jpe?g|png|gif)$/i,
        type: 'asset',
        generator: {
          // 输出文件位置以及文件名
          // [ext] 自带 "." 这个与 url-loader 配置不同
          filename: "[name][hash:8][ext]"
        },
        parser: {
          dataUrlCondition: {
            maxSize: 50 * 1024 //超过50kb不转 base64
          }
        }
      },
      {
        test: /\.js$/i,
        use: [
          {
            loader: 'babel-loader'
          }
        ]
      },
    ]
  },
  plugins:[ // 配置插件
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({ // 添加插件
      filename: '[name].[hash:8].css'
    }),
  ],
  devServer: {
    static: true,
    hot: true,
  },
}