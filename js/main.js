const BRACH_DEFAULT_LANGUAGE = 'pt-BR';
const BRACH_EMAIL = 'agenciabrach@gmail.com';
const BRACH_FORM_LINK = 'https://docs.google.com/forms/d/1Pix3kfzHybrRiMCyaRCO4wTU7XBI_g4xaynCdtazOis/edit?pli=1';

const BRACH_POLICY_CONTENT = {
  terms: "<p>Termos de Serviço</p>\n<p>Termos de Serviço<br>(última atualização)</p>\n<p>07 de abril de 2026</p>\n<p>1. Uso dos Serviços</p>\n<p>Para utilizar os serviços da Brach, você deve ter pelo menos 18 anos. Ao acessar e utilizar nossos serviços, você concorda em fazê-lo de forma legal e em conformidade com estes Termos.</p>\n<p>2. Propriedade Intelectual</p>\n<p>Todo o conteúdo presente neste site, incluindo logotipos, textos, elementos visuais, layouts e materiais digitais, é de propriedade da Brach ou de seus parceiros e está protegido por leis de direitos autorais e propriedade intelectual.</p>\n<p>Não é permitido copiar, reproduzir, distribuir ou modificar qualquer conteúdo sem autorização prévia.</p>\n<p>3. Conteúdo do Usuário</p>\n<p>Ao enviar qualquer conteúdo para a Brach (como mensagens, feedbacks ou materiais), você nos concede uma licença não exclusiva, gratuita e válida para uso, exibição e distribuição desse conteúdo, quando necessário para a prestação dos nossos serviços.</p>\n<p>Você é responsável por garantir que o conteúdo enviado não viole leis ou direitos de terceiros.</p>\n<p>4. Limitação de Responsabilidade</p>\n<p>A Brach não se responsabiliza por quaisquer danos diretos ou indiretos decorrentes do uso dos serviços ou do site.</p>\n<p>Não garantimos que o funcionamento será contínuo, livre de erros ou totalmente seguro, embora busquemos sempre a melhor performance e estabilidade.</p>\n<p>5. Encerramento de Acesso</p>\n<p>Podemos suspender ou encerrar o acesso aos nossos serviços a qualquer momento, sem aviso prévio, caso haja violação destes Termos.</p>\n<p>6. Atualizações dos Termos</p>\n<p>Estes Termos podem ser atualizados a qualquer momento. O uso contínuo dos serviços após alterações significa que você concorda com a versão mais recente.</p>\n<p>7. Contato</p>\n<p>Em caso de dúvidas, entre em contato com a gente:<br>📩 agenciabrach@gmail.com</p>",
  privacy: "<p>Politica de privacidade</p>\n<p>Política de Privacidade<br>(última atualização)</p>\n<p>07 de abril de 2026</p>\n<p>1. Informações que Coletamos</p>\n<p>Informações pessoais:<br>Nome, e-mail, telefone e outros dados que você fornece ao entrar em contato ou utilizar nossos serviços.</p>\n<p>Dados de uso:<br>Endereço IP, tipo de navegador, páginas acessadas e outras informações coletadas por meio de cookies e ferramentas de análise.</p>\n<p>2. Como Utilizamos suas Informações</p>\n<p>Utilizamos seus dados para:</p>\n<p>Oferecer e melhorar nossos serviços<br>Responder solicitações e prestar suporte<br>Enviar comunicações de marketing (você pode cancelar a qualquer momento)<br>Analisar o comportamento dos usuários e o desempenho do site</p>\n<p>3. Compartilhamento de Informações</p>\n<p>A Brach não vende suas informações pessoais.</p>\n<p>Seus dados podem ser compartilhados apenas com serviços de terceiros que auxiliam na operação do site e na prestação dos nossos serviços, sempre de forma limitada ao necessário.</p>\n<p>4. Cookies e Rastreamento</p>\n<p>Utilizamos cookies para melhorar sua experiência e coletar dados de navegação.</p>\n<p>Você pode desativar os cookies nas configurações do seu navegador, mas isso pode impactar o funcionamento de algumas funcionalidades do site.</p>\n<p>5. Segurança</p>\n<p>Adotamos medidas razoáveis para proteger suas informações. Ainda assim, nenhum sistema é totalmente seguro.</p>\n<p>Ao utilizar nossos serviços, você reconhece e aceita esse risco.</p>\n<p>6. Seus Direitos</p>\n<p>Você pode solicitar acesso, correção ou exclusão dos seus dados pessoais a qualquer momento.</p>\n<p>Para isso, entre em contato:<br>📩 agenciabrach@gmail.com</p>\n<p>7. Alterações nesta Política</p>\n<p>Esta Política pode ser atualizada periodicamente. A versão mais recente estará sempre disponível em nosso site.</p>"
};

