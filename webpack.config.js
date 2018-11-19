const path = require('path')
const htmlWebpack = require('html-webpack-plugin');

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
            {
                test : /\.css$/,
                use : [
                    'style-loader',
                    {
                        loader:'css-loader',
                        options :{
                            modules : true
                        }
                    }
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