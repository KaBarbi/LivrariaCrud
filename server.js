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

// Rota para atualizar um cliente
app.put("/clientes/:id", (req, res) => {
  // Obter o ID do cliente da solicitação
  const id = req.params.id;

  // Obter os dados do cliente a serem atualizados
  const { novoNome, novoEmail, novoTelefone } = req.body;

  // Executar a consulta SQL para atualizar o cliente
  const sql = `UPDATE clientes SET nome = '${novoNome}', email = '${novoEmail}', telefone = '${novoTelefone}' WHERE id = ${id}`;

  connection.query(sql, (err, result) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }

    // Responder com um código de status 200
    res.status(200).send();
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

// --------------------------------------------------------------------------------------------------------------------------------------------------------------
// Rotas livros

// Rota para obter todos os livros
app.get("/livros", (req, res) => {
  const sql = "SELECT * FROM livros";

  connection.query(sql, (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }

    res.json(results);
  });
});

// Rota para adicionar um novo livro
app.post("/livros", (req, res) => {
  const { nome, autor, genero, ano_lancamento } = req.body;

  const sql = `INSERT INTO livros (nome, autor, genero, ano_lancamento) VALUES (?, ?, ?, ?)`;

  const params = [nome, autor, genero, ano_lancamento];

  connection.query(sql, params, (err, result) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }

    res.send("livro adicionado com sucesso!");
  });
});

// Rota para atualizar um livro
app.put("/livros/:id", (req, res) => {
  // Obter o ID do livro da solicitação
  const id = req.params.id;

  // Obter os dados do livro a serem atualizados
  const { novoNome, novoAutor, novoGenero, novoAno_lancamento } = req.body;

  // Executar a consulta SQL para atualizar o livro
  const sql = `UPDATE livros SET nome = '${novoNome}', autor = '${novoAutor}', genero = '${novoGenero}', ano_lancamento = '${novoAno_lancamento}' WHERE id = ${id}`;

  connection.query(sql, (err, result) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }

    // Responder com um código de status 200
    res.status(200).send();
  });
});

// Rota para atualizar um cliente
app.put("/clientes/:id", (req, res) => {
  // Obter o ID do cliente da solicitação
  const id = req.params.id;

  // Obter os dados do cliente a serem atualizados
  const { novoNome, novoEmail, novoTelefone } = req.body;

  // Executar a consulta SQL para atualizar o cliente
  const sql = `UPDATE clientes SET nome = '${novoNome}', email = '${novoEmail}', telefone = '${novoTelefone}' WHERE id = ${id}`;

  connection.query(sql, (err, result) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }

    // Responder com um código de status 200
    res.status(200).send();
  });
});

// Rota para deletar um cliente
app.delete("/livros/:id", (req, res) => {
  // Obter o ID do cliente da solicitação
  const id = req.params.id; // Executar a consulta SQL para excluir o cliente

  const sql = `DELETE FROM livros WHERE id = ?`;

  const params = [id];

  connection.query(sql, params, (err, result) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    } // Responder com um código de status 200

    res.status(200).send();
  });
});

// --------------------------------------------------------------------------------------------------------------------------------------------------------------
// Rotas emprestimos

app.get("/empres", (req, res) => {
  console.log("Recebida solicitação GET para /empres");
  const sql = "SELECT * FROM empres";

  connection.query(sql, (err, results) => {
    if (err) {
      console.error("Erro na consulta SQL:", err);
      res.status(500).json({ error: err.message });
      return;
    }

    res.json(results);
  });
});

// requisisção de delete do emprestimo
app.delete("/empres/:id", (req, res) => {
  console.log("Recebida solicitação DELETE para /empres");

  const id = req.params.id;
  const sql = "DELETE FROM empres WHERE id = ?";

  connection.query(sql, id, (err, result) => {
    if (err) {
      console.error("Erro na consulta SQL:", err);
      res.status(500).json({ error: err.message });
      return;
    }

    if (result.affectedRows === 0) {
      res.status(404).json({ message: "Registro não encontrado" });
      return;
    }

    res.json({ message: "Registro excluído com sucesso" });
  });
});


app.listen(port, () => {
  console.log(`Servidor está rodando na porta ${port}`);
});