const BRACH_I18N = {
  'pt-BR': {
    htmlLang: 'pt-BR',
    pageTitle: 'Agência Brach',
    description: 'Da identidade visual ao site, desenvolvemos presença digital com propósito, personalidade e resultado.',
    loader: {
      loading: 'CARREGANDO',
      wait: 'AGUARDE',
      preparing: 'PREPARANDO A EXPERIÊNCIA',
      ready: 'PRONTO'
    },
    topbar: {
      homeAria: 'Início',
      languageAria: 'Selecionar idioma',
      menuOpenAria: 'Abrir menu',
      menuCloseAria: 'Fechar menu',
      menuOpen: 'MENU',
      menuClose: 'FECHAR'
    },
    overlay: {
      title: 'Menu principal',
      navAria: 'Menu',
      nav: ['SOBRE', 'SERVIÇOS', 'CASOS', 'CONTATO'],
      emailKicker: '(E-MAIL)',
      socialKicker: '(REDES SOCIAIS)',
      copyAria: 'Copiar e-mail',
      copyOnly: 'Copiar',
      copySuccess: 'Copiado!',
      copyError: 'Não foi possível copiar.',
      emailCopied: 'E-mail copiado!'
    },
    hero: {
      brandTag: 'agência',
      desktopTitle: 'CONSTRUINDO MARCAS COM PRESENÇA',
      mobileKicker: 'AGÊNCIA BRACH',
      mobileLineTop: 'CONSTRUINDO',
      mobileWords: ['MARCAS', 'SITES', 'REDES SOCIAIS'],
      mobileLineMiddle: 'COM',
      mobileLineBottom: 'PRESENÇA',
      mobileCopy: 'Da identidade visual ao site, desenvolvemos presença digital com propósito, personalidade e resultado.',
      intro: 'Criamos presença digital para marcas que precisam ser vistas, lembradas e escolhidas. Menos excesso. Mais direção, clareza e força visual para crescer.',
      cta: 'QUERO FALAR COM A BRACH',
      logosAria: 'Marcas atendidas pela Brach',
      scrollAria: 'Ir para a seção sobre'
    },
    about: {
      kicker: 'SOBRE NÓS',
      title: ['QUEM ESTÁ POR', 'TRÁS DA BRACH'],
      copy: 'A Brach existe para dar visibilidade a marcas que querem crescer no digital com mais clareza, presença e direção. Unimos <strong>branding</strong>, <strong>design</strong> e <strong>performance</strong> para transformar ideias em marcas mais percebidas, mais lembradas e mais preparadas para vender.',
      teamAria: 'Membros da equipe',
      people: [
        {
          role: 'Fundador | Designer',
          bio: 'Designer com olhar estratégico e repertório técnico para transformar ideias em experiências visuais consistentes, funcionais e relevantes para o crescimento da marca.'
        },
        {
          role: 'Fundadora | Marketing',
          bio: 'Profissional voltada para posicionamento, estratégia e comunicação, conectando análise e sensibilidade criativa para gerar presença digital com propósito e resultado.'
        }
      ],
      linkedin: 'Linkedin'
    },
    services: {
      kicker: 'O QUE ENTREGAMOS',
      title: 'SERVIÇOS',
      subtitle: 'Marcas com presença,<br>consistência e conversão.',
      copy: 'Escolha a categoria e veja duas formas de entrega: um pacote Básico para estruturar a marca e um pacote Full para escalar com mais profundidade criativa e comercial.',
      tabsAria: 'Categorias de serviço',
      tabs: {
        branding: 'Branding Marca',
        social: 'Social Mídia',
        web: 'Web'
      },
      tiers: {
        basic: 'Serviço Básico',
        full: 'Serviço Full'
      },
      cards: {
        branding: {
          basic: {
            order: '01',
            category: 'Branding Marca',
            title: 'Essencial',
            copy: 'Base visual para organizar a marca, alinhar a presença e transmitir mais profissionalismo desde o primeiro contato.',
            items: [
              'Logo principal e variações para diferentes usos',
              'Paleta, tipografia base e direção visual inicial',
              'Elementos de apoio para redes e materiais digitais',
              'Arquivos organizados para aplicação do dia a dia'
            ],
            foot: 'Uma estrutura enxuta para tirar a marca do improviso.'
          },
          full: {
            order: '02',
            category: 'Branding Marca',
            title: 'Completo',
            copy: 'Sistema visual mais robusto para marcas que precisam crescer com unidade, memorabilidade e consistência em todos os pontos.',
            items: [
              'Logo, símbolo e assinaturas complementares',
              'Paleta, tipografia e sistema gráfico mais profundo',
              'Manual base com orientações de aplicação da marca',
              'Templates iniciais para social media e peças de apoio'
            ],
            foot: 'Pensado para consolidar presença e sustentar expansão.'
          }
        },
        social: {
          basic: {
            order: '01',
            category: 'Social Mídia',
            title: 'Essencial',
            copy: 'Pacote base para manter a marca ativa com frequência, identidade visual alinhada e uma comunicação mais clara no dia a dia.',
            items: [
              'Calendário editorial base para organizar os temas',
              'Direção visual para feed, stories e peças recorrentes',
              'Conteúdos pensados para constância e reconhecimento',
              'Linha de publicação mais coerente com o posicionamento'
            ],
            foot: 'Ideal para fortalecer a rotina de conteúdo com clareza.'
          },
          full: {
            order: '02',
            category: 'Social Mídia',
            title: 'Completo',
            copy: 'Entrega mais completa para marcas que querem unir frequência, criação estratégica e conteúdo com foco mais forte em relacionamento e conversão.',
            items: [
              'Planejamento estratégico de conteúdo e campanhas',
              'Direção criativa para formatos, quadros e lançamentos',
              'Calendário aprofundado com narrativa mais inteligente',
              'Peças voltadas para alcance, autoridade e vendas'
            ],
            foot: 'Para ganhar intensidade, consistência e mais impacto comercial.'
          }
        },
        web: {
          basic: {
            order: '01',
            category: 'Web',
            title: 'Essencial',
            copy: 'Landing page objetiva para apresentar a oferta com clareza, leitura fluida e base pronta para campanhas mais diretas.',
            items: [
              'Estrutura estratégica e objetiva da página',
              'Design responsivo com hierarquia clara de leitura',
              'Blocos essenciais para oferta, prova e CTA',
              'Base pronta para validar campanhas com rapidez'
            ],
            foot: 'Boa para lançar ofertas e testar conversão com agilidade.'
          },
          full: {
            order: '02',
            category: 'Web',
            title: 'Completo',
            copy: 'Página mais completa, com ritmo visual, narrativa de venda e estrutura pensada para sustentar campanhas com mais ambição.',
            items: [
              'Arquitetura completa da oferta com argumentos de venda',
              'Blocos de prova, objeções, CTA e apoio comercial',
              'Direção visual polida para fortalecer a percepção de valor',
              'Experiência desenhada para campanha, captura e vendas'
            ],
            foot: 'Feita para campanhas mais fortes e com uma percepção mais premium.'
          }
        }
      }
    },
    bridgeTop: {
      kicker: 'ENTRE PRESENÇA E RESULTADO',
      lines: ['DO CORRE A CONQUISTA', 'FAZEMOS SUA MARCA CRESCER ONLINE'],
      copy: 'Acreditamos que branding vai muito além do visual: é construir relevância duradoura, criar conexão real e transformar presença em crescimento consistente.'
    },
    cases: {
      title: 'Cases de sucesso',
      hint: 'Passe o mouse ou use Tab para ver uma prévia do projeto. Pressione Enter para abrir quando a página do trabalho estiver disponível.',
      items: [
        { title: 'Studio de Beleza Giovana Fortunato', name: 'Studio de Beleza Giovana Fortunato', meta: 'Identidade • Conteúdo' },
        { title: 'MiláMi musicalização infantil', name: 'MiláMi musicalização infantil', meta: 'Brand Marca • Educação' },
        { title: 'Ensinarte', name: 'Ensinarte', meta: 'Brand Marca • Educação' },
        { title: 'Landing Page Musicalização infantil', name: 'Landing Page Musicalização infantil', meta: 'Web • Educação' }
      ]
    },
    bridgeBottom: {
      lines: ['CADA PROJETO QUE REALIZAMOS', 'É UMA OPORTUNIDADE ÚNICA'],
      copy: 'Pronto para dar o próximo passo? Junte-se a nós agora e comece a transformar sua visão em realidade com suporte especializado.'
    },
    contact: {
      kicker: 'Fale conosco',
      title: ['BORA CRIAR', 'SUA MARCA'],
      lead: `Conte sua ideia no <a class="contact-email-link" href="${BRACH_FORM_LINK}" rel="noopener noreferrer" target="_blank">formulário</a> ou envie um e-mail para <a class="contact-email-link" href="mailto:${BRACH_EMAIL}">${BRACH_EMAIL}</a>.`,
      success: 'Mensagem enviada. Em breve retornamos.',
      error: 'Não foi possível enviar agora. Tente novamente em alguns instantes ou use o e-mail acima.',
      invalid: 'Revise nome, e-mail e mensagem antes de enviar.',
      fields: {
        website: 'Website',
        honey: 'Não preencha este campo',
        name: 'Nome',
        email: 'E-mail',
        message: 'Mensagem'
      },
      placeholders: {
        name: 'Deixe seu nome',
        email: 'Deixe seu e-mail',
        message: 'Deixe sua mensagem'
      },
      termsLead: 'Ao enviar, você concorda com nossos',
      termsLink: 'Termos de uso',
      termsConnector: 'e',
      privacyLink: 'Políticas de Privacidade',
      submit: 'Enviar Mensagem',
      sending: 'Enviando...',
      modalTitles: {
        terms: 'Termos de uso',
        privacy: 'Políticas de Privacidade'
      },
      modalCloseAria: 'Fechar'
    },
    footer: {
      title: 'Rodapé',
      tickerAria: 'Web design, branding, marketing, design',
      ticker: 'WEB DESIGN • BRANDING • MARKETING • DESIGN • WEB DESIGN • BRANDING • MARKETING • DESIGN •',
      tagline: 'Dando visibilidade<br>ao seu sonho no digital',
      navTitle: 'Navegação',
      socialTitle: 'Redes Sociais',
      contactTitle: 'Fale conosco',
      nav: ['Home', 'Sobre', 'Serviços', 'Casos'],
      form: 'Formulário'
    }
  },
  en: {
    htmlLang: 'en',
    pageTitle: 'Brach Agency',
    description: 'From brand identity to websites, we build digital presence with purpose, personality, and results.',
    loader: {
      loading: 'LOADING',
      wait: 'PLEASE WAIT',
      preparing: 'PREPARING THE EXPERIENCE',
      ready: 'READY'
    },
    topbar: {
      homeAria: 'Home',
      languageAria: 'Select language',
      menuOpenAria: 'Open menu',
      menuCloseAria: 'Close menu',
      menuOpen: 'MENU',
      menuClose: 'CLOSE'
    },
    overlay: {
      title: 'Main menu',
      navAria: 'Menu',
      nav: ['ABOUT', 'SERVICES', 'CASES', 'CONTACT'],
      emailKicker: '(EMAIL)',
      socialKicker: '(SOCIAL MEDIA)',
      copyAria: 'Copy email',
      copyOnly: 'Copy',
      copySuccess: 'Copied!',
      copyError: 'Could not copy.',
      emailCopied: 'Email copied!'
    },
    hero: {
      brandTag: 'agency',
      desktopTitle: 'BUILDING BRANDS WITH PRESENCE',
      mobileKicker: 'BRACH AGENCY',
      mobileLineTop: 'BUILDING',
      mobileWords: ['BRANDS', 'WEBSITES', 'SOCIAL MEDIA'],
      mobileLineMiddle: 'WITH',
      mobileLineBottom: 'PRESENCE',
      mobileCopy: 'From brand identity to websites, we build digital presence with purpose, personality, and results.',
      intro: 'We create digital presence for brands that need to be seen, remembered, and chosen. Less excess. More direction, clarity, and visual strength to grow.',
      cta: 'LET\'S TALK TO BRACH',
      logosAria: 'Brands served by Brach',
      scrollAria: 'Go to the about section'
    },
    about: {
      kicker: 'ABOUT US',
      title: ['WHO IS BEHIND', 'BRACH'],
      copy: 'Brach exists to give visibility to brands that want to grow online with more clarity, presence, and direction. We combine <strong>branding</strong>, <strong>design</strong>, and <strong>performance</strong> to turn ideas into brands that are more visible, more memorable, and better prepared to sell.',
      teamAria: 'Team members',
      people: [
        {
          role: 'Founder | Designer',
          bio: 'A designer with a strategic eye and technical range to transform ideas into visual experiences that are consistent, functional, and relevant to brand growth.'
        },
        {
          role: 'Founder | Marketing',
          bio: 'A professional focused on positioning, strategy, and communication, combining analysis and creative sensitivity to build digital presence with purpose and results.'
        }
      ],
      linkedin: 'Linkedin'
    },
    services: {
      kicker: 'WHAT WE DELIVER',
      title: 'SERVICES',
      subtitle: 'Brands with presence,<br>consistency and conversion.',
      copy: 'Choose the category and explore two delivery formats: a Basic package to structure the brand and a Full package to scale with greater creative and commercial depth.',
      tabsAria: 'Service categories',
      tabs: {
        branding: 'Brand Identity',
        social: 'Social Media',
        web: 'Web'
      },
      tiers: {
        basic: 'Basic Service',
        full: 'Full Service'
      },
      cards: {
        branding: {
          basic: {
            order: '01',
            category: 'Brand Identity',
            title: 'Essential',
            copy: 'A visual foundation to organize the brand, align its presence, and communicate more professionalism from the very first touchpoint.',
            items: [
              'Primary logo and variations for different uses',
              'Palette, base typography, and initial visual direction',
              'Support elements for social media and digital materials',
              'Organized files for day-to-day application'
            ],
            foot: 'A lean structure to take the brand out of improvisation.'
          },
          full: {
            order: '02',
            category: 'Brand Identity',
            title: 'Complete',
            copy: 'A more robust visual system for brands that need to grow with unity, memorability, and consistency across every touchpoint.',
            items: [
              'Logo, symbol, and complementary signature variations',
              'Palette, typography, and a deeper graphic system',
              'A base guide with brand application directions',
              'Starter templates for social media and support materials'
            ],
            foot: 'Built to consolidate presence and support expansion.'
          }
        },
        social: {
          basic: {
            order: '01',
            category: 'Social Media',
            title: 'Essential',
            copy: 'A core package to keep the brand active with frequency, aligned visuals, and clearer day-to-day communication.',
            items: [
              'A base editorial calendar to organize themes',
              'Visual direction for feed, stories, and recurring assets',
              'Content planned for consistency and recognition',
              'A publishing line that better matches the positioning'
            ],
            foot: 'Ideal for strengthening the content routine with clarity.'
          },
          full: {
            order: '02',
            category: 'Social Media',
            title: 'Complete',
            copy: 'A more complete delivery for brands that want to combine frequency, strategic creation, and content with a stronger focus on relationships and conversion.',
            items: [
              'Strategic planning for content and campaigns',
              'Creative direction for formats, series, and launches',
              'A deeper calendar with a smarter narrative',
              'Assets aimed at reach, authority, and sales'
            ],
            foot: 'To gain intensity, consistency, and stronger commercial impact.'
          }
        },
        web: {
          basic: {
            order: '01',
            category: 'Web',
            title: 'Essential',
            copy: 'An objective landing page to present the offer clearly, with smooth reading and a ready base for more direct campaigns.',
            items: [
              'Strategic and objective page structure',
              'Responsive design with clear reading hierarchy',
              'Essential blocks for offer, proof, and CTA',
              'A ready base to validate campaigns quickly'
            ],
            foot: 'Great for launching offers and testing conversion fast.'
          },
          full: {
            order: '02',
            category: 'Web',
            title: 'Complete',
            copy: 'A fuller page with visual rhythm, sales narrative, and a structure designed to support more ambitious campaigns.',
            items: [
              'Complete offer architecture with sales arguments',
              'Proof, objection-handling, CTA, and commercial support blocks',
              'Polished visual direction to strengthen perceived value',
              'An experience designed for campaigns, capture, and sales'
            ],
            foot: 'Made for stronger campaigns and a more premium perception.'
          }
        }
      }
    },
    bridgeTop: {
      kicker: 'BETWEEN PRESENCE AND RESULTS',
      lines: ['FROM THE HUSTLE TO THE WIN', 'WE HELP YOUR BRAND GROW ONLINE'],
      copy: 'We believe branding goes far beyond visuals: it is about building lasting relevance, creating real connection, and turning presence into consistent growth.'
    },
    cases: {
      title: 'Success cases',
      hint: 'Hover or use Tab to preview the project. Press Enter to open it when the project page is available.',
      items: [
        { title: 'Studio de Beleza Giovana Fortunato', name: 'Studio de Beleza Giovana Fortunato', meta: 'Identity • Content' },
        { title: 'MiláMi children music education', name: 'MiláMi children music education', meta: 'Brand Identity • Education' },
        { title: 'Ensinarte', name: 'Ensinarte', meta: 'Brand Identity • Education' },
        { title: 'Children Music Education Landing Page', name: 'Children Music Education Landing Page', meta: 'Web • Education' }
      ]
    },
    bridgeBottom: {
      lines: ['EVERY PROJECT WE DELIVER', 'IS A UNIQUE OPPORTUNITY'],
      copy: 'Ready for the next step? Join us now and start turning your vision into reality with specialized support.'
    },
    contact: {
      kicker: 'Contact us',
      title: ['LET\'S BUILD', 'YOUR BRAND'],
      lead: `Share your idea in the <a class="contact-email-link" href="${BRACH_FORM_LINK}" rel="noopener noreferrer" target="_blank">form</a> or send us an email at <a class="contact-email-link" href="mailto:${BRACH_EMAIL}">${BRACH_EMAIL}</a>.`,
      success: 'Message sent. We will get back to you soon.',
      error: 'We could not send it right now. Please try again in a moment or use the email above.',
      invalid: 'Please review your name, email, and message before sending.',
      fields: {
        website: 'Website',
        honey: 'Do not fill in this field',
        name: 'Name',
        email: 'Email',
        message: 'Message'
      },
      placeholders: {
        name: 'Leave your name',
        email: 'Leave your email',
        message: 'Leave your message'
      },
      termsLead: 'By sending, you agree to our',
      termsLink: 'Terms of Use',
      termsConnector: 'and',
      privacyLink: 'Privacy Policy',
      submit: 'Send Message',
      sending: 'Sending...',
      modalTitles: {
        terms: 'Terms of Use',
        privacy: 'Privacy Policy'
      },
      modalCloseAria: 'Close'
    },
    footer: {
      title: 'Footer',
      tickerAria: 'Web design, branding, marketing, design',
      ticker: 'WEB DESIGN • BRANDING • MARKETING • DESIGN • WEB DESIGN • BRANDING • MARKETING • DESIGN •',
      tagline: 'Giving visibility<br>to your digital dream',
      navTitle: 'Navigation',
      socialTitle: 'Social Media',
      contactTitle: 'Contact',
      nav: ['Home', 'About', 'Services', 'Cases'],
      form: 'Form'
    }
  },
  es: {
    htmlLang: 'es',
    pageTitle: 'Agencia Brach',
    description: 'Desde la identidad visual hasta el sitio web, desarrollamos presencia digital con propósito, personalidad y resultados.',
    loader: {
      loading: 'CARGANDO',
      wait: 'AGUARDE',
      preparing: 'PREPARANDO LA EXPERIENCIA',
      ready: 'LISTO'
    },
    topbar: {
      homeAria: 'Inicio',
      languageAria: 'Seleccionar idioma',
      menuOpenAria: 'Abrir menú',
      menuCloseAria: 'Cerrar menú',
      menuOpen: 'MENÚ',
      menuClose: 'CERRAR'
    },
    overlay: {
      title: 'Menú principal',
      navAria: 'Menú',
      nav: ['SOBRE', 'SERVICIOS', 'CASOS', 'CONTACTO'],
      emailKicker: '(EMAIL)',
      socialKicker: '(REDES SOCIALES)',
      copyAria: 'Copiar correo',
      copyOnly: 'Copiar',
      copySuccess: '¡Copiado!',
      copyError: 'No se pudo copiar.',
      emailCopied: '¡Correo copiado!'
    },
    hero: {
      brandTag: 'agencia',
      desktopTitle: 'CREANDO MARCAS CON PRESENCIA',
      mobileKicker: 'AGENCIA BRACH',
      mobileLineTop: 'CREANDO',
      mobileWords: ['MARCAS', 'SITIOS', 'REDES SOCIALES'],
      mobileLineMiddle: 'CON',
      mobileLineBottom: 'PRESENCIA',
      mobileCopy: 'Desde la identidad visual hasta el sitio web, desarrollamos presencia digital con propósito, personalidad y resultados.',
      intro: 'Creamos presencia digital para marcas que necesitan ser vistas, recordadas y elegidas. Menos exceso. Más dirección, claridad y fuerza visual para crecer.',
      cta: 'QUIERO HABLAR CON BRACH',
      logosAria: 'Marcas atendidas por Brach',
      scrollAria: 'Ir a la sección sobre'
    },
    about: {
      kicker: 'SOBRE NOSOTROS',
      title: ['QUIÉN ESTÁ DETRÁS', 'DE BRACH'],
      copy: 'Brach existe para dar visibilidad a marcas que quieren crecer en digital con más claridad, presencia y dirección. Unimos <strong>branding</strong>, <strong>diseño</strong> y <strong>performance</strong> para transformar ideas en marcas más visibles, más recordadas y mejor preparadas para vender.',
      teamAria: 'Miembros del equipo',
      people: [
        {
          role: 'Fundador | Diseñador',
          bio: 'Diseñador con mirada estratégica y repertorio técnico para transformar ideas en experiencias visuales consistentes, funcionales y relevantes para el crecimiento de la marca.'
        },
        {
          role: 'Fundadora | Marketing',
          bio: 'Profesional enfocada en posicionamiento, estrategia y comunicación, conectando análisis y sensibilidad creativa para generar presencia digital con propósito y resultados.'
        }
      ],
      linkedin: 'Linkedin'
    },
    services: {
      kicker: 'LO QUE ENTREGAMOS',
      title: 'SERVICIOS',
      subtitle: 'Marcas con presencia,<br>consistencia y conversión.',
      copy: 'Elige la categoría y conoce dos formatos de entrega: un paquete Básico para estructurar la marca y un paquete Full para escalar con más profundidad creativa y comercial.',
      tabsAria: 'Categorías de servicio',
      tabs: {
        branding: 'Identidad de Marca',
        social: 'Social Media',
        web: 'Web'
      },
      tiers: {
        basic: 'Servicio Básico',
        full: 'Servicio Full'
      },
      cards: {
        branding: {
          basic: {
            order: '01',
            category: 'Identidad de Marca',
            title: 'Esencial',
            copy: 'Una base visual para organizar la marca, alinear su presencia y transmitir más profesionalismo desde el primer contacto.',
            items: [
              'Logo principal y variaciones para diferentes usos',
              'Paleta, tipografía base y dirección visual inicial',
              'Elementos de apoyo para redes y materiales digitales',
              'Archivos organizados para la aplicación diaria'
            ],
            foot: 'Una estructura ligera para sacar a la marca de la improvisación.'
          },
          full: {
            order: '02',
            category: 'Identidad de Marca',
            title: 'Completo',
            copy: 'Un sistema visual más robusto para marcas que necesitan crecer con unidad, memorabilidad y consistencia en todos los puntos de contacto.',
            items: [
              'Logo, símbolo y firmas complementarias',
              'Paleta, tipografía y sistema gráfico más profundo',
              'Manual base con orientaciones de aplicación de la marca',
              'Templates iniciales para social media y piezas de apoyo'
            ],
            foot: 'Pensado para consolidar presencia y sostener la expansión.'
          }
        },
        social: {
          basic: {
            order: '01',
            category: 'Social Media',
            title: 'Esencial',
            copy: 'Un paquete base para mantener la marca activa con frecuencia, visual alineado y una comunicación más clara en el día a día.',
            items: [
              'Calendario editorial base para organizar los temas',
              'Dirección visual para feed, stories y piezas recurrentes',
              'Contenidos pensados para constancia y reconocimiento',
              'Una línea de publicación más coherente con el posicionamiento'
            ],
            foot: 'Ideal para fortalecer la rutina de contenido con claridad.'
          },
          full: {
            order: '02',
            category: 'Social Media',
            title: 'Completo',
            copy: 'Una entrega más completa para marcas que quieren unir frecuencia, creación estratégica y contenido con un foco más fuerte en relación y conversión.',
            items: [
              'Planificación estratégica de contenido y campañas',
              'Dirección creativa para formatos, series y lanzamientos',
              'Calendario más profundo con una narrativa más inteligente',
              'Piezas orientadas a alcance, autoridad y ventas'
            ],
            foot: 'Para ganar intensidad, consistencia y más impacto comercial.'
          }
        },
        web: {
          basic: {
            order: '01',
            category: 'Web',
            title: 'Esencial',
            copy: 'Una landing page objetiva para presentar la oferta con claridad, lectura fluida y una base lista para campañas más directas.',
            items: [
              'Estructura estratégica y objetiva de la página',
              'Diseño responsivo con jerarquía clara de lectura',
              'Bloques esenciales para oferta, prueba y CTA',
              'Base lista para validar campañas con rapidez'
            ],
            foot: 'Buena para lanzar ofertas y probar conversión con agilidad.'
          },
          full: {
            order: '02',
            category: 'Web',
            title: 'Completo',
            copy: 'Una página más completa, con ritmo visual, narrativa de venta y estructura pensada para sostener campañas más ambiciosas.',
            items: [
              'Arquitectura completa de la oferta con argumentos de venta',
              'Bloques de prueba, objeciones, CTA y apoyo comercial',
              'Dirección visual pulida para fortalecer la percepción de valor',
              'Experiencia diseñada para campañas, captación y ventas'
            ],
            foot: 'Hecha para campañas más fuertes y una percepción más premium.'
          }
        }
      }
    },
    bridgeTop: {
      kicker: 'ENTRE PRESENCIA Y RESULTADOS',
      lines: ['DEL ESFUERZO A LA CONQUISTA', 'HACEMOS CRECER TU MARCA ONLINE'],
      copy: 'Creemos que el branding va mucho más allá de lo visual: se trata de construir relevancia duradera, crear conexión real y transformar presencia en crecimiento consistente.'
    },
    cases: {
      title: 'Casos de éxito',
      hint: 'Pasa el cursor o usa Tab para ver una vista previa del proyecto. Presiona Enter para abrirlo cuando la página esté disponible.',
      items: [
        { title: 'Studio de Beleza Giovana Fortunato', name: 'Studio de Beleza Giovana Fortunato', meta: 'Identidad • Contenido' },
        { title: 'MiláMi musicalización infantil', name: 'MiláMi musicalización infantil', meta: 'Identidad de Marca • Educación' },
        { title: 'Ensinarte', name: 'Ensinarte', meta: 'Identidad de Marca • Educación' },
        { title: 'Landing Page de musicalización infantil', name: 'Landing Page de musicalización infantil', meta: 'Web • Educación' }
      ]
    },
    bridgeBottom: {
      lines: ['CADA PROYECTO QUE REALIZAMOS', 'ES UNA OPORTUNIDAD ÚNICA'],
      copy: '¿Listo para dar el siguiente paso? Únete a nosotros ahora y empieza a transformar tu visión en realidad con apoyo especializado.'
    },
    contact: {
      kicker: 'Hablemos',
      title: ['VAMOS A CREAR', 'TU MARCA'],
      lead: `Cuéntanos tu idea en el <a class="contact-email-link" href="${BRACH_FORM_LINK}" rel="noopener noreferrer" target="_blank">formulario</a> o envíanos un correo a <a class="contact-email-link" href="mailto:${BRACH_EMAIL}">${BRACH_EMAIL}</a>.`,
      success: 'Mensaje enviado. Te responderemos pronto.',
      error: 'No fue posible enviarlo ahora. Inténtalo de nuevo en unos momentos o usa el correo de arriba.',
      invalid: 'Revisa tu nombre, correo y mensaje antes de enviar.',
      fields: {
        website: 'Website',
        honey: 'No completes este campo',
        name: 'Nombre',
        email: 'Correo',
        message: 'Mensaje'
      },
      placeholders: {
        name: 'Deja tu nombre',
        email: 'Deja tu correo',
        message: 'Deja tu mensaje'
      },
      termsLead: 'Al enviar, aceptas nuestros',
      termsLink: 'Términos de uso',
      termsConnector: 'y',
      privacyLink: 'Políticas de privacidad',
      submit: 'Enviar mensaje',
      sending: 'Enviando...',
      modalTitles: {
        terms: 'Términos de uso',
        privacy: 'Políticas de privacidad'
      },
      modalCloseAria: 'Cerrar'
    },
    footer: {
      title: 'Pie de página',
      tickerAria: 'Diseño web, branding, marketing, diseño',
      ticker: 'DISEÑO WEB • BRANDING • MARKETING • DISEÑO • DISEÑO WEB • BRANDING • MARKETING • DISEÑO •',
      tagline: 'Dando visibilidad<br>a tu sueño digital',
      navTitle: 'Navegación',
      socialTitle: 'Redes Sociales',
      contactTitle: 'Contacto',
      nav: ['Home', 'Sobre', 'Servicios', 'Casos'],
      form: 'Formulario'
    }
  }
};

