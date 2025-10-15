/* ========================================================= */
/* 1. SETUP E INICIALIZAÇÃO DE EVENTOS */
/* ========================================================= */

// Garante que todo o DOM (HTML) esteja carregado antes de tentar manipular elementos
document.addEventListener('DOMContentLoaded', function() {
    
    // Captura os elementos necessários pelos seus IDs
    const campoCpf = document.getElementById('cpf');
    const campoTelefone = document.getElementById('telefone');
    const campoCep = document.getElementById('cep'); // Captura o campo CEP para a máscara
    const formulario = document.getElementById('cadastro-form');

    // Listener para aplicar MÁSCARA no CPF (se o campo existir)
    if (campoCpf) {
        campoCpf.addEventListener('input', formatarCpf);
    }

    // Listener para aplicar MÁSCARA no Telefone (se o campo existir)
    if (campoTelefone) {
        campoTelefone.addEventListener('input', formatarTelefone);
    }

    // Listener para aplicar a submissão do formulário (se o campo existir)
    if (formulario) {
        formulario.addEventListener('submit', validarFormulario);
    }

    // Inicializa a validação em tempo real (on blur)
    inicializarValidacaoEmTempoReal();
    
    //Listener para buscar o CEP automaticamente
    if (campoCep) {
        campoCep.addEventListener('blur', buscarCep);
    }

});

/**
 * Inicializa os event listeners 'blur' (quando o campo perde o foco)
 * para rodar a validação em tempo real, melhorando a UX.
 */
function inicializarValidacaoEmTempoReal() {
    // Lista de IDs dos campos que possuem validação customizada
    const camposValidar = [
        'nome', 'email', 'cpf', 'nascimento', 
        'telefone', 'cep', 'endereco', 'cidade', 'estado' 
    ];

    // Mapeia o ID do campo para a função de validação correta
    const mapaValidacao = {
        'nome': validarNomeCompleto,
        'email': validarEmail,
        'cpf': validarCpf,
        'nascimento': validarMaioridade,
        // Funções genéricas usam uma função anônima para passar o nome do campo
        'telefone': (input) => validarPreenchimento(input, 'O Telefone'),
        'cep': (input) => validarPreenchimento(input, 'O CEP'),
        'endereco': (input) => validarPreenchimento(input, 'O Endereço'),
        'cidade': (input) => validarPreenchimento(input, 'A Cidade'),
        'estado': (input) => validarPreenchimento(input, 'O Estado')
    };

    // Anexa o evento 'blur' a cada campo
    camposValidar.forEach(id => {
        const input = document.getElementById(id);
        if (input) {
            input.addEventListener('blur', () => {
                const funcaoValidacao = mapaValidacao[id];
                if (funcaoValidacao) {
                    funcaoValidacao(input);
                }
            });
        }
    });
}

/* ========================================================= */
/* 2. FUNÇÕES DE MÁSCARA (Requisito: Interatividade/Funcionalidades Dinâmicas) */
/* ========================================================= */

/**
 * Aplica a máscara de CPF (000.000.000-00) ao campo de input.
 */
function formatarCpf(event) {
    let valor = event.target.value.replace(/\D/g, ""); // Limpeza: remove não-dígitos
    
    // Aplica a máscara (Aplicação das regras de formatação por regeX)
    valor = valor.replace(/(\d{3})(\d)/, "$1.$2");
    valor = valor.replace(/(\d{3})(\d)/, "$1.$2");
    valor = valor.replace(/(\d{3})(\d{1,2})$/, "$1-$2");

    event.target.value = valor.substring(0, 14); // Limita o tamanho (incluindo pontos e traço)
}

/**
 * Aplica a máscara de Telefone ((00) 90000-0000) ao campo de input.
 */
function formatarTelefone(event) {
    let valor = event.target.value.replace(/\D/g, ""); // Limpeza: remove não-dígitos
    
    // Aplica a máscara: (00) 00000-0000 (Aplicação das regras de formatação por regex)
    valor = valor.replace(/^(\d{2})(\d)/g, "($1) $2");
    valor = valor.replace(/(\d)(\d{4})$/, "$1-$2");

    event.target.value = valor.substring(0, 15); // Limita o tamanho
}

/* ========================================================= */
/* 3. FUNÇÕES DE FEEDBACK VISUAL (WCAG 2.1 AA) */
/* ========================================================= */

