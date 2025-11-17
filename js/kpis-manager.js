// =========================================================================================================
// ARQUIVO: kpis-manager.js
// GERENCIADOR CENTRALIZADO DE LÓGICAS DE ANIMAÇÃO E KPIS PARA VÁRIAS PÁGINAS.
// Estrutura: Funções por Página/Módulo (Index, Projetos, Relatório Anual)
// =========================================================================================================

// ----------------------------------------------------
// I. MÓDULO: INDEX (Animação de Borda Única)
// ----------------------------------------------------

/* ========================================================= */
/* ARQUIVO: js/index-kpis.js                                 */
/* Funções de animação de KPIs para a página index.html      */
/* ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  // -----------------------------------------------------------------
  // 1. DADOS FINANCEIROS
  // Estes valores devem ser os mesmos definidos no HTML (data-valor)
  // -----------------------------------------------------------------
  const totalArrecadado = 98765;
  const metaAnual = 100000;
  const percentualAlcancado = (totalArrecadado / metaAnual) * 100;

  // ----------------------------------------------------
  // 2. FUNÇÃO DE ANIMAÇÃO DE CONTADORES (KPIs)
  // ----------------------------------------------------
  function animarContador(elementoId, valorFinal, isMoeda = true) {
    const elemento = document.getElementById(elementoId);
    if (!elemento) return;

    let valorInicial = 0;
    const duracao = 2000; // Duração da animação em milissegundos (2 segundos)

    function formatarValor(valor) {
      if (isMoeda) {
        // Formata para moeda brasileira (R$ 98.765)
        return (
          "R$ " +
          Math.round(valor).toLocaleString("pt-BR", {
            minimumFractionDigits: 0,
          })
        );
      }
      // Formata para percentual (98.8%)
      return valor.toFixed(1) + "%";
    }

    let inicioTempo = null;

    function passo(timestamp) {
      if (!inicioTempo) inicioTempo = timestamp;
      const progresso = timestamp - inicioTempo;
      let valorAtual;

      if (progresso < duracao) {
        // Calcula o valor atual com base no progresso do tempo
        valorAtual = (progresso / duracao) * valorFinal;
        elemento.textContent = formatarValor(valorAtual);
        requestAnimationFrame(passo);
      } else {
        // Garante que o valor final exato seja exibido
        valorAtual = valorFinal;
        elemento.textContent = formatarValor(valorAtual);
      }
    }

    requestAnimationFrame(passo);
  }

  // Inicia a animação dos três KPIs quando a página carrega
  animarContador("kpi-arrecadado", totalArrecadado);
  animarContador("kpi-meta", metaAnual);
  animarContador("kpi-percentual", percentualAlcancado, false);

  // --------------------------------------------------------
  // 3. CRIAÇÃO DO GRÁFICO CHART.JS (Visualização de Metas)
  // --------------------------------------------------------
  const ctx = document.getElementById("arrecadacaoChart");
  let arrecadacaoChart; //  1. Variável para armazenar a instância do gráfico

  if (ctx) {
    //  2. Armazena a instância do gráfico na variável
    arrecadacaoChart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["Arrecadado", "Meta"],
        datasets: [
          {
            label: "Valor em Reais (R$)",
            data: [totalArrecadado, metaAnual],
            backgroundColor: [
              "#007bff", // Azul para Arrecadado
              "#adb5bd", // Cinza para Meta
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
            // Formatação do Eixo Y para exibir em R$
            ticks: {
              callback: function (value) {
                return (
                  "R$ " +
                  value.toLocaleString("pt-BR", { minimumFractionDigits: 0 })
                );
              },
            },
          },
        },
        plugins: {
          legend: {
            display: false,
          },
          title: {
            display: true,
            text: `Progresso Total: ${percentualAlcancado.toFixed(
              1
            )}% da meta alcançada`,
          },
        },
      },
    });
  }

  // ----------------------------------------------------
  // 4. CORREÇÃO DE REDIMENSIONAMENTO DO GRÁFICO
  // ----------------------------------------------------

  //  3. Adiciona um Listener para forçar o redesenho do gráfico (debounce opcional)
  let resizeTimer;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      if (arrecadacaoChart) {
        arrecadacaoChart.resize();
      }
    }, 200); // Executa após 200ms de pausa no redimensionamento
  });
});

// -------------------------------------------------------------------
// II. MÓDULO: PROJETOS (Animações de Contagem e Barras de Progresso)
// -------------------------------------------------------------------

/* ========================================================= */
/* ARQUIVO: js/projetos-kpis.js                              */
/* Funções de animação de KPIs para a página projetos.html   */
/* ========================================================= */

