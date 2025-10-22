/* ========================================================= */
/* 1. SETUP E INICIALIZAÇÃO DE EVENTOS                       */
/* ========================================================= */

// Garante que todo o DOM (HTML) esteja carregado antes de tentar manipular elementos.
// Isso previne erros de JS tentando acessar um elemento que ainda não existe na página.
document.addEventListener("DOMContentLoaded", function () {
  // Captura os elementos necessários pelos seus IDs.
  // Esta é a fase de inicialização onde referências aos inputs e formulários são obtidas.
  const campoCpf = document.getElementById("cpf");
  const campoTelefone = document.getElementById("telefone");
  const campoCep = document.getElementById("cep"); // Captura o campo CEP para a máscara
  const formulario = document.getElementById("cadastro-form");

  // ==================================================================
  // Captura dos Elementos do Menu Mobile
  // O Menu é um componente essencial para a responsividade do projeto.
  // ==================================================================
  const btnAbrirMenu = document.getElementById("btn-menu");
  const menuMobile = document.getElementById("menu-mobile");
  const overlay = document.getElementById("overlay-menu");
  const btnFecharMenu = document.querySelector(".menu-mobile .btn-fechar");
  // Captura todos os links do menu para fechar o menu ao navegar
  const menuLinks = document.querySelectorAll(".menu-mobile nav ul li a");

  // ====================================================================
  // Listeners do Menu Mobile
  // Configuração dos eventos de clique para abrir/fechar o menu lateral.
  // ====================================================================
  if (btnAbrirMenu) {
    btnAbrirMenu.addEventListener("click", abrirMenu);
  }

  if (btnFecharMenu) {
    btnFecharMenu.addEventListener("click", fecharMenu);
  }

  if (overlay) {
    overlay.addEventListener("click", fecharMenu);
  }

  // Fechar ao clicar em qualquer link
  menuLinks.forEach((link) => {
    link.addEventListener("click", fecharMenu);
  });

  // =================================================
  // FIM DA CORREÇÃO DO MENU MOBILE
  // =================================================

  // Listener para aplicar MÁSCARA no CPF (se o campo existir)
  if (campoCpf) {
    campoCpf.addEventListener("input", formatarCpf);
  }

  // Listener para aplicar MÁSCARA no Telefone (se o campo existir)
  if (campoTelefone) {
    campoTelefone.addEventListener("input", formatarTelefone);
  }

  // Listener para aplicar a submissão do formulário (se o campo existir)
  if (formulario) {
    formulario.addEventListener("submit", validarFormulario);
  }

  // Inicializa a validação em tempo real (on blur)
  inicializarValidacaoEmTempoReal();

  //Listener para buscar o CEP automaticamente
  if (campoCep) {
    campoCep.addEventListener("blur", buscarCep);
  }
});

/**
 * Inicializa os event listeners 'blur' (quando o campo perde o foco)
 * para rodar a validação em tempo real, melhorando a UX (User Experience).
 * Este método é modular e permite adicionar facilmente novos campos de validação.
 */
function inicializarValidacaoEmTempoReal() {
  // Lista de IDs dos campos que possuem validação customizada.
  const camposValidar = [
    "nome",
    "email",
    "cpf",
    "nascimento",
    "telefone",
    "cep",
    "endereco",
    "cidade",
    "estado",
  ];

  // Mapeia o ID do campo para a função de validação correta.
  // As funções mais simples utilizam uma função anônima para injetar o nome do campo.
  const mapaValidacao = {
    nome: validarNomeCompleto, // Validação customizada
    email: validarEmail, // Validação customizada (com Regex)
    cpf: validarCpf, // Validação customizada (com dígitos verificadores)
    nascimento: validarMaioridade, // Validação customizada (regra de negócio de 18 anos)
    // Funções genéricas usam uma função anônima para passar o nome do campo
    telefone: (input) => validarPreenchimento(input, "O Telefone"),
    cep: (input) => validarPreenchimento(input, "O CEP"),
    endereco: (input) => validarPreenchimento(input, "O Endereço"),
    cidade: (input) => validarPreenchimento(input, "A Cidade"),
    estado: (input) => validarPreenchimento(input, "O Estado"),
  };

  // Anexa o evento 'blur' a cada campo da lista, usando a função mapeada.
  camposValidar.forEach((id) => {
    const input = document.getElementById(id);
    if (input) {
      input.addEventListener("blur", () => {
        const funcaoValidacao = mapaValidacao[id];
        if (funcaoValidacao) {
          funcaoValidacao(input);
        }
      });
    }
  });
}