function getBrachLanguage(){
  const stored = window.localStorage?.getItem('brach-language');
  return BRACH_I18N[stored] ? stored : BRACH_DEFAULT_LANGUAGE;
}

function getBrachLocale(lang = getBrachLanguage()){
  return BRACH_I18N[lang] || BRACH_I18N[BRACH_DEFAULT_LANGUAGE];
}

function setBrachLanguage(lang){
  const nextLanguage = BRACH_I18N[lang] ? lang : BRACH_DEFAULT_LANGUAGE;
  try{
    window.localStorage?.setItem('brach-language', nextLanguage);
  }catch{
    // noop
  }

  document.dispatchEvent(new CustomEvent('brach:languagechange', {
    detail: {
      lang: nextLanguage,
      locale: getBrachLocale(nextLanguage)
    }
  }));
}

window.getBrachLanguage = getBrachLanguage;
window.getBrachLocale = getBrachLocale;
window.setBrachLanguage = setBrachLanguage;
window.BRACH_POLICY_CONTENT = BRACH_POLICY_CONTENT;

(() => {
  const root = document.documentElement;
  const titleTag = document.querySelector('title');
  const descriptionTags = document.querySelectorAll('meta[name="description"], meta[property="og:description"], meta[name="twitter:description"]');
  const titleMetaTags = document.querySelectorAll('meta[name="application-name"], meta[name="apple-mobile-web-app-title"], meta[property="og:site_name"], meta[property="og:title"], meta[name="twitter:title"]');
  const menuLabel = document.getElementById('menuLabel');
  const closeLabel = document.getElementById('closeLabel');
  const openMenu = document.getElementById('openMenu');
  const closeMenu = document.getElementById('closeMenu');
  const menuTitle = document.getElementById('menuTitle');
  const copyBtn = document.getElementById('copyEmailBtn');
  const copyBtnSr = copyBtn?.querySelector('.sr-only');
  const copyToast = document.getElementById('copyToast');
  const footerEmailToast = document.getElementById('footerEmailToast');
  const overlayNav = document.querySelector('.overlay__nav');
  const brandLink = document.querySelector('.brand');
  const languageToggle = document.getElementById('languageToggle');
  const languageSwitcher = document.getElementById('langSwitcher');
  const languageOptionsList = document.getElementById('languageOptions');
  const languageSurface = languageSwitcher?.querySelector('.lang-switcher__surface');
  const languageOptions = Array.from(languageSwitcher?.querySelectorAll('.lang-switcher__option') || []);
  const loaderLoading = document.querySelector('.page-loader__eyebrow');
  const loaderWait = document.querySelector('.page-loader__wait');
  const loaderMeta = document.querySelectorAll('.page-loader__meta-copy');
  const skipLink = document.querySelector('.skip-link');
  const navLinks = Array.from(document.querySelectorAll('.overlay__nav .navlink'));
  const navTexts = Array.from(document.querySelectorAll('.overlay__nav .navtext'));
  const overlayKickers = Array.from(document.querySelectorAll('.overlay__contact .kicker'));
  const socialGridLinks = Array.from(document.querySelectorAll('.social-grid .social'));
  const socialIconLinks = Array.from(document.querySelectorAll('.social-icons .icon-link'));
  const heroBrandTag = document.querySelector('.hero-banner__brand-tag');
  const heroDesktopLine = document.querySelector('.hero-banner__title--desktop .hero-banner__line');
  const heroMobileKicker = document.querySelector('.hero-banner__mobile-kicker');
  const heroMobileLines = Array.from(document.querySelectorAll('.hero-banner__title-mobile .hero-banner__mobile-line'));
  const heroMobileWord = document.querySelector('.hero-banner__mobile-word');
  const heroMobileCopy = document.querySelector('.hero-banner__mobile-copy');
  const heroIntro = document.getElementById('heroIntro');
  const heroCta = document.querySelector('.hero-banner__cta');
  const heroLogos = document.querySelector('.hero-banner__logos');
  const heroScroll = document.querySelector('.hero-banner__scroll');
  const aboutKicker = document.querySelector('.about-team__kicker');
  const aboutTitleLines = Array.from(document.querySelectorAll('.about-team__title span'));
  const aboutCopy = document.querySelector('.about-team__copy p');
  const aboutPeople = Array.from(document.querySelectorAll('.about-person'));
  const servicesKicker = document.querySelector('.services-kicker');
  const servicesTitle = document.getElementById('servicesTitle');
  const servicesSubtitle = document.querySelector('.services-subtitle');
  const servicesCopy = document.querySelector('.services-copy');
  const servicesTabs = Array.from(document.querySelectorAll('.services-tab'));
  const servicesStage = document.getElementById('servicesPanel');
  const servicesTierLabels = Array.from(document.querySelectorAll('.service-package__tier'));
  const topBridgeKicker = document.querySelector('.brand-bridge:not(.brand-bridge--postcases) .brand-bridge__kicker');
  const topBridgeLines = Array.from(document.querySelectorAll('.brand-bridge:not(.brand-bridge--postcases) .brand-bridge__line'));
  const topBridgeCopy = document.querySelector('.brand-bridge:not(.brand-bridge--postcases) .brand-bridge__copy');
  const casesTitle = document.getElementById('trabalhosTitle');
  const caseHint = document.getElementById('caseHint');
  const caseLinks = Array.from(document.querySelectorAll('.case-link'));
  const bottomBridgeLines = Array.from(document.querySelectorAll('.brand-bridge--postcases .brand-bridge__line'));
  const bottomBridgeCopy = document.querySelector('.brand-bridge--postcases .brand-bridge__copy');
  const contactKicker = document.querySelector('.contact-kicker');
  const contactTitleLines = Array.from(document.querySelectorAll('.contact-title span'));
  const contactLead = document.querySelector('.contact-lead');
  const contactFeedbacks = {
    success: document.getElementById('contato-enviado'),
    error: document.getElementById('contato-erro'),
    invalid: document.getElementById('contato-invalido')
  };
  const contactFields = {
    websiteLabel: document.querySelector('label[for="contato-website"]'),
    honeyLabel: document.querySelector('label[for="contato-honey"]'),
    nameLabel: document.querySelector('label[for="contato-nome"]'),
    emailLabel: document.querySelector('label[for="contato-email"]'),
    messageLabel: document.querySelector('label[for="contato-mensagem"]'),
    name: document.getElementById('contato-nome'),
    email: document.getElementById('contato-email'),
    message: document.getElementById('contato-mensagem')
  };
  const contactTermsLead = document.querySelector('.contact-terms__lead');
  const contactTermsConnector = document.querySelector('.contact-terms__connector');
  const contactTermsButtons = {
    terms: document.querySelector('.policy-link[data-modal="terms"]'),
    privacy: document.querySelector('.policy-link[data-modal="privacy"]')
  };
  const contactSubmitLabel = document.querySelector('.contact-submit__label');
  const policyModalClose = document.querySelector('.policy-modal__close');
  const footerTitle = document.getElementById('footerTitle');
  const footerTicker = document.querySelector('.footer-ticker');
  const footerTickerTexts = Array.from(document.querySelectorAll('.ticker__text'));
  const footerTagline = document.querySelector('.footer-tagline');
  const footerColTitles = Array.from(document.querySelectorAll('.footer-col__title'));
  const footerNavLinks = Array.from(document.querySelectorAll('.footer-nav .footer-link .u'));
  const footerForm = document.querySelector('.footer-contactlist a[href="#contato"] .u');

  const labelSets = {
    socialNames: ['Instagram', 'LinkedIn', 'Behance', 'Pinterest']
  };

  const motionAvailable = Boolean(window.gsap);
  const reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const getClosedHeight = () => (window.innerWidth <= 920 ? 54 : 64);
  const getOpenHeight = () => (window.innerWidth <= 920 ? 164 : 196);
  let activeLanguage = getBrachLanguage();
  let switcherTl = null;

  function setLinkLabel(target, text){
    if(!target) return;
    target.textContent = text;
    target.dataset.text = text;
  }

  function updateLanguageButtons(lang){
    languageOptions.forEach((button) => {
      const isActive = button.dataset.lang === lang;
      button.classList.toggle('is-active', isActive);
      button.setAttribute('aria-selected', String(isActive));
    });
  }

  function ensureSwitcherTimeline(){
    if(!languageSurface || !motionAvailable || switcherTl) return;

    switcherTl = gsap.timeline({ paused: true, defaults: { ease: 'power3.out' } });
    gsap.set(languageOptions, { autoAlpha: 0, y: 14 });

    switcherTl
      .to(languageSurface, {
        height: getOpenHeight(),
        borderRadius: 34,
        duration: reduceMotion ? 0.12 : 0.34
      }, 0)
      .to(languageOptions, {
        autoAlpha: 1,
        y: 0,
        duration: reduceMotion ? 0.12 : 0.28,
        stagger: reduceMotion ? 0 : { each: 0.08, from: 'end' }
      }, reduceMotion ? 0 : 0.08);
  }

  function openLanguageSwitcher(){
    if(!languageSwitcher || languageSwitcher.classList.contains('is-open')) return;
    languageSwitcher.classList.add('is-open');
    languageToggle?.setAttribute('aria-expanded', 'true');

    if(!motionAvailable){
      if(languageSurface){
        languageSurface.style.height = `${getOpenHeight()}px`;
        languageSurface.style.borderRadius = '34px';
      }
      languageOptions.forEach((button) => {
        button.style.opacity = '1';
        button.style.transform = 'translateY(0)';
      });
      return;
    }

    ensureSwitcherTimeline();
    switcherTl?.play(0);
  }

  function closeLanguageSwitcher(){
    if(!languageSwitcher || !languageSwitcher.classList.contains('is-open')) return;
    languageSwitcher.classList.remove('is-open');
    languageToggle?.setAttribute('aria-expanded', 'false');

    if(!motionAvailable){
      if(languageSurface){
        languageSurface.style.height = `${getClosedHeight()}px`;
        languageSurface.style.borderRadius = '999px';
      }
      languageOptions.forEach((button) => {
        button.style.opacity = '0';
        button.style.transform = 'translateY(16px)';
      });
      return;
    }

    ensureSwitcherTimeline();
    switcherTl?.reverse();
  }

  function applyLanguage(lang){
    const locale = getBrachLocale(lang);
    activeLanguage = lang;

    root.lang = locale.htmlLang;
    document.body.dataset.language = lang;

    if(titleTag) titleTag.textContent = locale.pageTitle;
    document.title = locale.pageTitle;
    descriptionTags.forEach((tag) => tag.setAttribute('content', locale.description));
    titleMetaTags.forEach((tag) => tag.setAttribute('content', locale.pageTitle));

    if(loaderLoading) loaderLoading.textContent = locale.loader.loading;
    if(loaderWait) loaderWait.textContent = locale.loader.wait;
    if(loaderMeta[0]) loaderMeta[0].textContent = locale.loader.preparing;
    if(loaderMeta[1]) loaderMeta[1].textContent = locale.loader.ready;

    if(skipLink) skipLink.textContent = lang === 'en' ? 'Skip to content' : lang === 'es' ? 'Saltar al contenido' : 'Pular para o conteúdo';

    if(brandLink) brandLink.setAttribute('aria-label', locale.topbar.homeAria);
    if(languageToggle) languageToggle.setAttribute('aria-label', locale.topbar.languageAria);
    if(languageOptionsList) languageOptionsList.setAttribute('aria-label', locale.topbar.languageAria);
    if(openMenu) openMenu.setAttribute('aria-label', locale.topbar.menuOpenAria);
    if(closeMenu) closeMenu.setAttribute('aria-label', locale.topbar.menuCloseAria);
    if(menuLabel) menuLabel.textContent = locale.topbar.menuOpen;
    if(closeLabel) closeLabel.textContent = locale.topbar.menuClose;
    if(menuTitle) menuTitle.textContent = locale.overlay.title;

    if(copyBtn) copyBtn.setAttribute('aria-label', locale.overlay.copyAria);
    if(copyBtnSr) copyBtnSr.textContent = locale.overlay.copyOnly;
    if(copyToast) copyToast.textContent = locale.overlay.copySuccess;
    if(footerEmailToast) footerEmailToast.textContent = '';
    if(overlayNav) overlayNav.setAttribute('aria-label', locale.overlay.navAria);

    navLinks.forEach((link, index) => {
      const text = locale.overlay.nav[index] || '';
      link.dataset.text = text;
      link.setAttribute('aria-label', text);
    });
    navTexts.forEach((textEl, index) => {
      textEl.textContent = locale.overlay.nav[index] || '';
    });

    if(overlayKickers[0]) overlayKickers[0].textContent = locale.overlay.emailKicker;
    if(overlayKickers[1]) overlayKickers[1].textContent = locale.overlay.socialKicker;

    socialGridLinks.forEach((link, index) => {
      const text = labelSets.socialNames[index];
      const label = index === 0 ? text : index === 1 ? text : index === 2 ? text : text;
      const span = link.querySelector('.u');
      if(span){
        span.textContent = label;
        span.dataset.text = label;
      }
    });
    socialIconLinks.forEach((link, index) => {
      const label = labelSets.socialNames[index];
      link.setAttribute('aria-label', label);
    });

    if(heroBrandTag) heroBrandTag.textContent = locale.hero.brandTag;
    if(heroDesktopLine) heroDesktopLine.textContent = locale.hero.desktopTitle;
    if(heroMobileKicker) heroMobileKicker.textContent = locale.hero.mobileKicker;
    if(heroMobileLines[0]) heroMobileLines[0].textContent = locale.hero.mobileLineTop;
    if(heroMobileWord){
      heroMobileWord.dataset.heroScramble = locale.hero.mobileWords.join('|');
      heroMobileWord.textContent = locale.hero.mobileWords[0];
    }
    if(heroMobileLines[2]) heroMobileLines[2].textContent = locale.hero.mobileLineMiddle;
    if(heroMobileLines[3]) heroMobileLines[3].textContent = locale.hero.mobileLineBottom;
    if(heroMobileCopy) heroMobileCopy.textContent = locale.hero.mobileCopy;
    if(heroIntro) heroIntro.textContent = locale.hero.intro;
    if(heroCta){
      heroCta.dataset.text = locale.hero.cta;
      heroCta.setAttribute('aria-label', locale.hero.cta);
    }
    if(heroLogos) heroLogos.setAttribute('aria-label', locale.hero.logosAria);
    if(heroScroll) heroScroll.setAttribute('aria-label', locale.hero.scrollAria);

    if(aboutKicker) aboutKicker.textContent = locale.about.kicker;
    aboutTitleLines.forEach((line, index) => {
      line.textContent = locale.about.title[index] || '';
    });
    if(aboutCopy) aboutCopy.innerHTML = locale.about.copy;
    const peopleList = document.querySelector('.about-team__people');
    if(peopleList) peopleList.setAttribute('aria-label', locale.about.teamAria);
    aboutPeople.forEach((person, index) => {
      const role = person.querySelector('.about-person__role');
      const bio = person.querySelector('.about-person__bio');
      const linkedin = person.querySelector('.about-person__link .u');
      if(role) role.textContent = locale.about.people[index]?.role || '';
      if(bio) bio.textContent = locale.about.people[index]?.bio || '';
      if(linkedin) setLinkLabel(linkedin, locale.about.linkedin);
    });

    if(servicesKicker) servicesKicker.textContent = locale.services.kicker;
    if(servicesTitle) servicesTitle.textContent = locale.services.title;
    if(servicesSubtitle) servicesSubtitle.innerHTML = locale.services.subtitle;
    if(servicesCopy) servicesCopy.textContent = locale.services.copy;
    if(servicesStage) servicesStage.setAttribute('aria-label', locale.services.title);
    servicesTabs.forEach((tab) => {
      const key = tab.dataset.serviceTab;
      const label = locale.services.tabs[key] || key;
      tab.textContent = label;
    });
    const tabsContainer = document.querySelector('.services-tabs');
    if(tabsContainer) tabsContainer.setAttribute('aria-label', locale.services.tabsAria);
    if(servicesTierLabels[0]) servicesTierLabels[0].textContent = locale.services.tiers.basic;
    if(servicesTierLabels[1]) servicesTierLabels[1].textContent = locale.services.tiers.full;

    if(topBridgeKicker) topBridgeKicker.textContent = locale.bridgeTop.kicker;
    topBridgeLines.forEach((line, index) => {
      line.textContent = locale.bridgeTop.lines[index] || '';
    });
    if(topBridgeCopy) topBridgeCopy.textContent = locale.bridgeTop.copy;

    if(casesTitle) casesTitle.textContent = locale.cases.title;
    if(caseHint) caseHint.textContent = locale.cases.hint;
    caseLinks.forEach((link, index) => {
      const caseData = locale.cases.items[index];
      if(!caseData) return;
      link.dataset.title = caseData.title;
      const name = link.querySelector('.case-name');
      const meta = link.querySelector('.case-meta');
      if(name) name.textContent = caseData.name;
      if(meta) meta.textContent = caseData.meta;
    });

    bottomBridgeLines.forEach((line, index) => {
      line.textContent = locale.bridgeBottom.lines[index] || '';
    });
    if(bottomBridgeCopy) bottomBridgeCopy.textContent = locale.bridgeBottom.copy;

    if(contactKicker) contactKicker.textContent = locale.contact.kicker;
    contactTitleLines.forEach((line, index) => {
      line.textContent = locale.contact.title[index] || '';
    });
    if(contactLead) contactLead.innerHTML = locale.contact.lead;
    if(contactFeedbacks.success) contactFeedbacks.success.textContent = locale.contact.success;
    if(contactFeedbacks.error) contactFeedbacks.error.textContent = locale.contact.error;
    if(contactFeedbacks.invalid) contactFeedbacks.invalid.textContent = locale.contact.invalid;
    if(contactFields.websiteLabel) contactFields.websiteLabel.textContent = locale.contact.fields.website;
    if(contactFields.honeyLabel) contactFields.honeyLabel.textContent = locale.contact.fields.honey;
    if(contactFields.nameLabel) contactFields.nameLabel.textContent = locale.contact.fields.name;
    if(contactFields.emailLabel) contactFields.emailLabel.textContent = locale.contact.fields.email;
    if(contactFields.messageLabel) contactFields.messageLabel.textContent = locale.contact.fields.message;
    if(contactFields.name) contactFields.name.placeholder = locale.contact.placeholders.name;
    if(contactFields.email) contactFields.email.placeholder = locale.contact.placeholders.email;
    if(contactFields.message) contactFields.message.placeholder = locale.contact.placeholders.message;
    if(contactTermsLead) contactTermsLead.textContent = locale.contact.termsLead;
    if(contactTermsConnector) contactTermsConnector.textContent = locale.contact.termsConnector;
    if(contactTermsButtons.terms) contactTermsButtons.terms.textContent = locale.contact.termsLink;
    if(contactTermsButtons.privacy) contactTermsButtons.privacy.textContent = locale.contact.privacyLink;
    if(contactSubmitLabel) contactSubmitLabel.textContent = locale.contact.submit;
    if(policyModalClose) policyModalClose.setAttribute('aria-label', locale.contact.modalCloseAria);

    if(footerTitle) footerTitle.textContent = locale.footer.title;
    if(footerTicker) footerTicker.setAttribute('aria-label', locale.footer.tickerAria);
    footerTickerTexts.forEach((text) => {
      text.textContent = locale.footer.ticker;
    });
    if(footerTagline) footerTagline.innerHTML = locale.footer.tagline;
    footerColTitles.forEach((title, index) => {
      const labels = [locale.footer.navTitle, locale.footer.socialTitle, locale.footer.contactTitle];
      title.textContent = labels[index] || '';
    });
    footerNavLinks.forEach((link, index) => {
      setLinkLabel(link, locale.footer.nav[index] || '');
    });
    if(footerForm) setLinkLabel(footerForm, locale.footer.form);

    updateLanguageButtons(lang);
    languageOptions.forEach((button) => {
      const buttonLang = button.dataset.lang || '';
      const labels = {
        'pt-BR': 'Português do Brasil',
        en: 'English',
        es: 'Español'
      };
      button.setAttribute('aria-label', labels[buttonLang] || buttonLang);
    });

    if(typeof window.refreshLetterSwap === 'function' && heroCta){
      window.refreshLetterSwap(heroCta);
    }
  }

  languageToggle?.addEventListener('click', (event) => {
    event.stopPropagation();
    if(languageSwitcher?.classList.contains('is-open')){
      closeLanguageSwitcher();
      return;
    }
    openLanguageSwitcher();
  });

  languageOptions.forEach((button) => {
    button.addEventListener('click', (event) => {
      event.stopPropagation();
      const nextLang = button.dataset.lang;
      if(!nextLang || nextLang === activeLanguage){
        closeLanguageSwitcher();
        return;
      }
      setBrachLanguage(nextLang);
      closeLanguageSwitcher();
    });
  });

  document.addEventListener('click', (event) => {
    if(!languageSwitcher?.contains(event.target)){
      closeLanguageSwitcher();
    }
  });

  document.addEventListener('keydown', (event) => {
    if(event.key === 'Escape'){
      closeLanguageSwitcher();
    }
  });

  document.addEventListener('brach:languagechange', (event) => {
    applyLanguage(event.detail?.lang || BRACH_DEFAULT_LANGUAGE);
  });

  applyLanguage(activeLanguage);
})();

