    const overlay = document.getElementById('overlay');
    const openMenu = document.getElementById('openMenu');
    const closeMenu = document.getElementById('closeMenu');
    const main = document.querySelector('main');

    const overlayPanel = document.querySelector('.overlay__panel');
    const overlayRight = document.querySelector('.overlay__right');
    const navLinks = gsap.utils.toArray('.overlay__nav .navlink');
    const contactBlocks = gsap.utils.toArray('.overlay__contact > div');

    const copyBtn = document.getElementById('copyEmailBtn');
    const emailLink = document.getElementById('emailLink');
    const copyToast = document.getElementById('copyToast');

    const reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const menuTl = gsap.timeline({
      paused: true,
      defaults: { ease: "expo.out" }
    });

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
      menuTl.reverse();

      menuTl.eventCallback("onReverseComplete", null);
      menuTl.eventCallback("onReverseComplete", () => {
        overlay.classList.remove('is-open');
        overlay.setAttribute('aria-hidden','true');
        openMenu.setAttribute('aria-expanded','false');
        unlockScroll();
        gsap.set(overlay, { clearProps: "opacity,visibility" });

        // Restaura fundo para leitores de tela
        if(main){
          main.removeAttribute('aria-hidden');
          if('inert' in main) main.inert = false;
        }

        document.removeEventListener('keydown', trapFocus);

        // Devolve o foco para onde estava
        if(lastFocus && typeof lastFocus.focus === 'function'){
          lastFocus.focus({ preventScroll: true });
        }

        if(typeof afterClose === 'function') afterClose();
      });
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

    // Hover weight GSAP
    gsap.set(".hover-gsap", { fontVariationSettings: "'wght' 480" });

    document.querySelectorAll(".hover-gsap").forEach(el => {
      el.addEventListener("mouseenter", () => {
        gsap.to(el, { fontVariationSettings: "'wght' 760", duration: 0.4, ease: "power3.out", overwrite: "auto" });
      });
      el.addEventListener("mouseleave", () => {
        gsap.to(el, { fontVariationSettings: "'wght' 480", duration: 0.4, ease: "power3.out", overwrite: "auto" });
      });
      el.addEventListener("focus", () => {
        gsap.to(el, { fontVariationSettings: "'wght' 760", duration: 0.35, ease: "power3.out", overwrite: "auto" });
      });
      el.addEventListener("blur", () => {
        gsap.to(el, { fontVariationSettings: "'wght' 480", duration: 0.35, ease: "power3.out", overwrite: "auto" });
      });
    });

    /* Copy email */
    async function copyEmail(){
      const emailText = (emailLink?.innerText || "").trim();
      if(!emailText) return;

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

    // Rodapé: copiar email + (opcional) abrir mailto
    document.querySelectorAll('[data-copy-email]').forEach((link) => {
      link.addEventListener('click', async (e) => {
        const href = link.getAttribute('href') || '';
        const email = (link.textContent || '').trim();
        const toast = document.getElementById('footerEmailToast');

        // Copia primeiro
        e.preventDefault();
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
    });


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
    img.alt = title ? `Prévia do trabalho: ${title}` : 'Prévia do trabalho';
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
// BACKGROUND PARALLAX (blobs)
// ===============================
(() => {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(reduceMotion) return;

  const root = document.documentElement;

  let targetX = 0;
  let targetY = 0;
  let scrollBaseY = 0;
  let mouseOffsetY = 0;
  let curX = 0;
  let curY = 0;

  const clamp = (v, min, max) => Math.max(min, Math.min(max, v));

  const onScroll = () => {
    const y = window.scrollY || 0;
    // fator baixo pra ficar elegante (parallax, não "drift")
    scrollBaseY = clamp(-y * 0.045, -160, 160);
    targetY = clamp(scrollBaseY + mouseOffsetY, -170, 170);
  };

  const onMove = (e) => {
    const vw = window.innerWidth || 1;
    const vh = window.innerHeight || 1;
    const nx = (e.clientX / vw) * 2 - 1; // -1..1
    const ny = (e.clientY / vh) * 2 - 1;
    targetX = clamp(nx * 26, -28, 28);
    // leve influência do mouse no Y (sem acumular)
    mouseOffsetY = clamp(ny * 10, -10, 10);
    targetY = clamp(scrollBaseY + mouseOffsetY, -170, 170);
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('mousemove', onMove, { passive: true });
  onScroll();

  const lerp = (a, b, t) => a + (b - a) * t;
  let t0 = performance.now();

  const tick = (now) => {
    const dt = Math.min(64, now - t0);
    t0 = now;
    const k = 1 - Math.pow(0.0015, dt); // suavidade estável por fps

    curX = lerp(curX, targetX, k);
    curY = lerp(curY, targetY, k);

    // micro-oscilação pra dar vida
    const wobble = Math.sin(now / 2400) * 6;
    root.style.setProperty('--bgParX', (curX + wobble).toFixed(2));
    root.style.setProperty('--bgParY', curY.toFixed(2));

    requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
})();
