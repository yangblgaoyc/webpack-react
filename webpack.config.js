const path = require('path')
const htmlWebpack = require('html-webpack-plugin');
module.exports = {
    entry : './src/app.js',
    output : {
        path : path.resolve(__dirname,'dist'),
        filename : 'main.js'
    },
    mode : 'development',
    plugins : [
        new htmlWebpack({
            filename: 'abc.html',
            template : 'src/index.html'
        })
    ]
}