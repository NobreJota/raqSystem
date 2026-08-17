// index.js

const port = 3000;

//app.get('/', (req, res) => {
//  res.send('Hello World! CARAALLHO!');
//});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});

//const express = require('express');
const path = require('path');
//const app = express();
//const port = 3000;

// Permite o uso de arquivos estáticos na pasta 'public'
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

// Rota principal
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Rota de contato que envia o arquivo HTML externo
app.get('/contato', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'contato.html'));
});

// Opcional: Recebe dados do formulário de contato
app.post('/contato', (req, res) => {
  const { nome, email, mensagem } = req.body;
  res.send(`<h2>Obrigado pelo contato, ${nome}!</h2>
            <p>Recebemos sua mensagem:</p>
            <blockquote>${mensagem}</blockquote>`);
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});