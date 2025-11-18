console.log("-> 2. ARQUIVO VALIDACAO.JS FOI EXECUTADO.");

/* =================================================================================== */
/* 1. FUNÇÕES DE FEEDBACK VISUAL (WCAG 2.1 AA), UTILIDADE E EXIBIÇÃO DE ERROS          */
/* =================================================================================== */

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

/* ========================================================= */
/* 2. FUNÇÕES DE VALIDAÇÃO GERAL (Página de Cadastro)        */
/* ========================================================= */

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
      "Formato de e-mail inválido. Ex: nome@dominio.com."
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

/* ========================================================= */
/* 3. FUNÇÕES DE VALIDAÇÃO DOAÇÃO (Página de Doação)         */
/* ========================================================= */

/**
 * Valida o formato do e-mail na página de doação.
 */
function validarEmailDoador(campoInput) {
  const email = campoInput.value.trim();
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!regexEmail.test(email)) {
    mostrarErro(
      campoInput,
      "Insira um formato de e-mail válido (ex: nome@dominio.com)."
    );
    return false;
  }

  limparErro(campoInput); // Remove borda vermelha/texto de erro
  return true;
}

/**
 * Valida se o nome está preenchido (se o usuário decidir preencher).
 */
function validarNomeDoador(campoInput) {
  const nome = campoInput.value.trim();
  // Regex para permitir letras (a-z, incluindo acentos), espaços e hífens
  const regexNome = /^[A-Za-záàâãéèêíïóôõöúçñ\s-]{2,}$/i;
  // O {2,} no final já garante o mínimo de 2 caracteres.

  if (!regexNome.test(nome)) {
    mostrarErro(campoInput, "Por favor, digite seu nome completo.");
    return false;
  }

  limparErro(campoInput);
  return true;
}
// --- Validação de Cartão ---

/**
 * Valida se o nome impresso no cartão está preenchido e contém pelo menos duas partes.
 */
function validarNomeCartao(campoInput) {
  const nomeCompleto = campoInput.value.trim();
  const partesNome = nomeCompleto.split(/\s+/);

  if (partesNome.length < 2 || nomeCompleto.length < 4) {
    mostrarErro(
      campoInput,
      "Digite o nome completo conforme impresso no cartão."
    );
    return false;
  }

  limparErro(campoInput);
  return true;
}

/**
 * Valida o número do cartão (pelo menos 16 dígitos e formato).
 */
function validarNumeroCartao(campoInput) {
  const numero = campoInput.value.replace(/\s/g, ""); // Remove espaços

  // Regra simples: checa se tem entre 13 e 19 dígitos (padrão VISA/Master/AMEX)
  if (numero.length < 13 || numero.length > 19) {
    mostrarErro(
      campoInput,
      "O número do cartão deve ter entre 13 e 19 dígitos."
    );
    return false;
  }

  // Opcional: Implementar o Algoritmo de Luhn aqui para validação de checksum
  // ...

  limparErro(campoInput);
  return true;
}

/**
 * Valida a data de validade (MM/AA) para garantir que não esteja vencida.
 */
function validarValidadeCartao(campoInput) {
  const validade = campoInput.value; // Formato MM/AA

  if (validade.length !== 5 || !validade.includes("/")) {
    mostrarErro(campoInput, "Formato inválido. Use MM/AA.");
    return false;
  }

  const [mes, ano] = validade.split("/").map((n) => parseInt(n));

  // Converte ano AA para AAAA, assumindo que estamos no século 21
  const anoCompleto = 2000 + ano;

  // Obtém a data e hora atuais
  const dataAtual = new Date();
  const mesAtual = dataAtual.getMonth() + 1; // getMonth() retorna 0-11
  const anoAtual = dataAtual.getFullYear();

  if (mes < 1 || mes > 12) {
    mostrarErro(campoInput, "Mês inválido.");
    return false;
  }

  // Checagem de Vencimento
  if (anoCompleto < anoAtual || (anoCompleto === anoAtual && mes < mesAtual)) {
    mostrarErro(campoInput, "Cartão vencido.");
    return false;
  }

  limparErro(campoInput);
  return true;
}

/**
 * Valida o CVV (Código de Segurança) que deve ter 3 ou 4 dígitos.
 */
function validarCvvCartao(campoInput) {
  const cvv = campoInput.value.replace(/\D/g, ""); // Apenas dígitos

  if (cvv.length < 3 || cvv.length > 4) {
    mostrarErro(campoInput, "O CVV deve ter 3 ou 4 dígitos.");
    return false;
  }

  limparErro(campoInput);
  return true;
}

/* ========================================================= */
/* 4. VALIDAÇÃO FINAL (Funções de Submit)                    */
/* ========================================================= */

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

  // Substitui window.location.hash pela chamada ao Router
  if (typeof navigateTo === "function") {
    navigateTo("/agradecimento");
  } else {
    // Fallback caso a função ainda não esteja disponível
    console.error(
      "ERRO: navigateTo não está definido. Usando hash como fallback."
    );
    window.location.hash = "agradecimento";
  }

  return true; // Confirma que a validação passou
}

/**
 * Validação final para o formulário de Doação (doacao.html).
 */