// Page loader
(() => {
  const loader = document.getElementById('pageLoader');
  if (!loader) return;

  const body = document.body;
  const counter = loader.querySelector('#pageLoaderCounter');
  const progressFill = loader.querySelector('#pageLoaderBar');
  const content = loader.querySelector('.page-loader__content');
  const textTargets = Array.from(loader.querySelectorAll('.page-loader__text'));
  const bars = Array.from(loader.querySelectorAll('.page-loader__bar'));
  const hasGsap = typeof window.gsap !== 'undefined';
  const reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const hasSeenLoader = (() => {
    try {
      return window.sessionStorage.getItem('brach-loader-seen') === '1';
    } catch {
      return false;
    }
  })();
  const state = { value: 0 };
  const minDuration = reduceMotion ? 180 : (hasSeenLoader ? 520 : 860);
  const startTime = performance.now();
  let finished = false;
  let preloadTl = null;
  let fallbackRaf = 0;

  const render = () => {
    const value = Math.max(0, Math.min(100, Math.round(state.value)));
    if (counter) counter.textContent = String(value);
    if (progressFill) progressFill.style.transform = `scaleX(${value / 100})`;
  };

  const teardown = () => {
    if (fallbackRaf) {
      cancelAnimationFrame(fallbackRaf);
      fallbackRaf = 0;
    }
    try {
      window.sessionStorage.setItem('brach-loader-seen', '1');
    } catch {
      // noop
    }
    loader.classList.add('is-done');
    body.classList.remove('is-loading');
    window.setTimeout(() => {
      loader.remove();
      document.dispatchEvent(new CustomEvent('brach:loadercomplete'));
    }, 80);
  };

  const finishLoader = () => {
    if (finished) return;
    finished = true;

    const remainingDelay = Math.max(0, minDuration - (performance.now() - startTime));
    window.setTimeout(() => {
      if (!hasGsap) {
        state.value = 100;
        render();
        loader.classList.add('is-exiting');
        window.setTimeout(teardown, reduceMotion ? 180 : 360);
        return;
      }

      if (preloadTl) preloadTl.kill();
      gsap.killTweensOf(state);

      const tl = gsap.timeline({
        defaults: { ease: 'power3.inOut' },
        onComplete: teardown
      });

      tl.to(state, {
        value: 100,
        duration: reduceMotion ? 0.18 : 0.34,
        ease: 'power2.out',
        onUpdate: render
      });

      if (content) {
        tl.to(content, {
          opacity: 0,
          duration: reduceMotion ? 0.16 : 0.24,
          ease: 'power2.inOut'
        }, reduceMotion ? '-=0.04' : '-=0.08');
      }

      tl.to(textTargets, {
        yPercent: -118,
        opacity: 0,
        duration: reduceMotion ? 0.18 : 0.34,
        stagger: reduceMotion ? 0 : 0.04,
        ease: 'power3.in'
      }, reduceMotion ? '-=0.1' : '-=0.16');

      tl.to(bars, {
        yPercent: -104,
        duration: reduceMotion ? 0.2 : 0.58,
        stagger: reduceMotion ? 0 : { each: 0.04, from: 'center' },
        ease: 'power4.inOut'
      }, reduceMotion ? '-=0.08' : '-=0.1');
    }, remainingDelay);
  };

  render();

  const requestFinish = () => finishLoader();

  if (!hasGsap) {
    const fallbackStart = performance.now();
    const fallbackStep = (now) => {
      if (finished) return;
      const progress = Math.min((now - fallbackStart) / (reduceMotion ? 280 : 760), 1);
      const eased = progress < 0.8
        ? (progress / 0.8) * 90
        : 90 + ((progress - 0.8) / 0.2) * 7;
      state.value = Math.max(state.value, eased);
      render();
      if (progress < 1) {
        fallbackRaf = requestAnimationFrame(fallbackStep);
      }
    };

    fallbackRaf = requestAnimationFrame(fallbackStep);

    if (document.readyState !== 'loading') {
      window.setTimeout(requestFinish, reduceMotion ? 120 : 180);
    } else {
      document.addEventListener('DOMContentLoaded', requestFinish, { once: true });
    }
    window.addEventListener('load', requestFinish, { once: true });
    window.setTimeout(requestFinish, reduceMotion ? 420 : 1400);
    return;
  }

  preloadTl = gsap.timeline();
  preloadTl
    .to(state, {
      value: 76,
      duration: reduceMotion ? 0.24 : 0.62,
      ease: 'power2.out',
      onUpdate: render
    })
    .to(state, {
      value: 92,
      duration: reduceMotion ? 0.16 : 0.28,
      ease: 'power1.out',
      onUpdate: render
    })
    .to(state, {
      value: 97,
      duration: reduceMotion ? 0.14 : 0.44,
      ease: 'none',
      onUpdate: render
    });

  if (document.readyState !== 'loading') {
    window.setTimeout(requestFinish, reduceMotion ? 100 : 160);
  } else {
    document.addEventListener('DOMContentLoaded', requestFinish, { once: true });
  }
  window.addEventListener('load', requestFinish, { once: true });
  window.setTimeout(requestFinish, reduceMotion ? 420 : 1500);
})();