/**
 * Exibe uma mensagem de erro visual para um campo específico.
 * Adiciona a classe CSS 'campo-erro' e injeta a mensagem no <span> de erro.
 */
function mostrarErro(campoInput, mensagem) {
    const idErro = campoInput.id + '-erro';
    const spanErro = document.getElementById(idErro);

    // 1. Adiciona classe CSS 'campo-erro'(para colorir a borda do campo de vermelho)
    campoInput.classList.add('campo-erro');

    // 2. Insere a mensagem de erro no <span> e o torna visível
    if (spanErro) {
        spanErro.textContent = mensagem;
        spanErro.style.display = 'block';
    }
}

/**
 * Remove a mensagem de erro visual de um campo.
 */
function limparErro(campoInput) {
    campoInput.classList.remove('campo-erro');

    const idErro = campoInput.id + '-erro';
    const spanErro = document.getElementById(idErro);

    //Limpa e esconde o <span> da mensagem de erro
    if (spanErro) {
        spanErro.textContent = '';
        spanErro.style.display = 'none';
    }
}

/* ========================================================= */
/* 4. FUNÇÕES DE VALIDAÇÃO CUSTOMIZADA */
/* ========================================================= */

/**
 * Função para buscar e preencher endereço via API ViaCEP
 */
function buscarCep(event) {
    const cepInput = event.target;
    const cep = cepInput.value.replace(/\D/g, ''); // Limpa a máscara
    
    // Checa se o CEP tem 8 dígitos
    if (cep.length !== 8) {
        return; 
    }

    // URL da API ViaCEP
    const url = `https://viacep.com.br/ws/${cep}/json/`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (!data.erro) {
                // Preenche os campos do formulário
                document.getElementById('endereco').value = data.logradouro;
                document.getElementById('cidade').value = data.localidade;
                document.getElementById('estado').value = data.uf;
                limparErro(cepInput);
                
                // Opcional: foca no próximo campo de preenchimento manual (Endereço)
                document.getElementById('endereco').focus();
            } else {
                mostrarErro(cepInput, 'CEP não encontrado. Digite manualmente o endereço.');
            }
        })
        .catch(error => {
            console.error('Erro ao buscar CEP:', error);
            mostrarErro(cepInput, 'Erro na comunicação com o servidor de CEP.');
        });
}

/**
 * Valida se um campo obrigatório está preenchido (não vazio).
 */
function validarPreenchimento(campoInput, nomeCampo) {
    const valor = campoInput.value.trim();

    if (valor === '' || valor === null) {
        mostrarErro(campoInput, `${nomeCampo} é obrigatório.`);
        return false;
    }

    limparErro(campoInput);
    return true;
}

/**
 * Valida se o campo contém pelo menos duas palavras (Nome e Sobrenome).
 */
function validarNomeCompleto(campoInput) {
    const nomeCompleto = campoInput.value.trim();
    const partesNome = nomeCompleto.split(/\s+/); // Separa o nome por espaços

    if (partesNome.length < 2) {
        mostrarErro(campoInput, 'É obrigatório digitar seu nome completo (nome e sobrenome).');
        return false;
    } 

    limparErro(campoInput);
    return true;
}

/**
 * Valida se o e-mail está preenchido e se o formato está correto (Regex).
 */
function validarEmail(campoInput) {
    const email = campoInput.value.trim();
    // Regex para checar se o formato é válido
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 

    if (email === '') {
        mostrarErro(campoInput, 'O campo de e-mail é obrigatório.');
        return false;
    }

    if (!regexEmail.test(email)) {
        mostrarErro(campoInput, 'Insira um formato de e-mail válido (ex: nome@dominio.com).');
        return false;
    }

    limparErro(campoInput);
    return true;
}

/**
 * Valida o formato e a validade (dígitos verificadores) do CPF.
 */
