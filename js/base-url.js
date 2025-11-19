// base-url.js
// =========================================================
// BASE_URL: Detecta se está no localhost ou no GitHub Pages
// =========================================================

// base-url.js: Força a correção dos caminhos estáticos APENAS no Live Server
(function () {
  const REPO_NAME = "/Projeto-ONG-FrontEnd";
  const isLocalHost = !window.location.host.includes("github.io");

  // 1. Lógica de Correção para o Live Server
  if (isLocalHost) {
    // Itera sobre todos os links de CSS e remove o prefixo do repositório
    document.querySelectorAll('link[rel="stylesheet"]').forEach((link) => {
      if (link.href.includes(REPO_NAME)) {
        link.href = link.href.replace(REPO_NAME, "");
        console.log(`Corrigido link CSS localmente: ${link.href}`);
      }
    });

    // Itera sobre todos os scripts e remove o prefixo do repositório
    document.querySelectorAll("script").forEach((script) => {
      if (script.src.includes(REPO_NAME)) {
        script.src = script.src.replace(REPO_NAME, "");
        console.log(`Corrigido script JS localmente: ${script.src}`);
      }
    });

    // Define BASE_URL para uso em roteamento (Hash Routing usa '/')
    window.BASE_URL = "/";
  } else {
    // 2. Lógica para GitHub Pages
    // A URL já está correta no HTML, apenas define a variável global
    window.BASE_URL = REPO_NAME + "/";
  }

  console.log(`Final BASE_URL para roteador: ${window.BASE_URL}`);
})();
