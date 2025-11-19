console.log("-> 3. ARQUIVO TEMPLATES.JS FOI EXECUTADO.");

/* ========================================================= */
/* 1. TEMPLATES HTML (Template Strings)                      */
/* ========================================================= */

const templates = {
  // ----------------------------------------------------
  // Template 'home' (Conteúdo completo do index.html)
  // ----------------------------------------------------
  home: `

        <section id="missao">
            <h2>Nossa Missão</h2>
            <p>
                Somos dedicados a construir um futuro mais justo e equitativo para
                todos.
            </p>

            <p>
                Nós acreditamos que a base de uma sociedade forte é a garantia de que
                as necessidades humanas essenciais <b>educação e alimentação</b> sejam
                atendidas, especialmente nas comunidades mais vulneráveis. É por isso
                que a <b>Transformando Vidas</b> atua na linha de frente:
            </p>

            <div class="bloco-missao">
                <p>
                    <strong>Combate à Insegurança Alimentar:</strong>Garantimos que
                    nenhuma família vá para a cama com fome, distribuindo refeições e
                    cestas básicas de forma constante e humanizada, promovendo a
                    <b>dignidade e a saúde</b> da nossa comunidade.
                </p>
                <p>
                    <strong>Capacitação e Futuro:</strong>Investimos no
                    <b>potencial inexplorado</b> da juventude, oferecendo programas de
                    educação digital e capacitação profissional. Nosso objetivo não é
                    apenas fornecer conhecimento, mas abrir portas para o mercado de
                    trabalho, quebrando o ciclo da pobreza e construindo
                    <b>autonomia</b>.
                </p>
            </div>

            <figure class="imagem-missao">
                <picture>
                    <source srcset="assets/image/missao.webp" type="image/webp" />
                    <img
                        src="assets/image/missao.jpg"
                        alt="Voluntários da ONG organizando caixas de doação de alimentos, ilustrando o trabalho de frente da Missão."
                        class="imagem-principal-index"
                    />
                </picture>
                <figcaption class="legenda-index">
                    Voluntários em campo, embalando doações. Sua ajuda transforma esse
                    esforço em esperança.
                </figcaption>
            </figure>
        </section>

        <section id="visao-e-valores">
            <h2>Visão e Valores</h2>

            <div class="bloco-texto">
                <h3>Nossa Visão ⭐</h3>

                <p>
                    Ser reconhecida como a organização líder na promoção da equidade
                    social e digital, onde todas as comunidades têm acesso igualitário à
                    alimentação digna e à educação transformadora, alcançando a
                    autossuficiência e o pleno potencial humano.
                </p>
            </div>

            <div class="bloco-valores">
                <h3>Nossos Valores ⭐</h3>

                <ul>
                    <li>
                        <strong>Empatia e Humanização:</strong> Colocar as pessoas no
                        centro de todas as ações, tratando todos com dignidade e respeito.
                    </li>
                    <li>
                        <strong>Transparência e Confiança:</strong> Manter a clareza total
                        na gestão de recursos e nas ações, construindo credibilidade com
                        doadores e beneficiários.
                    </li>
                    <li>
                        <strong>Inovação e Crescimento:</strong> Buscar continuamente
                        métodos mais eficientes de combate à fome e de capacitação,
                        adaptando-se às necessidades da comunidade.
                    </li>
                    <li>
                        <strong>Comprometimento e Excelência:</strong> Dedicar-se com
                        rigor e paixão para alcançar resultados duradouros e de alto
                        impacto social.
                    </li>
                </ul>
            </div>
        </section>

        <section id="estrutura-organizacional">
            <h2>Estrutura Organizacional</h2>

            <p>
                A Transformando Vidas opera com uma estrutura horizontal e
                transparente, focada na agilidade e na eficácia da ação social.
            </p>

            <div class="bloco-estrutura">
                <div class="cargo-estrutura">
                    <h4>Conselho Administrativo</h4>

                    <p>
                        Responsável pela governança, definição de diretrizes estratégicas
                        e fiscalização financeira.
                    </p>
                </div>

                <div class="cargo-estrutura">
                    <h4>Coordenação de Projetos</h4>

                    <p>
                        Gerencia as frentes de trabalho (Alimentação e Educação Digital) e
                        a rede de voluntários.
                    </p>
                </div>

                <div class="cargo-estrutura">
                    <h4>Equipe de Voluntariado</h4>

                    <p>
                        O coração da nossa missão, responsável pela execução das ações nas
                        comunidades.
                    </p>
                </div>
            </div>
        </section>

        <section id="equipe" class="container-principal">
            <h2>Nossa Equipe de Liderança</h2>

            <p class="introducao">
                Conheça as pessoas dedicadas que guiam a missão da Transformando Vidas
                e garantem a transparência e excelência em cada projeto.
            </p>

            <div class="equipe-cards">
                <div class="membro-card">
                    <img
                        src="assets/image/membro-presidente-demo.jpg"
                        alt="Foto de Maria Silva, Presidente"
                        class="membro-foto"
                    />
                    <h3>Maria Fátima</h3>
                    <h4>Presidente Executiva</h4>
                    <p>
                        Com mais de 10 anos de experiência em gestão de ONGs, Maria é a
                        fundadora e líder estratégica da organização.
                    </p>
                </div>

                <div class="membro-card">
                    <img
                        src="assets/image/membro-coordenador-demo.jpg"
                        alt="Foto de João Santos, Coordenador de Projetos"
                        class="membro-foto"
                    />

                    <h3>Luciano Amaro</h3>
                    <h4>Coordenador de Projetos Sociais</h4>
                    <p>
                        Responsável por gerenciar as frentes de combate à fome e garantir
                        que a ajuda chegue a quem mais precisa.
                    </p>
                </div>

                <div class="membro-card">
                    <img
                        src="assets/image/membro-financeiro-demo.jpg"
                        alt="Foto de Ana Lima, Diretora Financeira"
                        class="membro-foto"
                    />
                    <h3>Angélica Lima</h3>
                    <h4>Diretora de Transparência e Finanças</h4>
                    <p>
                        Garanti o uso ético e transparente dos recursos, sendo a
                        responsável pela emissão dos relatórios anuais.
                    </p>
                </div>
            </div>
        </section>

        <section id="historico-e-conquistas">
            <h2>Nossa Trajetória e Conquistas</h2>

            <div class="linha-do-tempo">
                <h3>Histórico</h3>

                <ul class="timeline-list">
                    <li>
                        <h4>2018: Fundação</h4>
                        <p>
                            Início das atividades da Transformando Vidas, focada
                            inicialmente na distribuição de cestas básicas nas Comunidades de
                            <strong>Praia Verde, Natal e Belém.</strong>
                        </p>
                    </li>

                    <li>
                        <h4>2020: Expansão Digital</h4>
                        <p>
                            Lançamento do primeiro programa de capacitação digital,
                            alcançando <strong>100 jovens</strong> e abrindo um novo pilar de atuação.
                        </p>
                    </li>

                    <li>
                        <h4>2023: Consolidando a Base</h4>
                        <p>
                            Inauguração do nosso primeiro <strong>Centro Comunitário de Apoio,</strong>
                            consolidando a base para o crescimento das operações de
                            distribuição e capacitação.
                        </p>
                    </li>

                    <li>
                        <h4>2024: Marco de Arrecadação</h4>
                        <p>
                            Atingimos a marca de <strong>98.765 mil reais arrecadados,</strong> viabilizando
                            a expansão para duas novas comunidades vizinhas.
                        </p>
                    </li>
                </ul>
            </div>

            <div class="conquistas-destaque">
                <h2>Principais Conquistas 🏆</h2>

                <div class="bloco-conquista">
                    <h4>+50.000 Refeições Distribuídas</h4>
                    <p>
                        Um testemunho do nosso compromisso inabalável contra a insegurança
                        alimentar desde o primeiro dia de operação.
                    </p>
                </div>

                <div class="bloco-conquista">
                    <h4>150 Jovens Capacitados</h4>
                    <p>
                        Nossos programas de educação digital abriram portas de emprego
                        para jovens de comunidades vulneráveis.
                    </p>
                </div>

                <div class="bloco-conquista">
                    <h4>+10.500 Kits de Higiene</h4>
                    <p>
                        A iniciativa Dignidade superou as expectativas, fornecendo higiene
                        e autoestima a milhares de famílias em seu primeiro ano.
                    </p>
                </div>

                <div class="bloco-conquista-destaque-linha">
                    <h2>Conquista de Destaque 🥇</h2>
                    <h4>R$ 98.765 Arrecadados</h4>
                    <p>
                        Atingimos quase 99% da nossa meta financeira, garantindo a
                        sustentabilidade e a expansão de todos os nossos programas.
                    </p>
                </div>
            </div>
        </section>

        <section class="destaque-blog">
        
            <div class="blog-content">

                <h2>📰 Nosso Blog: O Coração Pulsante da Transformação</h2>

                <p class="secao-descricao">
                    Na Transformando Vidas, acreditamos que a transparência é o pilar de
                    toda a confiança. Nosso Blog de Notícias é o seu assento na primeira
                    fila para testemunhar o impacto real e a jornada contínua de cada
                    iniciativa que apoiamos. Não somos apenas números em um relatório;
                    somos pessoas, histórias e resultados. É aqui que prestamos contas,
                    celebramos conquistas e, o mais importante, mostramos como cada
                    doação se transforma em uma mudança tangível na vida de comunidades
                    inteiras.
                </p>

                <h3>🔥 Não Perca as Últimas Novidades</h3>
                <p>
                    Mantemos você atualizado com o que há de mais recente no campo. Seja
                    o lançamento de uma nova campanha, o resultado de uma auditoria
                    financeira ou o testemunho emocionante de um beneficiário, as
                    últimas notícias garantem que você esteja sempre à frente, sabendo
                    para onde o movimento de transformação está se dirigindo.</p>

                    <p><strong>O que esperar:</strong> Cobertura de eventos, relatórios de conclusão
                    de projetos e anúncios oficiais da organização.
                </p>

                <h3>✨ As Notícias que Estão Transformando Vidas</h3>
                <p>
                    Descubra quais histórias estão realmente tocando o coração de nossa
                    comunidade. Esta seção destaca os artigos mais lidos e
                    compartilhados, geralmente focados em cases de sucesso de longo
                    prazo, análises detalhadas do nosso balanço anual e guias práticos
                    de voluntariado. Por que ler: Entenda a fundo a filosofia da
                    Transformando Vidas, nosso compromisso com o futuro e os impactos
                    mais duradouros de sua colaboração.
                </p>

                <div>
                <p>
                    ➡️ Visite nosso Blog Agora e Junte-se à Conversa sobre a Mudança!
                    <a href="#/blogMidia">Nosso Blog e Mídia</a>.
                </p>
                </div>
            </div>
            </div>
        </section>
        
        <section id="contato">
            <h2>Informações de Contato</h2>

            <address>
                Endereço: Rua dos Heróis, 123
                <br>
                <a href="tel:+5500999999999">
                    Telefone: (00) 99999-9999
                </a>
                </br>
                <a href="mailto:contato@transformandovidas.org">
                    Email: contato@transformandovidas.org
                </a>
            </address>
        </section>
    `,

  // ----------------------------------------------------
  // Template 'projetos' (Com injeção de cards dinâmicos)
  // ----------------------------------------------------
  projetos: `
        <section class="pagina-projetos">
            <h2>Nossos Projetos e Como Você Pode Ajudar</h2>
            <p>
                Nós da <b>Transformando Vidas</b> somos dedicados a construir um futuro
                mais justo e equitativo, atuando na linha de frente para apoiar
                comunidades vulneráveis por meio de <b>educação e alimentação</b>. Nossos projetos
                de impacto estão ativos e precisam do seu apoio para crescer e mudar a realidade
                de milhares de famílias e jovens.
            </p>

            <p>
                Nossos projetos de impacto estão ativos e crescentes, e o sucesso deles
                depende diretamente da sua colaboração. Explore as nossas duas frentes
                de trabalho abaixo e descubra como a sua doação ou o seu tempo pode
                mudar a realidade de milhares de famílias e jovens.
            </p>

            <section id="indicadores-impacto">
        <h2>Impacto e Resultados</h2>
        <p>
          Acompanhe em tempo real as métricas de sucesso que sua ajuda nos
          permite alcançar.
        </p>

        <div class="kpis-container">
          <div class="kpi">
            <span class="icone" aria-hidden="true">🎯</span>

            <div class="texto">
              <h4>Refeições Distribuídas</h4>

              <div class="valor destaque">+50K</div>
              <p class="descricao">Meta anual de 60.000 refeições.</p>
            </div>
          </div>

          <div class="kpi">
            <div class="texto">
              <h4>Jovens Capacitados</h4>

              <div class="valor">150</div>
              <p class="descricao">Alcançamos 75% da meta de 200 formandos.</p>
            </div>
          </div>

          <div class="kpi">
            <div class="texto">
              <h4>Comunidades Atendidas</h4>
              <div class="valor">+5</div>
              <p class="descricao">
                Nossa área de atuação se expandiu em 25% este ano.
              </p>
            </div>
          </div>

          <div class="kpi">
            <div class="texto">
              <h4>Voluntários Ativos</h4>
              <div class="valor">120</div>
              <p class="descricao">A equipe de voluntários cresceu 40%.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="projetos">
        <h2>Projetos Atuais de Impacto</h2>

        <div class="cards-container">
          <article>
            <h3>
              Projeto Alimentação Solidária
              <span class="badge prioridade-alta">Prioridade Alta</span>
            </h3>
            <p>
              Focado na distribuição de refeições para famílias em situação de
              vulnerabilidade na região central. Nossa meta é 5.000 refeições
              por mês.
            </p>

            <picture>
              <source
                srcset="assets/image/projeto_alimentos.webp"
                type="image/webp"
              />

              <img
                src="assets/image/projeto_alimentos.jpg"
                alt="Voluntários embalando alimentos para doação."
              />
            </picture>

            <p>
              <strong>Voluntários Necessários:</strong> Necessitando de 15
              voluntários!.
            </p>
          </article>

          <article>
            <h3>
              Programa de Educação Digital
              <span class="badge badge-concluido">Concluído</span>
            </h3>
            <p>
              Oferecemos cursos básicos de informática e programação para jovens
              de 16 a 24 anos, preparando-os para o mercado de trabalho.
            </p>

            <picture>
              <source
                srcset="assets/image/projeto_educacao.webp"
                type="image/webp"
              />

              <img
                src="assets/image/projeto_educacao.jpg"
                alt="Jovens em sala de aula de informática."
              />
            </picture>

            <p>
              <strong>Próxima Turma:</strong> Inscrições abertas até 30 de
              novembro.
            </p>
          </article>

          <article>
            <h3>
              Projeto Dignidade: Kit Básico de Higiene
              <span class="badge prioridade-media">Prioridade Média</span>
            </h3>

            <p>
              Focado na distribuição mensal de kits de higiene e limpeza para
              famílias e indivíduos em situação de rua, promovendo a saúde e a
              autoestima. Nossa meta é distribuir 1.000 kits por mês na região
              metropolitana.
            </p>

            <picture>
              <source
                srcset="assets/image/kit-higiene.webp"
                type="image/webp"
              />

              <img
                src="assets/image/kit-higiene.jpg"
                alt="Voluntários montando kits de higiene."
              />
            </picture>

            <p>
              <strong>Voluntários Necessários:</strong> Necessitando de 12
              voluntários para montagem e logística de distribuição.
            </p>
          </article>

          <article>
            <h3>
              Apoio Escolar: Futuro Brilhante
              <span class="badge em-andamento">Em andamento</span>
            </h3>

            <p>
              Oferecemos reforço escolar e atividades lúdicas no contraturno das
              aulas, além de distribuir materiais didáticos essenciais para
              crianças de 6 a 12 anos. O foco é reduzir a evasão escolar e
              garantir o aprendizado.
            </p>

            <picture>
              <source
                srcset="assets/image/reforco-escolar.webp"
                type="image/webp"
              />
              <img
                src="assets/image/reforco-escolar.jpg"
                alt="Voluntário ensinando crianças em um centro comunitário."
              />
            </picture>

            <p>
              <strong>Próxima Turma:</strong> Inscrições para tutores
              voluntários (reforço escolar) abertas em dezembro.
            </p>
          </article>
        </div>
      </section>

      <div class="projeto-metas-dashboard">
          <div class="meta-item">
            <h4 class="meta-titulo">Progresso de Arrecadação:</h4>

            <div class="barra-progresso">
              <div
                class="progresso-preenchido progresso-arrecadacao"
                id="progressoArrecadacao"
                data-porcentagem="75"
              ></div>
            </div>

            <p class="detalhe-progresso" id="detalheProgressoTexto">
              R$ 7.500 de R$ 10.000 arrecadados (75%)
            </p>
          </div>

          <div class="meta-item">
            <h4 class="meta-titulo">Meta de Kits Distribuídos:</h4>
            <div class="barra-progresso">
              <div
                class="progresso-preenchido progresso-impacto"
                id="progressoKits"
                data-porcentagem="65"
              ></div>
            </div>
            <p class="detalhe-progresso">
              R$ 8.500 de R$ 12.000 kits distribuídos (65%)
            </p>
          </div>

          <div class="meta-item">
            <h4 class="meta-titulo">Recrutamento de Voluntários:</h4>

            <div class="barra-progresso">
              <div
                class="progresso-preenchido progresso-voluntariado"
                id="progressoVoluntarios"
                data-porcentagem="90"
              ></div>
            </div>
            <p class="detalhe-progresso">
              10 de 12 voluntários necessários (90%)
            </p>
          </div>
        </div>
      </section>

        <section id="voluntariado">
        <h2>Faça a Diferença: Seja um Voluntário</h2>
        <p>
          Temos diversas oportunidades que se encaixam na sua agenda e nas suas
          habilidades. Conheça as áreas e candidate-se hoje!
        </p>

        <ul>
          <li>Organização de Eventos</li>
          <li>Suporte Administrativo</li>
          <li>Aulas de Reforço Escolar</li>
        </ul>
        <a href="#/cadastro">Quero me Cadastrar como Voluntário</a> ✍
      </section>

      <section id="doacoes">
        <h2>Como Doar e Acompanhar o Impacto</h2>
        <aside>
          <p>
            Sua doação garante a continuidade de todos os nossos projetos.
            Acompanhe a transparência dos recursos em nosso
            <a href="#/relatorioAnual">Relatório Anual</a>.
          </p>
        </aside>

        <h3>Opções de Doação</h3>
        <p>
          Você pode doar por PIX, cartão de crédito ou boleto. Toda ajuda faz a
          diferença!
        </p>

        <div>
          <a href="#/doacao" class="btn"
            >Doar Agora
            <i class="bi bi-heart-fill"></i>
          </a>
        </div>
      </section>
    `,

  // ----------------------------------------------------
  // Template 'cadastro' (Conteúdo do cadastro.hmtl)
  // ----------------------------------------------------
  cadastro: `
        
      <section id="chamada-voluntario">

        <h2>Cadastre-se para Ser um Voluntário</h2>
        <p>
          Na Transformando Vidas, acreditamos no poder da união e da ação. O
          voluntariado é o coração da nossa missão. Ao preencher este
          formulário, você está dando o primeiro passo para se juntar a uma rede
          de pessoas dedicadas a combater a insegurança alimentar e a promover
          dignidade.
        </p>

        <h3>O que Esperamos de Você?</h3>
        <p>
          Buscamos pessoas com vontade de fazer a diferença, seja com seu tempo,
          conhecimento ou energia. Não importa sua área de atuação, sua
          contribuição é essencial para:
        </p>
        <ul>
          <li>Apoiar a distribuição de cestas básicas e refeições.</li>
          <li>Participar de projetos de capacitação digital e profissional.</li>
          <li>Levar esperança e suporte às comunidades mais vulneráveis.</li>
        </ul>

        <p>
          <b
            >Seja a mudança que o mundo precisa. Preencha seus dados abaixo e
            comece a transformar vidas hoje mesmo!</b
          >
        </p>

        <figure class="imagem-voluntariado">
          <picture>
            <source srcset="assets/image/voluntariado.webp" type="image/webp" />
            <img
              src="assets/image/voluntariado.jpg"
              alt="Voluntários da Transformando Vidas organizando caixas de ajuda humanitária para a distribuição de alimentos e kits de higiene."
              class="voluntariado-img"
            />
          </picture>
          <figcaption class="legenda-cadastro">
            Junte-se à nossa equipe! <b>Voluntários</b> dedicados garantem que
            os recursos cheguem a quem mais precisa. Cadastre-se e faça parte!
          </figcaption>
        </figure>
      </section>

      <section>
        <h2>Preencha Seus Dados</h2>
        <p>
          Seu cadastro é o primeiro passo para transformar o mundo. Todos os
          campos são obrigatórios.
        </p>

        <form id="cadastro-form" action="#/agradecimento" method="POST">
          <fieldset>
            <legend>Informações Pessoais</legend>

            <div>
              <label for="nome">Nome Completo:</label>
              <input
                type="text"
                id="nome"
                name="nome"
                required
                minlength="5"
                placeholder="Seu nome completo"
              />

              <span id="nome-erro" class="mensagem-erro" aria-live="polite">
              </span>
            </div>

            <div>
              <label for="email">E-mail:</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="exemplo@email.com"
              />

              <span id="email-erro" class="mensagem-erro" aria-live="polite">
              </span>
            </div>

            <div>
              <label for="cpf">CPF:</label>
              <input
                type="text"
                id="cpf"
                name="cpf"
                required
                maxlength="14"
                placeholder="Formato: 000.000.000-00"
              />

              <span id="cpf-erro" class="mensagem-erro" aria-live="polite">
              </span>
            </div>

            <div>
              <label for="nascimento">Data de Nascimento:</label>
              <input type="date" id="nascimento" name="nascimento" required />

              <span
                id="nascimento-erro"
                class="mensagem-erro"
                aria-live="polite"
              >
              </span>
            </div>
          </fieldset>

          <fieldset>
            <legend>Endereço e Contato</legend>
            <div>
              <label for="telefone">Telefone:</label>
              <input
                type="tel"
                id="telefone"
                name="telefone"
                required
                maxlength="15"
                placeholder="(00) 90000-0000"
              />

              <span id="telefone-erro" class="mensagem-erro" aria-live="polite">
              </span>
            </div>

            <div>
              <label for="cep">CEP:</label>
              <input
                type="text"
                id="cep"
                name="cep"
                required
                maxlength="9"
                placeholder="00000-000"
              />

              <span id="cep-erro" class="mensagem-erro" aria-live="polite">
              </span>
            </div>
          </fieldset>

          <fieldset>
            <legend>Detalhes de Localização</legend>
            <div class="full-width">
              <label for="endereco">Endereço (Rua, Número):</label>
              <input type="text" id="endereco" name="endereco" required />

              <span id="endereco-erro" class="mensagem-erro" aria-live="polite">
              </span>
            </div>

            <div>
              <label for="cidade">Cidade:</label>
              <input type="text" id="cidade" name="cidade" required />

              <span id="cidade-erro" class="mensagem-erro" aria-live="polite">
              </span>
            </div>

            <div>
              <label for="estado">Estado:</label>
              <select id="estado" name="estado" required>
                <option value="" disabled selected>Selecione um Estado</option>
                <option value="SP">São Paulo</option>
                <option value="RJ">Rio de Janeiro</option>
                <option value="MG">Minas Gerais</option>
                <option value="CE">Ceará</option>
              </select>

              <span id="estado-erro" class="mensagem-erro" aria-live="polite">
              </span>
            </div>
          </fieldset>

          <div>
            <button type="submit" class="btn-finalizar">
              Enviar Cadastro e Ajudar
            </button>
          </div>
        </form>
      </section>
    `,

  // ------------------------------------------------------
  // Template 'blogMidia' (Conteúdo do blog-midia.html)
  // ------------------------------------------------------
  blogMidia: `
        <section>
          <div class="imprensa-bloco institucional-data">
            <h2>Nossa Missão e Estrutura</h2>
            <p class="institucional-resumo">
              A Transformando Vidas é uma ONG dedicada a
              <b>combater a desigualdade social extrema</b> por meio de ações
              focadas em dignidade humana e sustentabilidade. Desde a fundação em
              2018, em Fortaleza, Ceará, acreditamos que o amparo deve ir além da
              assistência emergencial, capacitando indivíduos para um futuro
              autônomo. Trabalhamos lado a lado com as comunidades da Barra do
              Ceará, Serrinha e Jacarecanga, investindo em programas de
              alimentação solidária, kits de higiene e inclusão digital. Cada
              passo é guiado pelo pilar da
              <b>transparência e prestação de contas</b>, garantindo que o impacto
              real de cada doação seja tangível na vida de quem mais precisa.
            </p>

            <ul class="dados-institucionais">
              <li>
                <strong>Fundação:</strong> 2018, com foco inicial em cestas
                básicas nas Comunidades da
                <b>Barra do Ceará, Serrinha e Jacarecanga</b>.
              </li>
              <li>
                <strong>Citação (Porta-Voz):</strong> <b>Maria Fátima</b> (CEO e
                Fundadora): A fome não espera e a dignidade não pode ser adiada.
                Nosso trabalho é a prova de que, quando a comunidade se une pela
                solidariedade, cada cesta básica e cada kit de higiene se tornam
                um tijolo na construção de um futuro mais justo e humano."
              </li>
              <li>
                <strong>Áreas de Foco:</strong> Alimentação Solidária (Prioridade
                Alta), Dignidade (Kit de Higiene) e Educação Digital.
              </li>
              <li>
                <strong>Transparência:</strong>
                <a href="#/relatorioAnual">Estatuto Social e Balanço Anual</a>
                disponíveis na íntegra.
              </li>
            </ul>
          </div>
        </section>

        <div class="imprensa-bloco impacto-data">
          <h2>Dados Chave e Resultados Recentes</h2>
          <p>
            Para jornalistas, parceiros e leitores, a seção que apresenta os
            <b>indicadores chave de performance (KPIs)</b> da Transformando Vidas.
            Estes números refletem nosso compromisso e as metas atuais para
            garantir <b>transparência e prestação de contas</b>. Para
            contextualizar rapidamente o impacto de nossas ações e o volume de
            recursos mobilizados em nossos projetos,
            <a href="#/projetos">visite a nossa página de projetos.</a>
          </p>

          <ul class="dados-de-impacto">
            <li>
              <strong>Arrecadação:</strong> 99% da meta financeira atingida em
              2024, garantindo a sustentabilidade.
            </li>
            <li>
              <strong>Kits de Higiene:</strong> Meta de distribuição de 1.000 kits
              básicos de higiene por mês.
            </li>
            <li>
              <strong>Alimentação:</strong> Meta de 5.000 refeições distribuídas
              por mês pelo Projeto Alimentação Solidária.
            </li>
            <li>
              <strong>Voluntariado:</strong> Lançada campanha "Mãos à Obra" com
              meta de 100 novos voluntários.
            </li>
          </ul>
        </div>

        <section class="destaque-blog">
          <div class="container">
            <div class="header-blog">
              <h2>Últimas Notícias e Atualizações</h2>

              <p class="secao-descricao">
                Mantenha-se atualizado com as histórias mais recentes sobre nossos
                projetos e impacto na comunidade.
              </p>
            </div>

            <div class="blog-cards-grid">
              <a href="#/Projetofuturo" class="blog-card">
                <picture>
                  <source
                    srcset="assets/image/reuniao-planejamento.webp"
                    type="image/webp"
                  />
                  <img
                    src="assets/image/reuniao-planejamento.jpg"
                    alt="Equipe em reunião de planejamento"
                    class="card-imagem"
                  />
                </picture>

                <div class="card-conteudo">
                  <span class="card-tag">Planejamento</span>
                  <h4>
                    Metas 2026: Lançamos o Planejamento Estratégico para o Próximo
                    Ano
                  </h4>
                  <p>
                    Veja os novos desafios, as áreas de expansão e como nosso foco
                    em sustentabilidade irá guiar todas as decisões.
                  </p>
                  <span class="card-data">Publicado em 25/08/2025</span>
                </div>
              </a>

              <a href="#/Projetofuturo" class="blog-card">
                <picture>
                  <source
                    srcset="assets/image/evento-comunitario.webp"
                    type="image/webp"
                  />
                  <img
                    src="assets/image/evento-comunitario.jpg"
                    alt="Pessoas sorrindo em um evento comunitário"
                    class="card-imagem"
                  />
                </picture>

                <div class="card-conteudo">
                  <span class="card-tag">Eventos</span>
                  <h4>
                    Grande Evento Beneficente 'Mãos à Obra' Chega à Cidade de
                    Juazeiro
                  </h4>
                  <p>
                    Convidamos todos a participarem do nosso próximo evento de
                    arrecadação e voluntariado. Veja como ajudar.
                  </p>
                  <span class="card-data">Publicado em 01/09/2025</span>
                </div>
              </a>

              <a href="#/Projetofuturo" class="blog-card">
                <picture>
                  <source
                    srcset="assets/image/relatorio-financeiro.webp"
                    type="image/webp"
                  />
                  <img
                    src="assets/image/relatorio-financeiro.jpg"
                    alt="Relatório financeiro em gráficos"
                    class="card-imagem"
                  />
                </picture>

                <div class="card-conteudo">
                  <span class="card-tag">Transparência</span>
                  <h4>
                    Como R$ 98.765 mil Estão Transformando Vidas: Detalhes do
                    Balanço Anual
                  </h4>
                  <p>
                    Analisamos como cada doação foi aplicada e os resultados
                    concretos alcançados em nossas três áreas de foco.
                  </p>
                  <span class="card-data">Publicado em 15/09/2024</span>
                </div>
              </a>

              <a href="#/Projetofuturo" class="blog-card">
                <picture>
                  <source
                    srcset="assets/image/voluntarios-distribuindo-kits.webp"
                    type="image/webp"
                  />
                  <img
                    src="assets/image/voluntarios-distribuindo-kits.jpg"
                    alt="Voluntários distribuindo kits"
                    class="card-imagem"
                  />
                </picture>

                <div class="card-conteudo">
                  <span class="card-tag">Projetos</span>
                  <h4>
                    Voluntariado Recorde: Mais de 500 Kits de Higiene Distribuídos
                  </h4>
                  <p>
                    Nossa última campanha mobilizou a comunidade e superou todas
                    as expectativas, garantindo dignidade a centenas de famílias.
                  </p>
                  <span class="card-data">Publicado em 20/09/2025</span>
                </div>
              </a>

              <a href="#/Projetofuturo" class="blog-card">
                <picture>
                  <source
                    srcset="assets/image/fundacao-2018.webp"
                    type="image/webp"
                  />
                  <img
                    src="assets/image/fundacao-2018.jpg"
                    alt="Mesa de reunião com documentos históricos ou foto antiga de voluntários"
                    class="card-imagem"
                  />
                </picture>

                <div class="card-conteudo">
                  <span class="card-tag">HISTÓRICO</span>
                  <h4>
                    Nossa Origem: Relembre a Jornada Desde a Fundação em 2018
                  </h4>
                  <p>
                    Uma retrospectiva de como tudo começou: as primeiras
                    atividades focadas na distribuição de cestas básicas na
                    Comunidade Barra do Ceará, Serrinha e Jacarecanga e a visão de
                    longo prazo que nos guia hoje.
                  </p>
                  <span class="card-data">Publicado em 01/12/2025</span>
                </div>
              </a>

              <div class="ver-mais-link">
                <a href="#/Projetofuturo"
                  >Ver todas as Notícias <i class="fas fa-arrow-right"></i
                ></a>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div id="area-imprensa-integrada">
            <div class="container">
              <h2>Recursos para Imprensa e Contato Mídia</h2>

              <p class="subtitulo-imprensa">
                Espaço dedicado a jornalistas, blogueiros e veículos de
                comunicação. Encontre nossos releases mais recentes e recursos de
                marca.
              </p>

              <div class="imprensa-grid">
                <div class="releases-recente">
                  <h3>Comunicados e Releases Recentes</h3>

                  <article class="release-item">
                    <h4>
                      <a href="release-maos-a-obra.pdf" target="_blank"
                        >Transformando Vidas Lança a Campanha "Mãos à Obra" com
                        Meta de 100 Novos Voluntários</a
                      >
                    </h4>

                    <picture>
                      <source
                        srcset="
                          assets/image/voluntarios-em-evento-comunitario.webp
                        "
                        type="image/webp"
                      />

                      <img
                        src="assets/image/voluntarios-em-evento-comunitario.jpg"
                        alt="Voluntarios em Evento Comunitario"
                        class="card-imagem"
                      />
                    </picture>

                    <p class="data-release">Publicado em: 05 de Março de 2025</p>
                    <p>
                      O comunicado detalha a estratégia da nova campanha e as
                      áreas de atuação prioritárias.
                    </p>
                  </article>

                  <article class="release-item">
                    <h4>
                      <a href="release-balanco-anual.pdf" target="_blank"
                        >Balanço Anual: 99% da Meta de Arrecadação Atingida em
                        2024</a
                      >
                    </h4>

                    <picture>
                      <source
                        srcset="assets/image/balanço-anual-em-gráficos.webp"
                        type="image/webp"
                      />

                      <img
                        src="assets/image/balanço-anual-em-gráficos.jpg"
                        alt="Relatório financeiro do Balanço Anual em gráficos"
                        class="card-imagem"
                      />
                    </picture>

                    <p class="data-release">
                      Publicado em: 15 de Janeiro de 2025
                    </p>
                    <p>
                      Destaques sobre o desempenho financeiro e os resultados dos
                      programas de impacto social no último ano fiscal.
                    </p>
                  </article>

                  <div class="arquivo-link">
                    <i class="fas fa-archive"></i>
                    <a href="#/Projetofuturo"
                      >Ver Arquivo Completo de Releases</a
                    >
                  </div>

                  <div class="kit-e-contato">
                    <h3>Recursos Rápidos para a Mídia</h3>

                    <div class="contato-midia-box">
                      <h4>Contato de Imprensa</h4>
                      <p>
                        <strong>Porta-Voz:</strong> Ana Paula Silveira (Gerente de
                        Comunicação)
                      </p>
                      <p>
                        <strong>E-mail:</strong>
                        <a href="mailto:imprensa@transformandovidas.org">
                          imprensa@transformandovidas.org</a
                        >
                      </p>
                      <p><strong>Telefone:</strong> (11) 98765-4321</p>
                    </div>

                    <div class="kit-download-box">
                      <h4>Kit de Mídia (Media Kit)</h4>
                      <p>
                        Baixe nosso kit completo com logos em alta resolução,
                        fotos da diretoria e fatos sobre a ONG.
                      </p>
                      <a
                        href="assets/downloads/media-kit.zip"
                        class="btn btn-secondary btn-full"
                      >
                        <i class="fas fa-download"></i> Baixar Kit de Mídia (ZIP)
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="newsletter-area">
          <div class="container newsletter-card-dark">
            <h3>Assine a Nossa Newsletter</h3>
            <p>
              Receba as últimas notícias, atualizações de projetos e histórias de
              impacto diretamente na sua caixa de entrada.
            </p>

            <form class="newsletter-form-two-fields" action="#agradecimento" method="POST">
              <input
                type="text"
                placeholder="Seu Nome"
                aria-label="Digite seu nome"
                required
              />
              <input
                type="email"
                placeholder="Seu e-mail"
                aria-label="Digite seu e-mail"
                required
              />
              <button type="submit" class="btn btn-light">Enviar</button>
            </form>
          </div>
        </section>
    `,

  // ---------------------------------------------------------------
  // Template 'relatorioAnual' (Conteúdo do relatorio-anual.html)
  // ---------------------------------------------------------------
  relatorioAnual: `
        <section class="container-principal">
        <h2>Transparência: Relatório Anual de 2024</h2>

        <section class="sumario-executivo">
          <h2>Mensagem da Presidente</h2>

          <div class="introducao">
            <p>
              Em 2024, a Transformando Vidas não apenas resistiu aos desafios,
              mas prosperou, graças à generosidade de cada doador e ao esforço
              incansável dos nossos voluntários. Conseguimos expandir o Projeto
              Alimentos para duas novas comunidades e lançamos a primeira edição
              do nosso programa de capacitação digital.
            </p>
            <p>
              Alcançamos a marca de <b>98.765,00 mil reais arrecadados</b>, um
              recorde que nos enche de orgulho e nos impulsiona a sonhar mais
              alto. Nossa meta para o próximo ano é clara: dobrar o número de
              famílias assistidas pelo Projeto Educação. Agradeço a você por ser
              a mudança que o mundo precisa.
            </p>
          </div>

          <p class="assinatura">
            <b>Maria Fátima</b><br />Presidente da Transformando Vidas
          </p>
        </section>

        <section id="resumo-financeiro" class="resumo-financeiro">
          <h2>📊 Resumo Financeiro Anual</h2>

          <p class="introducao">
            Apresentamos o nosso relatório anual consolidado, detalhando a
            origem e a aplicação de todos os recursos recebidos e utilizados em
            nossos projetos sociais.
          </p>

          <div class="kpis-container">
            <div class="kpi">
              <h4>Total Arrecadado</h4>
              <p class="valor" id="kpi-arrecadado" data-valor="98765">
                R$ 0,00
              </p>
            </div>

            <div class="kpi">
              <h4>Meta Anual</h4>
              <p class="valor" id="kpi-meta" data-valor="100000">R$ 0,00</p>
            </div>

            <div class="kpi">
              <h4>Arrecadação vs. Meta</h4>
              <p class="valor destaque" id="kpi-percentual">0%</p>
            </div>
          </div>

          <h3>Progresso da Meta de Arrecadação (R$)</h3>
          <div class="grafico-container">
            <canvas id="arrecadacaoChart"></canvas>
          </div>

          <div class="detalhes-agrupados">
            <article class="relatorio-bloco aplicacao-detalhada">
              <h3>Detalhes da Aplicação de Recursos 💸</h3>

              <div class="aplicacao-detalhada">
                <ul>
                  <li><b>Projeto Educação:</b> 30% dos fundos</li>
                  <li><b>Projeto Alimentos:</b> 20% dos fundos</li>
                  <li><b>Projeto Dignidade:</b> 15% dos fundos</li>
                  <li><b>Apoio Escolar:</b> 15% dos fundos</li>
                  <li><b>Organização de Eventos:</b> 10% dos fundos</li>
                  <li><b>Reserva de Emergência:</b> 10% dos fundos</li>
                </ul>
              </div>
            </article>

            <article class="relatorio-bloco detalhes-financeiros">
              <h3>Detalhes Financeiros 💰</h3>

              <div class="detalhes-financeiros">
                <p><strong>Custos Operacionais:</strong> R$ 13.765,00</p>
                <p>
                  <strong>Total Investido em Projetos:</strong> R$ 85.000,00
                </p>
                <p><strong>Total Arrecadado:</strong> R$ 98.765,00</p>
              </div>
            </article>
          </div>
        </section>

        <section id="metas-por-projeto">
          <h2>🎯 Metas e Conquistas por Projeto</h2>
          <p>
            Abaixo detalhamos o impacto direto que cada projeto alcançou com os
            fundos aplicados no último ano.
          </p>

          <div class="projeto-report-box">
            <h3>Projeto Alimentação Solidária</h3>
            <p><strong>Meta Anual:</strong> 60.000 refeições distribuídas</p>
            <p>
              <strong>Resultado Alcançado:</strong> +50.000 Refeições
              distribuídas
            </p>
            <p class="status-conquista">
              Resultado: 83% da meta alcançada (próximo de 100%).
            </p>
          </div>

          <div class="projeto-report-box">
            <h3>Programa de Educação Digital</h3>
            <p><strong>Meta Anual:</strong> 200 jovens capacitados</p>
            <p><strong>Resultado Alcançado:</strong> 150 Jovens formados</p>
            <p class="status-conquista">
              Resultado: 75% da meta de formação alcançada. (Próxima turma em
              andamento).
            </p>
          </div>

          <div class="projeto-report-box">
            <h3>Projeto Dignidade: Kit Básico de Higiene</h3>
            <p>
              <strong>Meta Anual:</strong> 12.000 kits distribuídos (1.000
              kits/mês)
            </p>
            <p>
              <strong>Resultado Alcançado:</strong> 10.500 kits distribuídos
            </p>
            <p class="status-conquista">
              Resultado: 87,5% da meta alcançada. (Forte impacto inicial).
            </p>
          </div>

          <div class="projeto-report-box">
            <h3>Apoio Escolar: Futuro Brilhante</h3>
            <p><strong>Meta Anual:</strong> 120 crianças atendidas</p>
            <p><strong>Resultado Alcançado:</strong> 95 crianças atendidas</p>
            <p class="status-conquista">
              Resultado: 79% da meta alcançada. Foco na redução da evasão
              escolar em andamento.
            </p>
          </div>
        </section>

        <section class="impacto-qualitativo">
          <h3>🤝 Histórias que Transformam</h3>

          <p>
            Por trás de cada número, existe uma vida impactada. Veja como a sua
            contribuição fez a diferença no último ano.
          </p>

          <div class="depoimentos-container">
            <div class="depoimento">
              <p>
                "Graças ao Projeto Alimentos, minha família teve o básico
                garantido enquanto eu procurava emprego. É mais do que comida, é
                dignidade."
              </p>
              <p class="autor">
                - Ana Lúcia, Beneficiária do Projeto Alimentos
              </p>
            </div>
            <div class="depoimento">
              <p>
                "Participei da capacitação digital e consegui meu primeiro
                trabalho como assistente virtual. Minha vida mudou
                completamente!"
              </p>
              <p class="autor">
                - João Victor, Participante do Projeto Educação
              </p>
            </div>
          </div>
        </section>

        <section class="documentos-legais">
          <h3>⚖️ Transparência e Governança</h3>
          <p>
            Comprometimento com a ética e a prestação de contas. Todos os nossos
            documentos essenciais estão disponíveis para consulta.
          </p>

          <ul>
            <li>
              <a href="#" target="_blank"
                ><i class="bi bi-file-earmark-text"></i> Estatuto Social
                (PDF)</a
              >
            </li>
            <li>
              <a href="#" target="_blank"
                ><i class="bi bi-currency-dollar"></i> Balanço Patrimonial de
                2024 (PDF)</a
              >
            </li>
            <li>
              <a href="#" target="_blank"
                ><i class="bi bi-patch-check"></i> Certificado CNPJ e
                Regularidade Fiscal</a
              >
            </li>
          </ul>

          <p class="aviso-legal">
            Nossa instituição preza pela máxima transparência, por isso, todos
            os dados financeiros são auditados anualmente por uma entidade
            independente, garantindo a correta aplicação dos recursos.
          </p>
        </section>

        <a href="/projetos" class="btn">Voltar para Projetos e Doações</a>
      </section>
    `,

  // -------------------------------------------------------
  // Template 'doacao' (Conteúdo principal do doacao.html)
  // -------------------------------------------------------
  doacao: `
        <section id="formulario-doacao" class="container-principal">
        <h1>Sua Contribuição Faz a Diferença</h1>

        <p class="introducao">
          Escolha o valor e o método de pagamento para apoiar nossos projetos de
          educação e alimentação. Toda doação é segura e transparente.
        </p>

        <form
          class="form-doacao"
          id="formulario-doacao"
          action="#/agradecimento"
          method="POST"
        >
          <div class="bloco-informacoes">
            <div class="secao-doacao">

              <h2>1. Escolha o Valor da Doação</h2>

              <div class="opcoes-valor-sugerido">
                <div class="bloco-sugestao" data-valor="25.00">

                  <p class="valor-sugerido">R$ 25,00</p>
                  <p class="impacto-sugerido">
                    Ajuda a distribuir 1 refeição nutritiva para uma família.
                  </p>

                  <button
                    type="button"
                    class="btn-doar-sugestao"
                    data-value="25"
                  >
                    R$ 25,00
                  </button>
                </div>

                <div class="bloco-sugestao" data-valor="50.00">
                  <p class="valor-sugerido">R$ 50,00</p>
                  <p class="impacto-sugerido">
                    Garante um kit básico de higiene para uma família.
                  </p>

                  <button
                    type="button"
                    class="btn-doar-sugestao"
                    data-value="50"
                  >
                    R$ 50,00
                  </button>
                </div>

                <div class="bloco-sugestao" data-valor="100.00">
                  <p class="valor-sugerido">R$ 100,00</p>
                  <p class="impacto-sugerido">
                    Financia 1 hora de aula de capacitação digital alunos.
                  </p>

                  <button
                    type="button"
                    class="btn-doar-sugestao"
                    data-value="100"
                  >
                    R$ 100,00
                  </button>
                </div>

                <div
                  class="bloco-sugestao personalizado"
                  data-valor="personalizado"
                >
                  <p class="valor-sugerido">Outro Valor</p>
                  <p class="impacto-sugerido">
                    Sua doação faz a diferença em qualquer quantia.
                  </p>
                </div>

                <div class="campo-valor-manual">
                  <label for="valor-personalizado">Outro Valor (R$):</label>
                  <input
                    type="number"
                    id="valor-doacao"
                    name="valor-doacao"
                    step="0.01"
                    placeholder="0.00"                   
                    value=""
                  />
                  <small>O valor mínimo para doação é R$ 5,00.</small>
                </div>
              </div>
            </div>
          </div>

          <div class="bloco-informacoes">
            <div class="opcoes-pagamento">
              <h2>2. Selecione o Método de Pagamento</h2>

              <div class="opcoes-pagamento">
                <label>
                  <input
                    type="radio"
                    name="metodo-pagamento"
                    value="pix"
                    
                  />
                  PIX
                </label>

                <label>
                  <input
                    type="radio"
                    name="metodo-pagamento"
                    value="cartao-debito"
                  />
                  Cartão de Débito
                </label>

                <label>
                  <input
                    type="radio"
                    name="metodo-pagamento"
                    value="cartao-credito"
                  />
                  Cartão de Crédito
                </label>

                <label>
                  <input type="radio" name="metodo-pagamento" value="boleto" />
                  Boleto Bancário
                </label>
              </div>

              <div
                id="detalhes-cartao"
                class="detalhes-pagamento esconder-pagamento"
              >
                <h3>Dados do Cartão</h3>
                <div class="bandeiras-cartao">
                  <picture>
                    <source
                      srcset="assets/image/visa.logo.webp"
                      type="image/webp"
                    />
                    <img
                      src="assets/image/visa.logo.png"
                      alt="Bandeira Visa"
                      class="bandeira-icon"
                    />
                  </picture>

                  <picture>
                    <source
                      srcset="assets/image/elo.logo.webp"
                      type="image/webp"
                    />
                    <img
                      src="assets/image/elo.logo.png"
                      alt="Bandeira Elo"
                      class="bandeira-icon"
                    />
                  </picture>

                  <picture>
                    <source
                      srcset="assets/image/nubank.logo.webp"
                      type="image/webp"
                    />
                    <img
                      src="assets/image/nubank.logo.png"
                      alt="Bandeira Nubank"
                      class="bandeira-icon"
                    />
                  </picture>

                  <picture>
                    <source
                      srcset="assets/image/hipercard.logo.webp"
                      type="image/webp"
                    />
                    <img
                      src="assets/image/hipercard.logo.png"
                      alt="Bandeira Hipercard"
                      class="bandeira-icon"
                    />
                  </picture>

                  <picture>
                    <source
                      srcset="assets/image/mastercard.logo.webp"
                      type="image/webp"
                    />
                    <img
                      src="assets/image/mastercard.logo.png"
                      alt="Bandeira Mastercard"
                      class="bandeira-icon"
                    />
                  </picture>

                  <picture>
                    <source
                      srcset="assets/image/americanexpress.logo.webp"
                      type="image/webp"
                    />
                    <img
                      src="assets/image/americanexpress.logo.png"
                      alt="Bandeira American Express"
                      class="bandeira-icon"
                    />
                  </picture>

                  <picture>
                    <source
                      srcset="assets/image/bancodobrasil.logo.webp"
                      type="image/webp"
                    />
                    <img
                      src="assets/image/bancodobrasil.logo.png"
                      alt="Bandeira Banco do Brasil"
                      class="bandeira-icon"
                    />
                  </picture>
                </div>

                <div class="campo">
                  
                    <input
                      type="text"
                      id="numero-cartao"
                      name="numero-cartao"
                      placeholder="Número do Cartão"
                      pattern="\d{4} \d{4} \d{4} \d{4}"
                      title="Formato: XXXX XXXX XXXX XXXX"
                      autocomplete="cc-number"                    
                      aria-label="Número do Cartão de Crédito ou Débito"
                    />
                    <span id="numero-cartao-erro" class="mensagem-erro"></span>
                
                    <input
                      type="text"
                      id="nome-cartao"
                      name="nome-cartao"
                      placeholder="Nome Impresso no Cartão"
                      autocomplete="cc-name"                     
                      aria-label="Nome Impresso no Cartão"
                    />
                    <span id="nome-cartao-erro" class="mensagem-erro"></span>                 

                  <div class="data-cvv">
                    <div class="campo">
                      <label for="validade-cartao" class="sr-only">Validade (MM/AA)</label>
                      <input
                        type="text"
                        id="validade-cartao"
                        name="validade-cartao"
                        placeholder="MM/AA"
                        pattern="(0[1-9]|1[0-2])\/\d{2}"
                        title="Formato: MM/AA"
                        autocomplete="cc-exp"                        
                      />
                      <span
                        id="validade-cartao-erro"
                        class="mensagem-erro"
                      ></span>                     
                    </div>

                    <div class="campo">
                      <label for="cvv-cartao" class="sr-only">Código de Segurança (CVV)</label>
                      <input
                        type="text"
                        id="cvv-cartao"
                        placeholder="CVV"
                        pattern="\d{3,4}"
                        title="3 ou 4 dígitos"
                        autocomplete="off"                       
                      />
                      <span id="cvv-cartao-erro" class="mensagem-erro"></span>
                    </div>
                  </div>

                  <div id="secao-parcelas" class="secao-parcelas">
                    <label for="parcelas">Número de Parcelas:</label>

                    <select id="parcelas" name="parcelas">
                      <option value="" disabled selected>Selecione...</option>
                    </select>
                    <p
                      id="valor-parcela-exibicao"
                      class="valor-parcela-exibicao"
                    ></p>
                  </div>
                </div>
              </div>

              <div
                id="detalhes-pix"
                class="detalhes-pagamento esconder-pagamento"
              >
                <h3>Pagamento via PIX</h3>
                <p>
                  Escaneie o código QR ou use o código Copia e Cola no seu
                  aplicativo bancário.
                </p>

                <p>Este QR Code é válido por 30 minutos.</p>

                <div class="bloco-qrcode-pix-demo">
                  <picture>
                    <source srcset="assets/image/bloco-qrcode-pix-demo.webp" />
                    <img
                      scr="assets/image/bloco-qrcode-pix-demo.png"
                      alt="QR Code demonstrativo para pagamento PIX"
                      class="qrcode-img"
                    />
                  </picture>

                  <h4>Código PIX (Copia e Cola):</h4>
                  <input
                    type="text"
                    id="codigo-pix"
                    value="00020126330014BR.GOV.BCB.PIX..."
                  />

                  <button type="button" class="btn" onclick="copiarCodigoPix()">
                    Copiar
                  </button>
                </div>
              </div>

              <div
                id="detalhes-boleto"
                class="detalhes-pagamento esconder-pagamento"
              >
                <h3>Boleto Bancário</h3>
                <p>
                  O boleto será gerado ao clicar em 'Finalizar Doação'. Você
                  terá 3 dias úteis para realizar o pagamento em qualquer banco
                  ou lotérica.
                </p>
                <p>
                  Lembre-se: Doações via boleto são confirmadas em até 72 horas.
                </p>
              </div>
            </div>
          </div>

          <div class="bloco-informacoes">
            <div class="secao-doacao">
              <h2>3. Informações de Contato</h2>

              <label for="email-doador">Seu E-mail (Para recibo):</label>
              <input
                type="email"
                id="email-doador"
                name="email-doador"
                placeholder="Seu E-mail (Para recibo)"
                autocomplete="email"               
              />
              <span id="email-doador-erro" class="mensagem-erro"></span>
              
              <label for="nome-doador">Seu Nome:</label>

              <label>
              <input
                type="text"
                id="nome-doador"
                name="nome-doador"
                placeholder="Seu Nome"
                autocomplete="name"               
              />
              <span id="nome-doador-erro" class="mensagem-erro"></span>
            </div>
          </div>

          <div class="bloco-acao-final">
            <button type="submit" class="btn-finalizar">
              <i class="bi bi-heart-fill"></i>
              Finalizar Doação
            </button>
          </div>
        </form>
      </section>
      `,

  // ------------------------------------------------------------
  // Template 'contato' (Conteúdo principal do contato.html)
  // ------------------------------------------------------------
  contato: `
        <section id="contato-principal">
        <div class="container">
          <h2>Fale Conosco e Junte-se à Causa</h2>
          <p class="subtitulo-contato">
            Seja para tirar dúvidas, pedir informações de imprensa ou fazer uma
            parceria, nossa equipe está pronta para te atender.
          </p>

          <div class="contato-grid">
            <div class="contato-formulario">
              <h3>Envie sua Mensagem</h3>
              <form class="formulario-padrao">
                <input type="text" placeholder="Seu Nome Completo" required />
                <input type="email" placeholder="Seu Melhor E-mail" required />
                <input type="tel" placeholder="Telefone (Opcional)" />

                <select required>
                  <option value="">Assunto da Mensagem</option>
                  <option value="duvida">Dúvida Geral / Informação</option>
                  <option value="parceria">Parceria / Patrocínio</option>
                  <option value="voluntariado">Voluntariado</option>
                  <option value="imprensa">Contato de Imprensa</option>
                </select>

                <textarea
                  placeholder="Digite sua mensagem detalhada aqui..."
                  rows="5"
                  required
                ></textarea>

                <button type="submit" class="btn btn-primary">
                  Enviar Mensagem
                </button>
              </form>
            </div>

            <div class="contato-info-mapa">
              <h3>Nossa Sede</h3>

              <div class="info-detalhes">
                <p>
                  <i class="bi bi-geo-alt-fill"></i>
                  Rua dos Heróis, 123 - Centro<br />
                  São Paulo, SP - CEP 01234-567
                </p>
                <p>
                  <i class="bi bi-telephone-fill"></i>
                  (00) 99999-8888
                </p>
                <p>
                  <i class="bi bi-envelope-fill"></i>
                  <a href="mailto:contato@transformandovidas.org"
                    >contato@transformandovidas.org</a
                  >
                </p>
                <p>
                  <i class="bi bi-clock-fill"></i>
                  Segunda a Sexta: 9:00h às 17:00h
                </p>
              </div>

              <div class="mapa-container">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1532847.6683885623!2d-48.51345474999999!3d-23.550519999999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59a341e06497%3A0x27276707833a0429!2sS%C3%A3o%20Paulo!5e0!3m2!1spt-BR!2sbr!4v1699900000000!5m2!1spt-BR!2sbr"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    `,

  // ---------------------------------------------------------------
  // Template 'agradecimento'
  // ---------------------------------------------------------------
  agradecimento: `
        <main class="agradecimento">
      <section class="sucesso-cadastro">
        <h2>🎉 Cadastro Concluído com Sucesso!</h2>
        <p>
          Agradecemos imensamente por se juntar à missão da Transformando Vidas.
          Sua vontade de ajudar é o primeiro passo para transformar vidas.
        </p>
        <p>
          Em breve, nossa equipe entrará em contato com você para as próximas
          etapas.
        </p>

        <div class="opcoes-retorno">
          <a href="#/home" class="btn">Voltar para a Página Inicial</a>
          <a href="#/projetos" class="btn">Conhecer Nossos Projetos</a>
        </div>
      </section>
    </main>
    `,

  // ----------------------------------------------------
  // Template 'cadastroProjetoGestor' (Cadastrar Projeto)
  // ----------------------------------------------------
  cadastroProjetoGestor: `
        <section>
            <h2>Cadastrar Novo Projeto Social</h2>
            <p>
                Utilize este formulário (simulado) para registrar detalhes, metas e
                requisitos de voluntariado para um novo projeto de impacto social,
                alimentando as informações exibidas na página de projetos.
            </p>

            <form id="formulario-projeto-gestao" action="#">
                <fieldset>
                    <legend>Informações Básicas do Projeto</legend>

                    <div>
                        <label for="nome-projeto">Nome do Projeto:</label>
                        <input
                            type="text"
                            id="nome-projeto"
                            name="nome-projeto"
                            placeholder="Ex: Projeto Alimentação Solidária"
                            required
                        />
                    </div>

                    <div>
                        <label for="categoria">Categoria:</label>
                        <select id="categoria" name="categoria" required>
                            <option value="" disabled selected>
                                Selecione a Categoria
                            </option>
                            <option value="alimentacao">
                                Alimentação e Combate à Fome
                            </option>
                            <option value="educacao">Educação e Capacitação</option>
                            <option value="saude">Saúde e Bem-Estar</option>
                            <option value="infra">Infraestrutura Comunitária</option>
                        </select>
                    </div>

                    <div>
                        <label for="descricao">Descrição Detalhada do Projeto:</label>
                        <textarea
                            id="descricao"
                            name="descricao"
                            rows="5"
                            placeholder="Descreva o objetivo, público-alvo e localização principal."
                            required
                        ></textarea>
                    </div>
                </fieldset>

                <fieldset>
                    <legend>Metas e Indicadores (KPIs)</legend>

                    <div>
                        <label for="meta-beneficiarios"
                            >Meta de Pessoas Beneficiadas:</label
                        >
                        <input
                            type="number"
                            id="meta-beneficiarios"
                            name="meta-beneficiarios"
                            min="1"
                            placeholder="Ex: 5000"
                            required
                        />
                        <small
                            >Pessoas ou famílias que serão diretamente impactadas.</small
                        >
                    </div>

                    <div>
                        <label for="meta-arrecadacao">Meta de Arrecadação (R$):</label>
                        <input
                            type="number"
                            id="meta-arrecadacao"
                            name="meta-arrecadacao"
                            min="0"
                            placeholder="Ex: 50000"
                            required
                        />
                    </div>
                </fieldset>

                <fieldset>
                    <div>
                        <legend>Requisitos de Voluntariado</legend>

                        <label for="vagas-necessarias"
                            >Vagas de Voluntários Necessárias:</label
                        >
                        <input
                            type="number"
                            id="vagas-necessarias"
                            name="vagas-necessarias"
                            min="0"
                            placeholder="Ex: 15"
                            required
                        />
                    </div>

                    <div>
                        <label for="requisitos">Habilidades/Requisitos (opcional):</label>
                        <textarea
                            id="requisitos"
                            name="requisitos"
                            rows="3"
                            placeholder="Ex: Experiência em logística, conhecimento em programação, etc."
                        ></textarea>
                    </div>
                </fieldset>

                <button type="submit" class="btn-finalizar">
                    Salvar e Publicar Projeto
                </button>
            </form>
        </section>
    `,

  // ---------------------------------------------------------
  // Template 'Projetos em Desenvolvimento' (Futuros Projetos)
  // ---------------------------------------------------------

  Projetofuturo: `
        <section class="container my-5 text-center">
            <h2>Página em Desenvolvimento 🚧</h2>
            <p class="lead">No momento não há nada aqui.</p>
            <p>Agradecemos o seu interesse! Tente mais tarde.</p>
            <a href="#home" class="btn btn-primary mt-3">Voltar para a Home</a>
        </section>
    `,
};

window.templates = templates;
console.log(Object.keys(templates));
