const mysql = require('mysql');
const express = require("express");
const bodyParser = require("body-parser");

const API_PORT = 3001;
const app = express();

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'admin',
  database: 'sheep_field'
});

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/sheep', (req, res) => {
  connection.connect();
  connection.query('select * from sheep', (error, results, fields) => {
    if (error) {
      throw error;
    }
    res.send(JSON.stringify(results));
  });
  connection.end();
});


app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));