/* =========================================================================== */
/* 2. FUNÇÕES DE MÁSCARA (Requisito: Interatividade/Funcionalidades Dinâmicas) */
/* ============================================================================*/

/**
 * Aplica a máscara de CPF (000.000.000-00) ao campo de input.
 * Utiliza Expressões Regulares (Regex) para formatação.
 */
function formatarCpf(event) {
  let valor = event.target.value.replace(/\D/g, ""); // Limpeza: remove todos os caracteres não-dígitos

  // Aplica a máscara: separa os grupos de 3 dígitos com ponto e o último com traço.
  valor = valor.replace(/(\d{3})(\d)/, "$1.$2");
  valor = valor.replace(/(\d{3})(\d)/, "$1.$2");
  valor = valor.replace(/(\d{3})(\d{1,2})$/, "$1-$2");

  event.target.value = valor.substring(0, 14); // Limita o tamanho (14 caracteres: 11 dígitos + 3 separadores)
}

/**
 * Aplica a máscara de Telefone ((00) 90000-0000) ao campo de input.
 */
function formatarTelefone(event) {
  let valor = event.target.value.replace(/\D/g, ""); // Limpeza: remove não-dígitos

  // Aplica a máscara: (00) 00000-0000
  valor = valor.replace(/^(\d{2})(\d)/g, "($1) $2"); // Adiciona o parêntese e espaço após o DDD
  valor = valor.replace(/(\d)(\d{4})$/, "$1-$2"); // Adiciona o traço antes dos últimos 4 dígitos

  event.target.value = valor.substring(0, 15); // Limita o tamanho
}

/* ========================================================= */
/* 3. FUNÇÕES DE FEEDBACK VISUAL (WCAG 2.1 AA)               */
/* ========================================================= */

/**
 * Exibe uma mensagem de erro visual para um campo específico.
 * Essencial para Acessibilidade (WCAG 2.1 AA), pois fornece feedback imediato.
 */
function mostrarErro(campoInput, mensagem) {
  const idErro = campoInput.id + "-erro"; // Constrói o ID do <span> de erro
  const spanErro = document.getElementById(idErro);

  // 1. 1. Adiciona classe CSS 'campo-erro' (para colorir a borda do campo de vermelho)
  campoInput.classList.add("campo-erro");

  // 2. Insere a mensagem no <span> associado ao campo e o torna visível
  if (spanErro) {
    spanErro.textContent = mensagem;
    spanErro.style.display = "block";
  }
}

/**
 * Remove a mensagem de erro visual de um campo após a correção.
 */
function limparErro(campoInput) {
  // Remove a classe CSS que define a borda vermelha
  campoInput.classList.remove("campo-erro");

  const idErro = campoInput.id + "-erro";
  const spanErro = document.getElementById(idErro);

  // Limpa o texto e esconde o <span> da mensagem de erro
  if (spanErro) {
    spanErro.textContent = "";
    spanErro.style.display = "none";
  }
}

/* ========================================================= */
/* 4. FUNÇÕES DE VALIDAÇÃO CUSTOMIZADA                       */
/* ========================================================= */

/**
 * Função assíncrona para buscar e preencher endereço via API ViaCEP.
 * Demonstra a integração do formulário com serviços externos (fetch API).
 */
function buscarCep(event) {
  const cepInput = event.target;
  const cep = cepInput.value.replace(/\D/g, ""); // // Limpa a máscara antes da busca

  // Checa se o CEP tem 8 dígitos (condição mínima para a API)
  if (cep.length !== 8) {
    return;
  }

  // URL da API ViaCEP
  const url = `https://viacep.com.br/ws/${cep}/json/`;

  fetch(url) // Faz a requisição HTTP
    .then((response) => response.json())
    .then((data) => {
      if (!data.erro) {
        // Preenche os campos do formulário automaticamente (UX aprimorada)
        document.getElementById("endereco").value = data.logradouro;
        document.getElementById("cidade").value = data.localidade;
        document.getElementById("estado").value = data.uf;
        limparErro(cepInput);

        // Opcional: foca no próximo campo (Endereço) para o usuário completar o NÚMERO
        document.getElementById("endereco").focus();
      } else {
        mostrarErro(
          cepInput,
          "CEP não encontrado. Digite manualmente o endereço."
        );
      }
    })
    .catch((error) => {
      // Tratamento de erro de rede ou comunicação
      console.error("Erro ao buscar CEP:", error);
      mostrarErro(cepInput, "Erro na comunicação com o servidor de CEP.");
    });
}

