const express = require("express");

const test = require("./routes/test");

const app = express();
const port = 5000;

app.listen(port, () => console.log(`${port}`));

app.use(test);
