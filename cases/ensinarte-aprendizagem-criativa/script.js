(() => {
  const translations = {
  "pt-BR": {
    "back": "← Todos os projetos",
    "eyebrow": "Educação · Identidade visual · 2026",
    "subtitle": "Aprendizagem criativa",
    "projectLabel": "O projeto",
    "project": "Aprender pode ser um encontro entre afeto e imaginação. A Ensinarte precisava de uma identidade que traduzisse o cuidado de uma professora dedicada à educação inclusiva e aproximasse crianças e famílias do seu universo.",
    "solutionLabel": "A solução",
    "solution": "Criamos uma marca lúdica, com cores suaves, lettering próprio e dois personagens: Celina, inspirada na infância da educadora, e Axol, seu companheiro de descobertas. Um sistema que conecta materiais pedagógicos, papelaria e presença digital.",
    "resultsLabel": "Resultados",
    "results": "Uma comunicação mais reconhecível e acolhedora, com maior interesse das famílias e mais interação nos conteúdos educativos.",
    "note": "Cenário ilustrativo de resultados, sem mensuração real.",
    "tags": [
      "Branding",
      "Identidade visual",
      "Personagens",
      "Direção de arte"
    ],
    "cta": "Vamos conversar",
    "gallery": "Galeria do projeto Ensinarte",
    "next": "Sua marca pode ser a próxima.",
    "alts": [
      "Identidade Ensinarte com Celina e Axol",
      "Personagem Celina",
      "Mascote Axol",
      "Assinatura completa da marca",
      "Logo principal Ensinarte",
      "Variações do logo",
      "Identidade aplicada ao Instagram",
      "Aplicação da identidade em ecobag",
      "Sistema visual e aplicações"
    ]
  },
  "en": {
    "back": "← All projects",
    "eyebrow": "Education · Visual identity · 2026",
    "subtitle": "Creative learning",
    "projectLabel": "The project",
    "project": "Learning can bring warmth and imagination together. Ensinarte needed an identity that expressed the care of a teacher dedicated to inclusive education and connected children and families with her world.",
    "solutionLabel": "The solution",
    "solution": "We created a playful brand with soft colors, custom lettering and two characters: Celina, inspired by the teacher’s childhood, and Axol, her companion in discovery. A system connecting learning materials, stationery and a digital presence.",
    "resultsLabel": "Results",
    "results": "A more recognizable, welcoming identity, with stronger interest from families and more interaction with educational content.",
    "note": "Illustrative results scenario; not based on measured performance.",
    "tags": [
      "Branding",
      "Visual identity",
      "Character design",
      "Art direction"
    ],
    "cta": "Let’s talk",
    "gallery": "Ensinarte project gallery",
    "next": "Your brand could be next.",
    "alts": [
      "Ensinarte identity with Celina and Axol",
      "Celina character",
      "Axol mascot",
      "Complete brand signature",
      "Ensinarte primary logo",
      "Logo variations",
      "Instagram brand application",
      "Tote bag brand application",
      "Visual system and applications"
    ]
  },
  "es": {
    "back": "← Todos los proyectos",
    "eyebrow": "Educación · Identidad visual · 2026",
    "subtitle": "Aprendizaje creativo",
    "projectLabel": "El proyecto",
    "project": "Aprender puede unir afecto e imaginación. Ensinarte necesitaba una identidad que expresara el cuidado de una profesora dedicada a la educación inclusiva y acercara a niños y familias a su universo.",
    "solutionLabel": "La solución",
    "solution": "Creamos una marca lúdica con colores suaves, lettering propio y dos personajes: Celina, inspirada en la infancia de la educadora, y Axol, su compañero de descubrimientos. Un sistema que conecta materiales educativos, papelería y presencia digital.",
    "resultsLabel": "Resultados",
    "results": "Una comunicación más reconocible y acogedora, con mayor interés de las familias y más interacción con los contenidos educativos.",
    "note": "Escenario ilustrativo de resultados, sin medición real.",
    "tags": [
      "Branding",
      "Identidad visual",
      "Personajes",
      "Dirección de arte"
    ],
    "cta": "Conversemos",
    "gallery": "Galería del proyecto Ensinarte",
    "next": "Tu marca puede ser la próxima.",
    "alts": [
      "Identidad Ensinarte con Celina y Axol",
      "Personaje Celina",
      "Mascota Axol",
      "Firma completa de la marca",
      "Logo principal Ensinarte",
      "Variaciones del logo",
      "Identidad aplicada a Instagram",
      "Identidad aplicada a una bolsa",
      "Sistema visual y aplicaciones"
    ]
  }
};
  const talk = document.querySelector('.project-talk');
  const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
  let revealObserver;
  let revealTween;
  let revealNow = () => {};

  function prepareTalkReveal() {
    if (!talk) return;
    revealObserver?.disconnect();
    revealTween?.kill();
    const label = talk.querySelector('[data-case-text="cta"]');
    const text = label.textContent;
    talk.setAttribute('aria-label', text);
    label.setAttribute('aria-hidden', 'true');
    label.replaceChildren();
    let letterIndex = 0;
    text.split(' ').forEach((word, index) => {
      if (index) label.append(document.createTextNode(' '));
      const wordNode = document.createElement('span');
      wordNode.className = 'project-talk__word';
      Array.from(word).forEach(character => {
        const letter = document.createElement('span');
        letter.className = 'project-talk__letter';
        letter.style.setProperty('--i', letterIndex++);
        const glyph = document.createElement('span');
        glyph.className = 'project-talk__glyph';
        glyph.textContent = character;
        letter.append(glyph);
        wordNode.append(letter);
      });
      label.append(wordNode);
    });
    const letters = label.querySelectorAll('.project-talk__letter');
    if (motionPreference.matches || !window.gsap || !('IntersectionObserver' in window)) {
      revealNow = () => {};
      return;
    }
    // Match the home hero's blur, timing and stagger, entering from below.
    window.gsap.set(letters, {
      yPercent: 112, autoAlpha: 0, filter: 'blur(14px)', transformOrigin: 'center bottom'
    });
    let revealed = false;
    revealNow = (immediate = false) => {
      if (revealed) return;
      revealed = true;
      revealObserver?.disconnect();
      revealTween = window.gsap.to(letters, {
        yPercent: 0, autoAlpha: 1, filter: 'blur(0px)',
        duration: immediate ? 0 : 1.18, stagger: immediate ? 0 : 0.1,
        ease: 'power3.out'
      });
    };
    revealObserver = new IntersectionObserver(entries => {
      if (entries.some(entry => entry.isIntersecting)) revealNow();
    }, { threshold: 0.2 });
    revealObserver.observe(talk);
    if (document.activeElement === talk) revealNow(true);
  }
  talk?.addEventListener('focus', () => revealNow(true));
  motionPreference.addEventListener('change', () => {
    const label = talk?.querySelector('[data-case-text="cta"]');
    if (label) label.textContent = talk.getAttribute('aria-label');
    prepareTalkReveal();
  });

  function render(language) {
    const text = translations[language] || translations['pt-BR'];
    document.querySelectorAll('[data-case-text]').forEach(node => {
      node.textContent = text[node.dataset.caseText];
    });
    document.querySelectorAll('.project-tags li').forEach((node, i) => { node.textContent = text.tags[i]; });
    document.querySelectorAll('.project-gallery img').forEach((node, i) => { node.alt = text.alts[i]; });
    document.querySelector('.project-gallery').setAttribute('aria-label', text.gallery);
    document.querySelector('.project-tags').setAttribute('aria-label', language === 'en' ? 'Services' : language === 'es' ? 'Servicios' : 'Serviços');
    prepareTalkReveal();
  }
  render(window.getBrachLanguage ? window.getBrachLanguage() : 'pt-BR');
  document.addEventListener('brach:languagechange', event => render(event.detail?.language));
})();
