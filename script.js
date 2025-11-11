const produtos = [
    { id: 1, nome: "Copo Caneca Térmica Quencher 1200ML", preco: 28.99, img: "img/produto1.jpg" },
    { id: 2, nome: "Almofada Travesseiro Ortopédico", preco: 18.99, img: "img/produto2.jpg" },
    { id: 3, nome: "Espremedor Triturador Alho e Cebola", preco: 4.99, img: "img/produto3.jpg" },
    { id: 4, nome: "Caixinha de Som Karaokê Bluetooth", preco: 24.99, img: "img/produto4.jpg" },
    { id: 5, nome: "Suporte Multiuso Parede Celular e Controle", preco: 2.99, img: "img/produto5.jpg" },
    { id: 6, nome: "Kit Canetas Coloridas Pintura - 30 Cores", preco: 12.99, img: "img/produto6.jpg" },
    { id: 7, nome: "Fone Bluetooth Sem Fio", preco: 39.99, img: "img/produto7.jpg" },
    { id: 8, nome: "Mochila Escolar Resistente", preco: 49.99, img: "img/produto8.jpg" },
    { id: 9, nome: "Relógio Digital Esportivo", preco: 59.99, img: "img/produto9.jpg" },
    { id: 10, nome: "Camiseta Unissex Algodão", preco: 19.99, img: "img/produto10.jpg" },
    { id: 11, nome: "Tênis Casual Confortável", preco: 89.99, img: "img/produto11.jpg" },
    { id: 12, nome: "Garrafa Térmica 1L", preco: 34.99, img: "img/produto12.jpg" },
    { id: 13, nome: "Conjunto de Talheres Inox 24 Peças", preco: 49.99, img: "img/produto13.jpg" },
    { id: 14, nome: "Panela Elétrica Multiuso", preco: 79.99, img: "img/produto14.jpg" },
    { id: 15, nome: "Liquidificador 2L", preco: 129.99, img: "img/produto15.jpg" },
    { id: 16, nome: "Escova de Cabelo Anti-Embaraço", preco: 14.99, img: "img/produto16.jpg" },
    { id: 17, nome: "Óculos de Sol Masculino", preco: 24.99, img: "img/produto17.jpg" },
    { id: 18, nome: "Pulseira Inteligente Fitness", preco: 59.99, img: "img/produto18.jpg" },
    { id: 19, nome: "Capa Protetora Smartphone", preco: 9.99, img: "img/produto19.jpg" },
    { id: 20, nome: "Notebook 15.6\" Intel i3", preco: 2199.99, img: "img/produto20.jpg" },
    { id: 21, nome: "Mouse Sem Fio Óptico", preco: 29.99, img: "img/produto21.jpg" },
    { id: 22, nome: "Teclado Mecânico Gamer", preco: 199.99, img: "img/produto22.jpg" },
    { id: 23, nome: "Cadeira Gamer Ergonômica", preco: 599.99, img: "img/produto23.jpg" },
    { id: 24, nome: "Webcam HD 1080p", preco: 89.99, img: "img/produto24.jpg" },
    { id: 25, nome: "Microfone Condensador", preco: 129.99, img: "img/produto25.jpg" },
    { id: 26, nome: "Smart TV 43\" LED", preco: 1499.99, img: "img/produto26.jpg" },
    { id: 27, nome: "Cafeteira Elétrica", preco: 149.99, img: "img/produto27.jpg" },
    { id: 28, nome: "Aspirador de Pó Portátil", preco: 199.99, img: "img/produto28.jpg" },
    { id: 29, nome: "Fritadeira Elétrica Sem Óleo", preco: 299.99, img: "img/produto29.jpg" },
    { id: 30, nome: "Kit Panos de Prato 6 Unidades", preco: 24.99, img: "img/produto30.jpg" },
    { id: 31, nome: "Jogo de Lençol Casal", preco: 79.99, img: "img/produto31.jpg" },
    { id: 32, nome: "Travesseiro de Plumas", preco: 49.99, img: "img/produto32.jpg" },
    { id: 33, nome: "Cobertor Microfibra Queen", preco: 129.99, img: "img/produto33.jpg" },
    { id: 34, nome: "Chaleira Elétrica 1,7L", preco: 89.99, img: "img/produto34.jpg" },
    { id: 35, nome: "Kit Organizador Multiuso 5 Peças", preco: 39.99, img: "img/produto35.jpg" },
    { id: 36, nome: "Luminária LED de Mesa", preco: 59.99, img: "img/produto36.jpg" }
];

let carrinho = [];

function addProdutoCarrinho(id) {
    const quantidade = parseInt(document.getElementById(`quantidade-${id}`).value);
    const produto = produtos.find(p => p.id === id);
    const produtoExistente = carrinho.find(p => p.id === id);
    
    if (produtoExistente) {
        produtoExistente.quantidade += quantidade;
    } else {
        carrinho.push({ ...produto, quantidade });
    }

    mostrarMensagemConfirmacao(); // Exibe a mensagem de sucesso
    atualizarCarrinho();
}

function mostrarMensagemConfirmacao() {
    const mensagem = document.getElementById("mensagem-confirmacao");
    mensagem.style.display = "block"; // Exibe a mensagem
    setTimeout(() => {
        mensagem.style.display = "none"; // Esconde a mensagem após 3 segundos
    }, 3000);
}

function atualizarCarrinho() {
    const carrinhoDiv = document.getElementById("itens-carrinho");
    const totalDiv = document.getElementById("total");
    const qtdCarrinho = document.getElementById("qtd-carrinho");

    carrinhoDiv.innerHTML = "";
    let total = 0;
    let quantidadeTotal = 0;
    
    carrinho.forEach(item => {
        const itemDiv = document.createElement("div");
        itemDiv.innerHTML = `
            <p>${item.nome} (x${item.quantidade})</p>
            <button onclick="removerProdutoCarrinho(${item.id})">Remover</button>
        `;
        carrinhoDiv.appendChild(itemDiv);
        total += item.preco * item.quantidade;
        quantidadeTotal += item.quantidade;
    });

    totalDiv.innerText = `Total: R$ ${total.toFixed(2)}`;
    qtdCarrinho.innerText = quantidadeTotal;

    if (carrinho.length === 0) {
        carrinhoDiv.innerHTML = "<p>Seu carrinho está vazio.</p>";
    }
}

function removerProdutoCarrinho(id) {
    carrinho = carrinho.filter(p => p.id !== id);
    atualizarCarrinho();
}

function toggleCarrinho() {
    document.getElementById("carrinho-div").classList.toggle("aberto");
}

document.getElementById("btn-finalizar").addEventListener("click", function () {
    if (carrinho.length === 0) {
        alert("Seu carrinho está vazio. Adicione itens para finalizar a compra.");
    } else {
        window.location.href = "https://wa.me/5511980946705?text=Quero%20finalizar%20minha%20compra";
    }
});

function exibirProdutos() {
    const produtosContainer = document.getElementById("produtos");

    produtos.forEach(produto => {
        const produtoDiv = document.createElement("div");
        produtoDiv.classList.add("produto");

        produtoDiv.innerHTML = `
            <img src="${produto.img}" alt="${produto.nome}">
            <h3>${produto.nome}</h3>
            <p>R$ ${produto.preco.toFixed(2)}</p>
            <div class="quantidade">
                <input type="number" id="quantidade-${produto.id}" value="1" min="1">
            </div>
            <button onclick="addProdutoCarrinho(${produto.id})">Adicionar ao Carrinho</button>
        `;

        produtosContainer.appendChild(produtoDiv);
    });
}

window.onload = exibirProdutos;