// Mapa para rastrear quais KPIs já foram animados (evita animação repetida)
const kpisAnimados = new WeakSet();

/**
 * Inicia a animação de contagem para um único elemento KPI.
 * @param {HTMLElement} kpiElement - O elemento .kpi a ser animado.
 */
function animarKpiPorRolagem(kpiElement) {
  // Evita animar o mesmo KPI mais de uma vez
  if (kpisAnimados.has(kpiElement)) return;
  kpisAnimados.add(kpiElement);

  // Seleciona o elemento que contém o valor (+50K, 150, +5, 120)
  const valorElement = kpiElement.querySelector(".valor");
  if (!valorElement) return;

  // 1. ANÁLISE DO VALOR (Extrai prefixo, sufixo e valor numérico)
  const valorTextoOriginal = valorElement.textContent.trim();
  let valorTexto = valorTextoOriginal;
  let prefixo = "";
  let sufixo = "";

  // Lógica para extrair '+' e 'K'
  if (valorTexto.startsWith("+")) {
    prefixo = "+";
    valorTexto = valorTexto.substring(1);
  }
  if (valorTexto.endsWith("K")) {
    sufixo = "K";
    valorTexto = valorTexto.slice(0, -1);
  }

  const valorFinal = parseFloat(valorTexto);
  if (isNaN(valorFinal)) return;

  // 2. FUNÇÃO DE FORMATAÇÃO
  function formatar(valor) {
    // Arredonda para o número inteiro mais próximo, formatando com separador de milhar (pt-BR)
    let numFormatado = Math.round(valor).toLocaleString("pt-BR");

    // Mantém a precisão correta para números pequenos
    if (valorFinal < 10 && sufixo === "") {
      numFormatado = valor.toFixed(0);
    }

    return prefixo + numFormatado + sufixo;
  }

  // 3. FUNÇÃO DE ANIMAÇÃO COM requestAnimationFrame
  const duracao = 1500; // Duração total da animação (1.5 segundos)
  let tempoInicial;

  function passo(tempoAtual) {
    if (!tempoInicial) tempoInicial = tempoAtual;

    const progresso = tempoAtual - tempoInicial;
    const porcentagem = Math.min(progresso / duracao, 1);

    let valorAtual = porcentagem * valorFinal;

    // Atualiza o texto do elemento com o valor formatado
    valorElement.textContent = formatar(valorAtual);

    // Continua a animação se ainda não terminou
    if (progresso < duracao) {
      requestAnimationFrame(passo);
    } else {
      // Garante que o valor final exato (e original) seja exibido
      valorElement.textContent = valorTextoOriginal;
    }
  }

  // Inicia a animação
  requestAnimationFrame(passo);
}

/* ============================================================= */
/* INICIALIZAÇÃO E OBSERVER (Detecta quando o KPI entra na tela) */
/* ============================================================= */

// Opções para o Intersection Observer
const observerOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0.8, // Aciona quando 80% do elemento .kpi está visível
};

const kpiObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      animarKpiPorRolagem(entry.target);
      // Desconecta o observador para que a animação só ocorra uma vez
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);
// Ação principal quando o DOM estiver completamente carregado
document.addEventListener("DOMContentLoaded", () => {
  // Encontra todos os elementos KPI dentro da seção #indicadores-impacto e os observa
  const kpiElements = document.querySelectorAll("#indicadores-impacto .kpi");
  kpiElements.forEach((kpi) => {
    kpiObserver.observe(kpi);
  });
});

