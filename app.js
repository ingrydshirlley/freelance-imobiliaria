document.addEventListener('DOMContentLoaded', () => {
    const appDiv = document.getElementById('app');
    const verMaisBtn = document.getElementById('verMaisBtn');
    const itemsPerPage = 8;
    let startIndex = 0;

    function exibirCasas() {
        fetch('http://localhost:3001/casas')
            .then(response => {
                console.log('Requisição para /casas bem-sucedida.');
                return response.json();
            })
            .then(data => {
                console.log('Dados obtidos com sucesso:', data);

                const casas = data.casas;

                const casasExibidas = casas.slice(startIndex, startIndex + itemsPerPage);

                casasExibidas.forEach(casa => {
                    const casaDiv = criarCasaDiv(casa);
                    appDiv.appendChild(casaDiv);
                });

                startIndex += itemsPerPage;

                if (startIndex >= casas.length) {
                    verMaisBtn.style.display = 'none'; // Oculta o botão quando todos os itens foram exibidos
                }
            })
            .catch(error => console.error('Erro ao obter dados:', error));
    }

    function criarCasaDiv(casa) {
        const casaDiv = document.createElement('div');
        casaDiv.classList.add('casa-box');

        casaDiv.innerHTML =
            `<div class="box-image">
                <img src="${casa.foto}" alt="Casa">
            </div>

            <div class="box-informations">
                <p class="tipo-casa"> ${casa.tipo} </p>
                
                <h2> ${casa.descricao} </h2>
                
                <p class="preco"> R$ ${casa.preco} </p>
                
                <p class="endereco">${casa.cidade}, ${casa.estado} </p>
                
                <div> 
                    <span> <i class="fa-solid fa-door-open"></i>: ${casa.ambientes} ambientes </span>
                    <span> <i class="fa-solid fa-vector-square"></i>: ${casa.metros}m² </span>
                </div>
            </div> `;

        return casaDiv;
    }

    // evento de clique botão "Ver Mais"
    verMaisBtn.addEventListener('click', exibirCasas);

    // exibe as primeiras casas ao carregar a página
    exibirCasas();

    const topoButton = document.getElementById('topo');
    topoButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});
