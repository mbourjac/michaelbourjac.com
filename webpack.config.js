const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "production",
    entry: {
        index: "./js/index.js",
        projectOne: "./js/projet-1.js",
        projectTwo: "./js/projet-2.js",
        projectThree: "./js/projet-3.js",
        projectFour: "./js/projet-4.js",
    },
    output: {
        filename: "js/[name].[hash].bundle.js",
        path: path.resolve(__dirname, "dist"),
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            ["@babel/preset-env", { targets: "defaults" }],
                        ],
                    },
                },
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: ["**/*"],
        }),
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "./src/template-index.html",
            chunks: ["index"],
            cache: true,
            inject: "body",
        }),
        new HtmlWebpackPlugin({
            filename: "projet-1.html",
            template: "./src/template-1.html",
            chunks: ["projectOne"],
            cache: true,
            inject: "body",
        }),
        new HtmlWebpackPlugin({
            filename: "projet-2.html",
            template: "./src/template-2.html",
            chunks: ["projectTwo"],
            cache: true,
            inject: "body",
        }),
        new HtmlWebpackPlugin({
            filename: "projet-3.html",
            template: "./src/template-3.html",
            chunks: ["projectThree"],
            cache: true,
            inject: "body",
        }),
        new HtmlWebpackPlugin({
            filename: "projet-4.html",
            template: "./src/template-4.html",
            chunks: ["projectFour"],
            cache: true,
            inject: "body",
        }),
    ],
};
