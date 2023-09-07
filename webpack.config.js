const webpack = require('webpack')
const Dotenv = require('dotenv-webpack')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

const rulesForJavascript = {
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    use: {
        loader: 'babel-loader',
        options: {
            presets: ['@babel/preset-react'],
        },
    },
}

const rulesForHtml = {
    test: /\.html$/,
    loader: 'html-loader',
}

const rulesForCss = {
    test: /\.s[ac]ss$/i,
    use: [
        // Creates `style` nodes from JS strings
        'style-loader',
        // Translates CSS into CommonJS
        'css-loader',
        // Compiles Sass to CSS
        'sass-loader',
    ],
}

const rulesForAssets = {
    test: /\.(png|svg|jpg|jpeg|gif)$/i,
    type: 'asset/resource',
}

const rules = [rulesForCss, rulesForJavascript, rulesForHtml, rulesForAssets]

module.exports = (env) => ({
    entry: path.resolve(__dirname, './src/index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js',
    },
    module: {
        rules,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            filename: 'index.html',
        }),
        new Dotenv({
            path: '.env',
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(env.NODE_ENV),
        }),
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        compress: true,
        port: 3000,
    },
    devtool: 'source-map',
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
})
