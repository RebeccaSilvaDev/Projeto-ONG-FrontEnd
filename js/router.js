/* ========================================================= */
/* 1. VARIÁVEIS GLOBAIS E ROTEAMENTO (SPA) 🧭                */
/* ========================================================= */

// Área de injeção de conteúdo (Geralmente a tag <main> com id="app-content")
const contentArea = document.getElementById("app-content");
// Links de navegação no header para configurar o roteamento
const menuLinks = document.querySelectorAll("header a");

/**
 * Função principal para carregar o template e injetar no DOM.
 * @param {string} templateName - O nome da rota/template (ex: 'home', 'cadastro').
 */
const loadTemplate = (templateName) => {
  // Busca o template no objeto 'templates' (do templates.js).
  const templateContent = templates[templateName] || templates.home;

  // 1. Injeta o conteúdo no <main id="app-content">
  contentArea.innerHTML = templateContent;

  // 2. Executa funções pós-carregamento específicas (Pontos de Entrada)

  // Liga a validação e listeners do formulário de Cadastro
  if (
    templateName === "cadastro" &&
    typeof inicializarFormularioCadastro === "function"
  ) {
    console.log("-> Inicializando formulário de cadastro...");
    inicializarFormularioCadastro();
  }

  // Liga a validação e listeners do formulário de Doação
  if (
    templateName === "doacao" &&
    typeof inicializarFormularioDoacao === "function"
  ) {
    console.log("-> Inicializando formulário de doação...");
    inicializarFormularioDoacao();
  }

  // 🚀 Lógica de KPIs e Interatividade (para Home E Projetos)
  if (
    (templateName === "projetos" || templateName === "home") &&
    typeof inicializarProjetosKpis === "function"
  ) {
    console.log("-> Inicializando KPIs e interatividade...");
    inicializarProjetosKpis();
  }

  // NOTA: Adicione chamadas para outras inicializações aqui, como 'blog' ou 'futuros',
  // se elas exigirem execução de código JS específico.
};

/**
 * Lida com a mudança de rota (hashchange) e chama o carregamento do template.
 */
const handleRoute = () => {
  // Pega o hash da URL (remove o # e qualquer extensão .html) ou define 'home' como padrão
  const path = window.location.hash.slice(1).replace(".html", "") || "home";
  loadTemplate(path);
};

/* ========================================================= */
/* 2. FUNÇÕES DO MENU LATERAL MOBILE 📱                      */
/* ========================================================= */

function abrirMenu() {
  const menuMobile = document.getElementById("menu-mobile");
  const overlay = document.getElementById("overlay-menu");
  if (menuMobile && overlay) {
    menuMobile.classList.add("abrir-menu");
    overlay.style.display = "block";
  }
}

function fecharMenu() {
  const menuMobile = document.getElementById("menu-mobile");
  const overlay = document.getElementById("overlay-menu");
  if (menuMobile && overlay) {
    menuMobile.classList.remove("abrir-menu");
    overlay.style.display = "none";
  }
}

/* ========================================================= */
/* 3. SETUP E INICIALIZAÇÃO DE EVENTOS ✨                    */
/* ========================================================= */

document.addEventListener("DOMContentLoaded", function () {
  // 1. Configura os links do menu para usar o roteador SPA
  menuLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const novoHash = link
        .getAttribute("href")
        .replace("#", "")
        .replace(".html", "");
      // Mudar o hash dispara o evento 'hashchange'
      window.location.hash = novoHash || "home";
      fecharMenu();
    });
  });

  // 2. Escuta mudanças na URL (hash) e executa o handleRoute
  window.addEventListener("hashchange", handleRoute);

  // 3. Carrega a rota inicial (executa handleRoute uma vez)
  handleRoute();

  // 4. Configuração do Menu Mobile (permanece inalterada)
  const btnAbrirMenu = document.getElementById("btn-menu");
  const overlay = document.getElementById("overlay-menu");
  const btnFecharMenu = document.querySelector(".menu-mobile .btn-fechar");
  const menuMobileLinks = document.querySelectorAll(".menu-mobile nav ul li a");

  if (btnAbrirMenu) btnAbrirMenu.addEventListener("click", abrirMenu);
  if (btnFecharMenu) btnFecharMenu.addEventListener("click", fecharMenu);
  if (overlay) overlay.addEventListener("click", fecharMenu);
  menuMobileLinks.forEach((link) => {
    link.addEventListener("click", fecharMenu);
  });
});
