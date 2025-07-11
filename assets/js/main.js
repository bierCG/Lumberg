function api_flask(){
  fetch('http://127.0.0.1:5000/users')
    .then(res => res.json())
    .then(data => {
      alert(JSON.stringify(data));
      console.log(data)
    })
    .catch(err => console.error(err))
}

function btnPagar(){           
  fetch("http://localhost:5000/criar-checkout")
    .then(async res => {
      if (!res.ok) {
        alert("Erro ao iniciar pagamento");
        return;
      }
      const data = await res.json();
      if (data.init_point) {
        window.location.href = data.init_point;  // redireciona para o checkout
      } else {
        alert("Link de pagamento não disponível");
      }
    })
    .catch(() => alert("Erro de conexão"));
};

const produtos = [
      {
        nome: "Sofá Luxo Marinho",
        descricao: "Conforto e elegância para sua sala.",
        imagem: "assets/images/produtos/cozinhaMunique01.jpg"
      },
      {
        nome: "Cama Box Azul",
        descricao: "Durma com qualidade e design.",
        imagem: "assets/images/produtos/cozinhaMunique02.jpg"
      },
      {
        nome: "Poltrona Reclinável",
        descricao: "Ideal para relaxar com estilo.",
        imagem: "assets/images/produtos/cozinhaMunique03.jpg"
      }
    ];

    const container = document.getElementById("produtos");
    produtos.forEach(p => {
      const card = document.createElement("div");
      card.className = "produto";
      card.innerHTML = `
        <img src="${p.imagem}" alt="${p.nome}"/>
        <h4>${p.nome}</h4>
        <p>${p.descricao}</p>
        <button>Comprar</button>
      `;
      container.appendChild(card);
    });

    function buscar() {
      const termo = document.getElementById("busca").value.trim();
      if (termo) {
        alert("Buscando por: " + termo);
      } else {
        alert("Digite algo para buscar.");
      }
    }

const secoes = [
  {
    titulo: 'Quem Somos',
    texto: 'Na Lumberg, transformamos espaços com móveis que unem design, conforto e qualidade para você viver melhor.',
    icone: '<svg xmlns="http://www.w3.org/2000/svg" fill="#0a2540" viewBox="0 0 24 24" width="36" height="36"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>'
  },
  {
    titulo: 'Nossos Valores',
    texto: 'Valorizamos integridade, inovação e sustentabilidade, sempre buscando transparência e respeito ao meio ambiente.',
    icone: '<svg xmlns="http://www.w3.org/2000/svg" fill="#0a2540" viewBox="0 0 24 24" width="36" height="36"><path d="M12 2L2 7v6c0 5 5 9 10 9s10-4 10-9V7l-10-5zm1 13h-2v-2h2v2zm0-4h-2V7h2v4z"/></svg>'
  },
  {
    titulo: 'Objetivos',
    texto: 'Ser referência em móveis de alto padrão, levando beleza e funcionalidade para cada lar.',
    icone: '<svg xmlns="http://www.w3.org/2000/svg" fill="#0a2540" viewBox="0 0 24 24" width="36" height="36"><path d="M12 4l1.41 1.41L7.83 11H20v2H7.83l5.58 5.59L12 20l-8-8z"/></svg>'
  }
];

const container2 = document.getElementById('sobre-nos');

secoes.forEach(secao => {
  const sectionEl = document.createElement('section');
  sectionEl.classList.add('secao');

  // Container título + ícone
  const tituloContainer = document.createElement('div');
  tituloContainer.classList.add('titulo-container');
  tituloContainer.innerHTML = secao.icone;

  const h2 = document.createElement('h2');
  h2.textContent = secao.titulo;
  tituloContainer.appendChild(h2);

  sectionEl.appendChild(tituloContainer);

  const p = document.createElement('p');
  p.textContent = secao.texto;

  sectionEl.appendChild(h2);
  sectionEl.appendChild(p);
  

  container2.appendChild(sectionEl);
});

const slides = [
  {
    imagem: 'assets/images/produtos/cozinhaMunique01.jpg',
    titulo: 'Transforme seu espaço com elegância',
    descricao: 'Design, conforto e qualidade para sua casa com a Lumberg.'
  },
  {
    imagem: 'assets/images/produtos/cozinhaMunique02.jpg',
    titulo: 'Ambientes que inspiram',
    descricao: 'Móveis pensados para o seu bem-estar e estilo de vida.'
  },
  {
    imagem: 'assets/images/produtos/cozinhaMunique03.jpg',
    titulo: 'Soluções modernas para o seu lar',
    descricao: 'Tecnologia e sofisticação nos mínimos detalhes.'
  }
];

let slideAtual = 0;
let intervalo = setInterval(proximoSlide, 5000);

function atualizarBanner() {
  const slide = slides[slideAtual];
  document.getElementById('banner').style.backgroundImage = `url(${slide.imagem})`;
  document.getElementById('banner-titulo').textContent = slide.titulo;
  document.getElementById('banner-descricao').textContent = slide.descricao;
}

function proximoSlide() {
  slideAtual = (slideAtual + 1) % slides.length;
  atualizarBanner();
}

function slideAnterior() {
  slideAtual = (slideAtual - 1 + slides.length) % slides.length;
  atualizarBanner();
}

document.getElementById('next-btn').addEventListener('click', () => {
  proximoSlide();
  reiniciarTimer();
});

document.getElementById('prev-btn').addEventListener('click', () => {
  slideAnterior();
  reiniciarTimer();
});

function reiniciarTimer() {
  clearInterval(intervalo);
  intervalo = setInterval(proximoSlide, 5000);
}

atualizarBanner();