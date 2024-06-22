const express = require("express");
const app = express();

// const db = require("./db/models");
 
const users = require('./controllers/users')

app.use('/', users);

app.listen(8081, () => {
  console.log("Servidor está rodando na porta 8081: http://localhost:8081");
});