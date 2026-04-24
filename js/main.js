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
      showCopyToast(copied ? "Copiado!" : "Não foi possível copiar.");
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
          footerEmailToast.textContent = copied ? 'E-mail copiado!' : 'Não foi possível copiar.';
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

  const servicesData = {
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
        copy: 'Página mais completa, com ritmo visual, narrativa de venda e construção pensada para sustentar campanhas com mais ambição.',
        items: [
          'Arquitetura completa da oferta com argumentos de venda',
          'Blocos de prova, objeções, CTA e apoio comercial',
          'Direção visual polida para fortalecer a percepção de valor',
          'Experiência desenhada para campanha, captura e vendas'
        ],
        foot: 'Feita para campanhas mais fortes e uma percepção mais premium.'
      }
    }
  };

  const normalizedServicesData = {
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
  };

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
  const defaultLabel = label?.textContent || '';
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
    if(label) label.textContent = 'Enviando...';

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
  const swapEls = document.querySelectorAll('.letter-swap[data-text]');
  if(!swapEls.length) return;

  swapEls.forEach((el) => {
    const text = (el.dataset.text || '').trim();
    if(!text || el.dataset.swapReady === 'true') return;

    el.dataset.swapReady = 'true';
    if(!el.getAttribute('aria-label')){
      el.setAttribute('aria-label', text);
    }

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

    el.textContent = '';
    el.append(sr, visual);
  });
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

  if(reduceMotion || !window.gsap){
    [...revealItems, ...brandLetters].forEach((el) => {
      el.style.opacity = '1';
      el.style.transform = 'none';
      el.style.filter = 'none';
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

  gsap.timeline({
    defaults: { ease: 'power3.out' }
  })
    .to(revealItems, {
      y: 0,
      autoAlpha: 1,
      filter: 'blur(0px)',
      duration: 0.74,
      stagger: 0.08
    }, 0.08)
    .to(brandLetters, {
      yPercent: 0,
      autoAlpha: 1,
      filter: 'blur(0px)',
      duration: 1,
      stagger: 0.08
    }, 0.24);

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
// BACKGROUND PARALLAX (blobs)
// ===============================
(() => {
  const root = document.documentElement;
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const hasGsap = Boolean(window.gsap);
  const finePointer = window.matchMedia('(hover:hover) and (pointer:fine)');
  const clamp = (v, min, max) => Math.max(min, Math.min(max, v));
  const gridSize = 95;

  const setGridCells = (nx, ny) => {
    const vw = window.innerWidth || gridSize;
    const vh = window.innerHeight || gridSize;
    const baseX = Math.round((nx * vw) / gridSize) * gridSize;
    const baseY = Math.round((ny * vh) / gridSize) * gridSize;
    const offsets = [
      [0, 0],
      [gridSize, 0],
      [0, gridSize],
      [-gridSize, 0],
      [gridSize, gridSize],
      [2 * gridSize, 0]
    ];

    offsets.forEach(([offsetX, offsetY], index) => {
      root.style.setProperty(`--bgCell${index + 1}X`, `${baseX + offsetX}px`);
      root.style.setProperty(`--bgCell${index + 1}Y`, `${baseY + offsetY}px`);
    });
  };

  if(reduceMotion || !hasGsap){
    root.style.setProperty('--bgParX', '0px');
    root.style.setProperty('--bgParY', '0px');
    root.style.setProperty('--bgGlowX', '56%');
    root.style.setProperty('--bgGlowY', '22%');
    root.style.setProperty('--bgScale', '1.06');
    root.style.setProperty('--bgGridX', '0px');
    root.style.setProperty('--bgGridY', '0px');
    setGridCells(0.56, 0.22);
    return;
  }

  const state = {
    x: 0,
    y: 0,
    glowX: 56,
    glowY: 22,
    scale: 1.06
  };

  const setX = gsap.quickTo(state, 'x', { duration: 1.55, ease: 'power3.out' });
  const setY = gsap.quickTo(state, 'y', { duration: 1.7, ease: 'power3.out' });
  const setGlowX = gsap.quickTo(state, 'glowX', { duration: 1.05, ease: 'power2.out' });
  const setGlowY = gsap.quickTo(state, 'glowY', { duration: 1.2, ease: 'power2.out' });
  const setScale = gsap.quickTo(state, 'scale', { duration: 1.2, ease: 'power2.out' });

  let pointerOffsetX = 0;
  let pointerOffsetY = 0;
  let scrollOffsetY = 0;

  const render = () => {
    root.style.setProperty('--bgParX', `${state.x.toFixed(2)}px`);
    root.style.setProperty('--bgParY', `${state.y.toFixed(2)}px`);
    root.style.setProperty('--bgGlowX', `${state.glowX.toFixed(2)}%`);
    root.style.setProperty('--bgGlowY', `${state.glowY.toFixed(2)}%`);
    root.style.setProperty('--bgScale', state.scale.toFixed(3));
    root.style.setProperty('--bgGridX', `${(state.x * 0.18).toFixed(2)}px`);
    root.style.setProperty('--bgGridY', `${(state.y * 0.14).toFixed(2)}px`);
  };

  const syncBackground = () => {
    setX(pointerOffsetX);
    setY(pointerOffsetY + scrollOffsetY);
  };

  const onScroll = () => {
    scrollOffsetY = clamp(-window.scrollY * 0.048, -112, 112);
    syncBackground();
  };

  const onPointerMove = (event) => {
    if(!finePointer.matches) return;
    const vw = window.innerWidth || 1;
    const vh = window.innerHeight || 1;
    const nx = event.clientX / vw;
    const ny = event.clientY / vh;

    pointerOffsetX = clamp((nx - 0.5) * 68, -68, 68);
    pointerOffsetY = clamp((ny - 0.5) * 46, -46, 46);

    setGlowX(nx * 100);
    setGlowY(ny * 100);
    setScale(1.22);
    setGridCells(nx, ny);
    syncBackground();
  };

  const resetPointer = () => {
    pointerOffsetX = 0;
    pointerOffsetY = 0;
    setGlowX(56);
    setGlowY(22);
    setScale(1.06);
    setGridCells(0.56, 0.22);
    syncBackground();
  };

  gsap.ticker.add(render);
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('pointermove', onPointerMove, { passive: true });
  document.documentElement.addEventListener('pointerleave', resetPointer, { passive: true });

  onScroll();
  resetPointer();
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
  const content = {
    terms: "<p>Termos de Servi\u00e7o</p>\n<p>Termos de Servi\u00e7o<br>(\u00faltima atualiza\u00e7\u00e3o)</p>\n<p>07 de abril de 2026</p>\n<p>1. Uso dos Servi\u00e7os</p>\n<p>Para utilizar os servi\u00e7os da Brach, voc\u00ea deve ter pelo menos 18 anos. Ao acessar e utilizar nossos servi\u00e7os, voc\u00ea concorda em faz\u00ea-lo de forma legal e em conformidade com estes Termos.</p>\n<p>2. Propriedade Intelectual</p>\n<p>Todo o conte\u00fado presente neste site, incluindo logotipos, textos, elementos visuais, layouts e materiais digitais, \u00e9 de propriedade da Brach ou de seus parceiros e est\u00e1 protegido por leis de direitos autorais e propriedade intelectual.</p>\n<p>N\u00e3o \u00e9 permitido copiar, reproduzir, distribuir ou modificar qualquer conte\u00fado sem autoriza\u00e7\u00e3o pr\u00e9via.</p>\n<p>3. Conte\u00fado do Usu\u00e1rio</p>\n<p>Ao enviar qualquer conte\u00fado para a Brach (como mensagens, feedbacks ou materiais), voc\u00ea nos concede uma licen\u00e7a n\u00e3o exclusiva, gratuita e v\u00e1lida para uso, exibi\u00e7\u00e3o e distribui\u00e7\u00e3o desse conte\u00fado, quando necess\u00e1rio para a presta\u00e7\u00e3o dos nossos servi\u00e7os.</p>\n<p>Voc\u00ea \u00e9 respons\u00e1vel por garantir que o conte\u00fado enviado n\u00e3o viole leis ou direitos de terceiros.</p>\n<p>4. Limita\u00e7\u00e3o de Responsabilidade</p>\n<p>A Brach n\u00e3o se responsabiliza por quaisquer danos diretos ou indiretos decorrentes do uso dos servi\u00e7os ou do site.</p>\n<p>N\u00e3o garantimos que o funcionamento ser\u00e1 cont\u00ednuo, livre de erros ou totalmente seguro, embora busquemos sempre a melhor performance e estabilidade.</p>\n<p>5. Encerramento de Acesso</p>\n<p>Podemos suspender ou encerrar o acesso aos nossos servi\u00e7os a qualquer momento, sem aviso pr\u00e9vio, caso haja viola\u00e7\u00e3o destes Termos.</p>\n<p>6. Atualiza\u00e7\u00f5es dos Termos</p>\n<p>Estes Termos podem ser atualizados a qualquer momento. O uso cont\u00ednuo dos servi\u00e7os ap\u00f3s altera\u00e7\u00f5es significa que voc\u00ea concorda com a vers\u00e3o mais recente.</p>\n<p>7. Contato</p>\n<p>Em caso de d\u00favidas, entre em contato com a gente:<br>\ud83d\udce9 agenciabrach@gmail.com</p>",
    privacy: "<p>Politica de privacidade</p>\n<p>Pol\u00edtica de Privacidade<br>(\u00faltima atualiza\u00e7\u00e3o)</p>\n<p>07 de abril de 2026</p>\n<p>1. Informa\u00e7\u00f5es que Coletamos</p>\n<p>Informa\u00e7\u00f5es pessoais:<br>Nome, e-mail, telefone e outros dados que voc\u00ea fornece ao entrar em contato ou utilizar nossos servi\u00e7os.</p>\n<p>Dados de uso:<br>Endere\u00e7o IP, tipo de navegador, p\u00e1ginas acessadas e outras informa\u00e7\u00f5es coletadas por meio de cookies e ferramentas de an\u00e1lise.</p>\n<p>2. Como Utilizamos suas Informa\u00e7\u00f5es</p>\n<p>Utilizamos seus dados para:</p>\n<p>Oferecer e melhorar nossos servi\u00e7os<br>Responder solicita\u00e7\u00f5es e prestar suporte<br>Enviar comunica\u00e7\u00f5es de marketing (voc\u00ea pode cancelar a qualquer momento)<br>Analisar o comportamento dos usu\u00e1rios e o desempenho do site</p>\n<p>3. Compartilhamento de Informa\u00e7\u00f5es</p>\n<p>A Brach n\u00e3o vende suas informa\u00e7\u00f5es pessoais.</p>\n<p>Seus dados podem ser compartilhados apenas com servi\u00e7os de terceiros que auxiliam na opera\u00e7\u00e3o do site e na presta\u00e7\u00e3o dos nossos servi\u00e7os, sempre de forma limitada ao necess\u00e1rio.</p>\n<p>4. Cookies e Rastreamento</p>\n<p>Utilizamos cookies para melhorar sua experi\u00eancia e coletar dados de navega\u00e7\u00e3o.</p>\n<p>Voc\u00ea pode desativar os cookies nas configura\u00e7\u00f5es do seu navegador, mas isso pode impactar o funcionamento de algumas funcionalidades do site.</p>\n<p>5. Seguran\u00e7a</p>\n<p>Adotamos medidas razo\u00e1veis para proteger suas informa\u00e7\u00f5es. Ainda assim, nenhum sistema \u00e9 totalmente seguro.</p>\n<p>Ao utilizar nossos servi\u00e7os, voc\u00ea reconhece e aceita esse risco.</p>\n<p>6. Seus Direitos</p>\n<p>Voc\u00ea pode solicitar acesso, corre\u00e7\u00e3o ou exclus\u00e3o dos seus dados pessoais a qualquer momento.</p>\n<p>Para isso, entre em contato:<br>\ud83d\udce9 agenciabrach@gmail.com</p>\n<p>7. Altera\u00e7\u00f5es nesta Pol\u00edtica</p>\n<p>Esta Pol\u00edtica pode ser atualizada periodicamente. A vers\u00e3o mais recente estar\u00e1 sempre dispon\u00edvel em nosso site.</p>"
  };

  function openPolicy(kind){
    title.textContent = kind === 'terms' ? 'Termos de uso' : 'Políticas de Privacidade';
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