/**
 * Valida se um campo obrigatório está preenchido (não vazio).
 * Função de uso geral, utilizada pelo 'mapaValidacao'.
 */
function validarPreenchimento(campoInput, nomeCampo) {
  const valor = campoInput.value.trim(); // Remove espaços em branco do início/fim

  if (valor === "" || valor === null) {
    mostrarErro(campoInput, `${nomeCampo} é obrigatório.`);
    return false;
  }

  limparErro(campoInput);
  return true;
}

/**
 * Valida se o campo contém pelo menos duas palavras (Nome e Sobrenome).
 * Regra de negócio simples para garantir a completude do nome.
 */
function validarNomeCompleto(campoInput) {
  const nomeCompleto = campoInput.value.trim();
  const partesNome = nomeCompleto.split(/\s+/); // Separa o nome por um ou mais espaços

  if (partesNome.length < 2) {
    mostrarErro(
      campoInput,
      "É obrigatório digitar seu nome completo (nome e sobrenome)."
    );
    return false;
  }

  limparErro(campoInput);
  return true;
}

/**
 * Valida se o e-mail está preenchido e se o formato está correto.
 * Usa Expressão Regular (Regex) para uma checagem de formato eficiente.
 */
function validarEmail(campoInput) {
  const email = campoInput.value.trim();
  // Regex simples para checar se o formato básico é válido (ex: a@b.c)
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (email === "") {
    mostrarErro(campoInput, "O campo de e-mail é obrigatório.");
    return false;
  }

  if (!regexEmail.test(email)) {
    mostrarErro(
      campoInput,
      "Insira um formato de e-mail válido (ex: nome@dominio.com)."
    );
    return false;
  }

  limparErro(campoInput);
  return true;
}

/**
 * Valida o formato e a validade (dígitos verificadores) do CPF.
 * Implementa a lógica básica de cálculo para checar a validade do CPF.
 */
function validarCpf(campoInput) {
  const cpf = campoInput.value.replace(/\D/g, ""); // Remove pontos e traços

  if (cpf.length !== 11) {
    mostrarErro(campoInput, "O CPF deve conter 11 dígitos.");
    return false;
  }

  // Impede CPFs com todos os dígitos iguais (ex: 111.111.111-11)
  if (/^(\d)\1{10}$/.test(cpf)) {
    mostrarErro(campoInput, "CPF inválido.");
    return false;
  }

  // Lógica de validação dos dígitos verificadores
  let soma = 0;
  let resto;

  // 1º Dígito Verificador
  for (let i = 1; i <= 9; i++) {
    soma = soma + parseInt(cpf.substring(i - 1, i)) * (11 - i);
  }
  resto = (soma * 10) % 11;
  if (resto === 10 || resto === 11) resto = 0;
  if (resto !== parseInt(cpf.substring(9, 10))) {
    mostrarErro(campoInput, "CPF inválido. Verifique os dígitos.");
    return false;
  }

  // 2º Dígito Verificador
  soma = 0;
  for (let i = 1; i <= 10; i++) {
    soma = soma + parseInt(cpf.substring(i - 1, i)) * (12 - i);
  }
  resto = (soma * 10) % 11;
  if (resto === 10 || resto === 11) resto = 0;
  if (resto !== parseInt(cpf.substring(10, 11))) {
    mostrarErro(campoInput, "CPF inválido. Verifique os dígitos.");
    return false;
  }

  limparErro(campoInput);
  return true;
}

/**
 * Valida se a pessoa tem pelo menos 18 anos (regra de maioridade).
 * Checa a data atual e subtrai 18 anos para estabelecer o limite.
 */
function validarMaioridade(campoInput) {
  const dataNascimentoStr = campoInput.value;

  if (dataNascimentoStr === "") {
    mostrarErro(campoInput, "A data de nascimento é obrigatória.");
    return false;
  }

  const dataNascimento = new Date(dataNascimentoStr);
  const dataLimite = new Date(); // Data de hoje
  dataLimite.setFullYear(dataLimite.getFullYear() - 18); // Data de hoje menos 18 anos

  if (dataNascimento >= dataLimite) {
    mostrarErro(
      campoInput,
      "Para se cadastrar, você precisa ter no mínimo 18 anos."
    );
    return false;
  }

  limparErro(campoInput);
  return true;
}

