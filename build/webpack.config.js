const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const webpack = require('webpack')

module.exports = {
    //制定打包模式
    mode: "development",
    entry: {
        //配置入口文件
        main: [/*"@babel/polyfill", */path.resolve(__dirname, '../src/main.js')]
    },
    output: {
        //配置打包文件输出的目录
        path: path.resolve(__dirname, '../dist'),
        //生成js文件名称
        filename: "js/[name].[hash:8].js",
        //生成chunk名称
        chunkFilename: "js/[name].[hash:8].js",
        //资源引用的路径
        publicPath: "/"
    },
    resolve: {
        alias: {
            vue$: 'vue/dist/vue.runtime.esm.js'
        },
        extensions: [
            '.js',
            '.vue'
        ]
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: [
                    {
                        loader: 'cache-loader'
                    },
                    /*{
                        loader: 'thread-loader'
                    },*/
                    {
                        loader: "vue-loader",
                        options: {
                            compilerOptions: {
                                preserveWhitespace: false
                            }
                        }
                    }
                ]
            },
            {
                test: /\.jsx?$/,
                //exclude: /node_modules/,
                use: [
                    {
                        loader: "babel-loader"
                    }
                ]
            },
            {
                test: /\.(jpe?g|png|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 4096,
                            fallback: {
                                loader: 'file-loader',
                                options: {
                                    name: 'img/[name].[hash:8],[ext]'
                                }
                            }
                        }
                    }
                ]
            },
            {
                test: /\.(mp4|webm|ogg|mp3|mav|flac|aac)(\?.*)?$/,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            limit: 4096,
                            fallback: {
                                loader: 'file-loader',
                                options: {
                                    name: 'media/[name].[hash:8].[ext]'
                                }
                            }
                        }
                    }
                ]
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 4096,
                            fallback: {
                                loader: 'file-loader',
                                options: {
                                    name: 'fonts/[name].[hash:8].[ext]'
                                }
                            }
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../public/index.html')
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
    ],
    devServer: {
        hot: true,
        port: 3000,
        contentBase: './dist'
    }
}