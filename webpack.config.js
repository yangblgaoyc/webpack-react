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
            }
        ]
    },
    devServer:{
        open: true,
        port: 9000
    }
}