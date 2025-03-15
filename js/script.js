const imagens = document.querySelectorAll(".bike-magic, .bike-nebula");

function galeriaClique(imagem) {
  imagem.addEventListener("click", galeriaTrocar);
}
imagens.forEach(galeriaClique);

function galeriaTrocar(event) {
  const principal = document.querySelector("#principal");
  const clicada = event.currentTarget;

  // Armazena os atributos da imagem principal
  const srcTemp = principal.src;
  const altTemp = principal.getAttribute("alt");

  // Troca a imagem principal pela clicada
  principal.src = clicada.src;
  principal.setAttribute("alt", clicada.getAttribute("alt"));

  // Define a imagem clicada como a antiga principal
  clicada.src = srcTemp;
  clicada.setAttribute("alt", altTemp);
}
