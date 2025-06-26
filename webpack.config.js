import path from "path"
import { fileURLToPath } from "url"
import HtmlWebpackPlugin from "html-webpack-plugin"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default  {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "public"),
        filename: "bundle.js",
        clean: true
    },
    resolve: {
        extensions: ['.js', '.jsx']
        
    },
    module: {
        rules : [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html"
        })
    ],
    devServer: {
        static: "./public",
        port: 3000,
        open: true,
        hot: true,
    },
    mode: "development"
}