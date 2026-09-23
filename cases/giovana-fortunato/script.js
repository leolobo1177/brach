(() => {
  const translations = {
  "pt-BR": {
    "back": "← Todos os projetos",
    "eyebrow": "Salão de Beleza · Identidade visual · 2025",
    "subtitle": "Studio de Beleza",
    "projectLabel": "O projeto",
    "project": "Uma identidade que traduz a essência de um estúdio profissional: técnica, cuidado e proximidade. O projeto valoriza a história de Giovana Fortunato e sua dedicação à beleza.",
    "solutionLabel": "A solução",
    "solution": "Unimos as iniciais G e F em um símbolo de curvas sutis, acompanhado por roxo profundo e rosé. O sistema visual se estende à papelaria, aos uniformes, à sinalização e à presença digital.",
    "resultsLabel": "Aplicações",
    "results": "Uma identidade consistente em cartões, sacolas, fachada, materiais de atendimento e conteúdos para redes sociais.",
    "tags": [
      "Branding",
      "Identidade visual",
      "Papelaria",
      "Direção de arte"
    ],
    "cta": "Vamos conversar",
    "gallery": "Galeria do Studio Giovana Fortunato",
    "next": "Sua marca pode ser a próxima.",
    "alts": [
      "Identidade do Studio Giovana Fortunato",
      "Conceito da marca",
      "Significado do monograma GF",
      "Construção do símbolo",
      "Construção do lettering",
      "Variações do logo",
      "Paleta de cores",
      "Tipografia da marca",
      "Padrões, papelaria e uniformes",
      "Aplicações no Instagram",
      "Banner de serviços",
      "Sacola personalizada",
      "Fachada do studio",
      "Placa de identificação",
      "Campanha de beleza"
    ]
  },
  "en": {
    "back": "← All projects",
    "eyebrow": "Beauty salon · Visual identity · 2025",
    "subtitle": "Beauty Studio",
    "projectLabel": "The project",
    "project": "An identity expressing the essence of a professional studio: expertise, care and warmth. The project celebrates Giovana Fortunato's story and dedication to beauty.",
    "solutionLabel": "The solution",
    "solution": "We combined the initials G and F in a gently curved symbol, paired with deep purple and rose. The visual system extends to stationery, uniforms, signage and digital content.",
    "resultsLabel": "Applications",
    "results": "A consistent identity across business cards, bags, signage, service materials and social media.",
    "tags": [
      "Branding",
      "Visual identity",
      "Stationery",
      "Art direction"
    ],
    "cta": "Let’s talk",
    "gallery": "Galeria do Studio Giovana Fortunato",
    "next": "Your brand could be next.",
    "alts": [
      "Identidade do Studio Giovana Fortunato",
      "Conceito da marca",
      "Significado do monograma GF",
      "Construção do símbolo",
      "Construção do lettering",
      "Variações do logo",
      "Paleta de cores",
      "Tipografia da marca",
      "Padrões, papelaria e uniformes",
      "Aplicações no Instagram",
      "Banner de serviços",
      "Sacola personalizada",
      "Fachada do studio",
      "Placa de identificação",
      "Campanha de beleza"
    ]
  },
  "es": {
    "back": "← Todos los proyectos",
    "eyebrow": "Salón de belleza · Identidad visual · 2025",
    "subtitle": "Estudio de belleza",
    "projectLabel": "El proyecto",
    "project": "Una identidad que expresa la esencia de un estudio profesional: técnica, cuidado y cercanía. El proyecto celebra la historia de Giovana Fortunato y su dedicación a la belleza.",
    "solutionLabel": "La solución",
    "solution": "Unimos las iniciales G y F en un símbolo de curvas sutiles, acompañado de morado profundo y rosa. El sistema visual abarca papelería, uniformes, señalización y contenidos digitales.",
    "resultsLabel": "Aplicaciones",
    "results": "Una identidad consistente en tarjetas, bolsas, fachada, materiales de atención y redes sociales.",
    "tags": [
      "Branding",
      "Identidad visual",
      "Papelería",
      "Dirección de arte"
    ],
    "cta": "Conversemos",
    "gallery": "Galeria do Studio Giovana Fortunato",
    "next": "Tu marca puede ser la próxima.",
    "alts": [
      "Identidade do Studio Giovana Fortunato",
      "Conceito da marca",
      "Significado do monograma GF",
      "Construção do símbolo",
      "Construção do lettering",
      "Variações do logo",
      "Paleta de cores",
      "Tipografia da marca",
      "Padrões, papelaria e uniformes",
      "Aplicações no Instagram",
      "Banner de serviços",
      "Sacola personalizada",
      "Fachada do studio",
      "Placa de identificação",
      "Campanha de beleza"
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
