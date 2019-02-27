const {resolve} = require('./../utils')
const theme = require('./../../theme')

module.exports = [
    {
        test: /\.scss$/,
        // 只针对src下面的.scss文件进行编译
        include: [resolve('src')],
        use: [
            'style-loader',
            {
                loader: 'cache-loader',
                options: {
                    cacheDirectory: resolve('.cache-loader')
                }
            },
            {
                loader: 'typings-for-css-modules-loader',
                options: {
                    // 是否有使用css modules
                    modules: true,
                    // 类名导出
                    namedExport: true,
                    camelCase: true,
                    sass: true
                }
            },
            {
                loader: 'sass-loader',
                options: {
                    includePaths: [resolve('src/styles')]
                }
            },

        ]
    },
    {
        test: /\.less$/,
        // 只针对node_modules里面的less文件进行编译
        include: [resolve('node_modules')],
        use: [
            'style-loader',
            'css-loader',
            {
                loader: 'less-loader',
                options: {
                    // 禁用内联js代码，禁用在样式表里面写js代码
                    javascriptEnabled: true,
                    // 根据antd官网修改主题
                    modifyVars: theme
                }
            }
        ]
    }
]