(() => {
    const overlay = document.getElementById('overlay');
    const openMenu = document.getElementById('openMenu');
    const closeMenu = document.getElementById('closeMenu');
    const main = document.querySelector('main');

    const overlayPanel = document.querySelector('.overlay__panel');
    const overlayRight = document.querySelector('.overlay__right');
    const hasGsap = typeof window.gsap !== 'undefined';
    const navLinks = hasGsap
      ? gsap.utils.toArray('.overlay__nav .navlink')
      : Array.from(document.querySelectorAll('.overlay__nav .navlink'));
    const contactBlocks = hasGsap
      ? gsap.utils.toArray('.overlay__contact > div')
      : Array.from(document.querySelectorAll('.overlay__contact > div'));

    const copyBtn = document.getElementById('copyEmailBtn');
    const emailLink = document.getElementById('emailLink');
    const copyToast = document.getElementById('copyToast');
    const footerEmailToast = document.getElementById('footerEmailToast');

    const reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const menuTl = hasGsap ? gsap.timeline({
      paused: true,
      defaults: { ease: "expo.out" }
    }) : {
      fromTo(){ return this; },
      play(){},
      reverse(){},
      eventCallback(){ return this; }
    };

    // Animação mais "fluida" (menos degraus, mais overlap)
    // Respeita prefers-reduced-motion (reduz duração e remove blur)
    const d = (v) => reduceMotion ? 0.01 : v;
    const blurIn = reduceMotion ? "blur(0px)" : "blur(3px)";
    const blurOut = "blur(0px)";

    // Nova animação: o "scrim" (background escuro) entra junto com o painel vindo da direita.
    // Ao fechar, tudo volta para a direita (reverse da timeline) de forma fluida.
    menuTl
      // background (scrim) aparece no mesmo timing do painel
      .fromTo(overlay, { autoAlpha: 0 }, { autoAlpha: 1, duration: d(0.32), ease: "power2.out" }, 0)
      // painel desliza da direita
      .fromTo(
        overlayPanel,
        { xPercent: 100, filter: blurIn },
        { xPercent: 0, filter: blurOut, duration: d(0.78) },
        0
      )
      // conteúdo interno mantém a mesma vibe (só um leve "lift")
      .fromTo(overlayRight, { y: 14, opacity: 0 }, { y: 0, opacity: 1, duration: d(0.56) }, reduceMotion ? 0 : 0.10)
      .fromTo(navLinks, { y: 14, opacity: 0 }, { y: 0, opacity: 1, duration: d(0.56), stagger: reduceMotion ? 0 : 0.055 }, reduceMotion ? 0 : 0.12)
      .fromTo(contactBlocks, { y: 12, opacity: 0 }, { y: 0, opacity: 1, duration: d(0.52), stagger: reduceMotion ? 0 : 0.07 }, reduceMotion ? 0 : 0.18);

    // ===== Acessibilidade: foco, teclado, e conteúdo de fundo =====
    let lastFocus = null;

    function getFocusable(container){
      return [...container.querySelectorAll(
        'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])'
      )].filter(el => !el.hasAttribute('disabled') && el.getAttribute('aria-hidden') !== 'true');
    }

    function trapFocus(e){
      if(!overlay.classList.contains('is-open')) return;
      if(e.key !== 'Tab') return;
      const focusables = getFocusable(overlayPanel);
      if(!focusables.length) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if(e.shiftKey && document.activeElement === first){
        e.preventDefault();
        last.focus();
      }else if(!e.shiftKey && document.activeElement === last){
        e.preventDefault();
        first.focus();
      }
    }

    // Mantém a scrollbar visível (não usa overflow:hidden) e ainda trava o scroll
    // enquanto o menu estiver aberto.
    const _scrollLock = {
      y: 0,
      onWheel: null,
      onTouch: null,
      onKey: null,
      onScroll: null,
      locked: false,
    };

    function lockScroll(){
      if(_scrollLock.locked) return;
      _scrollLock.locked = true;
      _scrollLock.y = window.scrollY || window.pageYOffset || 0;

      const prevent = (e) => { e.preventDefault(); };
      _scrollLock.onWheel = prevent;
      _scrollLock.onTouch = prevent;

      _scrollLock.onKey = (e) => {
        const keys = ["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","PageUp","PageDown","Home","End"," "];
        if(keys.includes(e.key)) e.preventDefault();
      };

      // Trava o scroll via prevenção de eventos (scrollbar continua lá)
      window.addEventListener('wheel', _scrollLock.onWheel, { passive: false });
      window.addEventListener('touchmove', _scrollLock.onTouch, { passive: false });
      window.addEventListener('keydown', _scrollLock.onKey, { passive: false });

      // Se o usuário tentar arrastar a scrollbar, volta para a posição original
      _scrollLock.onScroll = () => {
        if(!_scrollLock.locked) return;
        if(Math.abs((window.scrollY || 0) - _scrollLock.y) > 1) {
          window.scrollTo(0, _scrollLock.y);
        }
      };
      window.addEventListener('scroll', _scrollLock.onScroll, { passive: true });
    }

    function unlockScroll(){
      if(!_scrollLock.locked) return;
      _scrollLock.locked = false;
      window.removeEventListener('wheel', _scrollLock.onWheel, { passive: false });
      window.removeEventListener('touchmove', _scrollLock.onTouch, { passive: false });
      window.removeEventListener('keydown', _scrollLock.onKey, { passive: false });
      window.removeEventListener('scroll', _scrollLock.onScroll, { passive: true });
      _scrollLock.onWheel = null;
      _scrollLock.onTouch = null;
      _scrollLock.onKey = null;
      _scrollLock.onScroll = null;
    }

    function openOverlay(){
      if(overlay.classList.contains('is-open')) return;
      lastFocus = document.activeElement;
      overlay.classList.add('is-open');
      overlay.setAttribute('aria-hidden','false');

      // Estado do botão (leitores de tela)
      openMenu.setAttribute('aria-expanded','true');

      document.body.classList.add('menu-opened');
      lockScroll();

      // Evita que leitor de tela "veja" o site por trás
      if(main){
        main.setAttribute('aria-hidden','true');
        if('inert' in main) main.inert = true;
      }

      // Focus trap
      document.addEventListener('keydown', trapFocus);

      menuTl.play(0);

      // Foca no primeiro item (ou no fechar)
      const focusables = getFocusable(overlayPanel);
      (focusables[0] || closeMenu).focus({ preventScroll: true });
    }

    function closeOverlayMenu(afterClose){
      if(!overlay.classList.contains('is-open')) return;

      document.body.classList.remove('menu-opened');
      const finalizeClose = () => {
        overlay.classList.remove('is-open');
        overlay.setAttribute('aria-hidden','true');
        openMenu.setAttribute('aria-expanded','false');
        unlockScroll();

        if(hasGsap){
          gsap.set(overlay, { clearProps: "opacity,visibility" });
        }

        if(main){
          main.removeAttribute('aria-hidden');
          if('inert' in main) main.inert = false;
        }

        document.removeEventListener('keydown', trapFocus);

        if(lastFocus && typeof lastFocus.focus === 'function'){
          lastFocus.focus({ preventScroll: true });
        }

        if(typeof afterClose === 'function') afterClose();
      };

      if(!hasGsap){
        finalizeClose();
        return;
      }

      menuTl.reverse();
      menuTl.eventCallback("onReverseComplete", null);
      menuTl.eventCallback("onReverseComplete", finalizeClose);
    }

    openMenu.addEventListener('click', openOverlay);
    closeMenu.addEventListener('click', closeOverlayMenu);

    // Clique no fundo (lado esquerdo / scrim) fecha o menu
    overlay.addEventListener('click', (e) => {
      if(!overlay.classList.contains('is-open')) return;
      if(e.target === overlay) closeOverlayMenu();
    });


    // Links do menu: fecha o overlay e navega para a seção (sem quebrar por causa do scroll lock)
    document.querySelectorAll('.overlay__nav .navlink').forEach((a) => {
      a.addEventListener('click', (e) => {
        const href = a.getAttribute('href') || '';
        if(!href.startsWith('#')) return;
        e.preventDefault();
        const id = href;

        const go = () => {
          const el = document.querySelector(id);
          if(!el) return;
          const topbarOffset = 90; // espaço para header fixo
          const y = el.getBoundingClientRect().top + (window.scrollY || window.pageYOffset || 0) - topbarOffset;
          window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' });
        };

        // Se o menu estiver aberto, fecha primeiro (isso também libera o scroll)
        if(overlay.classList.contains('is-open')){
          closeOverlayMenu(go);
        }else{
          go();
        }
      });
    });

    window.addEventListener('keydown', (e) => {
      if(e.key === 'Escape' && overlay.classList.contains('is-open')) closeOverlayMenu();
    });

    // ===== Rodapé: navegação suave para seções =====
    document.querySelectorAll('.site-footer a[href^="#"]').forEach((a) => {
      a.addEventListener('click', (e) => {
        const href = a.getAttribute('href') || '';
        if(!href.startsWith('#')) return;
        const el = document.querySelector(href);
        if(!el) return;
        e.preventDefault();
        const topbarOffset = 90;
        const y = el.getBoundingClientRect().top + (window.scrollY || window.pageYOffset || 0) - topbarOffset;
        window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' });
      });
    });

    // ===== Hero: CTA + indicador com navegação suave =====
    document.querySelectorAll('.hero-banner a[href^="#"]').forEach((a) => {
      a.addEventListener('click', (e) => {
        const href = a.getAttribute('href') || '';
        if(!href.startsWith('#')) return;
        const el = document.querySelector(href);
        if(!el) return;
        e.preventDefault();
        const topbarOffset = 90;
        const y = el.getBoundingClientRect().top + (window.scrollY || window.pageYOffset || 0) - topbarOffset;
        window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' });
      });
    });

    // Hover weight GSAP (font-weight: 700 -> 900)
    // Nota: FKScreamer não é variável, então usamos fontWeight para evitar "não faz nada".
    if(hasGsap){
      gsap.set(".hover-gsap", { fontWeight: 700 });

    document.querySelectorAll(".hover-gsap").forEach(el => {
      el.addEventListener("mouseenter", () => {
        gsap.to(el, { fontWeight: 900, duration: 0.32, ease: "power3.out", overwrite: "auto" });
      });
      el.addEventListener("mouseleave", () => {
        gsap.to(el, { fontWeight: 700, duration: 0.32, ease: "power3.out", overwrite: "auto" });
      });
      el.addEventListener("focus", () => {
        gsap.to(el, { fontWeight: 900, duration: 0.28, ease: "power3.out", overwrite: "auto" });
      });
      el.addEventListener("blur", () => {
        gsap.to(el, { fontWeight: 700, duration: 0.28, ease: "power3.out", overwrite: "auto" });
      });
    });
    }

    async function writeToClipboard(text){
      if(!text) return false;

      try{
        if(navigator.clipboard && window.isSecureContext){
          await navigator.clipboard.writeText(text);
          return true;
        }
      }catch{
        // Falls back below.
      }

      const ta = document.createElement("textarea");
      ta.value = text;
      ta.setAttribute("readonly", "");
      ta.style.position = "fixed";
      ta.style.top = "-9999px";
      document.body.appendChild(ta);
      ta.select();

      let copied = false;
      try{
        copied = document.execCommand("copy");
      }catch{
        copied = false;
      }

      document.body.removeChild(ta);
      return copied;
    }

    let copyToastTimer = null;
    function showCopyToast(message){
      if(!copyToast) return;
      copyToast.textContent = message;
      window.clearTimeout(copyToastTimer);

      if(hasGsap){
        gsap.killTweensOf(copyToast);
        gsap.set(copyToast, { opacity: 0, y: 4 });
        gsap.to(copyToast, { opacity: 1, y: 0, duration: 0.18, ease: "power2.out" });
        gsap.to(copyToast, { opacity: 0, y: 4, duration: 0.22, ease: "power2.in", delay: 1.0 });
        return;
      }

      copyToast.style.opacity = "1";
      copyToast.style.transform = "translateY(0)";
      copyToastTimer = window.setTimeout(() => {
        copyToast.style.opacity = "0";
        copyToast.style.transform = "translateY(4px)";
      }, 1200);
    }

    /* Copy email */
    async function copyEmail(){
      const emailText = (emailLink?.innerText || "").trim();
      if(!emailText) return;
      const copied = await writeToClipboard(emailText);
      const locale = getBrachLocale();
      showCopyToast(copied ? locale.overlay.copySuccess : locale.overlay.copyError);
      return;

      try{
        await navigator.clipboard.writeText(emailText);
        // garante que leitores de tela anunciem a ação
        if(copyToast) copyToast.textContent = "Copiado!";
        gsap.killTweensOf(copyToast);
        gsap.set(copyToast, { opacity: 0, y: 4 });
        gsap.to(copyToast, { opacity: 1, y: 0, duration: 0.18, ease: "power2.out" });
        gsap.to(copyToast, { opacity: 0, y: 4, duration: 0.22, ease: "power2.in", delay: 1.0 });
      }catch{
        const ta = document.createElement("textarea");
        ta.value = emailText;
        document.body.appendChild(ta);
        ta.select();
        document.execCommand("copy");
        document.body.removeChild(ta);
      }
    }
    copyBtn?.addEventListener("click", copyEmail);
    let footerToastTimer = null;

    // Rodapé: copiar email + (opcional) abrir mailto
    document.querySelectorAll('[data-copy-email]').forEach((link) => {
      link.addEventListener('click', async (e) => {
        const href = link.getAttribute('href') || '';
        const email = (link.textContent || '').trim();
        const toast = document.getElementById('footerEmailToast');

        // Copia primeiro
        e.preventDefault();
        const copied = await writeToClipboard(email);
        if(footerEmailToast){
          const locale = getBrachLocale();
          footerEmailToast.textContent = copied ? locale.overlay.emailCopied : locale.overlay.copyError;
          window.clearTimeout(footerToastTimer);
          footerToastTimer = window.setTimeout(() => {
            footerEmailToast.textContent = '';
          }, 1500);
        }

        if(href.startsWith('mailto:')){
          setTimeout(() => { window.location.href = href; }, 280);
        }
        return;

        try{
          if(email) await navigator.clipboard.writeText(email);
          if(toast) toast.textContent = 'Email copiado!';
        }catch{
          if(toast) toast.textContent = 'Não foi possível copiar.';
        }

        // Depois abre o mailto (bem rápido, não quebra a sensação)
        if(href.startsWith('mailto:')){
          setTimeout(() => { window.location.href = href; }, 280);
        }
      });
    

    // Team: o hover deve existir SOMENTE no link do LinkedIn (igual ao rodapé).
    // Então não aplicamos animação de peso/hover no card inteiro nem no nome.
});
})();


