(function () {
  const caseLinks = Array.from(document.querySelectorAll('.cases-section .case-link'));
  const hasGsap = Boolean(window.gsap);
  const reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!caseLinks.length) return;

  const UI = {
    'pt-BR': {
      openingExternal: 'ABRINDO PROJETO'
    },
    en: {
      openingExternal: 'OPENING PROJECT'
    },
    es: {
      openingExternal: 'ABRIENDO PROYECTO'
    }
  };

  function getLanguage() {
    if (typeof window.getBrachLanguage === 'function') {
      return window.getBrachLanguage();
    }
    return 'pt-BR';
  }

  function getStrings(lang = getLanguage()) {
    return UI[lang] || UI['pt-BR'];
  }

  function isModifiedEvent(event) {
    return event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0;
  }

  function cleanupTransitionArtifacts() {
    document.documentElement.classList.remove('brach-case-transitioning');
    document.body.classList.remove('brach-case-transitioning');
    document.querySelectorAll('.brach-cases-transition-layer').forEach((node) => node.remove());
  }

  function createTransitionLayer(src, alt, color, label) {
    const layer = document.createElement('div');
    layer.className = 'brach-cases-transition-layer';
    layer.innerHTML = `
      <div class="brach-cases-transition-bg"></div>
      <div class="brach-cases-transition-frame">
        <img class="brach-cases-transition-image" alt="">
      </div>
      <div class="brach-cases-transition-copy"></div>
    `;

    const bg = layer.querySelector('.brach-cases-transition-bg');
    const frame = layer.querySelector('.brach-cases-transition-frame');
    const image = layer.querySelector('.brach-cases-transition-image');
    const copy = layer.querySelector('.brach-cases-transition-copy');

    image.src = src;
    image.alt = alt || '';
    copy.textContent = label || '';
    layer.style.setProperty('--brach-cases-transition-color', color || '#07104f');

    document.body.appendChild(layer);

    return { layer, bg, frame, image, copy };
  }

  function finishCaseNavigation(link) {
    window.location.assign(link.href);
  }

  function startCaseExit(link, image) {
    const href = link?.href;
    if (!href) return;

    if (!hasGsap || reduceMotion || !image) {
      window.location.href = href;
      return;
    }

    if (document.documentElement.classList.contains('brach-case-transitioning')) return;

    const rect = image.getBoundingClientRect();
    if (!rect.width || !rect.height) {
      window.location.href = href;
      return;
    }

    cleanupTransitionArtifacts();
    document.documentElement.classList.add('brach-case-transitioning');
    document.body.classList.add('brach-case-transitioning');

    const mediaShell = image.closest('.case-card__media-inner, .case-card__media');
    const borderRadius = window.getComputedStyle(mediaShell || image).borderRadius || '28px';
    const fadeTargets = [
      document.querySelector('.topbar'),
      document.querySelector('.cases-head'),
      document.querySelector('.case-preview'),
      ...Array.from(document.querySelectorAll('.case-row'))
    ].filter(Boolean);

    const strings = getStrings();
    const { layer, bg, frame, image: clone, copy } = createTransitionLayer(
      image.currentSrc || image.src,
      image.alt || link.dataset.title || '',
      link.getAttribute('data-case-color') || '#07104f',
      strings.openingExternal
    );

    const targetWidth = Math.min(window.innerWidth * 0.88, rect.width * 1.44);
    const targetHeight = Math.min(window.innerHeight * 0.8, rect.height * 1.34);
    const targetLeft = (window.innerWidth - targetWidth) / 2;
    const targetTop = (window.innerHeight - targetHeight) / 2;

    frame.style.left = `${rect.left}px`;
    frame.style.top = `${rect.top}px`;
    frame.style.width = `${rect.width}px`;
    frame.style.height = `${rect.height}px`;
    frame.style.borderRadius = borderRadius;
    layer.style.visibility = 'visible';

    window.gsap.set(layer, { autoAlpha: 1 });

    const timeline = window.gsap.timeline({
      defaults: { ease: 'power3.inOut' },
      onComplete: () => finishCaseNavigation(link)
    });

    timeline.to(fadeTargets, {
      autoAlpha: 0,
      y: 16,
      duration: 0.28,
      stagger: 0.02,
      ease: 'power2.out'
    }, 0);

    timeline.to(bg, {
      opacity: 0.96,
      duration: 0.34,
      ease: 'power2.out'
    }, 0.04);

    timeline.to(frame, {
      left: targetLeft,
      top: targetTop,
      width: targetWidth,
      height: targetHeight,
      borderRadius: 28,
      duration: 0.7,
      ease: 'power3.inOut'
    }, 0.04);

    timeline.fromTo(copy, {
      autoAlpha: 0,
      y: 18
    }, {
      autoAlpha: 1,
      y: 0,
      duration: 0.24,
      ease: 'power2.out'
    }, 0.16);

  }

  caseLinks.forEach((link) => {
    link.removeAttribute('target');

    link.addEventListener('click', (event) => {
      if (event.defaultPrevented || isModifiedEvent(event)) return;
      const image = link.querySelector('.case-card__image');
      event.preventDefault();
      event.stopPropagation();
      event.stopImmediatePropagation();
      startCaseExit(link, image);
    }, true);
  });

  window.addEventListener('pageshow', cleanupTransitionArtifacts);
})();
