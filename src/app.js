const express = require("express");

const app = express();

app.use("/home", (req, res) => {
  res.send("Home Page");
});

app.listen("7777", (req, res) => {
  console.log("Server Connected!");
});
