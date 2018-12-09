const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
        publicPath: "/"
    },
    // resolve: {
    //     alias: {
    //         "fabric": "Fabric"
    //     }
    // },
    module: {
        rules: [
            {
                test: /\.js?$/,
                loader: "babel-loader",
                include: path.resolve(__dirname, "src"),
                options: {
                    presets: ["@babel/preset-env"]
                }
            },
            {
                test: /\.html$/,
                use: [{
                    loader: "html-loader",
                    options: {
                        minimize: true
                    }
                }]
            },
            {
                test: /\.(jpg|png|jpeg)$/,
                loader: "url-loader",
                options: {
                    limit: 1024
                }
            }
        ]
    },
    devtool: "source-map",
    devServer: {
        contentBase: "./dist",
        host: "localhost",
        port: 8080
    },
    plugins: [
        new CleanWebpackPlugin(["dist"]),
        new HtmlWebpackPlugin({
            title: "test",
            template: "./index.html",
        })
    ]
}