# 🌟 Projeto Frontend para ONG: Transformando Vidas

## 🚀 Visão Geral do Projeto (Entrega III: Interatividade e Funcionalidades)

Este projeto de desenvolvimento frontend foi construído utilizando **HTML5**, **CSS3** e **JavaScript Vanilla**. O objetivo principal desta fase foi transformar a interface estática em uma **Single Page Application (SPA)** totalmente funcional e interativa, conforme os requisitos da Entrega III.

O foco está na implementação de um sistema de templates robusto, um módulo de roteamento dinâmico (`router.js`), e um módulo completo de validação de formulário que garante a consistência dos dados e uma experiência de usuário aprimorada.

---

## ✨ Requisitos e Funcionalidades Implementadas

O projeto atende a todas as especificações técnicas obrigatórias, com destaque para a arquitetura SPA e a modularidade do código.

### 1. Arquitetura e Roteamento (SPA)

- **Single Page Application (SPA):** O projeto foi consolidado em um único arquivo (`index.html`), e o JavaScript gerencia a troca de conteúdo através do **roteamento por Hash**.
- **Sistema de Templates JavaScript:** O conteúdo das seções é definido em **Template Strings** (`templates.js`) e injetado dinamicamente no DOM, cumprindo a obrigatoriedade de criação de templates JS.

2. Estilo e Responsividade (CSS)

Design Responsivo (Mobile-First): Layout adaptável a diferentes tamanhos de tela, utilizando Flexbox e CSS Grid.

Feedback Visual de Validação: Estilos CSS (.campo-erro e .mensagem-erro) configurados para exibir corretamente as bordas vermelhas e as mensagens de erro, garantindo clareza ao usuário.

3. 🚀 Interatividade e Funcionalidades (JavaScript)

Código JavaScript Modular: Os scripts foram separados em arquivos (app.js, templates.js, valicacao.js) e organizados por funcionalidade, promovendo a modularidade do código.

#### 🗺️ Rotas e Páginas Implementadas (Anteriores e Atuais)

Abaixo estão as páginas que compõem o projeto, agora servidas dinamicamente pela arquitetura SPA:

| Rota (Hash)        | Descrição da Página                                                    |
| :----------------- | :--------------------------------------------------------------------- |
| `#/home`           | **Início / Nossa Missão** (Página principal do site).                  |
| `#/projetos`       | **Projetos Sociais e Doações** (Detalhes dos projetos ativos).         |
| `#/cadastro`       | **Cadastre-se para Voluntariado** (Formulário com validação de dados). |
| `#/blogMidia`      | **Nosso Blog & Mídia** (Notícias e conteúdo multimídia).               |
| `#/doacao`         | **Doe para Salvar Vidas** (Opções e formulário de doação).             |
| `#/relatorioAnual` | **Transparência e Relatórios** (Informações de prestação de contas).   |
| `#/contato`        | **Fale Conosco** (Informações de contato).                             |
| `#/Projetofuturo`  | **Projetos em Desenvolvimento** (Página "Em Breve").                   |

### 2. Interatividade e Lógica (JavaScript)

- **Código JavaScript Modular:** Scripts separados em módulos (`router.js`, `templates.js`, `validacao.js`) para alta coesão e baixa acoplamento.
- **Validação de Dados:** Implementado um sistema de validação completa que impede o envio de formulários inválidos e exibe _feedback_ visual claro.
  - Inclui validações específicas para Nome Completo, CPF (dígitos e formato), E-mail e Maioridade (idade mínima de 18 anos).
- **Integração com API ViaCEP:** Utilização de `fetch()` para realizar a busca de endereço com base no CEP, otimizando o preenchimento dos campos.

### 3. Estilo e Responsividade

- **Design Responsivo (Mobile-First):** Layout adaptável a diferentes tamanhos de tela, utilizando Flexbox e CSS Grid.
- **Feedback Visual de Validação:** Estilos CSS (`.campo-erro`, `.mensagem-erro`) configurados para garantir a clareza dos avisos ao usuário.

---

## 🛠️ Tecnologias Utilizadas

- HTML5 (Semântica)
- CSS3 (Flexbox, Grid, Media Queries)
- JavaScript Vanilla (SPA, Roteamento, Validação, DOM)
- API Externa: ViaCEP (para consulta de endereço)

---

## ⚙️ Estrutura de Arquivos

| Caminho                | Conteúdo                                             |
| :--------------------- | :--------------------------------------------------- |
| `index.html`           | Página principal que carrega todo o SPA.             |
| `js/router.js`         | Lógica principal do SPA e roteamento dinâmico.       |
| `js/templates.js`      | Armazena todo o conteúdo HTML (Template Strings).    |
| `js/validacao.js`      | Módulo de máscaras, validações e integração ViaCEP.  |
| `js/interatividade.js` | Lógica de menu mobile e interatividade geral do DOM. |
| `css/style.css`        | Estilos e regras de responsividade.                  |
| `image/`               | Imagens e assets do projeto.                         |

---

## ▶️ Como Executar o Projeto

1.  **Clone o Repositório:** `git clone [link-do-seu-repositorio]`
2.  **Abra a Pasta:** Navegue até a pasta raiz do projeto.
3.  **Use o Live Server:** Clique com o botão direito em `index.html` e selecione "Open with Live Server" para visualizar o SPA.

---