function validarCpf(campoInput) {
    const cpf = campoInput.value.replace(/\D/g, ''); 
    
    if (cpf.length !== 11) {
        mostrarErro(campoInput, 'O CPF deve conter 11 dígitos.');
        return false;
    }
    
    if (/^(\d)\1{10}$/.test(cpf)) {
        mostrarErro(campoInput, 'CPF inválido.');
        return false;
    }

    // Lógica de validação dos dígitos verificadores (simples)
    let soma = 0;
    let resto;

    for (let i = 1; i <= 9; i++) { soma = soma + parseInt(cpf.substring(i - 1, i)) * (11 - i); }
    resto = (soma * 10) % 11;
    if ((resto === 10) || (resto === 11)) resto = 0;
    if (resto !== parseInt(cpf.substring(9, 10))) { mostrarErro(campoInput, 'CPF inválido. Verifique os dígitos.'); return false; }

    soma = 0;
    for (let i = 1; i <= 10; i++) { soma = soma + parseInt(cpf.substring(i - 1, i)) * (12 - i); }
    resto = (soma * 10) % 11;
    if ((resto === 10) || (resto === 11)) resto = 0;
    if (resto !== parseInt(cpf.substring(10, 11))) { mostrarErro(campoInput, 'CPF inválido. Verifique os dígitos.'); return false; }

    limparErro(campoInput);
    return true;
}

/**
 * Valida se a pessoa tem pelo menos 18 anos (maioridade).
 */
function validarMaioridade(campoInput) {
    const dataNascimentoStr = campoInput.value;

    if (dataNascimentoStr === '') {
        mostrarErro(campoInput, 'A data de nascimento é obrigatória.');
        return false;
    }

    const dataNascimento = new Date(dataNascimentoStr);
    const dataLimite = new Date();
    dataLimite.setFullYear(dataLimite.getFullYear() - 18);

    if (dataNascimento >= dataLimite) {
        mostrarErro(campoInput, 'Para se cadastrar, você precisa ter no mínimo 18 anos.');
        return false;
    }

    limparErro(campoInput);
    return true;
}

/* ========================================================= */
/* 5. VALIDAÇÃO FINAL DO FORMULÁRIO */
/* ========================================================= */

/**
 * Validação customizada do formulário antes do envio.
 * Executa todas as checagens e impede o envio se houver erros.
 */
function validarFormulario(event) {
    // Mantemos o preventDefault para simular o sucesso localmente, 
    // mas o formulário nativo só seria submetido se formIsValid for true
    event.preventDefault();
    let formIsValid = true;  
    let primeiroErro = null;
   
    // Obtém TODOS os campos necessários
    const campos = {
        nome: document.getElementById('nome'),
        email: document.getElementById('email'),
        cpf: document.getElementById('cpf'),
        nascimento: document.getElementById('nascimento'),
        telefone: document.getElementById('telefone'),
        cep: document.getElementById('cep'),
        endereco: document.getElementById('endereco'),
        cidade: document.getElementById('cidade'),
        estado: document.getElementById('estado')
    };

    // Define a ordem e as funções de validação
    const validacoes = [
        { campo: campos.nome, funcao: validarNomeCompleto },
        { campo: campos.email, funcao: validarEmail },
        { campo: campos.cpf, funcao: validarCpf },
        { campo: campos.nascimento, funcao: validarMaioridade },
        { campo: campos.telefone, funcao: (input) => validarPreenchimento(input, 'O Telefone') },
        { campo: campos.cep, funcao: (input) => validarPreenchimento(input, 'O CEP') },
        { campo: campos.endereco, funcao: (input) => validarPreenchimento(input, 'O Endereço') },
        { campo: campos.cidade, funcao: (input) => validarPreenchimento(input, 'A Cidade') },
        { campo: campos.estado, funcao: (input) => validarPreenchimento(input, 'O Estado') }
    ];

    // Executa todas as validações, da primeira à última
    validacoes.forEach(v => {
        if (!v.funcao(v.campo)) {
            formIsValid = false;
            // Se ainda não temos um primeiro erro, definimos este campo
            if (!primeiroErro) {
                primeiroErro = v.campo;
            }
        }
    });

    // 1. Se qualquer validação falhou:
    if (!formIsValid) {
        // Foca no primeiro campo com erro
        if (primeiroErro) {
            primeiroErro.focus();
        }
        return false;
    }
   
   // Esse bloco "alert" foi desenvolvido anteriormente à mensagem final de agradecimento.
   // O objetivo do bloco consistia na confirmação para a validação do formulário.//
   //alert('Formulário validado com sucesso! Pronto para ser enviado ao servidor (simulado).');


    // SE FOR VÁLIDO: NOVO MÓDULO DE CONFIRMAÇÃO (Redirecionamento)
    // Opcional: Aqui você faria o envio real para o servidor

    // Redireciona para a página de agradecimento
    window.location.href = 'agradecimento.html'; 

    return true;
}


/* ========================================================= */
/* FIM DO SCRIPT */
/* ========================================================= */