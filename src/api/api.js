const {api} = require("./router");
const express = require("express");
const compression = require("compression");
const cors = require("cors");
const useApiRouting = async(port) => {
    return new Promise((resolve, reject) => {
        const app = express();

        app.listen(port, () => console.log("API IS ON"));

        app.use(api)
        resolve(200)
    })
}
module.exports = {useApiRouting}