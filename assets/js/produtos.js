const produtos = [
  {
    nome: "Sofá Retrátil Luxo",
    descricao: "Sofá 3 lugares em tecido suede, super confortável.",
    preco: 1899.99,
    imagem: "https://picsum.photos/seed/sofa/300/200"
  },
  {
    nome: "Mesa de Jantar 6 Lugares",
    descricao: "Mesa de madeira maciça com tampo de vidro.",
    preco: 1399.50,
    imagem: "https://picsum.photos/seed/mesa/300/200"
  },
  {
    nome: "Cadeira Estofada",
    descricao: "Cadeira elegante com pés de madeira e assento confortável.",
    preco: 299.90,
    imagem: "https://picsum.photos/seed/cadeira/300/200"
  },
  {
    nome: "Armário Multiuso",
    descricao: "Armário branco com prateleiras ajustáveis.",
    preco: 749.00,
    imagem: "https://picsum.photos/seed/armario/300/200"
  },
  
  {
    nome: "Poltrona Reclinável",
    descricao: "Poltrona em couro sintético com reclinação e apoio para os pés.",
    preco: 1129.00,
    imagem: "https://picsum.photos/seed/poltrona/300/200"
  },
  {
    nome: "Estante Decorativa",
    descricao: "Estante moderna com nichos assimétricos em MDF.",
    preco: 579.99,
    imagem: "https://picsum.photos/seed/estante/300/200"
  },
  {
    nome: "Cama Box Casal",
    descricao: "Conjunto box com colchão de molas ensacadas, tamanho casal.",
    preco: 1690.90,
    imagem: "https://picsum.photos/seed/cama/300/200"
  },
  {
    nome: "Estante Decorativa",
    descricao: "Estante moderna com nichos assimétricos em MDF.",
    preco: 579.99,
    imagem: "https://picsum.photos/seed/estante/300/200"
  },
  {
    nome: "Cama Box Casal",
    descricao: "Conjunto box com colchão de molas ensacadas, tamanho casal.",
    preco: 1690.90,
    imagem: "https://picsum.photos/seed/cama/300/200"
  }
];

function renderizarProdutos(lista) {
  const container = document.getElementById('produtos-grid');
  container.innerHTML = '';

  lista.forEach(produto => {
  const card = document.createElement('div');
  card.className = 'produto';
  card.innerHTML = `
    <img src="${produto.imagem}" alt="${produto.nome}">
    <h3>${produto.nome}</h3>
    <p>${produto.descricao}</p>
    <p class="preco">R$ ${produto.preco.toFixed(2).replace('.', ',')}</p>
  `;

  const botao = document.createElement('button');
  botao.textContent = 'Comprar';
  botao.addEventListener('click', () => paginaProduto(produto));

  card.appendChild(botao);
  container.appendChild(card);
});
}

function paginaProduto(produto){
  localStorage.setItem('produtoSelecionado', JSON.stringify(produto));
  window.location.href = 'produto.html';   
}

function ordenarProdutos() {
  const criterio = document.getElementById('ordenar').value;
  const ordenados = [...produtos];

  if (criterio === 'menor') {
    ordenados.sort((a, b) => a.preco - b.preco);
  } else if (criterio === 'maior') {
    ordenados.sort((a, b) => b.preco - a.preco);
  }

  renderizarProdutos(ordenados);
}

function comprar(nome) {
  alert(`Produto "${nome}" adicionado ao carrinho!`);
}

// Inicializar a página
document.addEventListener('DOMContentLoaded', () => {
  renderizarProdutos(produtos);
});

function carregarProduto() {
  const produtoJSON = localStorage.getItem('produtoSelecionado');
  if (!produtoJSON) {
    alert('Nenhum produto selecionado!');
    window.location.href = 'produtos.html';
    return;
  }
  const produto = JSON.parse(produtoJSON);

  document.getElementById('produto-nome').textContent = produto.nome;
  document.getElementById('produto-descricao').textContent = produto.descricao;
  document.getElementById('produto-preco').textContent = `R$ ${produto.preco.toFixed(2).replace('.', ',')}`;
  
  const imgEl = document.getElementById('produto-imagem');
  imgEl.src = produto.imagem;
  imgEl.alt = produto.nome;
}

document.addEventListener('DOMContentLoaded', carregarProduto);