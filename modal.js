function abrirModal(id, foto, descricao, preco, tipo, referencia, cidade, estado, bairro, rua, cep, ambientes, dormitórios, metros, video, categoria, garagem, observação, fotos) {

    const modal = document.getElementById('myModal');
    const modalContent = document.getElementById('modalContent');
    const closeModal = document.getElementById('closeModal');

    let modalHTML =
        `
        <div class="textos-modal"> 
            <h1 class="descricao-modal">${descricao}</h1>

            <div class="endereco-modal">
                <p>rua fake, 101, bairro fake - ${cidade} - ${estado}</p>
                <p>CEP: f4k39-000</p>
            </div>

            <div class="preco-modal">
                <p>R$${preco},00</p>
            </div>
        </div>
    `;

    // Verificar se a propriedade 'fotos' está presente e é uma array
    if (fotos && Array.isArray(fotos) && fotos.length > 0) {
        // Adicionar o carrossel de imagens
        modalHTML += '<div id="imageCarousel" class="carousel">';

        fotos.forEach((foto, index) => {
            modalHTML += `<img class="carousel-slide" src="${foto}" style="display: ${index === 0 ? 'block' : 'none'}; width: 100%; height: 700px;"">`;
        });

        modalHTML += '<div class="carousel-controls">';
        modalHTML += '<a class="prev" onclick="mudarImagem(-1)">&#10094;</a>';
        modalHTML += '<a class="next" onclick="mudarImagem(1)">&#10095;</a>';

        modalHTML += '</div>';
    } else {
        // Se não houver foto disponível, você pode adicionar uma mensagem ou tratar conforme necessário
        modalHTML += '<p>Nenhuma foto disponível.</p>';
    }


    // Definir o HTML no modalContent
    modalContent.innerHTML = modalHTML;

    // Exibir o modal
    modal.style.display = 'flex';

    // Fechar o modal ao clicar no botão de fechar
    closeModal.onclick = function () {
        modal.style.display = 'none';
    };


}

// Função para mudar a imagem no carrossel
function mudarImagem(n) {
    const slides = document.getElementsByClassName('carousel-slide');
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }

    currentIndex += n;

    if (currentIndex >= slides.length) {
        currentIndex = 0;
    } else if (currentIndex < 0) {
        currentIndex = slides.length - 1;
    }

    slides[currentIndex].style.display = 'block';
}

// Variável para controlar o índice da imagem atual no carrossel
let currentIndex = 0;
