function mostrarSecao(secaoId) {
  // Esconde todas as seções
  document.querySelectorAll('.secao').forEach(secao => {
    secao.classList.remove('active');
  });

  // Mostra a seção clicada
  document.getElementById(secaoId).classList.add('active');
}