/* ========================================================= */
/* ANIMAÇÃO DE BARRAS DE PROGRESSO DINÂMICAS (Corrigido)     */
/* ========================================================= */

/**
 * Inicia a animação da barra de progresso lendo o data-porcentagem.
 * @param {HTMLElement} barraElement - O elemento .progresso-preenchido.
 */
function animarBarraProgresso(barraElement) {
  // 1. ANÁLISE DA PORCENTAGEM (Coleta do atributo data-porcentagem)
  let porcentagem = parseFloat(barraElement.dataset.porcentagem);

  if (isNaN(porcentagem)) return;

  // Garante que a porcentagem não exceda 100%
  porcentagem = Math.min(porcentagem, 100);

  // 2. Configurar e Iniciar a Animação da Barra
  // Desativa a transição para redefinir a barra
  barraElement.style.transition = "none";
  barraElement.style.width = "0%";

  // Força o navegador a recalcular (Reflow) - ESSENCIAL PARA ANIMAÇÃO
  void barraElement.offsetWidth;

  // 3. Reativa a transição e define o valor final
  barraElement.style.transition = "width 0.6s ease-out"; // Aumentado para melhor visualização
  barraElement.style.width = `${porcentagem}%`;

  // NOTA: A lógica de atualização de texto foi removida,
  // pois os valores no HTML são fixos e não requerem atualização via JS.
}

/* ============================================================= */
/* OBSERVER PARA TODAS AS BARRAS DE PROGRESSO                    */
/* ============================================================= */

// Opções para o Intersection Observer da barra (mantido)
const barraObserverOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0.1, // Aciona quando 10% da barra está visível
};

const barraObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      animarBarraProgresso(entry.target);
      // Desconecta o observador para que a animação só ocorra uma vez
      observer.unobserve(entry.target);
    }
  });
}, barraObserverOptions);

// Ação principal quando o DOM estiver completamente carregado (ATUALIZADA)
document.addEventListener("DOMContentLoaded", () => {
  // 1. Observa os KPIs de contagem (Mantido)
  const kpiElements = document.querySelectorAll("#indicadores-impacto .kpi");
  kpiElements.forEach((kpi) => {
    kpiObserver.observe(kpi);
  });

  // 2. Observa TODAS as barras de progresso
  // Busca PELA CLASSE, e não por um ID inválido
  const todasAsBarras = document.querySelectorAll(".progresso-preenchido");
  todasAsBarras.forEach((barra) => {
    barraObserver.observe(barra);
  });
});

// ------------------------------------------------------------------------
// III. MÓDULO: RELATÓRIO ANUAL (Animação de Contador e Gráfico Chart.js)
// ------------------------------------------------------------------------

/* ========================================================= */
/* ARQUIVO: js/index-kpis.js                                 */
/* Funções de animação de KPIs para a página index.html      */
/* ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  // Seleciona o elemento alvo da animação
  const destaque = document.querySelector(".bloco-conquista-destaque-linha");

  if (!destaque) return;

  // Configuração: 0.5 (50%) do bloco precisa estar visível para acionar
  const observerOptions = {
    root: null, // Observar o viewport
    threshold: 0.5,
  };

  // Função que é executada quando o bloco entra/sai da visualização
  const observerCallback = (entries, observer) => {
    entries.forEach((entry) => {
      // SE O BLOCO ESTIVER VISÍVEL (Intersection)
      if (entry.isIntersecting) {
        // 1. Adiciona a classe que muda a borda para azul (via CSS Transition)
        entry.target.classList.add("animate-border");

        // 2. Para de observar, pois a animação só deve ocorrer uma vez
        observer.unobserve(entry.target);
      }
    });
  };

  // Cria e inicia o observador no elemento de destaque
  const observer = new IntersectionObserver(observerCallback, observerOptions);
  observer.observe(destaque);
});
