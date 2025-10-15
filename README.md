# 🌟 Projeto Frontend para ONG: Transformando Vidas

## 🚀 Visão Geral do Projeto
Este é um projeto de desenvolvimento frontend construído com **HTML5**, **CSS3** e **JavaScript Vanilla**. O objetivo é criar uma interface **responsiva**, **acessível** e **funcional** para uma organização não-governamental (ONG), focada na captação de voluntários e divulgação de projetos sociais. O destaque está na qualidade do código e na implementação de APIs para otimização da experiência do usuário (UX).

---

## ✨ Requisitos Implementados

O projeto atende a todos os requisitos solicitados, com foco em três pilares: Estrutura, Estilo e Funcionalidade.

### 1. Estrutura e Semântica (HTML)
* **Múltiplas Páginas:** O projeto inclui três páginas essenciais: `index.html` (Início e Missão), `projetos.html` (Projetos Sociais e Doações) e `cadastro.html` (Formulário de Voluntariado).
* **Semântica:** Uso rigoroso de tags HTML5 semânticas (`<header>`, `<main>`, `<section>`, `<footer>`, `<address>`) para garantir melhor **acessibilidade (WCAG)** e **SEO**.
* **Otimização de Mídia:** Implementação do elemento `<picture>` em `index.html` para servir imagens no formato **WebP** e garantir maior performance no carregamento inicial.

### 2. Estilo e Responsividade (CSS)
* **Design Responsivo (Mobile-First):** O layout foi construído priorizando a experiência em dispositivos móveis e ajustado para telas maiores usando **`@media queries`** (ponto de quebra principal em 768px).
* **Layout Avançado (Desktop):** Utiliza **Flexbox** para o alinhamento da navegação e **CSS Grid** para layouts de coluna na seção de Projetos e no Formulário, otimizando o espaço horizontal.
* **Animações e Transições:** Efeitos de `hover` e `focus` suaves foram aplicados em botões, cartões de projeto e campos de formulário para melhorar a experiência do usuário.

### 3. 🚀 Interatividade e APIs (JavaScript)
* **Integração com API ViaCEP:** O formulário de cadastro consome a API **ViaCEP** usando `fetch()` para buscar o endereço automaticamente, otimizando o preenchimento e reduzindo erros de digitação.
* **Validação de Maioridade:** Uma função específica calcula a data de nascimento para garantir que o voluntário tenha **18 anos ou mais**.
* **Validação de CPF e Nome:** O campo **CPF** possui máscara de entrada e lógica para verificar a formatação e os dígitos. O campo **Nome** impede o envio se não contiver nome e sobrenome.
* **Máscaras de Entrada:** Máscaras foram implementadas para formatar automaticamente os campos **CPF** e **Telefone**, melhorando a usabilidade.

---

## 🛠️ Tecnologias Utilizadas
* **HTML5** (Semântica)
* **CSS3** (Flexbox, Grid, Media Queries)
* **JavaScript Vanilla**
* **API Externa:** ViaCEP (para consulta de endereço)

## ⚙️ Estrutura de Arquivos
* `css/style.css`: Estilos principais, responsividade e grids.
* `image/`: Contém as imagens otimizadas (.jpg e .webp).
* `js/script.js`: Funções JavaScript, integração ViaCEP, Validações e Máscaras.
* `index.html`: Página Inicial e Missão.
* `projetos.html`: Página de Projetos e Doações.
* `cadastro.html`: Formulário de Voluntariado.
* `agradecimento.html`: Página de confirmação de envio.

## ▶️ Como Executar o Projeto

1.  **Clone o Repositório:** `git clone [link-do-seu-repositorio]`
2.  **Abra a Pasta:** Navegue até a pasta raiz do projeto no seu terminal ou VS Code.
3.  **Use o Live Server:** Clique com o botão direito em `index.html` e selecione **"Open with Live Server"**.
4.  O projeto será executado localmente para inspeção e teste.
