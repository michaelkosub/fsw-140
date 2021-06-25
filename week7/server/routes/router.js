const express = require("express");
const sqlRouter = express.Router();
const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "avengers",
});

sqlRouter.get('/', (req, res, next) => {
  // let sql= "select * from avengers"
  let sql = "SELECT DISTINCT * FROM avengers WHERE name not in('') ORDER BY name LIMIT 10;"
  db.query(sql, (err, result)=> {
    if(err){
      return next(err);
    }
    res.send(result)
  })
})
module.exports = sqlRouter