// ===============================
// TRABALHOS: preview box (hover/focus) + animação de troca
// ===============================
(() => {
  const listLinks = document.querySelectorAll('.case-link');
  const preview = document.querySelector('.case-preview');
  const imgA = document.querySelector('.case-preview__img--a');
  const imgB = document.querySelector('.case-preview__img--b');
  const frame = document.querySelector('.case-preview__frame');
  const live = document.getElementById('caseLive');
  const reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if(!listLinks.length || !preview || !imgA || !imgB) return;

  let active = 'a';
  let currentSrc = '';

  // Floating preview only on larger screens with a fine pointer
  const canFollow = () => window.innerWidth > 860 && window.matchMedia && window.matchMedia('(hover:hover) and (pointer:fine)').matches;
  const isCoarse = () => window.matchMedia && window.matchMedia('(hover:none), (pointer:coarse)').matches;

  function setAlt(img, title){
    const prefix = getBrachLanguage() === 'en'
      ? 'Project preview'
      : getBrachLanguage() === 'es'
        ? 'Vista previa del proyecto'
        : 'Prévia do trabalho';
    img.alt = title ? `${prefix}: ${title}` : prefix;
  }

  function swapTo(src, title){
    if(!src || src === currentSrc){
      // garante alt atualizado
      setAlt(active === 'a' ? imgA : imgB, title);
      return;
    }

    const out = active === 'a' ? imgA : imgB;
    const inc = active === 'a' ? imgB : imgA;

    inc.src = src;
    setAlt(inc, title);

    // Primeira carga: sem animação pesada
    if(!currentSrc || reduceMotion){
      gsap.killTweensOf([out, inc]);
      gsap.set(out, { autoAlpha: 0, yPercent: 0 });
      gsap.set(inc, { autoAlpha: 1, yPercent: 0 });
      active = (active === 'a') ? 'b' : 'a';
      currentSrc = src;
      return;
    }

    gsap.killTweensOf([out, inc]);

    // OUT: rola pra cima (sai)
    // IN: vem de cima para baixo (entra)
    gsap.set(inc, { autoAlpha: 1, yPercent: -110 });

    gsap.timeline({ defaults: { ease: "power2.out" } })
      .to(out, { yPercent: -110, autoAlpha: 0, duration: 0.35 }, 0)
      .to(inc, { yPercent: 0, autoAlpha: 1, duration: 0.45 }, 0.08);

    active = (active === 'a') ? 'b' : 'a';
    currentSrc = src;
  }

  function setPreviewFrom(link){
    const src = link.getAttribute('data-preview') || '';
    const title = link.getAttribute('data-title') || link.textContent.trim();
    swapTo(src, title);
  }

  
  // Smooth cursor follow (lerp) like dimaac
  let targetX = -9999, targetY = -9999;
  let currentX = -9999, currentY = -9999;
  let rafId = null;

  function clamp(n, min, max){ return Math.max(min, Math.min(max, n)); }
  function lerp(a, b, t){ return a + (b - a) * t; }

  function computePlacement(x, y){
    const pad = 18;
    const rect = preview.getBoundingClientRect();

    // Prefer "down-right", but flip when near edges (keeps it feeling alive)
    let nx = x + 22;
    let ny = y + 22;

    if(nx + rect.width + pad > window.innerWidth) nx = x - rect.width - 22;
    if(ny + rect.height + pad > window.innerHeight) ny = y - rect.height - 22;

    // Clamp into viewport
    nx = clamp(nx, pad, window.innerWidth - rect.width - pad);
    ny = clamp(ny, pad, window.innerHeight - rect.height - pad);

    return { nx, ny };
  }

  function placePreview(x, y){
    const { nx, ny } = computePlacement(x, y);
    targetX = nx; targetY = ny;
    if(currentX === -9999 && currentY === -9999){
      currentX = targetX; currentY = targetY;
    }
  }

  function tick(){
    // smoothing factor: a bit slower on smaller screens for elegance
    const t = window.innerWidth < 760 ? 0.14 : 0.18;

    currentX = lerp(currentX, targetX, t);
    currentY = lerp(currentY, targetY, t);

    preview.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;

    if(preview.classList.contains('is-visible') && canFollow()){
      rafId = requestAnimationFrame(tick);
    }else{
      rafId = null;
    }
  }

  function startFollow(){
    if(rafId) return;
    rafId = requestAnimationFrame(tick);
  }

  function stopFollow(){
    if(rafId){
      cancelAnimationFrame(rafId);
      rafId = null;
    }
  }

  function show(link, evt){
    // On touch/coarse pointer we use the inline thumbnail preview instead
    if(isCoarse()) return;
    setPreviewFrom(link);

    preview.classList.add('is-visible');

    if(!reduceMotion){
      gsap.killTweensOf(preview);
      gsap.fromTo(preview, { autoAlpha: 0.001 }, { autoAlpha: 1, duration: 0.22, ease: 'power2.out' });
    }
    preview.setAttribute('aria-hidden','false');

    // Posiciona no ponto de interação (ou perto do link quando for foco)
    if(evt && typeof evt.clientX === 'number'){
      placePreview(evt.clientX, evt.clientY);
    }else{
      const r = link.getBoundingClientRect();
      placePreview(r.left + r.width * 0.65, r.top + r.height * 0.5);
    }

    // Animação suave ao surgir (escala)
    if(!reduceMotion && frame){
      gsap.killTweensOf(frame);
      gsap.fromTo(frame, { scale: 0.96 }, { scale: 1, duration: 0.26, ease: 'power2.out' });
    }
    if(canFollow()) startFollow();
  }

  function hide(){
    if(!canFollow()) return;
    const finish = () => {
      preview.classList.remove('is-visible');
      preview.setAttribute('aria-hidden','true');
      stopFollow();
      currentX = currentY = targetX = targetY = -9999;
      preview.style.transform = `translate3d(-9999px,-9999px,0)`;
      if(frame) frame.style.transform = '';
      gsap.set(preview, { clearProps: 'opacity,visibility' });
    };

    if(reduceMotion){
      finish();
      return;
    }

    // Anima ao sumir (escala levemente e some)
    if(frame){
      gsap.killTweensOf(frame);
      gsap.to(frame, { scale: 0.985, duration: 0.18, ease: 'power2.in' });
    }
    gsap.killTweensOf(preview);
    gsap.to(preview, { autoAlpha: 0, duration: 0.18, ease: 'power2.in', onComplete: finish });
  }

  // Inline thumbnail preview for touch/small (dimaac-like)
  let activeRow = null;
  function thumbSize(){
    // stays small on vertical screens
    const vw = Math.min(window.innerWidth, 520);
    return Math.max(56, Math.min(96, Math.round(vw * 0.18)));
  }

  function openInline(link){
    const row = link.closest('.case-row');
    if(!row) return;
    if(activeRow && activeRow !== row){
      closeInline(activeRow.querySelector('.case-link'));
      activeRow.classList.remove('is-active');
    }

    const img = link.querySelector('.case-thumb__img');
    const src = link.getAttribute('data-preview') || '';
    if(img && src && (!img.getAttribute('src') || img.getAttribute('src') === '')){
      img.setAttribute('src', src);
    }

    const w = thumbSize();
    row.classList.add('is-active');
    activeRow = row;

    if(reduceMotion){
      link.style.setProperty('--thumbW', w + 'px');
      if(img){ img.style.opacity = '1'; img.style.transform = 'scale(1)'; }
      return;
    }

    gsap.killTweensOf(link);
    gsap.to(link, { '--thumbW': w, duration: 0.38, ease: 'power2.out' });
    if(img){
      gsap.killTweensOf(img);
      gsap.fromTo(img, { autoAlpha: 0, scale: 0.92, y: 8 }, { autoAlpha: 1, scale: 1, y: 0, duration: 0.42, ease: 'power2.out' });
    }
  }

  function closeInline(link){
    if(!link) return;
    const row = link.closest('.case-row');
    const img = link.querySelector('.case-thumb__img');
    if(reduceMotion){
      link.style.setProperty('--thumbW', '0px');
      if(img){ img.style.opacity = '0'; img.style.transform = 'scale(.95)'; }
      return;
    }
    gsap.killTweensOf(link);
    gsap.to(link, { '--thumbW': 0, duration: 0.28, ease: 'power2.inOut' });
    if(img){
      gsap.killTweensOf(img);
      gsap.to(img, { autoAlpha: 0, scale: 0.96, y: -6, duration: 0.22, ease: 'power2.in' });
    }
    if(row) row.classList.remove('is-active');
    if(activeRow === row) activeRow = null;
  }

  listLinks.forEach(link => {
    // mouse + keyboard (fine pointer)
    link.addEventListener('mouseenter', (e) => {
      if(window.innerWidth <= 860){
        openInline(link);
        return;
      }
      show(link, e);
    });
    link.addEventListener('mousemove', (e) => {
      if(!canFollow() || !preview.classList.contains('is-visible')) return;
      placePreview(e.clientX, e.clientY);
    });
    link.addEventListener('mouseleave', () => {
      if(window.innerWidth <= 860){
        closeInline(link);
        return;
      }
      hide();
    });
    link.addEventListener('focus', () => {
      if(window.innerWidth <= 860){
        openInline(link);
        return;
      }
      show(link);
    });
    link.addEventListener('blur', () => {
      if(window.innerWidth <= 860){
        closeInline(link);
        return;
      }
      hide();
    });

    // touch/coarse: tap toggles inline preview
    link.addEventListener('click', (e) => {
      const href = (link.getAttribute('href') || '').trim();
      if(href === '#' || href === ''){
        e.preventDefault();
      }
      if(isCoarse() || window.innerWidth <= 860){
        // toggle
        const row = link.closest('.case-row');
        const isActive = row && row.classList.contains('is-active');
        if(isActive){
          closeInline(link);
        }else{
          openInline(link);
        }
        if(live && (href === '#' || href === '')){
          live.textContent = 'Página do trabalho ainda não publicada.';
          window.clearTimeout(live.__t);
          live.__t = window.setTimeout(() => (live.textContent = ''), 1200);
        }
      }
    });
  });

  // Close inline preview when tapping outside (touch/small)
  document.addEventListener('pointerdown', (e) => {
    if(!(isCoarse() || window.innerWidth <= 860)) return;
    const t = e.target;
    if(t.closest && t.closest('.case-link')) return;
    if(activeRow){
      closeInline(activeRow.querySelector('.case-link'));
    }
  }, { passive: true });

  window.addEventListener('scroll', () => {
    if(canFollow() && preview.classList.contains('is-visible')) hide();
  }, { passive: true });

  window.addEventListener('resize', () => {
    if(canFollow()){
      // se mudou para desktop, esconde até hover
      hide();
    }
  });
})();

/* ===== Services reveal ===== */
(() => {
  const section = document.querySelector('.services-section');
  if(!section) return;

  const cards = Array.from(section.querySelectorAll('.service-package[data-service-card]'));
  const tabs = Array.from(section.querySelectorAll('.services-tab[data-service-tab]'));
  const revealItems = Array.from(section.querySelectorAll('.service-reveal'));
  const mobileCardsQuery = window.matchMedia ? window.matchMedia('(max-width: 900px)') : { matches: false };
  const glow = section.querySelector('.services-stage__glow');
  const head = section.querySelector('.services-head');
  if(!cards.length || !tabs.length) return;

  const reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const hasGsap = Boolean(window.gsap);
  const hasScrollTrigger = Boolean(window.ScrollTrigger);

  let normalizedServicesData = getBrachLocale().services.cards;

  function createListItems(list, items){
    list.innerHTML = '';
    const fragment = document.createDocumentFragment();
    items.forEach((item) => {
      const li = document.createElement('li');
      li.textContent = item;
      fragment.appendChild(li);
    });
    list.appendChild(fragment);
  }

  function renderCard(card, data){
    const order = card.querySelector('[data-service-order]');
    const category = card.querySelector('[data-service-category-label]');
    const title = card.querySelector('[data-service-title]');
    const copy = card.querySelector('[data-service-copy]');
    const list = card.querySelector('[data-service-list]');
    const foot = card.querySelector('[data-service-foot]');

    if(order) order.textContent = data.order;
    if(category) category.textContent = data.category;
    if(title) title.textContent = data.title;
    if(copy) copy.textContent = data.copy;
    if(list) createListItems(list, data.items);
    if(foot) foot.textContent = data.foot;
  }

  function setActiveTab(key){
    tabs.forEach((tab) => {
      const isActive = tab.dataset.serviceTab === key;
      tab.classList.toggle('is-active', isActive);
      tab.setAttribute('aria-selected', String(isActive));
      tab.tabIndex = isActive ? 0 : -1;
    });
  }

  function fillCards(key){
    const current = normalizedServicesData[key];
    if(!current) return;

    cards.forEach((card) => {
      const cardType = card.dataset.serviceCard;
      const cardData = current[cardType];
      if(cardData) renderCard(card, cardData);
    });
  }

  function syncCardExpansion(){
    const isMobile = mobileCardsQuery.matches;

    cards.forEach((card) => {
      const toggle = card.querySelector('.service-package__toggle');
      if(!toggle) return;

      if(!isMobile){
        card.dataset.expanded = 'true';
        card.classList.add('is-expanded');
        toggle.setAttribute('aria-expanded', 'true');
        return;
      }

      const expanded = card.dataset.expanded === 'true';
      card.classList.toggle('is-expanded', expanded);
      toggle.setAttribute('aria-expanded', expanded ? 'true' : 'false');
    });
  }

  function getCardMotionTargets(){
    return cards.flatMap((card) => {
      const targets = [
        card.querySelector('.service-package__toggle'),
        card.querySelector('[data-service-category-label]'),
        card.querySelector('[data-service-title]'),
        card.querySelector('[data-service-copy]'),
        card.querySelector('[data-service-list]'),
        card.querySelector('[data-service-foot]')
      ];
      return targets.filter(Boolean);
    });
  }

  function animateHeadShift(previousTop){
    if(!head || !hasGsap || reduceMotion || typeof previousTop !== 'number') return;
    const nextTop = head.getBoundingClientRect().top;
    const deltaY = previousTop - nextTop;
    if(Math.abs(deltaY) < 1) return;

    gsap.killTweensOf(head);
    gsap.fromTo(head, {
      y: deltaY
    }, {
      y: 0,
      duration: 0.62,
      ease: 'power2.out',
      clearProps: 'transform'
    });
  }

  let activeKey = tabs.find((tab) => tab.classList.contains('is-active'))?.dataset.serviceTab || tabs[0].dataset.serviceTab;
  let swapTimeline = null;

  function applyCategory(key, immediate = false){
    if(!normalizedServicesData[key]) return;
    activeKey = key;
    setActiveTab(key);
    const headTopBeforeSwap = head ? head.getBoundingClientRect().top : null;

    if(immediate){
      fillCards(key);
      cards.forEach((card) => {
        card.dataset.expanded = mobileCardsQuery.matches ? 'false' : 'true';
      });
      syncCardExpansion();
      if(reduceMotion || !hasGsap || !hasScrollTrigger){
        cards.forEach((card) => card.classList.add('is-visible'));
      }
      return;
    }

    if(reduceMotion || !hasGsap){
      fillCards(key);
      cards.forEach((card) => {
        card.dataset.expanded = mobileCardsQuery.matches ? 'false' : 'true';
      });
      syncCardExpansion();
      cards.forEach((card) => card.classList.add('is-visible'));
      return;
    }

    swapTimeline?.kill();
    swapTimeline = gsap.timeline({ defaults: { ease: 'power2.out' } });

    const outgoingTargets = getCardMotionTargets();

    if(outgoingTargets.length){
      swapTimeline.to(outgoingTargets, {
        autoAlpha: 0,
        y: 16,
        filter: 'blur(8px)',
        duration: 0.24,
        stagger: 0.014,
        ease: 'power2.out',
        overwrite: 'auto'
      }, 0);
    }

    if(glow){
      swapTimeline.to(glow, {
        autoAlpha: 0.38,
        scale: 0.92,
        duration: 0.28,
        ease: 'power2.inOut',
        overwrite: 'auto'
      }, 0);
    }

    swapTimeline.add(() => {
      fillCards(key);
      cards.forEach((card) => {
        card.dataset.expanded = mobileCardsQuery.matches ? 'false' : 'true';
      });
      syncCardExpansion();
      gsap.set(getCardMotionTargets(), {
        autoAlpha: 0,
        y: -16,
        filter: 'blur(8px)'
      });
      animateHeadShift(headTopBeforeSwap);
    });

    swapTimeline.to(getCardMotionTargets(), {
      autoAlpha: 1,
      y: 0,
      filter: 'blur(0px)',
      duration: 0.58,
      stagger: 0.016,
      ease: 'power3.out'
    }, '+=0.02');

    if(glow){
      swapTimeline.to(glow, {
        autoAlpha: 1,
        scale: 1,
        duration: 0.64,
        ease: 'power3.out'
      }, '<');
    }
  }

  applyCategory(activeKey, true);

  document.addEventListener('brach:languagechange', (event) => {
    normalizedServicesData = event.detail?.locale?.services?.cards || getBrachLocale().services.cards;
    applyCategory(activeKey, true);
  });

  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
      const nextKey = tab.dataset.serviceTab;
      if(nextKey === activeKey) return;
      applyCategory(nextKey);
    });

    tab.addEventListener('keydown', (event) => {
      if(event.key !== 'ArrowRight' && event.key !== 'ArrowLeft') return;
      event.preventDefault();
      const direction = event.key === 'ArrowRight' ? 1 : -1;
      const nextIndex = (index + direction + tabs.length) % tabs.length;
      tabs[nextIndex].focus();
      applyCategory(tabs[nextIndex].dataset.serviceTab);
    });
  });

  cards.forEach((card) => {
    const toggle = card.querySelector('.service-package__toggle');
    if(!toggle) return;

    card.dataset.expanded = mobileCardsQuery.matches ? 'false' : 'true';

    toggle.addEventListener('click', () => {
      if(!mobileCardsQuery.matches) return;
      const expanded = card.dataset.expanded === 'true';
      card.dataset.expanded = expanded ? 'false' : 'true';
      syncCardExpansion();
    });
  });

  if(typeof mobileCardsQuery.addEventListener === 'function'){
    mobileCardsQuery.addEventListener('change', syncCardExpansion);
  }else if(typeof mobileCardsQuery.addListener === 'function'){
    mobileCardsQuery.addListener(syncCardExpansion);
  }

  if(reduceMotion){
    revealItems.forEach((el) => el.classList.add('is-visible'));
    return;
  }

  if(hasGsap && hasScrollTrigger){
    gsap.registerPlugin(ScrollTrigger);

    const head = section.querySelector('.services-head');

    if(head){
      gsap.fromTo(head, {
        autoAlpha: 0,
        y: 40
      }, {
        autoAlpha: 1,
        y: 0,
        duration: 0.92,
        ease: 'power3.out',
        onStart: () => head.classList.add('is-visible'),
        scrollTrigger: {
          trigger: section,
          start: 'top 76%',
          once: true
        }
      });
    }

    gsap.fromTo(cards, {
      autoAlpha: 0,
      y: 54,
      scale: 0.97
    }, {
      autoAlpha: 1,
      y: 0,
      scale: 1,
      duration: 0.9,
      stagger: 0.12,
      ease: 'power3.out',
      onStart: () => cards.forEach((card) => card.classList.add('is-visible')),
      scrollTrigger: {
        trigger: section.querySelector('.services-stage') || section,
        start: 'top 72%',
        once: true
      }
    });
    return;
  }

  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if(!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      io.unobserve(entry.target);
    });
  }, { threshold: 0.18, rootMargin: '0px 0px -10% 0px' });

  revealItems.forEach((el) => io.observe(el));
})();

