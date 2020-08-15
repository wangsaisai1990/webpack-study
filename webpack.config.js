// var webpack = require('webpack');
// var openBrowser = require('open-browser-webpack-plugin')
// const path=require('path');

// module.exports = {
//     entry: './src/main.js',
//     mode: 'development',
//     output: {
        
//         filename: 'bundle.js',
//         path: path.resolve(__dirname, 'dist')
//     },

//     devServer: {
//         contentBase: path.join(__dirname, "dist"),
//         overlay: true,
//         hot: true,
//         inline: true
//     },
//     plugins: [new openBrowser()]
// };
const htmlWebpackFlugin=require('html-webpack-plugin')
const path =require('path')

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
    　　　　})// 创建一个在内存中生成html页面插件
    　　　　],
  mode: 'development' // 设置mode
  
}