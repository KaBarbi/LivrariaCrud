// const express = require("express");
// const bodyParser = require("body-parser");
// const mysql = require("mysql");
// const cors = require("cors"); // Importe o pacote CORS

// const app = express();
// const port = 3000;

// app.use(bodyParser.json());
// app.use(cors());
// // Configuração da conexão MySQL
// const connection = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "1234",
//   database: "livraria",
// });

// connection.connect((err) => {
//   if (err) throw err;
//   console.log("Conectado ao banco de dados MySQL.");
// });

// const express = require("express");
// const bodyParser = require("body-parser");
// const mysql = require("mysql");
// const cors = require("cors"); // Importe o pacote CORS

// const app = express();
// const port = 3000;

// app.use(bodyParser.json());
// app.use(cors());
// // Configuração da conexão MySQL
// const connection = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "1234",
//   database: "livraria",
// });

// connection.connect((err) => {
//   if (err) throw err;
//   console.log("Conectado ao banco de dados MySQL.");
// });

app.get("/empres", (req, res) => {
  console.log("Recebida solicitação GET para /empres");
  const sql = "SELECT * FROM empres";

  connection.query(sql, (err, results) => {
    if (err) {
      console.error("Erro na consulta SQL:", err);
      res.status(500).json({ error: err.message });
      return;
    }

    console.log("Resultados da consulta:", results);
    res.json(results);
  });
});

// app.listen(port, () => {
//   console.log(`Servidor está rodando na porta ${port}`);
// });