/* ========================================================= */
/* 5. VALIDAÇÃO FINAL DO FORMULÁRIO                          */
/* ========================================================= */

/**
 * Validação customizada do formulário antes do envio (onSubmit).
 * Executa todas as checagens em cascata e impede o envio se houver erros.
 */
function validarFormulario(event) {
  // Impede o comportamento padrão do envio do formulário, permitindo a validação via JS.
  event.preventDefault();
  let formIsValid = true;
  let primeiroErro = null;

  // Obtém TODOS os campos necessários (boa prática de organização)
  const campos = {
    nome: document.getElementById("nome"),
    email: document.getElementById("email"),
    cpf: document.getElementById("cpf"),
    nascimento: document.getElementById("nascimento"),
    telefone: document.getElementById("telefone"),
    cep: document.getElementById("cep"),
    endereco: document.getElementById("endereco"),
    cidade: document.getElementById("cidade"),
    estado: document.getElementById("estado"),
  };

  // Define a ordem de validação e as funções a serem executadas para cada campo
  const validacoes = [
    { campo: campos.nome, funcao: validarNomeCompleto },
    { campo: campos.email, funcao: validarEmail },
    { campo: campos.cpf, funcao: validarCpf },
    { campo: campos.nascimento, funcao: validarMaioridade },
    // Validações de preenchimento obrigatório
    {
      campo: campos.telefone,
      funcao: (input) => validarPreenchimento(input, "O Telefone"),
    },
    {
      campo: campos.cep,
      funcao: (input) => validarPreenchimento(input, "O CEP"),
    },
    {
      campo: campos.endereco,
      funcao: (input) => validarPreenchimento(input, "O Endereço"),
    },
    {
      campo: campos.cidade,
      funcao: (input) => validarPreenchimento(input, "A Cidade"),
    },
    {
      campo: campos.estado,
      funcao: (input) => validarPreenchimento(input, "O Estado"),
    },
  ];

  // Executa todas as validações e registra o status geral e o primeiro erro encontrado
  validacoes.forEach((v) => {
    // A função de validação (v.funcao) retorna false em caso de erro
    if (!v.funcao(v.campo)) {
      formIsValid = false;
      // Foca no princípio de usabilidade: se houver erro, a tela foca no primeiro campo a ser corrigido
      if (!primeiroErro) {
        primeiroErro = v.campo;
      }
    }
  });

  // 1. Se qualquer validação falhou:
  if (!formIsValid) {
    // Foca no primeiro campo com erro para o usuário iniciar a correção
    if (primeiroErro) {
      primeiroErro.focus();
    }
    return false; // Impede o envio do formulário
  }

  // SE FOR VÁLIDO: MÓDULO DE CONFIRMAÇÃO
  // Em um projeto real, o envio de dados via fetch() ou XMLHttpRequest seria feito aqui.

  // Redireciona para a página de agradecimento (Simulação de sucesso na submissão)
  window.location.href = "agradecimento.html";

  return true; // Confirma que a validação passou
}

/* ========================================================= */
/* 6. FUNÇÕES DO MENU LATERAL MOBILE                         */
/* ========================================================= */

/**
 * Abre o menu lateral mobile.
 * Adiciona a classe CSS 'abrir-menu' para acionar a transição de largura via CSS.
 */
function abrirMenu() {
  // Re-captura os elementos (boa prática, embora já estejam disponíveis no escopo do DOMContentLoaded)
  const menuMobile = document.getElementById("menu-mobile");
  const overlay = document.getElementById("overlay-menu");

  if (menuMobile && overlay) {
    menuMobile.classList.add("abrir-menu");
    overlay.style.display = "block"; // Torna o fundo escuro visível
  }
}

/**
 * Fecha o menu lateral mobile.
 * Remove a classe CSS 'abrir-menu' e esconde o overlay.
 */
function fecharMenu() {
  // Captura os elementos dentro da função, já que DOMContentLoaded os atribuiu
  const menuMobile = document.getElementById("menu-mobile");
  const overlay = document.getElementById("overlay-menu");

  if (menuMobile && overlay) {
    menuMobile.classList.remove("abrir-menu");
    overlay.style.display = "none";
  }
}

/* ========================================================= */
/*                    FIM DO SCRIPT                          */
/* ========================================================= */
