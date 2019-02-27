const tsImportPluginFactory = require('ts-import-plugin')

const {resolve} = require('./../utils')

module.exports = [
    {
        // 要解析什么文件
        test: /\.ts(x?)$/,
        // 解析规则
        use: [
            {
                loader: 'awesome-typescript-loader',
                options: {
                    useCache: true,
                    cacheDirectory: resolve('.cache-loader'),
                    babelOptions: {
                        // 不需要babelrc文件
                        babelrc: false,
                        plugins: [
                            'react-hot-loader/babel'
                        ]
                    },
                    getCustomTransformers: () => ({
                        before: [
                            tsImportPluginFactory({
                                libraryName: 'antd',
                                libraryDirectory: 'lib',
                                // 填写true的话，使用组件的less文件
                                // 填写css的话使用css文件，不能定制主题
                                style: true
                            })
                        ]
                    })
                }
            }
        ]
    },
]
