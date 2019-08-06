const express = require("express"),
    app = express();
const build = require("./build").default;

app.use(build());

app.listen(2000, () => {
    console.log("App is running http://localhost:2000");
});
