const path = require("path");
const resolve = path.resolve(__dirname, "src");

module.exports = {
    webpack: {
        alias: {
            "@": resolve,
        },
    },
};