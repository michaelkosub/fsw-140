const express = require("express");
const sqlRouter = express.Router();
const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Kosub2018",
  database: "avengers",
});

sqlRouter.get('/data', (req, res, next) => {
  let sql = "SELECT DISTINCT * FROM avengers WHERE name not in('') ORDER BY name LIMIT 10;"
  db.query(sql, (err, result)=> {
    if(err){
      return next(err);
    }
    res.send(result)
  })
})
module.exports = sqlRouter