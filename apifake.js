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
    descricao: 'Casa c/ Piscina St. Bábara',
    preco: 16000,
    tipo: 'Compra',
    referencia: '',
    cidade: 'Águas de Santa Bárbara',
    estado: 'SP',
    bairro: '',
    rua: '',
    cep: '',
    ambientes: "",
    dormitórios: "",
    metros: "",
    video: '',
    categoria: "Casa",
    garagem: "",
    observação: "",
    fotos: [
      "https://i.ibb.co/PCPJcky/msg-4149570142-1865.jpg",
      "https://i.ibb.co/yNthDKK/msg-4149570142-1866.jpg",
      "https://i.ibb.co/4TwL0bf/msg-4149570142-1867.jpg",
      "https://i.ibb.co/6JC0hdB/msg-4149570142-1868.jpg",
      "https://i.ibb.co/HrmYN28/msg-4149570142-1869.jpg",
      "https://i.ibb.co/ThDmnpt/msg-4149570142-1870.jpg",
      "https://i.ibb.co/QDQ1Ly6/msg-4149570142-1871.jpg",
      "https://i.ibb.co/mFRzbRx/msg-4149570142-1872.jpg",
      "https://i.ibb.co/jv84Bc9/msg-4149570142-1873.jpg",
      "https://i.ibb.co/J7L3L2x/msg-4149570142-1874.jpg",
      "https://i.ibb.co/zVSCVym/msg-4149570142-1875.jpg",
      "https://i.ibb.co/MBpk5s0/msg-4149570142-1876.jpg",
      "https://i.ibb.co/yyS0GtT/msg-4149570142-1877.jpg",
      "https://i.ibb.co/g99gQ3h/msg-4149570142-1878.jpg",
      "https://i.ibb.co/VNDsYM0/msg-4149570142-1879.jpg",
      "https://i.ibb.co/wrQRZ38/msg-4149570142-1880.jpg",
      "https://i.ibb.co/jwgwV5Y/msg-4149570142-1881.jpg",
      "https://i.ibb.co/QDq3RsG/msg-4149570142-1882.jpg",
      "https://i.ibb.co/LvH6W26/msg-4149570142-1883.jpg",
      "https://i.ibb.co/10KkH0Q/msg-4149570142-1884.jpg",
    ]
  },

  {
    id: 2,
    foto: "https://i.ibb.co/q1SKc1P/msg-4149570142-1890.jpg",
    descricao: 'Apto. em Interlagos',
    preco: 320000,
    tipo: 'Compra',
    referencia: 'Ao lado do Kartodromo',
    cidade: 'Interlagos',
    estado: 'SP',
    bairro: '',
    rua: '',
    cep: '',
    ambientes: "3",
    dormitórios: "",
    metros: "60",
    video: './img/casa6.avif',
    categoria: "Apartamento",
    garagem: "",
    observação: "",
    fotos: [
      "https://i.ibb.co/cvYPnrd/msg-4149570142-1885.jpg",
      "https://i.ibb.co/cv1tdhc/msg-4149570142-1886.jpg",
      "https://i.ibb.co/R4Kg5yW/msg-4149570142-1888.jpg",
      "https://i.ibb.co/9qSXsh5/msg-4149570142-1887.jpg",
      "https://i.ibb.co/5nqGDdS/msg-4149570142-1889.jpg",
      "https://i.ibb.co/q1SKc1P/msg-4149570142-1890.jpg"
    ]
  },

  {
    id: 3,
    foto: "https://i.ibb.co/Y8Bg2YC/msg-4149570142-1892.jpg",
    descricao: 'Apto. Térreo Jandira',
    preco: 210000,
    tipo: 'Compra',
    referencia: '',
    cidade: 'Jandira',
    estado: 'SP',
    bairro: '',
    rua: '',
    cep: '',
    ambientes: "5",
    dormitórios: "2",
    metros: "68",
    video: './img/casa6.avif',
    categoria: "Apartamento",
    garagem: "",
    observação: "Entrada de 20% e financiamento pelo banco",
    fotos: [
      "https://i.ibb.co/YD66N9N/msg-4149570142-1896.jpg",
      "https://i.ibb.co/6NMSYPk/msg-4149570142-1895.jpg",
      "https://i.ibb.co/GVyjLyq/msg-4149570142-1897.jpg",
      "https://i.ibb.co/PQ4VQKC/msg-4149570142-1893.jpg",
      "https://i.ibb.co/h9x4PPg/msg-4149570142-1894.jpg",
      "https://i.ibb.co/DwRZd23/msg-4149570142-1891.jpg",
      "https://i.ibb.co/WFvCnqh/msg-4149570142-1892.jpg"
    ]
  },

  {
    id: 4,
    foto: "https://i.ibb.co/HFyVV3k/msg-4149570142-1939.jpg",
    descricao: 'Salão Comercial Jandira',
    preco: 6000,
    tipo: 'Aluguel',
    referencia: '',
    cidade: 'Jandira',
    estado: 'SP',
    bairro: '',
    rua: '',
    cep: '',
    ambientes: "1",
    dormitórios: "0",
    metros: "",
    video: '',
    categoria: "Salão",
    garagem: "",
    observação: "",
    fotos: [
      "https://i.ibb.co/sKkf4Qp/msg-4149570142-1937.jpg",
      "https://i.ibb.co/R7QcQYV/msg-4149570142-1936.jpg",
      "https://i.ibb.co/HXjk66q/msg-4149570142-1935.jpg",
      "https://i.ibb.co/fxK65Rc/msg-4149570142-1938.jpg",
      "https://i.ibb.co/yStBjDy/msg-4149570142-1934.jpg",
      "https://i.ibb.co/HHDMYXM/msg-4149570142-1941.jpg",
      "https://i.ibb.co/X4JBmy4/msg-4149570142-1940.jpg",
      "https://i.ibb.co/HFyVV3k/msg-4149570142-1939.jpg"
    ]
  },

  {
    id: 5,
    foto: "https://i.ibb.co/XCyJV13/msg-4149570142-1926.jpg",
    descricao: 'Chácara em Mairinque',
    preco: "",
    tipo: 'Compra',
    referencia: '',
    cidade: 'Mairinque',
    estado: 'SP',
    bairro: '',
    rua: '',
    cep: '',
    ambientes: "12",
    dormitórios: "3",
    metros: "900",
    video: '',
    categoria: "Chácara",
    garagem: "",
    observação: "Área construída: 300m²",
    fotos: [
      "https://i.ibb.co/SPvS22p/msg-4149570142-1929.jpg",
      "https://i.ibb.co/x8GKdn8/msg-4149570142-1900.jpg",
      "https://i.ibb.co/z7xxGMz/msg-4149570142-1907.jpg",
      "https://i.ibb.co/ZYZfF41/msg-4149570142-1909.jpg",
      "https://i.ibb.co/Ry4pmyB/msg-4149570142-1908.jpg",
      "https://i.ibb.co/9WNmYHQ/msg-4149570142-1906.jpg",
      "https://i.ibb.co/54dXDTy/msg-4149570142-1904.jpg",
      "https://i.ibb.co/XJtd0Gb/msg-4149570142-1905.jpg",
      "https://i.ibb.co/pPm1zrd/msg-4149570142-1903.jpg",
      "https://i.ibb.co/5LKkCL4/msg-4149570142-1901.jpg",
      "https://i.ibb.co/WzCtV5m/msg-4149570142-1902.jpg",
      "https://i.ibb.co/59bdddd/msg-4149570142-1919.jpg",
      "https://i.ibb.co/qgBVcHr/msg-4149570142-1915.jpg",
      "https://i.ibb.co/Wv6m8Rj/msg-4149570142-1918.jpg",
      "https://i.ibb.co/1ZHKCmQ/msg-4149570142-1917.jpg",
      "https://i.ibb.co/9yY8csz/msg-4149570142-1916.jpg",
      "https://i.ibb.co/yPbhKFd/msg-4149570142-1911.jpg",
      "https://i.ibb.co/gj7Kcd8/msg-4149570142-1912.jpg",
      "https://i.ibb.co/nCgDFWt/msg-4149570142-1913.jpg",
      "https://i.ibb.co/hM6Y6qR/msg-4149570142-1914.jpg",
      "https://i.ibb.co/qDr0PRm/msg-4149570142-1910.jpg",
      "https://i.ibb.co/XCyJV13/msg-4149570142-1926.jpg",
      "https://i.ibb.co/bsLMJwB/msg-4149570142-1921.jpg",
      "https://i.ibb.co/xmYCZg7/msg-4149570142-1928.jpg",
      "https://i.ibb.co/KFh71Cw/msg-4149570142-1927.jpg",
      "https://i.ibb.co/1MWxynT/msg-4149570142-1925.jpg",
      "https://i.ibb.co/k5xLXsH/msg-4149570142-1923.jpg",
      "https://i.ibb.co/p4vtkm9/msg-4149570142-1924.jpg",
      "https://i.ibb.co/1mFzztx/msg-4149570142-1922.jpg",
      "https://i.ibb.co/qmFN3d3/msg-4149570142-1920.jpg",
    ]
  },


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