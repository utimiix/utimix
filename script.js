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
  { id: 30, nome: "Forma Para Air Fryer De Silicone Antiaderente – Sem Sujeira", preco: 4.50, img: "img/produto30.jpg" },
  { id: 31, nome: "Máquina De Barbear E Cortar Cabelo Profissional Recarregável Sem Fio Dragão", preco: 9.99, img: "img/produto31.jpg" },
  { id: 32, nome: "Bolsa Térmica Infantil Lancheira Escolar Marmita C/ Alça Animais 3D", preco: 6.99, img: "img/produto32.jpg" },
  { id: 33, nome: "Tela Rede Mosquiteiro Contra Insetos Com Velcro Para Janela", preco: 6.99, img: "img/produto33.jpg" },
  { id: 34, nome: "Barra De Apoio Portátil Com Ventosa Para Idosos Deficientes Banheiro", preco: 16.99, img: "img/produto34.jpg" },
  { id: 35, nome: "Labubu Boneco De Pelúcia 3ª Geração", preco: 14.99, img: "img/produto35.jpg" },
  { id: 36, nome: "Labubu Boneco De Pelúcia Sentado Chaveiro Surpresa", preco: 14.99, img: "img/produto36.jpg" }
];

const container = document.getElementById("produtos");
const carrinhoDiv = document.getElementById("carrinho");
const itensCarrinho = document.getElementById("itens-carrinho");
const totalEl = document.getElementById("total");
const qtdCarrinho = document.getElementById("qtd-carrinho");
const btnFinalizar = document.getElementById("btn-finalizar");

let carrinho = [];

// ---------- Mostrar produtos ----------
function mostrarProdutos(lista) {
  container.innerHTML = "";
  lista.forEach(prod => {
    const card = document.createElement("div");
    card.classList.add("produto");
    card.innerHTML = `
      <img src="${prod.img}" alt="${prod.nome}">
      <h3>${prod.nome}</h3>
      <p>A partir de: R$ ${prod.preco.toFixed(2)}</p>
      <input type="number" id="qtd-${prod.id}" min="1" value="1">
      <button onclick="adicionar(${prod.id})">Adicionar ao carrinho</button>
    `;
    container.appendChild(card);
  });
}

mostrarProdutos(produtos);

// ---------- Adicionar ao carrinho ----------
function adicionar(id) {
  const produto = produtos.find(p => p.id === id);
  const inputQtd = document.getElementById(`qtd-${id}`);
  let qtd = parseInt(inputQtd.value);

  if (isNaN(qtd) || qtd < 1) {
    alert("Quantidade inválida!");
    inputQtd.value = 1;
    qtd = 1;
  }

  const index = carrinho.findIndex(p => p.id === id);
  if (index > -1) {
    carrinho[index].qtd += qtd;
  } else {
    carrinho.push({ ...produto, qtd });
  }

  atualizarCarrinho();
  abrirCarrinho();
}

// ---------- Remover do carrinho ----------
function remover(index) {
  carrinho.splice(index, 1);
  atualizarCarrinho();
}

// ---------- Atualizar carrinho ----------
function atualizarCarrinho() {
  itensCarrinho.innerHTML = "";
  let total = 0;
  carrinho.forEach((item, index) => {
    total += item.preco * item.qtd;
    const div = document.createElement("div");
    div.classList.add("item-carrinho");
    div.innerHTML = `
      ${item.nome} - R$ ${item.preco.toFixed(2)} x ${item.qtd} = R$ ${(item.preco*item.qtd).toFixed(2)} 
      <button onclick="remover(${index})">x</button>
    `;
    itensCarrinho.appendChild(div);
  });
  totalEl.textContent = `Total: R$ ${total.toFixed(2)}`;
  qtdCarrinho.textContent = carrinho.reduce((acc, i) => acc + i.qtd, 0);
}

// ---------- Mostrar / esconder carrinho ----------
function toggleCarrinho() {
  carrinhoDiv.classList.toggle("aberto");
}

// Forçar abrir o carrinho ao adicionar
function abrirCarrinho() {
  carrinhoDiv.classList.add("aberto");
}

// ---------- Finalizar pedido via WhatsApp ----------
btnFinalizar.addEventListener("click", () => {
  if (carrinho.length === 0) {
    alert("O carrinho está vazio!");
    return;
  }

  const total = carrinho.reduce((acc, p) => acc + p.preco*p.qtd, 0);
  if (total < 500) {
    alert("O pedido mínimo é R$ 500,00");
    return;
  }

  const lista = carrinho.map(p => `${p.nome} (R$ ${p.preco.toFixed(2)} x ${p.qtd})`).join(", ");
  const msg = `Olá! Quero fazer um pedido: ${lista}. Total: R$ ${total.toFixed(2)}`;
  const url = `https://wa.me/5511980946705?text=${encodeURIComponent(msg)}`;
  window.open(url, "_blank");
});

// ---------- Filtrar produtos (pesquisa) ----------
document.getElementById("search").addEventListener("input", e => {
  const termo = e.target.value.toLowerCase();
  const filtrados = produtos.filter(p => p.nome.toLowerCase().includes(termo));
  mostrarProdutos(filtrados);
});
