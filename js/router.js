/* ========================================================= */
/* 1. VARIÁVEIS GLOBAIS E ROTEAMENTO (SPA)                   */
/* ========================================================= */

// Mapa que associa a URL (path) ao Template (templates.js) e à Função de Inicialização (se houver).
const routes = {
  // A rota deve corresponder à chave usada no seu objeto `templates` (do templates.js)
  "/": {
    templateKey: "home",
    title: "Home | Transformando Vidas",
    initializer: inicializarKpisIndex,
  },

  // ALIAS ADICIONADO:
  "/home": {
    templateKey: "home", // Aponta para o mesmo template
    title: "Home | Transformando Vidas",
    initializer: inicializarKpisIndex, // Aponta para o mesmo inicializador
  },
  "/cadastro": {
    templateKey: "cadastro",
    title: "Cadastro de Voluntários",
    initializer: inicializarFormularioCadastro,
  },
  "/doacao": {
    templateKey: "doacao",
    title: "Faça sua Doação",
    // Essa função deve encapsular toda a lógica de validacao.js E interatividade.js para Doação.
    initializer: inicializarFormularioDoacao,
  },
  "/projetos": {
    templateKey: "projetos",
    title: "Nossos Projetos e Impacto",
    initializer: inicializarKpisProjetos,
  },
  "/relatorioAnual": {
    templateKey: "relatorioAnual",
    title: "Relatório Anual 2024",
    // Reutiliza a inicialização de contadores/gráficos se o conteúdo for similar ao da home.
    initializer: inicializarKpisRelatorio,
  },
  "/blogMidia": {
    templateKey: "blogMidia",
    title: "Blog e Imprensa",
    initializer: null,
  },
  "/contato": {
    templateKey: "contato",
    title: "Contato",
    initializer: null,
  },
  "/agradecimento": {
    templateKey: "agradecimento",
    title: "Obrigado por sua ação!",
    initializer: null,
  },
  "/Projetofuturo": {
    templateKey: "Projetofuturo",
    title: "Agradecemos o seu interesse! Tente mais tarde!",
    initializer: null,
  },
  // Adicione outras rotas aqui conforme o seu templates.js (ex: ProjetoFuturo)
};

// Área de injeção de conteúdo (Certifique-se que seu index.html tem <main id="content">)
const contentArea = document.getElementById("content");

/* ========================================================= */
/* 2. FUNÇÃO PRINCIPAL DE NAVEGAÇÃO (History API)            */
/* ========================================================= */

/**
 * Navega para uma nova rota.
 * Esta função foi colocada no ESCOPO GLOBAL para ser acessível
 * por outros arquivos JS (como o validacao.js).
 * * @param {string} path - O caminho da URL (ex: '/cadastro').
 */
function navigateTo(path) {
  // 1. Encontra a configuração da rota
  const route = routes[path] || routes["/"]; // Fallback para a Home

  // Verifica se o container principal existe e se o template está disponível
  if (!contentArea || !route || !window.templates[route.templateKey]) {
    console.error(
      `Erro 404: Rota ou template não encontrado para o caminho: ${path}`
    );
    // Você pode injetar um template de erro 404 aqui.
    contentArea.innerHTML =
      window.templates["Projetofuturo"] || "<h1>Página não encontrada.</h1>";
    document.title = "404 - Não Encontrado";

    return;
  }

  // 2. Injeta o conteúdo HTML no container principal
  contentArea.innerHTML = window.templates[route.templateKey];

  // 3. Atualiza o Título da Página
  document.title = route.title;

  // 4. Executa a função de Inicialização da página
  if (route.initializer && typeof route.initializer === "function") {
    try {
      console.log(`-> Inicializando lógica para a rota: ${path}`);
      route.initializer();
    } catch (error) {
      //  TRATAMENTO DE ERRO: Útil para identificar se a função não foi carregada
      console.error(`Falha na inicialização da rota ${path}.`, error.message);
    }
  }

  // 5. Rola para o topo da página (melhor UX, simula recarga)
  window.scrollTo(0, 0);
}

/**
 * Função interna que carrega o conteúdo baseado na URL atual.
 * Foi renomeada para 'router' para evitar confusão com navigateTo.
 */
function router() {
  // Lê o 'hash' (ex: #/cadastro). O .substring(1) remove o '#'.
  const currentPath = window.location.hash.substring(1) || "/";

  // Nota: A lógica de injeção de conteúdo e inicialização
  // já está totalmente contida em navigateTo.
  // Basta chamar navigateTo com o path atual para re-renderizar.
  navigateTo(currentPath);
}

/* ========================================================= */
/* 3. EVENT LISTENERS E INICIALIZAÇÃO                        */
/* ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  // 1. Listener para capturar cliques em links (A Magia da SPA)
  document.body.addEventListener("click", (e) => {
    // Encontra o link <a> mais próximo do alvo do clique
    const anchor = e.target.closest("a");

    // Regras para roteamento interno:
    // Agora o roteamento interno verifica se o href começa com '#/'
    // (link interno com hash, não um link externo ou sem hash).
    if (
      anchor &&
      anchor.hasAttribute("href") &&
      anchor.getAttribute("href").startsWith("#/")
    ) {
      e.preventDefault(); // Impede a recarga padrão!

      // O navigateTo só precisa do path (sem o #), que o router.js já entende.
      const href = anchor.getAttribute("href").substring(1);
      // Atualizamos o HASH na URL. Isso dispara o evento 'hashchange'
      // mas como estamos em "popstate", mantemos a chamada direta por simplicidade.
      window.location.hash = href; // A navigateTo está DEFINIDA e será chamada

      // Chamamos navigateTo() diretamente para renderizar imediatamente
      navigateTo(href);

      // Fecha o menu mobile após a navegação (melhor UX)
      if (anchor.closest(".menu-mobile")) {
        if (typeof fecharMenu === "function") {
          fecharMenu();
        }
      }
    }
  });

  // 3. Listener para o botão Voltar/Avançar do navegador
  // O evento popstate funciona bem para hash. Mantemos a chamada ao router().
  window.addEventListener("popstate", () => {
    // Chama a função principal do router que agora usa o navigateTo
    router();
  });

  // 4. Carrega a rota inicial (garante que o conteúdo correto apareça no primeiro acesso)
  // Como navigateTo já chama pushState e router(), chamamos apenas o router para iniciar
  router();
});
