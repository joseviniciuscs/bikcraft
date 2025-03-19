// Ativação do menu
const links = document.querySelectorAll(".header-botao a");

function ativarLink(link) {
  const url = location.href;
  const href = link.href;
  if (url.includes(href)) {
    link.classList.add("ativo");
  }
}
links.forEach(ativarLink);

// Ativação orçamento

const parametro = new URLSearchParams(location.search);

function ativarProduto(parametro) {
  const elemento = document.getElementById(parametro);
  if (elemento) {
    elemento.checked = true;
  }
}

parametro.forEach(ativarProduto);

//Perguntyas frequentes

const perguntas = document.querySelectorAll(".perguntas button");

function ativarPergunta(event) {
  const pergunta = event.currentTarget;
  const controls = pergunta.getAttribute("aria-controls");
  const resposta = document.getElementById(controls);

  resposta.classList.toggle("ativa");
  const ativa = resposta.classList.contains("ativa");
  resposta.setAtribute("aria-expand", ativa);
}

function eventoPerguntas(pergunta) {
  pergunta.addEventListener("click", ativarPergunta);
}

perguntas.forEach(eventoPerguntas);

//Galeria

document.addEventListener("DOMContentLoaded", function () {
  const imagens = document.querySelectorAll(".nimbus-imagem img");

  imagens.forEach((img, index) => {
    if (index !== 0) {
      // Evita adicionar evento na imagem principal
      img.addEventListener("click", function () {
        // Troca os src entre a imagem clicada e a primeira imagem (principal)
        [imagens[0].src, this.src] = [this.src, imagens[0].src];
      });
    }
  });
});

//animação
if (window.SimpleAnime) {
  new SimpleAnime();
}
