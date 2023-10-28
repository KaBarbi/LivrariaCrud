const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const cors = require("cors"); // Importe o pacote CORS

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());
// Configuração da conexão MySQL
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1234",
  database: "livraria",
});

connection.connect((err) => {
  if (err) throw err;
  console.log("Conectado ao banco de dados MySQL.");
});

// Rota para obter todos os clientes
app.get("/clientes", (req, res) => {
  const sql = "SELECT * FROM clientes";

  connection.query(sql, (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }

    res.json(results);
  });
});

// Rota para adicionar um novo cliente
app.post("/clientes", (req, res) => {
  const { nome, email, senha, telefone } = req.body;

  const sql = `INSERT INTO clientes (nome, email, senha, telefone) VALUES ('${nome}', '${email}', '${senha}', '${telefone}')`;

  connection.query(sql, (err, result) => {
    if (err) throw err;
    res.send("Cliente adicionado com sucesso!");
  });
});

// Rota para deletar um cliente
app.delete("/clientes/:id", (req, res) => {
  // Obter o ID do cliente da solicitação
  const id = req.params.id; // Executar a consulta SQL para excluir o cliente

  const sql = `DELETE FROM clientes WHERE id = ${id}`;
  connection.query(sql, (err, result) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    } // Responder com um código de status 200

    res.status(200).send();
  });
});

app.listen(port, () => {
  console.log(`Servidor está rodando na porta ${port}`);
});
//