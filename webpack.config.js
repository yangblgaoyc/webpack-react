const path = require('path')
const htmlWebpack = require('html-webpack-plugin');
//scss-loader依赖node-scss,所以要一起安装
//less-loader依赖less,所以要一起安装
module.exports = {
    entry : './src/app.js',
    output : {
        path : path.resolve(__dirname,'dist'),
        filename : 'app.js'
    },
    mode : 'development',
    plugins : [
        new htmlWebpack({
            filename: 'index.html',
            template : 'src/index.html'
        })
    ],
    module : {
        rules : [
            {
                test : /\.js$/,
                use : [{
                    loader :'babel-loader',
                    options : {
                        presets :['react']
                    }
                }]
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
                            limit : 10000
                        }
                    }
                ]
            },
            //字体loader配置
            {
                test : /\.(ttf|eot|woff|woff2|svg|otfg)$/,
                use : ['file-loader']
            }
        ]
    },
    devServer:{
        open: true,
        port: 9000
    }
}