//apifake.js
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3001;

app.use(cors());

const casas = [
  {
    id: 1,
    foto: './img/casa.jpeg',
    preco: 1000,
    video: './img/download.jpeg',
    tipo: 'Casa',
    descricao: 'Descrição da casa 1',
    endereco: 'Endereço da casa 1'
  },

  {
    id: 2,
    foto: './img/download.jpeg',
    preco: 2000,
    video: './img/casa.jpeg',
    tipo: 'predio',
    descricao: 'Descrição da casa 2',
    endereco: 'Endereço da casa 2'
  }
];

app.use(express.json());

// Rota para obter todas as casas
app.get('/casas', (req, res) => {
  res.json({ casas });
});

// Adiciona uma rota simples para a raiz
app.get('/', (req, res) => {
  res.send('API Fake rodando!');
});

app.listen(PORT, () => {
  console.log(`API Fake rodando na porta ${PORT}`);
});