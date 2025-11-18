/* ========================================================= */
/* 1. FUNÇÕES DE LAYOUT E MÁSCARAS                           */
/* (Permanecem aqui, pois lidam com a interatividade direta)  */
/* ========================================================= */

// --- Funções do Menu Mobile ---
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

// --- Funções de Máscara (Cadastro) ---
function formatarCpf(event) {
  let valor = event.target.value.replace(/\D/g, "");
  valor = valor.replace(/(\d{3})(\d)/, "$1.$2");
  valor = valor.replace(/(\d{3})(\d)/, "$1.$2");
  valor = valor.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
  event.target.value = valor.substring(0, 14);
}

function formatarTelefone(event) {
  let valor = event.target.value.replace(/\D/g, "");
  valor = valor.replace(/^(\d{2})(\d)/g, "($1) $2");
  valor = valor.replace(/(\d)(\d{4})$/, "$1-$2");
  event.target.value = valor.substring(0, 15);
}

/* ========================================================= */
/* 2. FUNÇÕES DE LÓGICA DE DOAÇÃO (PIX, PARCELAS, DETALHES)  */
/* ========================================================= */

/**
 * Funções de Parcelamento
 * (Corrigido para usar a lógica mais simples de valor/parcela)
 */
function atualizarOpcoesParcelamento(maxParcelas = 6) {
  const valorPersonalizadoInput = document.getElementById("valor-doacao");
  const selectParcelas = document.getElementById("parcelas");
  const valorDoacao =
    parseFloat(valorPersonalizadoInput.value.replace(",", ".")) || 0;

  selectParcelas.innerHTML =
    '<option value="" disabled selected>Selecione...</option>';

  // A partir de R$ 10,00 permite parcelamento
  if (valorDoacao >= 5.0) {
    for (let i = 1; i <= maxParcelas; i++) {
      // Garante que a parcela mínima seja R$ 5,00
      if (valorDoacao / i >= 5.0) {
        const valorPorParcela = (valorDoacao / i).toFixed(2);
        const opcao = document.createElement("option");
        opcao.value = i;
        // Ajustando o texto para ser mais claro
        opcao.textContent = `${i}x de R$ ${valorPorParcela.replace(".", ",")}`;
        selectParcelas.appendChild(opcao);
      }
    }
  }
  // Garante que 1x esteja sempre selecionado se o valor for válido.
  if (selectParcelas.options.length > 1) {
    selectParcelas.value = 1;
    exibirValorDaParcela();
  }
}

function exibirValorDaParcela() {
  const selectParcelas = document.getElementById("parcelas");
  const valorParcelaExibicao = document.getElementById(
    "valor-parcela-exibicao"
  );

  const textoSelecionado =
    selectParcelas.options[selectParcelas.selectedIndex]?.textContent;

  if (textoSelecionado && selectParcelas.value) {
    valorParcelaExibicao.textContent = `Sua doação será paga em ${textoSelecionado}.`;
  } else {
    valorParcelaExibicao.textContent = "";
  }
}

/**
 * Função para alternar a exibição dos blocos de detalhes (Cartão, PIX, Boleto)
 */
function alternarDetalhesPagamento() {
  const metodo = this.value;
  const blocosDetalhes = document.querySelectorAll(".detalhes-pagamento");
  const detalhesCartao = document.getElementById("detalhes-cartao");
  const secaoParcelas = document.getElementById("secao-parcelas");

  // 1. Esconde TUDO
  blocosDetalhes.forEach((bloco) => bloco.classList.add("esconder-pagamento"));
  if (secaoParcelas) secaoParcelas.classList.add("esconder-pagamento");

  // 2. Define obrigatoriedade
  const camposCartao = [
    document.getElementById("numero-cartao"),
    document.getElementById("nome-cartao"),
    document.getElementById("validade-cartao"),
    document.getElementById("cvv-cartao"),
  ];
  camposCartao.forEach((campo) => {
    if (campo) campo.required = false;
    limparErro(campo); // Funções como 'limparErro' e 'validarFormularioDoacao' devem estar em validacao.js
  });

  // 3. Mostra o bloco correspondente e ajusta regras
  switch (metodo) {
    case "cartao-debito":
      detalhesCartao.classList.remove("esconder-pagamento");
      camposCartao.forEach((campo) => {
        if (campo) campo.required = true;
      });
      break;
    case "cartao-credito":
      detalhesCartao.classList.remove("esconder-pagamento");
      if (secaoParcelas) secaoParcelas.classList.remove("esconder-pagamento");
      atualizarOpcoesParcelamento();
      camposCartao.forEach((campo) => {
        if (campo) campo.required = true;
      });
      break;
    case "pix":
      document
        .getElementById("detalhes-pix")
        ?.classList.remove("esconder-pagamento");
      break;
    case "boleto":
      document
        .getElementById("detalhes-boleto")
        ?.classList.remove("esconder-pagamento");
      break;
  }
}

