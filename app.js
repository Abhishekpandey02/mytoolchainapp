// app.js
// app.js
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello DevOps Toolchain Project");
});

app.listen(3000);