/* ===== Brand bridge ===== */
(() => {
  const sections = Array.from(document.querySelectorAll('.brand-bridge'));
  if(!sections.length) return;

  const reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(reduceMotion){
    return;
  }

  if(window.gsap && window.ScrollTrigger){
    gsap.registerPlugin(ScrollTrigger);
    sections.forEach((section) => {
      const sticky = section.querySelector('.brand-bridge__sticky');
      const lines = Array.from(section.querySelectorAll('.brand-bridge__line'));
      const copy = section.querySelector('.brand-bridge__copy');
      if(!sticky || !lines.length || !copy) return;

      const titleTargets = [...lines, copy];

      gsap.set(lines, {
        yPercent: 118,
        autoAlpha: 0,
        filter: 'blur(16px)',
        scale: 0.985
      });
      gsap.set(copy, {
        y: 30,
        autoAlpha: 0,
        filter: 'blur(16px)'
      });

      const tl = gsap.timeline({
        defaults: { ease: 'power2.out' },
        scrollTrigger: {
          trigger: section,
          start: 'top 88%',
          end: 'bottom 34%',
          scrub: 1.15,
          invalidateOnRefresh: true
        }
      });

      tl.to(lines, {
        yPercent: 0,
        autoAlpha: 1,
        filter: 'blur(0px)',
        scale: 1,
        duration: 0.34,
        stagger: 0.08
      }, 0.04);

      tl.to(copy, {
        y: 0,
        autoAlpha: 1,
        filter: 'blur(0px)',
        duration: 0.26
      }, 0.16);

      tl.to(titleTargets, {
        y: -28,
        autoAlpha: 0,
        filter: 'blur(10px)',
        duration: 0.28,
        stagger: 0.02,
        ease: 'power2.inOut'
      }, 0.68);

      tl.to(sticky, {
        scale: 0.992,
        duration: 0.28,
        ease: 'power2.inOut'
      }, 0.68);
    });
  }
})();

/* ===== Static contact form via FormSubmit ===== */
(() => {
  const form = document.querySelector('.contact-form[data-form-provider="formsubmit"]');
  if(!form) return;

  const submit = form.querySelector('.contact-submit');
  const label = submit?.querySelector('.contact-submit__label');
  let defaultLabel = label?.textContent || '';
  const loadedAt = Date.now();
  const cooldownKey = 'brach:lastContactSubmit';
  const cooldownMs = 45000;

  const suspiciousTerms = [
    'crypto',
    'casino',
    'cassino',
    'betting',
    'viagra',
    'backlink',
    'seo package',
    'forex',
    'porn',
    'adult',
    'malware',
    'hack',
    'telegram',
    'emprestimo',
    'aposta',
    'ganhe dinheiro',
    'free money'
  ];

  function normalizeText(value){
    return String(value || '')
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase();
  }

  function showFormFeedback(id){
    const target = document.getElementById(id);
    if(!target) return;
    window.location.hash = id;
    target.focus({ preventScroll: true });
  }

  function getFieldValue(formData, name){
    return String(formData.get(name) || '').trim();
  }

  function hasRecentlySubmitted(){
    try{
      const lastSubmit = Number(window.localStorage.getItem(cooldownKey) || 0);
      return lastSubmit > 0 && Date.now() - lastSubmit < cooldownMs;
    }catch{
      return false;
    }
  }

  function markSubmitted(){
    try{
      window.localStorage.setItem(cooldownKey, String(Date.now()));
    }catch{
      // Storage can be blocked in private modes. The server-side checks still apply.
    }
  }

  function isSuspiciousSubmission(formData){
    const elapsed = Date.now() - loadedAt;
    const honeypot = getFieldValue(formData, 'website') || getFieldValue(formData, '_honey');
    const nome = getFieldValue(formData, 'nome');
    const email = getFieldValue(formData, 'email');
    const mensagem = getFieldValue(formData, 'mensagem');
    const combined = normalizeText(`${nome} ${email} ${mensagem}`);
    const urlMatches = mensagem.match(/https?:\/\/|www\.|bit\.ly|t\.me|wa\.me|\.ru|\.cn|\.xyz|\.top/gi) || [];

    if(honeypot) return true;
    if(elapsed < 2500) return true;
    if(hasRecentlySubmitted()) return true;
    if(urlMatches.length > 2) return true;
    if(/(.)\1{8,}/.test(mensagem)) return true;
    if(suspiciousTerms.some((term) => combined.includes(term))) return true;

    return false;
  }

  document.addEventListener('brach:languagechange', (event) => {
    defaultLabel = event.detail?.locale?.contact?.submit || label?.textContent || defaultLabel;
    if(label && !submit?.disabled){
      label.textContent = defaultLabel;
    }
  });

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    if(!form.checkValidity()){
      form.reportValidity();
      showFormFeedback('contato-invalido');
      return;
    }

    if(submit){
      submit.disabled = true;
      submit.setAttribute('aria-busy', 'true');
    }
    if(label) label.textContent = getBrachLocale().contact.sending;

    try{
      const formData = new FormData(form);
      const currentUrl = formData.get('_url');
      if(!currentUrl || String(currentUrl).includes('github.com/leolobo1177/brach')){
        formData.set('_url', window.location.href || 'https://github.com/leolobo1177/brach');
      }

      if(isSuspiciousSubmission(formData)){
        showFormFeedback('contato-invalido');
        return;
      }

      const endpoint = form.dataset.ajaxAction || form.getAttribute('action');
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Accept': 'application/json'
        },
        body: new URLSearchParams(formData).toString()
      });

      if(!response.ok) throw new Error('Form submission failed');

      form.reset();
      markSubmitted();
      showFormFeedback('contato-enviado');
    }catch{
      showFormFeedback('contato-erro');
    }finally{
      if(submit){
        submit.disabled = false;
        submit.removeAttribute('aria-busy');
      }
      if(label) label.textContent = defaultLabel;
    }
  });
})();



// ===============================
// LETTER SWAP
// ===============================
(() => {
  function buildLetterSwap(el){
    if(!el || !el.matches('.letter-swap[data-text]')) return;

    const text = (el.dataset.text || '').trim();
    if(!text) return;

    el.dataset.swapReady = 'true';
    el.dataset.swapText = text;
    el.setAttribute('aria-label', text);

    const sr = document.createElement('span');
    sr.className = 'sr-only';
    sr.textContent = text;

    const visual = document.createElement('span');
    visual.className = 'letter-swap__visual';
    visual.setAttribute('aria-hidden', 'true');

    Array.from(text).forEach((char, index) => {
      const wrapper = document.createElement('span');
      wrapper.className = 'letter-swap__char';
      wrapper.style.setProperty('--i', index);

      if(char === ' '){
        wrapper.classList.add('is-space');
      }

      const base = document.createElement('span');
      base.className = 'letter-swap__glyph letter-swap__glyph--base';
      base.textContent = char === ' ' ? '\u00A0' : char;

      const hover = document.createElement('span');
      hover.className = 'letter-swap__glyph letter-swap__glyph--hover';
      hover.textContent = char === ' ' ? '\u00A0' : char;

      wrapper.append(base, hover);
      visual.appendChild(wrapper);
    });

    el.replaceChildren(sr, visual);
  }

  window.refreshLetterSwap = (target) => {
    if(!target){
      document.querySelectorAll('.letter-swap[data-text]').forEach(buildLetterSwap);
      return;
    }

    if(target instanceof Element){
      buildLetterSwap(target);
      return;
    }

    document.querySelectorAll(target).forEach(buildLetterSwap);
  };

  window.refreshLetterSwap();
})();


// ===============================
// HERO
// ===============================
(() => {
  const hero = document.querySelector('.hero-banner');
  if(!hero) return;

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const revealItems = Array.from(hero.querySelectorAll('.hero-reveal'));
  const brandLetters = Array.from(hero.querySelectorAll('.hero-banner__brand-letter'));
  const mobileScramble = hero.querySelector('[data-hero-scramble]');
  const scrambleAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let mobileWords = [];
  let currentIndex = 0;
  let cycleTimer = null;
  let scrambleState = null;
  let heroIntroStarted = false;

  const getMobileWords = () => (mobileScramble?.dataset.heroScramble || '')
    .split('|')
    .map((word) => word.trim())
    .filter(Boolean);

  const setWord = (value) => {
    if(mobileScramble) mobileScramble.textContent = value;
  };

  const stopMobileWordCycle = () => {
    if(cycleTimer){
      window.clearTimeout(cycleTimer);
      cycleTimer = null;
    }
    if(scrambleState && window.gsap){
      gsap.killTweensOf(scrambleState);
      scrambleState = null;
    }
  };

  const scrambleTo = (nextWord, animate) => {
    if(!animate || !window.gsap){
      setWord(nextWord);
      return;
    }

    scrambleState = { frame: 0 };
    const currentWord = mobileScramble?.textContent || mobileWords[currentIndex] || '';
    const maxLength = Math.max(currentWord.length, nextWord.length);

    gsap.to(scrambleState, {
      frame: maxLength + 6,
      duration: 1.42,
      ease: 'power1.inOut',
      onUpdate: () => {
        const revealCount = Math.floor(scrambleState.frame);
        let output = '';

        for(let index = 0; index < maxLength; index += 1){
          const currentChar = currentWord[index] || '';
          const nextChar = nextWord[index] || '';
          const isSpace = nextChar === ' ' || currentChar === ' ';

          if(index < revealCount){
            output += nextChar;
          }else if(isSpace){
            output += ' ';
          }else{
            output += scrambleAlphabet[Math.floor(Math.random() * scrambleAlphabet.length)];
          }
        }

        setWord(output.trimEnd());
      },
      onComplete: () => {
        setWord(nextWord);
        scrambleState = null;
      }
    });
  };

  const queueNext = (animate) => {
    if(mobileWords.length < 2) return;
    cycleTimer = window.setTimeout(() => {
      currentIndex = (currentIndex + 1) % mobileWords.length;
      scrambleTo(mobileWords[currentIndex], animate);
      queueNext(animate);
    }, animate ? 3600 : 3000);
  };

  const startMobileWordCycle = (animate) => {
    if(!mobileScramble) return;

    stopMobileWordCycle();
    mobileWords = getMobileWords();
    currentIndex = 0;

    if(!mobileWords.length) return;

    setWord(mobileWords[0]);
    queueNext(animate);
  };

  const whenLoaderDone = (callback) => {
    if(!document.body.classList.contains('is-loading') && !document.getElementById('pageLoader')){
      callback();
      return;
    }

    document.addEventListener('brach:loadercomplete', callback, { once: true });
  };

  if(reduceMotion || !window.gsap){
    const revealStaticHero = () => {
      if(heroIntroStarted) return;
      heroIntroStarted = true;

      [...revealItems, ...brandLetters].forEach((el) => {
        el.style.opacity = '1';
        el.style.transform = 'none';
        el.style.filter = 'none';
      });
      startMobileWordCycle(false);
    };

    whenLoaderDone(revealStaticHero);
    document.addEventListener('brach:languagechange', () => {
      if(heroIntroStarted) startMobileWordCycle(false);
    });
    return;
  }

  gsap.set(revealItems, {
    y: 28,
    autoAlpha: 0,
    filter: 'blur(12px)'
  });
  gsap.set(brandLetters, {
    yPercent: -112,
    autoAlpha: 0,
    filter: 'blur(14px)',
    transformOrigin: 'center top'
  });

  const playHeroIntro = () => {
    if(heroIntroStarted) return;
    heroIntroStarted = true;

    gsap.timeline({
      defaults: { ease: 'power3.out' }
    })
      .to(revealItems, {
        y: 0,
        autoAlpha: 1,
        filter: 'blur(0px)',
        duration: 0.92,
        stagger: 0.1
      }, 0.12)
      .to(brandLetters, {
        yPercent: 0,
        autoAlpha: 1,
        filter: 'blur(0px)',
        duration: 1.18,
        stagger: 0.1
      }, 0.34);

    startMobileWordCycle(true);
  };

  whenLoaderDone(playHeroIntro);
  document.addEventListener('brach:languagechange', () => {
    if(heroIntroStarted) startMobileWordCycle(true);
  });

  if(window.ScrollTrigger && brandLetters.length){
    gsap.registerPlugin(ScrollTrigger);

    gsap.timeline({
      defaults: { ease: 'none' },
      scrollTrigger: {
        trigger: hero,
        start: 'top top',
        end: 'bottom top',
        scrub: 0.85
      }
    })
      .to(revealItems, {
        y: -26,
        autoAlpha: 0,
        filter: 'blur(12px)',
        stagger: 0.035
      }, 0)
      .to(brandLetters, {
        yPercent: -112,
        autoAlpha: 0,
        filter: 'blur(16px)',
        stagger: 0.055
      }, 0.08);
  }
})();