/**
 * Função de Copiar PIX (Feedback Visual)
 */
function copiarCodigoPix() {
  const inputPix = document.getElementById("codigo-pix");
  if (inputPix) {
    inputPix.select();
    document.execCommand("copy");

    //  CORREÇÃO: Usando querySelector para buscar o botão corretamente.
    const btnCopiar = document.querySelector(".bloco-qrcode-pix-demo button");
    if (btnCopiar) {
      const textoOriginal = btnCopiar.textContent;
      btnCopiar.textContent = "Copiado!";
      btnCopiar.classList.add("btn-copiado");

      setTimeout(() => {
        btnCopiar.textContent = textoOriginal;
        btnCopiar.classList.remove("btn-copiado");
      }, 1000);
    }
  }
}

/* ========================================================= */
/* 3. INICIALIZAÇÃO ESPECÍFICA (CHAMADA PELO ROUTER/validacao.js) */
/* ========================================================= */

/**
 *  CONSOLIDAÇÃO: Ponto de entrada chamado pelo validacao.js (via router) para inicializar
 * TODOS os listeners de interatividade da página de Doação APÓS o template ser carregado.
 */
function inicializarDoacaoInteratividade() {
  // --- SETUP DA PÁGINA DE DOAÇÃO (doacao.html) ---
  const formularioDoacao = document.getElementById("formulario-doacao");
  const opcoesPagamento = document.querySelectorAll(
    'input[name="metodo-pagamento"]'
  );
  const valorPersonalizadoInput = document.getElementById("valor-doacao");
  const selectParcelas = document.getElementById("parcelas");
  const botoesValor = document.querySelectorAll(".btn-doar-sugestao");
  const numeroCartaoInput = document.getElementById("numero-cartao");
  const validadeCartaoInput = document.getElementById("validade-cartao");
  const cvvCartaoInput = document.getElementById("cvv-cartao");
  const nomeCartaoInput = document.getElementById("nome-cartao");
  const emailDoador = document.getElementById("email-doador");
  const nomeDoador = document.getElementById("nome-doador");
  const btnCopiarPix = document.querySelector(".bloco-qrcode-pix-demo button");
  const blocosSugestao = document.querySelectorAll(".bloco-sugestao"); // ✅ Variável dos blocos de valor

  if (formularioDoacao) {
    // 0. AÇÕES DOS BLOCOS DE SUGESTÃO (Migrado do antigo bloco DOMContentLoaded/1ª função duplicada)
    blocosSugestao.forEach((bloco) => {
      bloco.addEventListener("click", function () {
        // 1. REMOVE a classe 'selecionado' de TODOS os blocos
        blocosSugestao.forEach((b) => b.classList.remove("selecionado"));
        this.classList.add("selecionado");

        // 2. Adiciona a classe 'active' ao botão interno
        const todosBotoesInternos =
          document.querySelectorAll(".btn-doar-sugestao");
        todosBotoesInternos.forEach((btn) => btn.classList.remove("active"));
        const botaoClicado = this.querySelector(".btn-doar-sugestao");
        if (botaoClicado) {
          botaoClicado.classList.add("active");
        }

        // 3. Atualiza o campo de input
        const valor = this.getAttribute("data-valor");
        if (valor !== "personalizado") {
          valorPersonalizadoInput.value = parseFloat(valor).toFixed(2);
        } else {
          valorPersonalizadoInput.value = "";
          valorPersonalizadoInput.focus();
        }
        // 4. Atualiza o parcelamento após selecionar valor
        atualizarOpcoesParcelamento();
      });
    });

    // 1. AÇÕES DE VALOR/PARCELAMENTO
    botoesValor.forEach((button) => {
      button.addEventListener("click", function () {
        botoesValor.forEach((btn) => btn.classList.remove("active"));
        this.classList.add("active");
        valorPersonalizadoInput.value = this.dataset.value;
        atualizarOpcoesParcelamento();
      });
    });

    valorPersonalizadoInput.addEventListener("input", function () {
      botoesValor.forEach((btn) => btn.classList.remove("active"));
      atualizarOpcoesParcelamento();
    });

    if (selectParcelas) {
      selectParcelas.addEventListener("change", exibirValorDaParcela);
    }

    // 2. AÇÕES DE PAGAMENTO (Alternar detalhes)
    opcoesPagamento.forEach((radio) => {
      //  CORREÇÃO: Usando .call(this) ou arrow function para manter o contexto
      radio.addEventListener("change", function () {
        alternarDetalhesPagamento.call(this);
      });
    });

    // Listener de cópia do PIX
    if (btnCopiarPix) {
      btnCopiarPix.addEventListener("click", copiarCodigoPix);
    }

    // Listener de Submit
    //  Assumindo que validarFormularioDoacao está em validacao.js
    if (typeof validarFormularioDoacao === "function") {
      formularioDoacao.addEventListener("submit", validarFormularioDoacao);
    }

    // 3. MÁSCARAS DE CARTÃO
    if (numeroCartaoInput) {
      numeroCartaoInput.addEventListener("input", function () {
        let value = this.value.replace(/\D/g, "");
        value = value.replace(/(\d{4})(?=\d)/g, "$1 ");
        this.value = value.substring(0, 19);
      });
    }
    if (validadeCartaoInput) {
      validadeCartaoInput.addEventListener("input", function () {
        let value = this.value.replace(/\D/g, "");
        if (value.length > 2) {
          value = value.substring(0, 2) + "/" + value.substring(2, 4);
        }
        this.value = value.substring(0, 5);
      });
    }
    if (cvvCartaoInput) {
      cvvCartaoInput.addEventListener("input", function () {
        this.value = this.value.replace(/\D/g, "").substring(0, 4);
      });
    }

    // 4. VALIDAÇÃO EM TEMPO REAL (ON BLUR)
    //  Assumindo que estas funções estão em validacao.js
    if (emailDoador)
      emailDoador.addEventListener("blur", function () {
        validarEmailDoador(this);
      });
    if (nomeDoador)
      nomeDoador.addEventListener("blur", function () {
        validarNomeDoador(this);
      });
    if (numeroCartaoInput)
      numeroCartaoInput.addEventListener("blur", function () {
        validarNumeroCartao(this);
      });
    if (nomeCartaoInput)
      nomeCartaoInput.addEventListener("blur", function () {
        validarNomeCartao(this);
      });
    if (validadeCartaoInput)
      validadeCartaoInput.addEventListener("blur", function () {
        validarValidadeCartao(this);
      });
    if (cvvCartaoInput)
      cvvCartaoInput.addEventListener("blur", function () {
        validarCvvCartao(this);
      });

    // 5. GARANTE O ESTADO INICIAL
    const metodoSelecionado = document.querySelector(
      'input[name="metodo-pagamento"]:checked'
    );
    if (metodoSelecionado) {
      alternarDetalhesPagamento.call(metodoSelecionado);
    }
  }
}

