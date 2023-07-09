const {useApiRouting} = require("./api");

useApiRouting(8000).then((v) => {
    console.log("RUNNING the runner")
})