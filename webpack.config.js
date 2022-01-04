const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
module.exports ={
     entry:  path.join(__dirname,"src","index.js"),
    output:{path:path.join(__dirname, "build"), filename:"index.bundle.js"}
,  mode: "development" ,
    resolve: {modules: [path.resolve(__dirname,"src"), "node modules"],
    modules: [ path.resolve(__dirname, "node_modules")]
},
   
    module: {
        rules: [
            {
                test: /\.js$|jsx/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            },
            {
                test:/\.(css|scss)$/,
                use:["css-loader","style-loader"]
            },
            {
                test: /\.(jpg|jpeg|png|gif|svg)&/,
                use: ["file-loader"]
            }
        ]
    },
   
    plugins:[
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "src", "index.html")
        })
    ]
}