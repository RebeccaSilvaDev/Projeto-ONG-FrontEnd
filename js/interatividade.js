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
  // Estas variáveis precisam ser definidas dentro da função ou globalmente.
  // Como você já tem a lógica dos blocos no DOMContentLoaded, vou replicar aqui o necessário.
  const metodo = this.value;
  const blocosDetalhes = document.querySelectorAll(".detalhes-pagamento");
  const detalhesCartao = document.getElementById("detalhes-cartao");
  const secaoParcelas = document.getElementById("secao-parcelas");

  // 1. Esconde TUDO
  blocosDetalhes.forEach((bloco) => bloco.classList.add("esconder-pagamento"));
  if (secaoParcelas) secaoParcelas.classList.add("esconder-pagamento");

  // 2. Define obrigatoriedade (Importante para que a validação funcione corretamente)
  const camposCartao = [
    document.getElementById("numero-cartao"),
    document.getElementById("nome-cartao"),
    document.getElementById("validade-cartao"),
    document.getElementById("cvv-cartao"),
  ];
  camposCartao.forEach((campo) => {
    if (campo) campo.required = false;
    limparErro(campo); // Limpa erros de campos que foram escondidos
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

    const btnCopiar = document.getElementById(".bloco-qrcode-pix-demo button");
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

/* --- Função para tornar os botões funcionais (doacao.html)--- */

// Este código deve ser executado quando a página carregar
document.addEventListener("DOMContentLoaded", function () {
  const blocos = document.querySelectorAll(".bloco-sugestao");
  const inputValor = document.getElementById("valor-doacao");

  blocos.forEach((bloco) => {
    bloco.addEventListener("click", function () {
      // 1. REMOVE a classe 'selecionado' de TODOS os blocos
      blocos.forEach((b) => b.classList.remove("selecionado"));
      this.classList.add("selecionado");

      // 2. ADICIONA a classe 'selecionado' APENAS no bloco que foi clicado
      const todosBotoesInternos =
        document.querySelectorAll(".btn-doar-sugestao");

      // a) Remove a classe 'active' de TODOS os botões internos
      todosBotoesInternos.forEach((btn) => btn.classList.remove("active"));

      // b) Encontra o botão DENTRO do bloco clicado e adiciona a classe 'active'
      const botaoClicado = this.querySelector(".btn-doar-sugestao");
      if (botaoClicado) {
        botaoClicado.classList.add("active");
      }

      // 3. Atualiza o campo de input com o valor sugerido
      const valor = this.getAttribute("data-valor");

      if (valor !== "personalizado") {
        inputValor.value = parseFloat(valor).toFixed(2);
      } else {
        // 4. Se for "Outro Valor", limpa o campo para digitar
        inputValor.value = "";
        inputValor.focus();
      }
    });
  });
});

/* ========================================================= */
/* 3. BLOCO PRINCIPAL (DOMContentLoaded) - Inicialização     */
/* ========================================================= */

document.addEventListener("DOMContentLoaded", function () {
  // --- SETUP GERAL: Variáveis usadas em ambas as páginas ---
  const btnAbrirMenu = document.getElementById("btn-menu");
  const btnFecharMenu = document.querySelector(".menu-mobile .btn-fechar");
  const overlay = document.getElementById("overlay-menu");
  const menuLinks = document.querySelectorAll(".menu-mobile nav ul li a");

  // --- SETUP DA PÁGINA DE CADASTRO (cadastro.html) ---
  const campoCpf = document.getElementById("cpf");
  const campoTelefone = document.getElementById("telefone");
  const campoCep = document.getElementById("cep");
  const formulario = document.getElementById("cadastro-form");

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
  const btnCopiarPix = document.getElementById(".bloco-qrcode-pix-demo button");

  // =================================================
  // LISTENERS GERAIS (Menu, Máscaras e Validação)
  // =================================================

  // Listeners do Menu Mobile
  if (btnAbrirMenu) btnAbrirMenu.addEventListener("click", abrirMenu);
  if (btnFecharMenu) btnFecharMenu.addEventListener("click", fecharMenu);
  if (overlay) overlay.addEventListener("click", fecharMenu);
  menuLinks.forEach((link) => link.addEventListener("click", fecharMenu));

  // Listeners de Máscara (Cadastro)
  if (campoCpf) campoCpf.addEventListener("input", formatarCpf);
  if (campoTelefone) campoTelefone.addEventListener("input", formatarTelefone);

  // Listeners de Ação (Cadastro)
  if (formulario) formulario.addEventListener("submit", validarFormulario);
  if (campoCep) campoCep.addEventListener("blur", buscarCep);
  if (formulario && typeof inicializarValidacaoEmTempoReal === "function") {
    // Chamada de função que está no validacao.js
    inicializarValidacaoEmTempoReal();
  }

  // =================================================
  // LISTENERS PÁGINA DE DOAÇÃO (doacao.html)
  // =================================================

  if (formularioDoacao) {
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

    // 2. AÇÕES DE PAGAMENTO
    opcoesPagamento.forEach((radio) => {
      radio.addEventListener("change", alternarDetalhesPagamento);
    });

    // Listener de cópia do PIX
    if (btnCopiarPix) {
      btnCopiarPix.addEventListener("click", copiarCodigoPix);
    }

    // Listener de Submit
    formularioDoacao.addEventListener("submit", validarFormularioDoacao);

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

    // 4. VALIDAÇÃO EM TEMPO REAL (ON BLUR) - Chamando funções de validacao.js
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
      // Chama a função 'alternarDetalhesPagamento' como se fosse acionada pelo 'metodoSelecionado'
      alternarDetalhesPagamento.call(metodoSelecionado);
    }
  }
});
