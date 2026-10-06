(() => {
 const translations = {
  "pt-BR": {
    "back": "← Todos os projetos",
    "eyebrow": "MiláMi · Landing page · Hotmart",
    "subtitle": "Do Ventre ao Colo",
    "projectLabel": "O projeto",
    "project": "Uma página de vendas para apresentar o Método MiláMi às famílias e conduzir a jornada até a oferta na Hotmart. O desafio foi comunicar o valor da musicalização infantil com clareza, acolhimento e uma identidade lúdica.",
    "solutionLabel": "A solução",
    "solution": "Organizamos benefícios, experiências, apresentação da educadora, depoimentos, oferta e perguntas frequentes em uma narrativa contínua. O design combina as cores da MiláMi, formas orgânicas e uma experiência adaptada ao celular.",
    "resultsLabel": "Resultados ilustrativos",
    "results": "Uma LP funcional, interativa e adaptada ao celular pode aumentar o interesse pelo método, gerar mais cliques para a oferta na Hotmart e favorecer o crescimento das vendas ao tornar os benefícios claros e a jornada de compra mais simples.",
    "tags": [
      "Landing page",
      "UX/UI design",
      "Desenvolvimento web",
      "Design responsivo"
    ],
    "cta": "Vamos conversar",
    "gallery": "Apresentação da landing page MiláMi",
    "next": "Seu projeto pode ser o próximo.",
    "alts": [
      "Apresentação completa da landing page MiláMi Do Ventre ao Colo, com versões para computador e celular"
    ],
    "demo": "Ver landing page ↗",
    "demoNote": "Conheça a demonstração navegável do projeto (abre em uma nova aba).",
    "note": "Cenário ilustrativo de impacto, sem métricas aferidas."
  },
  "en": {
    "back": "← All projects",
    "eyebrow": "MiláMi · Landing page · Hotmart",
    "subtitle": "Do Ventre ao Colo",
    "projectLabel": "The project",
    "project": "A sales page introducing the MiláMi Method to families and guiding their journey to the Hotmart offer. The challenge was to communicate the value of early childhood music through a clear, welcoming and playful identity.",
    "solutionLabel": "The solution",
    "solution": "We arranged benefits, experiences, the educator’s introduction, testimonials, the offer and frequently asked questions into a continuous narrative. The design combines MiláMi’s colors, organic shapes and a mobile-friendly experience.",
    "resultsLabel": "Illustrative outcomes",
    "results": "A functional, interactive, mobile-friendly landing page can increase interest in the method, drive more clicks to the Hotmart offer and support sales growth by making the benefits clear and the purchase journey simpler.",
    "tags": [
      "Landing page",
      "UX/UI design",
      "Web development",
      "Responsive design"
    ],
    "cta": "Let’s talk",
    "gallery": "MiláMi landing page presentation",
    "next": "Your project could be next.",
    "alts": [
      "Full presentation of the MiláMi Do Ventre ao Colo landing page, with desktop and mobile layouts"
    ],
    "demo": "View landing page ↗",
    "demoNote": "Explore the interactive project demo (opens in a new tab).",
    "note": "Illustrative impact scenario; no measured metrics."
  },
  "es": {
    "back": "← Todos los proyectos",
    "eyebrow": "MiláMi · Landing page · Hotmart",
    "subtitle": "Do Ventre ao Colo",
    "projectLabel": "El proyecto",
    "project": "Una página de ventas para presentar el Método MiláMi a las familias y conducirlas hasta la oferta en Hotmart. El desafío fue comunicar el valor de la musicalización infantil con claridad, cercanía y una identidad lúdica.",
    "solutionLabel": "La solución",
    "solution": "Organizamos beneficios, experiencias, presentación de la educadora, testimonios, oferta y preguntas frecuentes en una narrativa continua. El diseño combina los colores de MiláMi, formas orgánicas y una experiencia adaptada al móvil.",
    "resultsLabel": "Resultados ilustrativos",
    "results": "Una landing page funcional, interactiva y adaptada al móvil puede aumentar el interés por el método, generar más clics hacia la oferta en Hotmart y favorecer el crecimiento de las ventas al aclarar los beneficios y simplificar la compra.",
    "tags": [
      "Landing page",
      "Diseño UX/UI",
      "Desarrollo web",
      "Diseño adaptable"
    ],
    "cta": "Conversemos",
    "gallery": "Presentación de la landing page MiláMi",
    "next": "Tu proyecto puede ser el próximo.",
    "alts": [
      "Presentación completa de la landing page MiláMi Do Ventre ao Colo, con versiones para ordenador y móvil"
    ],
    "demo": "Ver landing page ↗",
    "demoNote": "Conoce la demostración navegable del proyecto (se abre en otra pestaña).",
    "note": "Escenario ilustrativo de impacto, sin métricas medidas."
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
