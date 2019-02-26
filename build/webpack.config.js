const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {
        app: path.join(__dirname, './../', 'src/index.tsx'),
    },
    output: {
        path: path.join(__dirname, './../', 'dist'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                // 要解析什么文件
                test: /\.ts(x?)$/,
                // 解析规则
                use: [
                    {
                        loader: 'awesome-typescript-loader',
                        options: {

                        }
                    }
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'build/tpl/index.html',
        })
    ]
}
