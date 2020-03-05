const path = require('path');

module.exports = {
    mode : "development",
    entry: "./src/stack-overflow-clone/index.js",

    output:{
        path: path.resolve(__dirname, 'lib/js'),
        filename: "bondul.js"
    }
};