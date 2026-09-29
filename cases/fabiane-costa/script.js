(() => {
 const translations = {
  "pt-BR": {
    "back": "← Todos os projetos",
    "eyebrow": "Mentoria · Rebranding · 2026",
    "subtitle": "Mentoria & Estratégia",
    "projectLabel": "O projeto",
    "project": "A marca Fabiane Costa traduz presença, propósito e transformação. O rebranding conecta autoridade e proximidade em uma identidade coerente com o posicionamento da mentoria.",
    "solutionLabel": "A solução",
    "solution": "Desenvolvemos um símbolo geométrico inspirado em linguagens visuais africanas, tipografia própria e uma paleta de tons terrosos e creme. O sistema valoriza identidade, sabedoria e ancestralidade.",
    "resultsLabel": "Aplicações",
    "results": "A identidade ganha forma na apresentação comercial, nos cartões de visita, na papelaria e nos materiais digitais da mentoria.",
    "tags": [
      "Rebranding",
      "Identidade visual",
      "Tipografia",
      "Apresentação comercial"
    ],
    "cta": "Vamos conversar",
    "gallery": "Galeria Fabiane Costa",
    "next": "Sua marca pode ser a próxima.",
    "alts": [
      "Identidade Fabiane Costa Mentoria e Estratégia",
      "Apresentação da marca Fabiane Costa",
      "Construção geométrica do símbolo",
      "Referências e conceito da identidade",
      "Tipografia Uelekezi e Area Inktrap",
      "Paleta de cores",
      "Variações da marca",
      "Apresentação comercial",
      "Cartões de visita",
      "Papelaria institucional",
      "Materiais digitais da mentoria"
    ]
  },
  "en": {
    "back": "← All projects",
    "eyebrow": "Mentoring · Rebranding · 2026",
    "subtitle": "Mentoring & Strategy",
    "projectLabel": "The project",
    "project": "Fabiane Costa's brand expresses presence, purpose and transformation. The rebranding connects authority and warmth with the mentoring practice.",
    "solutionLabel": "The solution",
    "solution": "We developed a geometric symbol inspired by African visual traditions, custom typography and a palette of earthy tones and cream, celebrating identity, wisdom and ancestry.",
    "resultsLabel": "Applications",
    "results": "The identity extends to the commercial presentation, business cards, stationery and digital mentoring materials.",
    "tags": [
      "Rebranding",
      "Visual identity",
      "Typography",
      "Commercial presentation"
    ],
    "cta": "Let’s talk",
    "gallery": "Galeria Fabiane Costa",
    "next": "Your brand could be next.",
    "alts": [
      "Identidade Fabiane Costa Mentoria e Estratégia",
      "Apresentação da marca Fabiane Costa",
      "Construção geométrica do símbolo",
      "Referências e conceito da identidade",
      "Tipografia Uelekezi e Area Inktrap",
      "Paleta de cores",
      "Variações da marca",
      "Apresentação comercial",
      "Cartões de visita",
      "Papelaria institucional",
      "Materiais digitais da mentoria"
    ]
  },
  "es": {
    "back": "← Todos los proyectos",
    "eyebrow": "Mentoría · Rebranding · 2026",
    "subtitle": "Mentoría y Estrategia",
    "projectLabel": "El proyecto",
    "project": "La marca Fabiane Costa expresa presencia, propósito y transformación. El rebranding conecta autoridad y cercanía con el posicionamiento de la mentoría.",
    "solutionLabel": "La solución",
    "solution": "Desarrollamos un símbolo geométrico inspirado en lenguajes visuales africanos, tipografía propia y una paleta de tonos tierra y crema que celebra identidad, sabiduría y ancestralidad.",
    "resultsLabel": "Aplicaciones",
    "results": "La identidad se aplica a la presentación comercial, tarjetas, papelería y materiales digitales de la mentoría.",
    "tags": [
      "Rebranding",
      "Identidad visual",
      "Tipografía",
      "Presentación comercial"
    ],
    "cta": "Conversemos",
    "gallery": "Galeria Fabiane Costa",
    "next": "Tu marca puede ser la próxima.",
    "alts": [
      "Identidade Fabiane Costa Mentoria e Estratégia",
      "Apresentação da marca Fabiane Costa",
      "Construção geométrica do símbolo",
      "Referências e conceito da identidade",
      "Tipografia Uelekezi e Area Inktrap",
      "Paleta de cores",
      "Variações da marca",
      "Apresentação comercial",
      "Cartões de visita",
      "Papelaria institucional",
      "Materiais digitais da mentoria"
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
