require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const indexRouter = require("./routes/index.js");

app.use(express.json());

app.get("/elisee", indexRouter);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