function validarFormularioDoacao(event) {
  event.preventDefault();
  let formIsValid = true;
  let primeiroErro = null;

  // 1. Campos Comuns
  const emailDoador = document.getElementById("email-doador");
  const nomeDoador = document.getElementById("nome-doador");
  const metodoPagamento = document.querySelector(
    'input[name="metodo-pagamento"]:checked'
  );
  const valorDoacaoInput = document.getElementById("valor-doacao");

  //  VALIDAÇÃO DO MÉTODO DE PAGAMENTO (Adicionada para robustez)
  if (!metodoPagamento) {
    alert("Por favor, selecione um método de pagamento.");
    return false;
  }

  // Validações que devem ocorrer sempre: Valor Mínimo e Campos de Contato
  const validacoesComuns = [
    {
      campo: valorDoacaoInput,
      funcao: (input) => {
        // Checa o valor mínimo de R$ 5,00
        const valor = parseFloat(input.value.replace(",", ".")) || 0;

        //  Se o campo estiver vazio E o valor for 0, consideramos válido
        // (presumindo que o valor veio de um botão sugerido).
        if (input.value.trim() === "") {
          limparErro(input);
          return true;
        }

        if (valor < 5) {
          mostrarErro(input, "O valor mínimo para doação é R$ 5,00.");
          return false;
        }
        limparErro(input);
        return true;
      },
    },
    // Estas funções tratam campos vazios como válidos se não forem estritamente obrigatórios.
    { campo: emailDoador, funcao: validarEmailDoador },
    { campo: nomeDoador, funcao: validarNomeDoador },
  ];

  validacoesComuns.forEach((v) => {
    if (!v.funcao(v.campo)) {
      formIsValid = false;
      if (!primeiroErro) {
        primeiroErro = v.campo;
      }
    }
  });

  // 2. Validação Específica do Método de Pagamento (Cartão)
  // CORRIGIDO: Checa "cartao-debito" OU "cartao-credito"
  if (
    metodoPagamento &&
    (metodoPagamento.value === "cartao-debito" ||
      metodoPagamento.value === "cartao-credito")
  ) {
    const camposCartao = [
      document.getElementById("numero-cartao"),
      document.getElementById("nome-cartao"),
      document.getElementById("validade-cartao"),
      document.getElementById("cvv-cartao"),
    ];

    const validacoesCartao = [
      { campo: camposCartao[0], funcao: validarNumeroCartao },
      { campo: camposCartao[1], funcao: validarNomeCartao },
      { campo: camposCartao[2], funcao: validarValidadeCartao },
      { campo: camposCartao[3], funcao: validarCvvCartao },
    ];

    validacoesCartao.forEach((v) => {
      if (!v.funcao(v.campo)) {
        formIsValid = false;
        if (!primeiroErro) {
          primeiroErro = v.campo;
        }
      }
    });
  }

  // 3. Resultado Final
  if (!formIsValid) {
    if (primeiroErro) {
      primeiroErro.focus();
    }
    return false;
  }

  // Se a validação passou
  // Substitui window.location.hash pela chamada ao Router
  if (typeof navigateTo === "function") {
    navigateTo("/agradecimento");
  } else {
    // Fallback
    console.error(
      "ERRO: navigateTo não está definido. Usando hash como fallback."
    );
    window.location.hash = "agradecimento";
  }

  return true;
}

/* ================================================================ */
/* 5.  PONTOS DE ENTRADA DO ROUTER.JS (Substitui DOMContentLoaded)  */
/* ================================================================ */

/**
 * Ponto de entrada chamado pelo router.js para inicializar o form de Cadastro.
 * Liga todos os listeners necessários assim que o template de 'cadastro' é injetado.
 */
function inicializarFormularioCadastro() {
  console.log("-> Validacao de Cadastro ATIVADA.");

  // 1. Listeners de Máscara/CEP
  const campoCpf = document.getElementById("cpf");
  const campoTelefone = document.getElementById("telefone");
  const campoCep = document.getElementById("cep");
  const formulario = document.getElementById("cadastro-form");

  if (campoCpf) campoCpf.addEventListener("input", formatarCpf);
  if (campoTelefone) campoTelefone.addEventListener("input", formatarTelefone);
  if (campoCep) campoCep.addEventListener("blur", buscarCep);

  // 2. Inicializa a validação em tempo real (on blur)
  inicializarValidacaoEmTempoReal(); // Esta função deve estar definida acima

  // 3. Listener para a submissão final do formulário
  if (formulario) {
    formulario.addEventListener("submit", validarFormulario); // Chama a função de validação em massa
  }
}

/**
 * Ponto de entrada chamado pelo router.js para inicializar o form de Doação.
 */
function inicializarFormularioDoacao() {
  console.log("-> Validacao de Doacao ATIVADA.");

  // CHAMA A INTERATIVIDADE DA DOAÇÃO
  if (typeof inicializarDoacaoInteratividade === "function") {
    // Isso anexa TODOS os listeners da doação (pagamento, máscaras, blurs de validação)
    inicializarDoacaoInteratividade();
  }

  const formDoacao = document.getElementById("formulario-doacao");
  if (formDoacao) {
    // Isso anexa a função de validação de doação ao botão de submit
    formDoacao.addEventListener("submit", validarFormularioDoacao);
  }
}
