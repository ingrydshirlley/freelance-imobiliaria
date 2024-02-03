document.addEventListener('DOMContentLoaded', () => {
    const appDiv = document.getElementById('app');
    const verMaisBtn = document.getElementById('verMaisBtn');
    const limparFiltrosBtn = document.getElementById('limparFiltrosBtn');
    const selectTipoImovel = document.getElementById('select-tipo-imovel');
    const itemsPerPage = 8;
    let startIndex = 0;
    let allCasasData = [];
    let currentCategoriaImovel = '';
    let currentBairroCidade = '';
    let currentTipoImovel = '';

    function exibirCasas(casas) {
        const casasExibidas = casas.slice(startIndex, startIndex + itemsPerPage);

        casasExibidas.forEach(casa => {
            const casaDiv = criarCasaDiv(casa);
            appDiv.appendChild(casaDiv);
        });

        startIndex += itemsPerPage;

        if (startIndex >= casas.length) {
            verMaisBtn.style.display = 'none';
        } else {
            verMaisBtn.style.display = 'block';
        }
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
                
                <p class="preco"> R$ ${casa.preco},00 </p>
                
                <p class="endereco">${casa.cidade}, ${casa.estado} </p>
                
                <div> 
                    <span> <i class="fa-solid fa-door-open"></i>: ${casa.ambientes} ambientes </span>
                    <span> <i class="fa-solid fa-vector-square"></i>: ${casa.metros}m² </span>
                </div>
            </div> `;

        casaDiv.addEventListener('click', () => {
            abrirModal(casa.id, casa.foto, casa.descricao, casa.preco, casa.tipo, casa.referencia, casa.cidade, casa.estado, casa.bairro, casa.rua, casa.cep, casa.ambientes, casa.dormitórios, casa.metros, casa.video, casa.categoria, casa.garagem, casa.observação, casa.fotos);
        });

        return casaDiv;
    }

    function buscarImoveis() {
        currentCategoriaImovel = document.getElementById('select-categoria-imovel').value;
        currentBairroCidade = document.getElementById('input-bairro-cidade').value;
        currentTipoImovel = selectTipoImovel.value;

        console.log('Categoria de Imóvel:', currentCategoriaImovel);
        console.log('Bairro/Cidade:', currentBairroCidade);
        console.log('Tipo de Imóvel:', currentTipoImovel);

        fetch('http://localhost:3001/casas')
            .then(response => response.json())
            .then(data => {
                const casasFiltradas = data.casas.filter(casa => {
                    return (!currentCategoriaImovel || casa.categoria === currentCategoriaImovel) &&
                        (!currentBairroCidade || casa.bairro.includes(currentBairroCidade) || casa.cidade.includes(currentBairroCidade)) &&
                        (!currentTipoImovel || casa.tipo === currentTipoImovel);
                });

                allCasasData = data.casas;
                appDiv.innerHTML = '';
                startIndex = 0;
                exibirCasas(casasFiltradas);
            })
            .catch(error => console.error('Erro ao obter dados:', error));
    }

    function limparFiltros() {
        document.getElementById('select-categoria-imovel').value = '';
        document.getElementById('input-bairro-cidade').value = '';
        selectTipoImovel.value = '';

        currentCategoriaImovel = '';
        currentBairroCidade = '';
        currentTipoImovel = '';

        window.location.reload();
    }

    verMaisBtn.addEventListener('click', () => {
        fetch('http://localhost:3001/casas')
            .then(response => response.json())
            .then(data => {
                exibirCasas(data.casas);
            })
            .catch(error => console.error('Erro ao obter dados:', error));
    });

    limparFiltrosBtn.addEventListener('click', limparFiltros);

    fetch('http://localhost:3001/casas')
        .then(response => response.json())
        .then(data => {
            allCasasData = data.casas;
            exibirCasas(allCasasData);
        })
        .catch(error => console.error('Erro ao obter dados:', error));

    const topoButton = document.getElementById('topo');
    topoButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    const buscarBtn = document.getElementById('buscarBtn');
    buscarBtn.addEventListener('click', buscarImoveis);
});
