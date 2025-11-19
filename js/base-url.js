// base-url.js
// =========================================================
// BASE_URL: Detecta se está no localhost ou no GitHub Pages
// =========================================================

(function () {
  // Nome do repositório no GitHub (substitua pelo seu)
  const REPO_NAME = "Projeto-ONG-FrontEnd";

  // Verifica se o host atual é GitHub Pages
  const isGitHubPages = window.location.host.includes("github.io");

  // Define a BASE_URL dinamicamente
  const BASE_URL_PATH = isGitHubPages ? `/${REPO_NAME}/` : "/";

  // 1. Encontra a tag <base>
  const baseTag = document.getElementById("base-tag");

  // 2. Define o href dinamicamente
  if (baseTag) {
    baseTag.href = BASE_URL_PATH;
    console.log(`Tag <base> definida para: ${baseTag.href}`);
  }

  // Expondo globalmente
  window.BASE_URL = BASE_URL_PATH;

  console.log(`BASE_URL detectada: ${window.BASE_URL}`);
})();
