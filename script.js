const produtos = [
    { id: 1, nome: "Copo Caneca Térmica Quencher Com Canudo E Alça 1200ML", preco: 28.99, img: "img/produto1.jpg" },
    { id: 2, nome: "Almofada Travesseiro De Pernas Ortopédico", preco: 18.99, img: "img/produto2.jpg" },
    { id: 3, nome: "Espremedor Ralador Triturador De Alho E Cebola Em Aço Inoxidável", preco: 4.99, img: "img/produto3.jpg" },
    { id: 4, nome: "Caixinha De Som Karaokê Bluetooth Com 02 Microfones", preco: 24.99, img: "img/produto4.jpg" },
    { id: 5, nome: "Suporte Multiuso De Parede Para Celular E Controle Remoto", preco: 2.99, img: "img/produto5.jpg" },
    { id: 6, nome: "Kit De Canetas Marcador Permanente Ponta Dupla – 24 Cores", preco: 9.99, img: "img/produto6.jpg" },
    { id: 7, nome: "Luminária 3D LED Quadro De Mensagem", preco: 15.99, img: "img/produto7.jpg" },
    { id: 8, nome: "Kit C/12 Utensílios De Cozinha Silicone Cabo Madeira", preco: 29.99, img: "img/produto8.jpg" },
    { id: 9, nome: "Balança Digital Corporal Bioimpedância Bluetooth App", preco: 27.99, img: "img/produto9.jpg" },
    { id: 10, nome: "Tábua Mágica De Descongelar Rápido Carne E Alimentos", preco: 18.99, img: "img/produto10.jpg" },
    { id: 11, nome: "Bolsa Térmica Para Compressa De Borracha Água Quente E Fria – 2 Litros", preco: 9.99, img: "img/produto11.jpg" },
    { id: 12, nome: "Luva De Silicone De Lavar Louças", preco: 7.99, img: "img/produto12.jpg" },
    { id: 13, nome: "Relógio Inteligente Smartwatch D20 Bluetooth Para IOS E Android", preco: 14.99, img: "img/produto13.jpg" },
    { id: 14, nome: "Mini Mixer Misturador Batedor Ovos E Bebidas Elétrico Recarregável", preco: 16.99, img: "img/produto14.jpg" },
    { id: 15, nome: "Luminária Bastão Luz LED Recarregável Sensor Movimento", preco: 17.99, img: "img/produto15.jpg" },
    { id: 16, nome: "Fita Métrica Corporal Medida Corporal Retrátil", preco: 3.99, img: "img/produto16.jpg" },
    { id: 17, nome: "Tampa Rolha Vinho Pressão A Vácuo Garrafas Champagne", preco: 4.99, img: "img/produto17.jpg" },
    { id: 18, nome: "Livro De Colorir Caderno Espiral Com Desenhos", preco: 4.99, img: "img/produto18.jpg" },
    { id: 19, nome: "Livro De Colorir Caderno De Pintura Espiral Grande A4", preco: 12.99, img: "img/produto19.jpg" },
    { id: 20, nome: "Lavadora De Alta Pressão Vap Portátil Recarregável", preco: 79.99, img: "img/produto20.jpg" },
    { id: 21, nome: "Relógio Esportivo Unissex LED Digital Prova D'Água Preto", preco: 3.99, img: "img/produto21.jpg" },
    { id: 22, nome: "Forma Para Moldar Hambúrguer Recheado 3 em 1", preco: 11.99, img: "img/produto22.jpg" },
    { id: 23, nome: "Luva De Microfibra Para Limpeza E Lavagem Automotiva", preco: 4.99, img: "img/produto23.jpg" },
    { id: 24, nome: "Mini Game Portátil Sup Game Box Plus com 400 Jogos", preco: 26.99, img: "img/produto24.jpg" },
    { id: 25, nome: "Ring Light De Mesa Iluminador De Led Tripé 6 Polegadas Com Suporte Celular", preco: 11.99, img: "img/produto25.jpg" },
    { id: 26, nome: "Carteira Futuro RFID Slim Porta Cartões Antifurto", preco: 8.99, img: "img/produto26.jpg" },
    { id: 27, nome: "Bomba Para Galão Água Elétrica Garrafão Torneira Filtro USB", preco: 9.99, img: "img/produto27.jpg" },
    { id: 28, nome: "Conjunto de Tigelas Potes de Inox com Tampa – 5 peças", preco: 17.99, img: "img/produto28.jpg" },
    { id: 29, nome: "Balança Cozinha Digital 10kg Alta Precisão", preco: 12.99, img: "img/produto29.jpg" },
    { id: 30, nome: "Camiseta Masculina Estampa Divertida Algodão", preco: 18.99, img: "img/produto30.jpg" },
];