/* ========================================================= */
/* 4. BLOCO PRINCIPAL (DOMContentLoaded) - Inicialização GERAL */
/* ========================================================= */

//  RESTAURAÇÃO: Este bloco agora trata apenas de interações globais (Menu, Cadastro/Geral)
document.addEventListener("DOMContentLoaded", function () {
  // --- SETUP GERAL: Variáveis usadas em ambas as páginas ---
  const btnAbrirMenu = document.getElementById("btn-menu");
  const btnFecharMenu = document.querySelector(".menu-mobile .btn-fechar");
  const overlay = document.getElementById("overlay-menu");
  const menuLinks = document.querySelectorAll(".menu-mobile nav ul li a");

  // --- SETUP DA PÁGINA DE CADASTRO (apenas o que não é ligado pelo Router) ---
  const formulario = document.getElementById("cadastro-form");
  const campoCep = document.getElementById("cep");

  //  REMOVIDOS: A LIGAÇÃO DE CPF E TELEFONE DAQUI (Elas serão ligadas pelo router via validacao.js)

  // Listeners do Menu Mobile
  if (btnAbrirMenu) btnAbrirMenu.addEventListener("click", abrirMenu);
  if (btnFecharMenu) btnFecharMenu.addEventListener("click", fecharMenu);
  if (overlay) overlay.addEventListener("click", fecharMenu);
  menuLinks.forEach((link) => link.addEventListener("click", fecharMenu));

  // Listeners de Ação (Cadastro) - (Assumindo que estas são gerais e não máscaras)
  if (formulario) formulario.addEventListener("submit", validarFormulario); //  validação.js
  if (campoCep) campoCep.addEventListener("blur", buscarCep); //  validação.js
  if (formulario && typeof inicializarValidacaoEmTempoReal === "function") {
    //  Chamada de função que está no validacao.js para ligar CPF/Telefone/Blur
    inicializarValidacaoEmTempoReal();
  }
});
