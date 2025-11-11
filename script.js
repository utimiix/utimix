const produtos = [  
    { id: 1, nome: "Copo Caneca Térmica Quencher Com Canudo E Alça 1200ML", preco: 28.99, img: "img/produto1.jpg" },
    { id: 2, nome: "Almofada Travesseiro De Pernas Ortopedico", preco: 18.99, img: "img/produto2.jpg" },
    { id: 3, nome: "Espremedor Ralador Triturador De Alho E Cebola Em Aco Inoxidavel", preco: 4.99, img: "img/produto3.jpg" },
    { id: 4, nome: "Caixinha De Som Karaokê Bluetooth Com 02 Microfones", preco: 24.99, img: "img/produto4.jpg" },
    { id: 5, nome: "Suporte Multiuso De Parede Para Celular E Controle Remoto", preco: 2.99, img: "img/produto5.jpg" },
    { id: 6, nome: "Kit De Canetas Marcador Permanente Ponta Dupla 24 Cores", preco: 9.99, img: "img/produto6.jpg" },
    { id: 7, nome: "Luminária 3D LED Quadro De Mensagem", preco: 15.99, img: "img/produto7.jpg" },
    { id: 8, nome: "Kit C/12 Utensílios De Cozinha Silicone Cabo Madeira", preco: 29.99, img: "img/produto8.jpg" },
    { id: 9, nome: "Balança Digital Corporal Bioimpedancia Bluetooth App", preco: 27.99, img: "img/produto9.jpg" },
    { id: 10, nome: "Tabua Magica De Descongelar Rapido Carne E Alimentos", preco: 18.99, img: "img/produto10.jpg" },
    { id: 11, nome: "Bolsa Térmica Para Compressa de Borracha Água Quente e Fria – 2 Litros", preco: 9.99, img: "img/produto11.jpg" },
    { id: 12, nome: "Luva De Silicone De Lavar Louças", preco: 7.99, img: "img/produto12.jpg" },
    { id: 13, nome: "Relógio Inteligente Smartwatch D20 Bluetooth Para IOS e Android Branco", preco: 14.99, img: "img/produto13.jpg" },
    { id: 14, nome: "Mini Mixer Misturador Batedor Ovos e Bebidas Elétrico Recarregável", preco: 16.99, img: "img/produto14.jpg" },
    { id: 15, nome: "Luminária Bastão Luz LED Recarregável Sensor Movimento", preco: 17.99, img: "img/produto15.jpg" },
    { id: 16, nome: "Fita Métrica Corporal Medida Corporal Retrátil", preco: 3.99, img: "img/produto16.jpg" },
    { id: 17, nome: "Tampa Rolha Vinho Pressão A Vácuo Garrafas Vedada Bebidas", preco: 4.99, img: "img/produto17.jpg" },
    { id: 18, nome: "Livro de Colorir Bobbie Goods Caderno Espiral com Desenhos", preco: 4.99, img: "img/produto18.jpg" },
    { id: 19, nome: "Livro de Colorir Caderno de Pintura Espiral Grande A4 com Desenhos", preco: 12.99, img: "img/produto19.jpg" },
    { id: 20, nome: "Lavadora De Alta Pressão Vap Portátil Recarregável", preco: 79.99, img: "img/produto20.jpg" },
    { id: 21, nome: "Relógio Esportivo Unissex LED Digital Prova D'Água Preto", preco: 3.99, img: "img/produto21.jpg" },
    { id: 22, nome: "Forma Para Moldar Hambúrguer Recheado 3 em 1", preco: 11.99, img: "img/produto22.jpg" },
    { id: 23, nome: "Luva De Microfibra Para Limpeza E Lavagem Automotiva", preco: 4.99, img: "img/produto23.jpg" },
    { id: 24, nome: "Mini Game Portátil Sup Game Box Plus com 400 Jogos", preco: 26.99, img: "img/produto24.jpg" },
    { id: 25, nome: "Ring Light De Mesa Iluminador De LED Tripé 6 Polegadas Com Suporte Celular", preco: 11.99, img: "img/produto25.jpg" },
    { id: 26, nome: "Carteira Futuro RFID Slim Porta Cartões Antifurto Listrado", preco: 8.99, img: "img/produto26.jpg" },
    { id: 27, nome: "Bomba Para Galão Água Elétrica Garrafão Torneira Filtro USB", preco: 9.99, img: "img/produto27.jpg" },
    { id: 28, nome: "Conjunto de Tigelas Potes de Inox com Tampa – 5 peças", preco: 17.99, img: "img/produto28.jpg" },
    { id: 29, nome: "Balança Cozinha Digital 10kg Alta Precisão Dieta e Nutrição", preco: 12.99, img: "img/produto29.jpg" },
    { id: 30, nome: "Forma Para Air Fryer De Silicone Antiaderente – Sem Sujeira", preco: 4.50, img: "img/produto30.jpg" },
    { id: 31, nome: "Máquina De Barbear E Cortar Cabelo Profissional Recarregável Sem Fio Buda Ou Dragão", preco: 9.99, img: "img/produto31.jpg" },
    { id: 32, nome: "Bolsa Térmica Infantil Lancheira Escolar Marmita C/ Alça Estampas Animais Fofos 3D", preco: 6.99, img: "img/produto32.jpg" },
    { id: 33, nome: "Tela Rede Mosqueteiro Contra Insetos Com Velcro Para Janela", preco: 6.99, img: "img/produto33.jpg" },
    { id: 34, nome: "Barra de Apoio Portátil com Ventosa Para Idosos Deficientes Banheiro", preco: 16.99, img: "img/produto34.jpg" },
    { id: 35, nome: "Labubu Boneco De Pelúcia 3ª Geração", preco: 14.99, img: "img/produto35.jpg" },
    { id: 36, nome: "Labubu Boneco De Pelúcia Sentado Chaveiro Surpresa", preco: 14.99, img: "img/produto36.jpg" }
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
