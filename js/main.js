const overlay = document.getElementById('overlay');
    const openMenu = document.getElementById('openMenu');
    const closeMenu = document.getElementById('closeMenu');

    const overlayPanel = document.querySelector('.overlay__panel');
    const overlayRight = document.querySelector('.overlay__right');
    const navLinks = gsap.utils.toArray('.overlay__nav .navlink');
    const contactBlocks = gsap.utils.toArray('.overlay__contact > div');

    const copyBtn = document.getElementById('copyEmailBtn');
    const emailLink = document.getElementById('emailLink');
    const copyToast = document.getElementById('copyToast');

    const menuTl = gsap.timeline({
      paused: true,
      defaults: { ease: "expo.out" }
    });

    // Animação mais "fluida" (menos degraus, mais overlap)
    menuTl
      .fromTo(overlay, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.28, ease: "power2.out" }, 0)
      .fromTo(
        overlayPanel,
        { y: -10, scale: 1.02, filter: "blur(3px)" },
        { y: 0, scale: 1, filter: "blur(0px)", duration: 0.62 },
        0
      )
      .fromTo(overlayRight, { y: 16, opacity: 0 }, { y: 0, opacity: 1, duration: 0.52 }, 0.08)
      .fromTo(navLinks, { y: 16, opacity: 0 }, { y: 0, opacity: 1, duration: 0.52, stagger: 0.055 }, 0.10)
      .fromTo(contactBlocks, { y: 14, opacity: 0 }, { y: 0, opacity: 1, duration: 0.48, stagger: 0.07 }, 0.16);

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
      overlay.classList.add('is-open');
      overlay.setAttribute('aria-hidden','false');

      document.body.classList.add('menu-opened');
      lockScroll();

      menuTl.play(0);
    }

    function closeOverlayMenu(afterClose){
      if(!overlay.classList.contains('is-open')) return;

      document.body.classList.remove('menu-opened');
      menuTl.reverse();

      menuTl.eventCallback("onReverseComplete", null);
      menuTl.eventCallback("onReverseComplete", () => {
        overlay.classList.remove('is-open');
        overlay.setAttribute('aria-hidden','true');
        unlockScroll();
        gsap.set(overlay, { clearProps: "opacity,visibility" });
        if(typeof afterClose === 'function') afterClose();
      });
    }

    openMenu.addEventListener('click', openOverlay);
    closeMenu.addEventListener('click', closeOverlayMenu);

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
