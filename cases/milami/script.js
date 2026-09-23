(() => {
 const translations = {
  "pt-BR": {
    "back": "← Todos os projetos",
    "eyebrow": "Educação · Identidade visual · 2026",
    "subtitle": "Musicalização infantil",
    "projectLabel": "O projeto",
    "project": "A MiláMi aproxima crianças e famílias da música. A identidade traduz acolhimento, criatividade e leveza, conectando o universo musical ao desenvolvimento infantil.",
    "solutionLabel": "A solução",
    "solution": "Criamos um sistema lúdico com um coala como mascote, notas musicais e uma paleta de laranja, creme e azul-petróleo. O lettering expressivo e a tipografia acolhedora dão ritmo à comunicação.",
    "resultsLabel": "Aplicações",
    "results": "O sistema reúne variações da marca, padrões gráficos, cartões e materiais de comunicação que apresentam a musicalização infantil com afeto e clareza.",
    "tags": [
      "Branding",
      "Identidade visual",
      "Personagens",
      "Direção de arte"
    ],
    "cta": "Vamos conversar",
    "gallery": "Galeria MiláMi",
    "next": "Sua marca pode ser a próxima.",
    "alts": [
      "Identidade MiláMi Musicalização Infantil",
      "Conceito da marca MiláMi",
      "Construção do lettering",
      "Tipografia e paleta de cores",
      "Variações da marca",
      "Musicalização infantil em prática",
      "Padrão gráfico da MiláMi",
      "Cartões e aplicações da marca"
    ]
  },
  "en": {
    "back": "← All projects",
    "eyebrow": "Educação · Identidade visual · 2026",
    "subtitle": "Musicalização infantil",
    "projectLabel": "The project",
    "project": "A MiláMi aproxima crianças e famílias da música. A identidade traduz acolhimento, criatividade e leveza, conectando o universo musical ao desenvolvimento infantil.",
    "solutionLabel": "The solution",
    "solution": "Criamos um sistema lúdico com um coala como mascote, notas musicais e uma paleta de laranja, creme e azul-petróleo. O lettering expressivo e a tipografia acolhedora dão ritmo à comunicação.",
    "resultsLabel": "Applications",
    "results": "O sistema reúne variações da marca, padrões gráficos, cartões e materiais de comunicação que apresentam a musicalização infantil com afeto e clareza.",
    "tags": [
      "Branding",
      "Identidade visual",
      "Personagens",
      "Direção de arte"
    ],
    "cta": "Let’s talk",
    "gallery": "Galeria MiláMi",
    "next": "Your brand could be next.",
    "alts": [
      "Identidade MiláMi Musicalização Infantil",
      "Conceito da marca MiláMi",
      "Construção do lettering",
      "Tipografia e paleta de cores",
      "Variações da marca",
      "Musicalização infantil em prática",
      "Padrão gráfico da MiláMi",
      "Cartões e aplicações da marca"
    ]
  },
  "es": {
    "back": "← Todos los proyectos",
    "eyebrow": "Educação · Identidade visual · 2026",
    "subtitle": "Musicalização infantil",
    "projectLabel": "El proyecto",
    "project": "A MiláMi aproxima crianças e famílias da música. A identidade traduz acolhimento, criatividade e leveza, conectando o universo musical ao desenvolvimento infantil.",
    "solutionLabel": "La solución",
    "solution": "Criamos um sistema lúdico com um coala como mascote, notas musicais e uma paleta de laranja, creme e azul-petróleo. O lettering expressivo e a tipografia acolhedora dão ritmo à comunicação.",
    "resultsLabel": "Aplicaciones",
    "results": "O sistema reúne variações da marca, padrões gráficos, cartões e materiais de comunicação que apresentam a musicalização infantil com afeto e clareza.",
    "tags": [
      "Branding",
      "Identidade visual",
      "Personagens",
      "Direção de arte"
    ],
    "cta": "Conversemos",
    "gallery": "Galeria MiláMi",
    "next": "Tu marca puede ser la próxima.",
    "alts": [
      "Identidade MiláMi Musicalização Infantil",
      "Conceito da marca MiláMi",
      "Construção do lettering",
      "Tipografia e paleta de cores",
      "Variações da marca",
      "Musicalização infantil em prática",
      "Padrão gráfico da MiláMi",
      "Cartões e aplicações da marca"
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
