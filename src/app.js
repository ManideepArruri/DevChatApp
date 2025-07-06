const express = require("express");

const app = express();

app.get("/user", (req, res) => {
  res.send({ firstName: "Arruri", lastName: "Manideep" });
});

app.post("/user", (req, res) => {
  console.log("Save data to DB");
  res.send("Data saved in DB");
});

app.use("/home", (req, res) => {
  res.send("Home Page");
});

app.use("/", (req, res) => {
  res.send("Overrides");
});
app.listen("7777", (req, res) => {
  console.log("Server Connected!");
});
