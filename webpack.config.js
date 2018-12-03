const path = require('path')
const htmlWebpack = require('html-webpack-plugin');
const cleanWebpackPlugin = require('clean-webpack-plugin');
//scss-loader依赖node-scss,所以要一起安装
//less-loader依赖less,所以要一起安装
module.exports = {
    entry : './src/app.js',
    output : {
        path : path.resolve(__dirname,'dist/'),
        filename : 'assets/js/app.js',
        //所有资源的基础路径，并且以/结尾，这个配置将影响打包后的filename路径
        // publicPath: '/'
    },
    mode : 'development',
    plugins : [
        new htmlWebpack({
            filename: 'index.html',
            template : 'src/index.html'
        }),
        new cleanWebpackPlugin(['dist'])
    ],
    module : {
        rules : [
            {
                test : /\.js$/,
                use : [{
                    loader :'babel-loader',
                    //所有的要用到的loader与设置可以移动到.babelrc文件中集中管理
                    // options : {
                    //     presets :['@babel/preset-react']
                    // }
                }],
                exclude : [
                    path.resolve(__dirname,'node_modules')
                ]
            },
            //localIdentName : '[path]-[name]-[local]-[hash:base64:6]'
            {
                test : /\.css$/,
                use : [
                    'style-loader',
                    {
                        loader:'css-loader',
                        options :{
                            modules : true,
                            localIdentName : '[path]-[name]-[local]-[hash:base64:6]'
                        }
                    }
                ],
                exclude : [
                    path.resolve(__dirname,'node_modules'),
                    path.resolve(__dirname,'src/common'),
                ]
            },
            {
                test : /\.css$/,
                use : ['style-loader','css-loader'],
                include : [
                    path.resolve(__dirname,'node_modules'),
                    path.resolve(__dirname,'src/common'),
                ]
            },


            {
                test : /\.scss$/,
                use : [
                    'style-loader',
                    {
                        loader:'css-loader',
                        options :{
                            modules : true,
                            localIdentName : '[path]-[name]-[local]-[hash:base64:6]'
                        }
                    },
                    'sass-loader'
                ],
                exclude : [
                    path.resolve(__dirname,'node_modules'),
                    path.resolve(__dirname,'src/common'),
                ]
            },
            {
                test : /\.scss$/,
                use : ['style-loader','css-loader', 'sass-loader'],
                include : [
                    path.resolve(__dirname,'node_modules'),
                    path.resolve(__dirname,'src/common'),
                ]
            },
            // {
            //     test : /(\.gif|\.jpeg|\.png|\.jpg|\.bmp)$/,
            //     use : ['file-loader']
            // }
            //url-loader为增强版file-loader，会把配置选项里小于limit值kb的图片转换成base64直接输出
            {
                test : /\.(gif|jpeg|png|jpg|bmp)$/,
                use : [
                    {
                        loader :'url-loader',
                        options : {
                            limit : 10000,
                            name : 'assets/img/[name]_[hash:8].[ext]'
                        }
                    }
                ]
            },
            //字体loader配置
            {
                test : /\.(ttf|eot|woff|woff2|svg|otfg)$/,
                use : [
                    {
                        loader : 'file-loader',
                        options : {
                            name : 'assets/fonts/[name]_[hash:8].[ext]'
                        }
                    }
                ]
            }
        ]
    },
    devServer:{
        open: true,
        port: 9000,
        contentBase: './src/common',
        //服务器打包后资源输出的路径
        publicPath: '/'
    }
}