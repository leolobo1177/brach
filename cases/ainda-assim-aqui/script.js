(() => {
 const translations = {
  "pt-BR": {
    "back": "← Todos os projetos",
    "eyebrow": "Identidade visual · Podcast",
    "subtitle": "Uma identidade para a escuta",
    "projectLabel": "O projeto",
    "project": "Como reconhecer um podcast antes de dar o play? Para Ainda Assim, Aqui, o ponto de partida foi o próprio gesto de escutar: alguém de fones, com uma xícara entre as mãos.",
    "solutionLabel": "A solução",
    "solution": "Unimos essa figura à silhueta de um microfone. As formas de onda atravessam as peças como um fio sonoro; creme, marrom, verde e azul dão à marca variações para o impresso e o digital.",
    "resultsLabel": "Resultados ilustrativos",
    "results": "A repetição do símbolo na capa, no player e nas peças de divulgação pode ajudar o público a reconhecer o podcast e encontrar o próximo episódio.",
    "tags": [
      "Identidade visual",
      "Tipografia",
      "Direção de arte"
    ],
    "cta": "Vamos conversar",
    "gallery": "Galeria · Ainda Assim, Aqui",
    "next": "Sua marca pode ser a próxima.",
    "alts": [
      "Fones com a marca do podcast",
      "Apresentação do projeto com microfone",
      "Famílias tipográficas Fraunces e Inter",
      "Composição do símbolo a partir da figura e do microfone",
      "Paleta em creme, marrom, verde e azul",
      "Aplicações em cartão, caneca e fones",
      "Identidade aplicada à divulgação do podcast",
      "Página do podcast em um monitor",
      "Frente e verso do cartão"
    ],
    "note": "Cenário ilustrativo de impacto, sem métricas aferidas.",
    "video": "Animação da identidade do podcast"
  },
  "en": {
    "back": "← All projects",
    "eyebrow": "Visual identity · Podcast",
    "subtitle": "An identity for listening",
    "projectLabel": "The project",
    "project": "How do you recognize a podcast before pressing play? For Ainda Assim, Aqui, we started with the act of listening: a person wearing headphones, holding a cup.",
    "solutionLabel": "The solution",
    "solution": "We combined this figure with the silhouette of a microphone. Sound waves run across the layouts, while cream, brown, green and blue give the identity room to vary across print and digital formats.",
    "resultsLabel": "Illustrative outcomes",
    "results": "Using the same symbol on the cover, in the player and in promotional materials can help listeners recognize the podcast and find the next episode.",
    "tags": [
      "Visual identity",
      "Typography",
      "Art direction"
    ],
    "cta": "Let’s talk",
    "gallery": "Gallery · Ainda Assim, Aqui",
    "next": "Your brand could be next.",
    "alts": [
      "Branded headphones",
      "Project introduction with microphone",
      "Fraunces and Inter typefaces",
      "Figure and microphone combined into the symbol",
      "Cream, brown, green and blue palette",
      "Card, mug and headphones",
      "Podcast promotional artwork",
      "Podcast page on a monitor",
      "Front and back of the card"
    ],
    "note": "Illustrative impact scenario; no measured metrics.",
    "video": "Animated podcast identity"
  },
  "es": {
    "back": "← Todos los proyectos",
    "eyebrow": "Identidad visual · Podcast",
    "subtitle": "Una identidad para la escucha",
    "projectLabel": "El proyecto",
    "project": "¿Cómo reconocer un podcast antes de pulsar reproducir? Para Ainda Assim, Aqui partimos del propio gesto de escuchar: una persona con auriculares y una taza entre las manos.",
    "solutionLabel": "La solución",
    "solution": "Unimos esa figura a la silueta de un micrófono. Las ondas sonoras recorren las piezas, mientras que el crema, el marrón, el verde y el azul permiten variar la identidad en medios impresos y digitales.",
    "resultsLabel": "Resultados ilustrativos",
    "results": "Repetir el símbolo en la portada, el reproductor y las piezas de difusión puede ayudar al público a reconocer el podcast y encontrar el siguiente episodio.",
    "tags": [
      "Identidad visual",
      "Tipografía",
      "Dirección de arte"
    ],
    "cta": "Conversemos",
    "gallery": "Galería · Ainda Assim, Aqui",
    "next": "Tu marca puede ser la próxima.",
    "alts": [
      "Auriculares con la marca",
      "Presentación del proyecto con micrófono",
      "Tipografías Fraunces e Inter",
      "Figura y micrófono combinados en el símbolo",
      "Paleta crema, marrón, verde y azul",
      "Tarjeta, taza y auriculares",
      "Pieza de difusión del podcast",
      "Página del podcast en un monitor",
      "Anverso y reverso de la tarjeta"
    ],
    "note": "Escenario ilustrativo de impacto, sin métricas medidas.",
    "video": "Identidad animada del podcast"
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
    document.querySelectorAll('.project-gallery video').forEach((node, i) => node.setAttribute('aria-label', text.video + ' · ' + (i + 1)));
    document.querySelectorAll('.project-gallery img').forEach((node, i) => { node.alt = text.alts[i]; });
    document.querySelector('.project-gallery').setAttribute('aria-label', text.gallery);
    document.querySelector('.project-tags').setAttribute('aria-label', language === 'en' ? 'Services' : language === 'es' ? 'Servicios' : 'Serviços');
    prepareTalkReveal();
  }
  render(window.getBrachLanguage ? window.getBrachLanguage() : 'pt-BR');
  document.addEventListener('brach:languagechange', event => render(event.detail?.language));
})();