// Função para exibir os produtos na página
function exibirProdutos() {
    const produtosContainer = document.getElementById('produtos');
    produtos.forEach(produto => {
        const produtoElemento = document.createElement('div');
        produtoElemento.classList.add('produto');
        produtoElemento.innerHTML = `
            <img src="${produto.img}" alt="${produto.nome}">
            <h3>${produto.nome}</h3>
            <p>R$ ${produto.preco.toFixed(2)}</p>
            <div class="quantidade">
                <input type="number" value="1" min="1" id="quantidade-${produto.id}">
                <button onclick="adicionarAoCarrinho(${produto.id})">Adicionar ao Carrinho</button>
            </div>
        `;
        produtosContainer.appendChild(produtoElemento);
    });
}

// Função para adicionar produto ao carrinho
function adicionarAoCarrinho(produtoId) {
    const quantidadeInput = document.getElementById(`quantidade-${produtoId}`);
    const quantidade = parseInt(quantidadeInput.value);

    const produto = produtos.find(p => p.id === produtoId);
    const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

    const itemCarrinho = carrinho.find(item => item.produto.id === produtoId);
    if (itemCarrinho) {
        itemCarrinho.quantidade += quantidade;
    } else {
        carrinho.push({ produto, quantidade });
    }

    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    atualizarCarrinho();
    mostrarMensagem();
}

// Função para mostrar mensagem de produto adicionado
function mostrarMensagem() {
    const mensagem = document.getElementById('mensagem-confirmacao');
    mensagem.style.display = 'block';
    setTimeout(() => mensagem.style.display = 'none', 3000);
}

// Função para exibir o carrinho
function toggleCarrinho() {
    const carrinhoDiv = document.getElementById('carrinho-div');
    carrinhoDiv.classList.toggle('aberto');
    atualizarCarrinho();
}

// Função para atualizar a visualização do carrinho
function atualizarCarrinho() {
    const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    const qtdCarrinho = document.getElementById('qtd-carrinho');
    const itensCarrinho = document.getElementById('itens-carrinho');
    const total = document.getElementById('total');

    // Atualizar quantidade no ícone do carrinho
    const quantidadeTotal = carrinho.reduce((total, item) => total + item.quantidade, 0);
    qtdCarrinho.textContent = quantidadeTotal;

    // Atualizar itens no carrinho
    itensCarrinho.innerHTML = '';
    let valorTotal = 0;
    carrinho.forEach(item => {
        const itemElemento = document.createElement('div');
        itemElemento.classList.add('item-carrinho');
        itemElemento.innerHTML = `
            <p>${item.produto.nome} x${item.quantidade}</p>
            <p>R$ ${(item.produto.preco * item.quantidade).toFixed(2)}</p>
        `;
        itensCarrinho.appendChild(itemElemento);
        valorTotal += item.produto.preco * item.quantidade;
    });

    // Atualizar o total
    total.textContent = `Total: R$ ${valorTotal.toFixed(2)}`;
}

// Exibir os produtos assim que a página carregar
document.addEventListener('DOMContentLoaded', exibirProdutos);
// Atualizar o carrinho ao carregar a página
document.addEventListener('DOMContentLoaded', atualizarCarrinho);

// Função para remover produto do carrinho
function removerDoCarrinho(produtoId) {
    const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    const novoCarrinho = carrinho.filter(item => item.produto.id !== produtoId);
    localStorage.setItem('carrinho', JSON.stringify(novoCarrinho));
    atualizarCarrinho();
}

// Atualizar a exibição do carrinho com a opção de remover produtos
function atualizarCarrinho() {
    const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    const qtdCarrinho = document.getElementById('qtd-carrinho');
    const itensCarrinho = document.getElementById('itens-carrinho');
    const total = document.getElementById('total');

    // Atualizar quantidade no ícone do carrinho
    const quantidadeTotal = carrinho.reduce((total, item) => total + item.quantidade, 0);
    qtdCarrinho.textContent = quantidadeTotal;

    // Atualizar itens no carrinho
    itensCarrinho.innerHTML = '';
    let valorTotal = 0;
    carrinho.forEach(item => {
        const itemElemento = document.createElement('div');
        itemElemento.classList.add('item-carrinho');
        itemElemento.innerHTML = `
            <p>${item.produto.nome} x${item.quantidade}</p>
            <p>R$ ${(item.produto.preco * item.quantidade).toFixed(2)}</p>
            <button onclick="removerDoCarrinho(${item.produto.id})">Remover</button>
        `;
        itensCarrinho.appendChild(itemElemento);
        valorTotal += item.produto.preco * item.quantidade;
    });

    // Atualizar o total
    total.textContent = `Total: R$ ${valorTotal.toFixed(2)}`;
}

// Exibir os produtos assim que a página carregar
document.addEventListener('DOMContentLoaded', exibirProdutos);

// Função para animar o WhatsApp
function animarWhatsApp() {
    const whatsappIcon = document.getElementById('whatsapp-icon');
    whatsappIcon.classList.add('whatsapp-flutuante');
}

animarWhatsApp();  // Chama a função para iniciar a animação assim que a página carrega
// Atualizar o carrinho ao carregar a página
document.addEventListener('DOMContentLoaded', atualizarCarrinho);
