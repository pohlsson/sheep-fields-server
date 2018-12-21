const mysql = require('mysql');
const express = require("express");
const bodyParser = require("body-parser");

const API_PORT = 3001;
const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/sheep', (req, res) => {
  const sheep = {
    id: '0',
    name: 'Poonard',
    x_position: '200',
    y_position: '100',
  };
  const response = {
    sheep: [sheep],
  };
  res.send(response);
});

app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));
