module.exports = {
    entry: "./test/index.js",
    output: {
        path: __dirname,
        filename: "test/index.build.js"
    },
    module: {
        loaders: [
            { test: /\.js$/, loader: "babel-loader" }
        ]
    }
};
