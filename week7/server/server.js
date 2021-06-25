const express = require("express");
const app = express();
const morgan = require("morgan");
const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "avengers",
});

app.use(express.json());
app.use(morgan("dev"));

db.connect((err) => {
  if (err) throw err;
  console.log("MySql DB Connected.");
});
app.use('/data', require('./routes/router'))

app.listen("7000", () => {
  console.log("Server is running on LocalHost:7000");
});