// ===============================
// PARALLAX suave entre seções
// ===============================
(() => {
  if(!window.gsap || !window.ScrollTrigger) return;
  gsap.registerPlugin(ScrollTrigger);

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(reduceMotion) return;

  gsap.utils.toArray('.parallax-section').forEach((sec) => {
    const target = sec.querySelector(':scope > *') || sec;
    gsap.fromTo(target,
      { y: 22 },
      {
        y: -22,
        ease: 'none',
        scrollTrigger: {
          trigger: sec,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 0.6
        }
      }
    );
  });
})();


// ===============================
// HERO GRID HOVER
// ===============================
(() => {
  const hero = document.querySelector('.hero-banner');
  const grid = hero?.querySelector('.hero-banner__grid');
  if(!hero || !grid) return;

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const finePointer = window.matchMedia('(hover:hover) and (pointer:fine)');
  const clamp = (v, min, max) => Math.max(min, Math.min(max, v));
  const gridSize = 95;
  const heroStyles = getComputedStyle(hero);
  const topExtend = parseFloat(heroStyles.getPropertyValue('--heroGridTopExtend')) || 112;
  const bottomExtend = parseFloat(heroStyles.getPropertyValue('--heroGridBottomExtend')) || 56;
  const autoPulse = {
    step: 0,
    timer: null,
  };

  let cols = 0;
  let rows = 0;
  let cells = [];
  let activeCells = [];
  const cellFadeTimers = new Map();
  const cellFadeDelay = reduceMotion ? 0 : 320;

  const clearCellFadeTimer = (cell) => {
    if(!cell) return;
    const timer = cellFadeTimers.get(cell);
    if(typeof timer === 'number'){
      window.clearTimeout(timer);
      cellFadeTimers.delete(cell);
    }
  };
  const clearAutoTimer = () => {
    if(typeof autoPulse.timer === 'number'){
      window.clearTimeout(autoPulse.timer);
      autoPulse.timer = null;
    }
  };

  const heatCell = (cell) => {
    if(!cell) return;
    clearCellFadeTimer(cell);
    cell.classList.add('is-hot');
  };

  const coolCell = (cell, immediate = false) => {
    if(!cell) return;
    clearCellFadeTimer(cell);

    if(immediate || reduceMotion){
      cell.classList.remove('is-hot');
      return;
    }

    const timer = window.setTimeout(() => {
      cell.classList.remove('is-hot');
      cellFadeTimers.delete(cell);
    }, cellFadeDelay);

    cellFadeTimers.set(cell, timer);
  };

  const buildGrid = () => {
    const width = window.innerWidth;
    const height = hero.offsetHeight + topExtend + bottomExtend;
    cols = Math.ceil(width / gridSize);
    rows = Math.ceil(height / gridSize);

    grid.style.gridTemplateColumns = `repeat(${cols}, ${gridSize}px)`;
    grid.style.gridTemplateRows = `repeat(${rows}, ${gridSize}px)`;
    grid.style.width = `${cols * gridSize}px`;
    grid.style.height = `${rows * gridSize}px`;
    cellFadeTimers.forEach((timer) => window.clearTimeout(timer));
    cellFadeTimers.clear();
    grid.replaceChildren();

    const fragment = document.createDocumentFragment();
    cells = [];

    for(let index = 0; index < cols * rows; index += 1){
      const cell = document.createElement('span');
      cell.className = 'hero-banner__grid-cell';
      fragment.appendChild(cell);
      cells.push(cell);
    }

    grid.appendChild(fragment);
    activeCells = [];
  };

  const getHoverCells = (row, col, spanOverride) => {
    const span = Math.min(spanOverride || 3, cols);
    const startCol = clamp(col - 1, 0, Math.max(cols - span, 0));
    const nextCells = [];

    for(let offset = 0; offset < span; offset += 1){
      const cell = cells[(row * cols) + startCol + offset];
      if(cell) nextCells.push(cell);
    }

    return nextCells;
  };

  const sameCells = (current, next) => (
    current.length === next.length && current.every((cell, index) => cell === next[index])
  );

  const setActiveCells = (nextCells) => {
    if(sameCells(activeCells, nextCells)) return;
    activeCells.forEach((cell) => coolCell(cell));
    activeCells = nextCells;
    activeCells.forEach((cell) => heatCell(cell));
  };

  const clearActiveCells = (immediate = false) => {
    if(!activeCells.length) return;
    activeCells.forEach((cell) => coolCell(cell, immediate));
    activeCells = [];
  };

  const runAutoPulse = () => {
    clearAutoTimer();
    if(reduceMotion || finePointer.matches || !cols || !rows) return;

    const span = Math.min(4, cols);
    const pathRows = [
      clamp(Math.floor(rows * 0.18), 0, Math.max(rows - 1, 0)),
      clamp(Math.floor(rows * 0.36), 0, Math.max(rows - 1, 0)),
      clamp(Math.floor(rows * 0.56), 0, Math.max(rows - 1, 0)),
      clamp(Math.floor(rows * 0.76), 0, Math.max(rows - 1, 0)),
    ].filter((row, index, list) => list.indexOf(row) === index);

    const travelCols = Math.max(1, cols - span + 1);
    const cycle = autoPulse.step;
    const row = pathRows[cycle % pathRows.length] ?? 0;
    const colStep = Math.floor(cycle / Math.max(pathRows.length, 1));
    const lap = Math.floor(colStep / travelCols);
    const colOffset = colStep % travelCols;
    const col = lap % 2 === 0
      ? colOffset
      : Math.max(0, travelCols - 1 - colOffset);

    setActiveCells(getHoverCells(row, col, span));
    autoPulse.step += 1;
    autoPulse.timer = window.setTimeout(runAutoPulse, 240);
  };

  const onPointerMove = (event) => {
    if(!finePointer.matches) return;
    clearAutoTimer();
    const rect = hero.getBoundingClientRect();
    const boundsTop = rect.top - topExtend;
    const boundsBottom = rect.bottom + bottomExtend;
    const insideX = event.clientX >= rect.left && event.clientX <= rect.right;
    const insideY = event.clientY >= boundsTop && event.clientY <= boundsBottom;

    if(!insideX || !insideY){
      clearActiveCells();
      return;
    }

    const localX = clamp(event.clientX - rect.left, 0, cols * gridSize - 1);
    const localY = clamp(event.clientY - boundsTop, 0, rows * gridSize - 1);
    const col = Math.floor(localX / gridSize);
    const row = Math.floor(localY / gridSize);
    const nextCells = getHoverCells(row, col);
    setActiveCells(nextCells);
  };

  const onResize = () => {
    buildGrid();
    clearActiveCells(true);
    runAutoPulse();
  };

  const onPointerModeChange = () => {
    clearActiveCells(true);
    autoPulse.step = 0;
    runAutoPulse();
  };

  buildGrid();

  if(reduceMotion){
    return;
  }

  window.addEventListener('pointermove', onPointerMove, { passive: true });
  window.addEventListener('pointerleave', clearActiveCells, { passive: true });
  window.addEventListener('resize', onResize, { passive: true });
  hero.addEventListener('pointerleave', clearActiveCells, { passive: true });
  hero.addEventListener('pointercancel', clearActiveCells, { passive: true });

  if(typeof finePointer.addEventListener === 'function'){
    finePointer.addEventListener('change', onPointerModeChange);
  }else if(typeof finePointer.addListener === 'function'){
    finePointer.addListener(onPointerModeChange);
  }

  runAutoPulse();
})();



// Team section rebuild (Sobre / Equipe)
(() => {
  const section = document.querySelector('section.legacy-team#sobre');
  if (!section || !window.gsap) return;

  const reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const cardsWrap = section.querySelector('.team__cards--swap');
  const sticky = section.querySelector('.team__cardsSticky');
  const card1 = section.querySelector('[data-team-card="1"]');
  const card2 = section.querySelector('[data-team-card="2"]');
  const intro = section.querySelector('.team__intro');
  if (!cardsWrap || !sticky || !card1 || !card2 || !intro) return;

  if (window.ScrollTrigger) {
    ScrollTrigger.getAll().forEach(st => {
      const t = st.trigger;
      if (t === section || t === cardsWrap || t === sticky) st.kill();
    });
  }

  // Clean initial state
  gsap.set(intro, {opacity: 0, y: 24});
  gsap.set(card1, {xPercent: 0, yPercent: 0, rotation: 0, scale: 1, opacity: 1, zIndex: 2});
  gsap.set(card2, {xPercent: 14, yPercent: 12, rotation: 0, scale: 1, opacity: 0, zIndex: 3});

  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      gsap.to(intro, {opacity: 1, y: 0, duration: 0.8, ease: 'power3.out'});
    });
  }, {threshold: 0.2});
  io.observe(section);

  if (reduceMotion || !window.ScrollTrigger) return;

  ScrollTrigger.matchMedia({
    '(min-width: 981px)': () => {
      const tl = gsap.timeline({
        defaults: {ease: 'none'},
        scrollTrigger: {
          id: 'teamCleanSwap',
          trigger: cardsWrap,
          start: 'top top+=110',
          end: '+=120%',
          scrub: 0.7,
          pin: sticky,
          pinSpacing: true,
          invalidateOnRefresh: true,
        }
      });

      tl.to(card1, {xPercent: -18, yPercent: 0, opacity: 0.08, scale: 0.96, duration: 0.45}, 0)
        .to(card2, {xPercent: 0, yPercent: 0, opacity: 1, scale: 1, duration: 0.45}, 0.12);

      return () => {
        tl.scrollTrigger && tl.scrollTrigger.kill();
        tl.kill();
        gsap.set([card1, card2, sticky], {clearProps: 'all'});
      };
    }
  });
})();

// Footer ticker: ensure the strip never leaves empty gaps on ultra-wide screens
(() => {
  const tracks = document.querySelectorAll('.footer-ticker .ticker__track');
  if (!tracks.length) return;

  // Cache the initial markup once
  tracks.forEach((t) => {
    if (!t.dataset.original) t.dataset.original = t.innerHTML;
  });

  const fill = () => {
    const vw = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    tracks.forEach((track) => {
      const original = track.dataset.original || track.innerHTML;
      // Reset then refill (avoids infinite growth on resize)
      track.innerHTML = original;
      let guard = 0;
      while (track.scrollWidth < vw * 2.2 && guard < 12) {
        track.innerHTML += original;
        guard++;
      }
    });
  };

  window.addEventListener('load', fill, { passive: true });
  window.addEventListener('resize', () => window.requestAnimationFrame(fill), { passive: true });
})();


// Team | pinned sequential swap (intro stays, cards swap, then section releases)
(() => {
  const section = document.querySelector('section.legacy-team#sobre');
  if (!section || !window.gsap || !window.ScrollTrigger) return;

  const reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduceMotion) return;

  const mm = window.matchMedia('(min-width: 900px)');
  if (!mm.matches) return;

  const swapArea = section.querySelector('.team__cards--swap');
  const sticky = section.querySelector('.team__cardsSticky');
  const card1 = section.querySelector('[data-team-card="1"]');
  const card2 = section.querySelector('[data-team-card="2"]');
  if (!swapArea || !sticky || !card1 || !card2) return;

  // kill older swap triggers that target this area
  ScrollTrigger.getAll().forEach(st => {
    if (st.trigger === swapArea || st.trigger === section || st.trigger === sticky) {
      const vars = st.vars || {};
      if (vars.id === 'teamSwapPinned' || vars.trigger === swapArea) st.kill();
    }
  });

  gsap.set(card1, {xPercent: 0, rotation: 0, scale: 1, opacity: 1, zIndex: 2});
  gsap.set(card2, {xPercent: 18, rotation: 0, scale: 1, opacity: 0, zIndex: 3});

  const tl = gsap.timeline({
    defaults: {ease: 'none'},
    scrollTrigger: {
      id: 'teamSwapPinned',
      trigger: swapArea,
      start: 'top top+=110',
      end: 'bottom bottom-=10%',
      scrub: 0.6,
      invalidateOnRefresh: true,
    }
  });

  tl.to(card1, {xPercent: -18, opacity: 0, scale: 0.98, duration: 0.45}, 0)
    .to(card2, {xPercent: 0, opacity: 1, scale: 1, duration: 0.45}, 0.12);
})();


// About Team reveal (clean)
(() => {
  const section = document.querySelector('section.about-team#sobre');
  if (!section) return;
  const items = section.querySelectorAll('.about-reveal');
  if (!items.length) return;

  const reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduceMotion) {
    items.forEach(el => el.classList.add('is-visible'));
    return;
  }

  if (window.gsap && window.ScrollTrigger) {
    items.forEach((el, i) => {
      gsap.fromTo(el,
        {autoAlpha: 0, y: 36},
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.9,
          delay: i * 0.08,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 88%',
            once: true
          }
        }
      );
    });
  } else {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
    items.forEach(el => io.observe(el));
  }
})();


/* ===== Contact modal ===== */
(function(){
  const modal = document.getElementById('policyModal');
  if(!modal) return;
  const body = document.getElementById('policyModalBody');
  const title = document.getElementById('policyModalTitle');
  const content = window.BRACH_POLICY_CONTENT || {};

  function openPolicy(kind){
    const locale = getBrachLocale();
    title.textContent = kind === 'terms'
      ? locale.contact.modalTitles.terms
      : locale.contact.modalTitles.privacy;
    body.innerHTML = content[kind];
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
  }

  function closePolicy(){
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
  }

  document.querySelectorAll('.policy-link[data-modal]').forEach(btn => {
    btn.addEventListener('click', () => openPolicy(btn.dataset.modal));
  });

  modal.querySelectorAll('[data-close-modal]').forEach(el => {
    el.addEventListener('click', closePolicy);
  });

  document.addEventListener('keydown', (e) => {
    if(e.key === 'Escape' && modal.classList.contains('is-open')) closePolicy();
  });
})();
