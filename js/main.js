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
      defaults: { ease: "power3.out" }
    });

    menuTl
      .fromTo(overlay, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.22, ease: "power2.out" }, 0)
      .fromTo(overlayPanel, { y: -8, scale: 1.01, filter: "blur(2px)" }, { y: 0, scale: 1, filter: "blur(0px)", duration: 0.5 }, 0)
      .fromTo(overlayRight, { y: 12, opacity: 0 }, { y: 0, opacity: 1, duration: 0.45 }, 0.06)
      .fromTo(navLinks, { y: 12, opacity: 0 }, { y: 0, opacity: 1, duration: 0.45, stagger: 0.05 }, 0.1)
      .fromTo(contactBlocks, { y: 10, opacity: 0 }, { y: 0, opacity: 1, duration: 0.4, stagger: 0.06 }, 0.18);

    function openOverlay(){
      if(overlay.classList.contains('is-open')) return;
      overlay.classList.add('is-open');
      overlay.setAttribute('aria-hidden','false');

      document.body.classList.add('menu-opened');
      document.body.style.overflow = 'hidden';

      menuTl.play(0);
    }

    function closeOverlayMenu(){
      if(!overlay.classList.contains('is-open')) return;

      document.body.classList.remove('menu-opened');
      menuTl.reverse();

      menuTl.eventCallback("onReverseComplete", null);
      menuTl.eventCallback("onReverseComplete", () => {
        overlay.classList.remove('is-open');
        overlay.setAttribute('aria-hidden','true');
        document.body.style.overflow = '';
        gsap.set(overlay, { clearProps: "opacity,visibility" });
      });
    }

    openMenu.addEventListener('click', openOverlay);
    closeMenu.addEventListener('click', closeOverlayMenu);

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
