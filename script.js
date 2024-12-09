// Função para carregar o arquivo JSON e gerar o catálogo
function carregarCatalogo() {
    fetch('produtos.json')  // Carrega o arquivo JSON
        .then(response => response.json())  // Converte a resposta para JSON
        .then(produtos => {
            const container = document.getElementById('catalogo');
            Object.values(produtos).forEach(produto => {
                // Cria um novo elemento HTML para cada produto
                const produtoDiv = document.createElement('div');
                produtoDiv.classList.add('product');

                produtoDiv.innerHTML = `
                    <span class='numeracao'>${produto.numeracao}</span><br>
                    <img src="${produto.link_imagem}" alt="${produto.descricao}">
                    <h3>${produto.descricao}</h3>
                    <p class="price">
                        <span class="old-price">De: ${produto.valor_de}</span><br>
                        <span class="new-price">Por: ${produto.valor_nosso}</span><br>
                    </p>
                `;

                container.appendChild(produtoDiv); // Adiciona o produto à lista de produtos
            });
        })
        .catch(error => {
            console.error('Erro ao carregar o JSON:', error);
        });
}

// Chama a função para carregar os produtos quando a página carrega
window.onload = carregarCatalogo;
