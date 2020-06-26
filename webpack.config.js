const path = require('path');
module.exports = {
  entry: './app/index.js', //入口文件
  output: {
    path: path.resolve(__dirname, 'build'), //必须使用绝对地址，输出文件夹
    filename: 'bundle.js', //打包后输出文件的文件名
    publicPath: 'build/' //知道如何寻找资源
  },
  module: {
    rules: [
      {
        test: /\.js$/, // js 文件才使用 babel
        use: 'babel-loader', // 使用哪个 loader
        exclude: /node_modules/, // 不包括路径
      },
      {
        // 图片格式正则
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        use: [
          {
            loader: 'url-loader',
            // 配置 url-loader 的可选项
            options: {
              // 限制 图片大小 60000B，小于限制会将图片转换为 base64格式
              limit: 60000,
              // 超出限制，创建的文件格式
              // build/images/[图片名].[hash].[图片格式]
              name: 'images/[name].[hash].[ext]',
            },
          },
        ],
      },

      // {
      //   test: /\.(png|jpe?g|gif|svg)$/,
      //   use: [
      //     {
      //       loader: 'file-loader',
      //       // 配置 url-loader 的可选项
      //       options: {
      //         // 限制图片大小 10000B，小于限制会将图片转换为 base64 格式
      //         limit: 10000,
      //         // 超出限制，创建的文件格式
      //         // build/images/[图片名].[hash].[图片格式]
      //         name: 'images/[name].[hash].[ext]',
      //       },
      //     },
      //   ],
      // },
    ],
  },
};
