document.addEventListener('DOMContentLoaded', () => {

    const appDiv = document.getElementById('app');

    fetch('http://localhost:3001/casas')

        .then(response => {
            console.log('Requisição para /casas bem-sucedida.');
            return response.json();
        })

        .then(data => {
            console.log('Dados obtidos com sucesso:', data);

            const casas = data.casas;

            casas.forEach(casa => {
                const casaDiv = document.createElement('div');

                casaDiv.innerHTML =
                    `<img src="${casa.foto}" alt="Casa">
                    <img src="${casa.video}" alt="video">
                    <h2>${casa.tipo}</h2>
                    <p>${casa.descricao}</p>
                    <p>Preço: R$ ${casa.preco}</p>
                    <p>Endereço: ${casa.endereco}</p>`;
                    
                appDiv.appendChild(casaDiv);
            });
        })

        .catch(error => console.error('Erro ao obter dados:', error));
});