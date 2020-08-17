const htmlWebpackFlugin=require('html-webpack-plugin')
// const utils = require('./utils')
const path =require('path')
const webpack = require("webpack")
const VueLoaderPlugin = require('vue-loader/lib/plugin')

// 通过Node模块操作，向外面暴露一个配置对象
module.exports={
  entry:path.join(__dirname,'./src/main.js'),// 打包文件
  output:{
    path:path.join(__dirname,'./dist'),// 打包好的文件存放地址
    filename:'bundle.js' // 打包好文件的文件名
  },
  plugins:[

　　　　new htmlWebpackFlugin({
　　　　template:path.join(__dirname,'./src/index.html'),// 指定模板页面
　　　　filename:'index.html' // 指定要生成的文件名称
　　　　}),// 创建一个在内存中生成html页面插件
       new webpack.ProvidePlugin({
          $: "jquery",
          jQuery: "jquery",
          jquery: "jquery",
          "window.jQuery": "jquery"
        }),
        new VueLoaderPlugin()
　],
  module:{
    rules:[
        { test: /\.css$/, use: ['style-loader', 'css-loader'] },//配置处理.css文件的第三方loader规则

        { test:/\.less$/,use: [ 'style-loader' , 'css-loader' , 'less-loader' ] },// 配置处理less文件loader规则

        { test:/\.scss$/,use: [ 'style-loader' , 'css-loader' , 'sass-loader' ] },// 配置处理less文件sass规则

        {
          test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
          loader: 'url-loader',
          options: {
            limit: 10000,
            // name: utils.assetsPath('img/[name].[hash:7].[ext]')
          }
        }, ///处理图片路径的loader
        {
          test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
          loader: 'url-loader',
          options: {
            limit: 10000,
            // name: utils.assetsPath('media/[name].[hash:7].[ext]')
          }
        },
        {
          test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
          loader: 'url-loader',
          options: {
            limit: 10000,
            // name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
          }
        },
        { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ }, // 配置 Babel 来转换高级的ES语法
        { test: /\.vue$/, use: 'vue-loader' } // 处理 .vue 文件的 loader
    ]
  },
  resolve:{
    alias:{
      // 'vue$':'vue/dist/vue.js'
    }
  },
  mode: 'development', // 设置mode
  devtool: 'inline-source-map',  // 加上对应的配置
}