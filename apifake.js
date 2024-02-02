//apifake.js
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3001;

app.use(cors());

const casas = [
  {
    id: 1,
    foto: "https://i.ibb.co/10KkH0Q/msg-4149570142-1884.jpg",
    descricao: 'Casa com Piscina St. Bábara',
    preco: 16000,
    tipo: 'Compra',
    local: '',
    cidade: 'Águas de Santa Bárbara',
    estado: 'SP',
    bairro: '',
    rua: '',
    cep: '',
    ambientes: "",
    metros: "",
    video: '',
    categoria: "Casa"
  },

  {
    id: 2,
    foto: "https://i.ibb.co/q1SKc1P/msg-4149570142-1890.jpg",
    descricao: 'Apartamento em Interlagos',
    preco: 320000,
    tipo: 'Compra',
    local: 'Ao lado do Kartodromo',
    cidade: 'Interlagos',
    estado: 'SP',
    bairro: '',
    rua: '',
    cep: '',
    ambientes: 3,
    metros: "60",
    video: './img/casa6.avif',
    categoria: "Apartamento"
  },

  {
    id: 3,
    foto: './img/casa3.webp',
    descricao: 'Apartamento Mobiliado',
    preco: 1500,
    tipo: 'Aluguel',
    local: 'Edifício Bela Vista',
    cidade: 'Barueri',
    estado: 'SP',
    bairro: 'Centro',
    rua: 'Rua das Flores',
    cep: '06411030',
    ambientes: 2,
    metros: "50",
    video: './img/casa6.avif',
    categoria: "Casa"
  },

  {
    id: 4,
    foto: './img/casa4.webp',
    descricao: 'Casa Térrea com Jardim',
    preco: 1800,
    tipo: 'Aluguel',
    local: 'Residencial dos Ipês',
    cidade: 'Carapicuíba',
    estado: 'SP',
    bairro: 'Vila Dirce',
    rua: 'Rua das Oliveiras',
    cep: '06386200',
    ambientes: 4,
    metros: "70",
    video: './img/casa6.avif',
    categoria: "Casa"
  },

  {
    id: 5,
    foto: './img/casa6.avif',
    descricao: 'Casa Moderna com Piscina',
    preco: 2500,
    tipo: 'Compra',
    local: 'Condomínio Jardins do Lago',
    cidade: 'Santana de Parnaíba',
    estado: 'SP',
    bairro: 'Alphaville',
    rua: 'Alameda dos Ipês',
    cep: '06544135',
    ambientes: 6,
    metros: "180",
    video: './img/casa6.avif',
    categoria: "Apartamento"
  },

  {
    id: 6,
    foto: './img/casa5.webp',
    descricao: 'Casa Moderna com Piscina',
    preco: 2500,
    tipo: 'Compra',
    local: 'Condomínio Jardins do Lago',
    cidade: 'Santana de Parnaíba',
    estado: 'SP',
    bairro: 'Alphaville',
    rua: 'Alameda dos Ipês',
    cep: '06544135',
    ambientes: 6,
    metros: "180",
    video: './img/casa6.avif',
    categoria: "Casa"
  },

  {
    id: 7,
    foto: './img/casa6.avif',
    descricao: 'Casa Moderna com Piscina',
    preco: 2500,
    tipo: 'Compra',
    local: 'Condomínio Jardins do Lago',
    cidade: 'Santana de Parnaíba',
    estado: 'SP',
    bairro: 'Alphaville',
    rua: 'Alameda dos Ipês',
    cep: '06544135',
    ambientes: 6,
    metros: "180",
    video: './img/casa6.avif',
    categoria: "Casa"
  },

  {
    id: 8,
    foto: './img/casa5.webp',
    descricao: 'Casa Moderna com Piscina',
    preco: 2500,
    tipo: 'Compra',
    local: 'Condomínio Jardins do Lago',
    cidade: 'Santana de Parnaíba',
    estado: 'SP',
    bairro: 'Alphaville',
    rua: 'Alameda dos Ipês',
    cep: '06544135',
    ambientes: 6,
    metros: "180",
    video: './img/casa5.webp',
    categoria: "Casa"
  },

  {
    id: 9,
    foto: './img/casa6.avif',
    descricao: 'Casa Moderna com Piscina',
    preco: 2500,
    tipo: 'Compra',
    local: 'Condomínio Jardins do Lago',
    cidade: 'Santana de Parnaíba',
    estado: 'SP',
    bairro: 'Alphaville',
    rua: 'Alameda dos Ipês',
    cep: '06544135',
    ambientes: 6,
    metros: "180",
    video: './img/casa5.webp',
    categoria: "Casa"
  },

  {
    id: 10,
    foto: './img/casa5.webp',
    descricao: 'Casa Moderna com Piscina',
    preco: 2500,
    tipo: 'Compra',
    local: 'Condomínio Jardins do Lago',
    cidade: 'Santana de Parnaíba',
    estado: 'SP',
    bairro: 'Alphaville',
    rua: 'Alameda dos Ipês',
    cep: '06544135',
    ambientes: 6,
    metros: "180",
    video: './img/casa5.webp',
    categoria: "Casa"
  },
  {
    id: 10,
    foto: './img/casa5.webp',
    descricao: 'Casa Moderna com Piscina',
    preco: 2500,
    tipo: 'Compra',
    local: 'Condomínio Jardins do Lago',
    cidade: 'Santana de Parnaíba',
    estado: 'SP',
    bairro: 'Alphaville',
    rua: 'Alameda dos Ipês',
    cep: '06544135',
    ambientes: 6,
    metros: "180",
    video: './img/casa5.webp',
    categoria: "Casa"
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