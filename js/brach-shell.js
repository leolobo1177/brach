(() => {
  const SHELL_DEFAULT_LANGUAGE = "pt-BR";
  const SHELL_I18N = {
    "pt-BR": {
      htmlLang: "pt-BR",
      topbar: {
        homeAria: "Início",
        languageAria: "Selecionar idioma",
        menuOpenAria: "Abrir menu",
        menuCloseAria: "Fechar menu",
        menuOpen: "MENU",
        menuClose: "FECHAR"
      },
      overlay: {
        title: "Menu principal",
        navAria: "Menu",
        nav: ["SOBRE", "SERVIÇOS", "CASOS", "CONTATO"],
        emailKicker: "(E-MAIL)",
        socialKicker: "(REDES SOCIAIS)",
        copyAria: "Copiar e-mail",
        copyOnly: "Copiar",
        copySuccess: "Copiado!",
        copyError: "Não foi possível copiar.",
        emailCopied: "E-mail copiado!"
      },
      footer: {
        title: "Rodapé",
        tickerAria: "Web design, branding, marketing, design",
        ticker: "WEB DESIGN • BRANDING • MARKETING • DESIGN • WEB DESIGN • BRANDING • MARKETING • DESIGN •",
        navTitle: "Navegação",
        socialTitle: "Redes Sociais",
        contactTitle: "Fale conosco",
        nav: ["Home", "Sobre", "Serviços", "Casos"],
        form: "Formulário"
      },
      labels: {
        skip: "Pular para o conteúdo",
        languages: {
          "pt-BR": "Português do Brasil",
          en: "English",
          es: "Español"
        }
      }
    },
    en: {
      htmlLang: "en",
      topbar: {
        homeAria: "Home",
        languageAria: "Select language",
        menuOpenAria: "Open menu",
        menuCloseAria: "Close menu",
        menuOpen: "MENU",
        menuClose: "CLOSE"
      },
      overlay: {
        title: "Main menu",
        navAria: "Menu",
        nav: ["ABOUT", "SERVICES", "CASES", "CONTACT"],
        emailKicker: "(EMAIL)",
        socialKicker: "(SOCIAL MEDIA)",
        copyAria: "Copy email",
        copyOnly: "Copy",
        copySuccess: "Copied!",
        copyError: "Could not copy.",
        emailCopied: "Email copied!"
      },
      footer: {
        title: "Footer",
        tickerAria: "Web design, branding, marketing, design",
        ticker: "WEB DESIGN • BRANDING • MARKETING • DESIGN • WEB DESIGN • BRANDING • MARKETING • DESIGN •",
        navTitle: "Navigation",
        socialTitle: "Social Media",
        contactTitle: "Contact",
        nav: ["Home", "About", "Services", "Cases"],
        form: "Form"
      },
      labels: {
        skip: "Skip to content",
        languages: {
          "pt-BR": "Brazilian Portuguese",
          en: "English",
          es: "Spanish"
        }
      }
    },
    es: {
      htmlLang: "es",
      topbar: {
        homeAria: "Inicio",
        languageAria: "Seleccionar idioma",
        menuOpenAria: "Abrir menú",
        menuCloseAria: "Cerrar menú",
        menuOpen: "MENÚ",
        menuClose: "CERRAR"
      },
      overlay: {
        title: "Menú principal",
        navAria: "Menú",
        nav: ["SOBRE", "SERVICIOS", "CASOS", "CONTACTO"],
        emailKicker: "(EMAIL)",
        socialKicker: "(REDES SOCIALES)",
        copyAria: "Copiar correo",
        copyOnly: "Copiar",
        copySuccess: "¡Copiado!",
        copyError: "No se pudo copiar.",
        emailCopied: "¡Correo copiado!"
      },
      footer: {
        title: "Pie de página",
        tickerAria: "Web design, branding, marketing, design",
        ticker: "WEB DESIGN • BRANDING • MARKETING • DESIGN • WEB DESIGN • BRANDING • MARKETING • DESIGN •",
        navTitle: "Navegación",
        socialTitle: "Redes Sociales",
        contactTitle: "Hable con nosotros",
        nav: ["Inicio", "Sobre", "Servicios", "Casos"],
        form: "Formulario"
      },
      labels: {
        skip: "Saltar al contenido",
        languages: {
          "pt-BR": "Portugués de Brasil",
          en: "English",
          es: "Español"
        }
      }
    }
  };

  function getStoredLanguage() {
    try {
      return window.localStorage ? window.localStorage.getItem("brach-language") : null;
    } catch (error) {
      return null;
    }
  }

  function getBrachLanguage() {
    const stored = getStoredLanguage();
    return SHELL_I18N[stored] ? stored : SHELL_DEFAULT_LANGUAGE;
  }

  function getBrachLocale(lang = getBrachLanguage()) {
    return SHELL_I18N[lang] || SHELL_I18N[SHELL_DEFAULT_LANGUAGE];
  }

  function setBrachLanguage(lang) {
    const nextLanguage = SHELL_I18N[lang] ? lang : SHELL_DEFAULT_LANGUAGE;

    try {
      window.localStorage?.setItem("brach-language", nextLanguage);
    } catch (error) {
      // noop
    }

    document.dispatchEvent(new CustomEvent("brach:languagechange", {
      detail: { language: nextLanguage }
    }));
  }

  window.getBrachLanguage = getBrachLanguage;
  window.getBrachLocale = getBrachLocale;
  window.setBrachLanguage = setBrachLanguage;

  const root = document.documentElement;
  const skipLink = document.querySelector(".skip-link");
  const brandLink = document.querySelector(".brand");
  const menuLabel = document.getElementById("menuLabel");
  const closeLabel = document.getElementById("closeLabel");
  const openMenu = document.getElementById("openMenu");
  const closeMenu = document.getElementById("closeMenu");
  const menuTitle = document.getElementById("menuTitle");
  const overlay = document.getElementById("overlay");
  const overlayPanel = document.getElementById("menuPanel");
  const overlayRight = document.querySelector(".overlay__right");
  const overlayNav = document.querySelector(".overlay__nav");
  const overlayKickers = Array.from(document.querySelectorAll(".overlay__contact .kicker"));
  const navLinks = Array.from(document.querySelectorAll(".overlay__nav .navlink"));
  const navTexts = Array.from(document.querySelectorAll(".overlay__nav .navtext"));
  const socialGridLinks = Array.from(document.querySelectorAll(".social-grid .social"));
  const socialIconLinks = Array.from(document.querySelectorAll(".social-icons .icon-link"));
  const copyBtn = document.getElementById("copyEmailBtn");
  const copyBtnSr = copyBtn?.querySelector(".sr-only");
  const copyToast = document.getElementById("copyToast");
  const footerEmailToast = document.getElementById("footerEmailToast");
  const emailLink = document.getElementById("emailLink");
  const footerEmailLink = document.querySelector("[data-copy-email]");
  const languageToggle = document.getElementById("languageToggle");
  const languageSwitcher = document.getElementById("langSwitcher");
  const languageOptionsList = document.getElementById("languageOptions");
  const languageSurface = languageSwitcher?.querySelector(".lang-switcher__surface");
  const languageButtons = Array.from(languageSwitcher?.querySelectorAll(".lang-switcher__option") || []);
  const footerTitle = document.getElementById("footerTitle");
  const footerTicker = document.querySelector(".footer-ticker");
  const footerTickerTexts = Array.from(document.querySelectorAll(".ticker__text"));
  const footerColTitles = Array.from(document.querySelectorAll(".footer-col__title"));
  const footerNavLinks = Array.from(document.querySelectorAll(".footer-nav .footer-link .u"));
  const footerForm = document.querySelector('.footer-contactlist a[href*="#contato"] .u');
  const main = document.querySelector("main");
  const hasGsap = Boolean(window.gsap);
  const reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const getClosedHeight = () => (window.innerWidth <= 920 ? 54 : 64);
  const getOpenHeight = () => (window.innerWidth <= 920 ? 164 : 196);

  let activeLanguage = getBrachLanguage();
  let switcherTl = null;
  let menuTl = null;
  let lastFocus = null;
  let footerToastTimer = null;
  let copyToastTimer = null;

  const scrollLock = {
    y: 0,
    applied: false,
    onScroll: null
  };

  function setNodeText(node, text) {
    if (!node) return;
    node.textContent = text;
    if (node.dataset && Object.prototype.hasOwnProperty.call(node.dataset, "text")) {
      node.dataset.text = text;
    }
  }

  function updateLanguageButtons(lang) {
    languageButtons.forEach((button) => {
      const isActive = button.dataset.lang === lang;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-selected", String(isActive));
      button.setAttribute("aria-label", getBrachLocale(lang).labels.languages[button.dataset.lang] || button.dataset.lang || "");
    });
  }

  function ensureSwitcherTimeline() {
    if (!languageSurface || !hasGsap || switcherTl) return;

    switcherTl = window.gsap.timeline({
      paused: true,
      defaults: { ease: "power3.out" }
    });

    window.gsap.set(languageButtons, { autoAlpha: 0, y: 14 });

    switcherTl
      .to(languageSurface, {
        height: getOpenHeight(),
        borderRadius: 34,
        duration: reduceMotion ? 0.12 : 0.34
      }, 0)
      .to(languageButtons, {
        autoAlpha: 1,
        y: 0,
        duration: reduceMotion ? 0.12 : 0.28,
        stagger: reduceMotion ? 0 : { each: 0.08, from: "end" }
      }, reduceMotion ? 0 : 0.08);
  }

  function openLanguageSwitcher() {
    if (!languageSwitcher || languageSwitcher.classList.contains("is-open")) return;

    languageSwitcher.classList.add("is-open");
    languageToggle?.setAttribute("aria-expanded", "true");

    if (!hasGsap) {
      if (languageSurface) {
        languageSurface.style.height = `${getOpenHeight()}px`;
        languageSurface.style.borderRadius = "34px";
      }

      languageButtons.forEach((button) => {
        button.style.opacity = "1";
        button.style.transform = "translateY(0)";
      });
      return;
    }

    ensureSwitcherTimeline();
    switcherTl?.play(0);
  }

  function closeLanguageSwitcher() {
    if (!languageSwitcher || !languageSwitcher.classList.contains("is-open")) return;

    languageSwitcher.classList.remove("is-open");
    languageToggle?.setAttribute("aria-expanded", "false");

    if (!hasGsap) {
      if (languageSurface) {
        languageSurface.style.height = `${getClosedHeight()}px`;
        languageSurface.style.borderRadius = "999px";
      }

      languageButtons.forEach((button) => {
        button.style.opacity = "0";
        button.style.transform = "translateY(16px)";
      });
      return;
    }

    ensureSwitcherTimeline();
    switcherTl?.reverse();
  }

  function applyLanguage(lang) {
    const locale = getBrachLocale(lang);
    activeLanguage = lang;

    root.lang = locale.htmlLang;
    if (document.body) {
      document.body.dataset.language = lang;
    }

    if (skipLink) skipLink.textContent = locale.labels.skip;
    if (brandLink) brandLink.setAttribute("aria-label", locale.topbar.homeAria);
    if (languageToggle) languageToggle.setAttribute("aria-label", locale.topbar.languageAria);
    if (languageOptionsList) languageOptionsList.setAttribute("aria-label", locale.topbar.languageAria);
    if (openMenu) openMenu.setAttribute("aria-label", locale.topbar.menuOpenAria);
    if (closeMenu) closeMenu.setAttribute("aria-label", locale.topbar.menuCloseAria);
    if (menuLabel) setNodeText(menuLabel, locale.topbar.menuOpen);
    if (closeLabel) setNodeText(closeLabel, locale.topbar.menuClose);
    if (menuTitle) menuTitle.textContent = locale.overlay.title;
    if (overlayNav) overlayNav.setAttribute("aria-label", locale.overlay.navAria);
    if (copyBtn) copyBtn.setAttribute("aria-label", locale.overlay.copyAria);
    if (copyBtnSr) copyBtnSr.textContent = locale.overlay.copyOnly;
    if (copyToast) copyToast.textContent = locale.overlay.copySuccess;
    if (footerEmailToast) footerEmailToast.textContent = "";

    navLinks.forEach((link, index) => {
      const text = locale.overlay.nav[index] || "";
      link.dataset.text = text;
      link.setAttribute("aria-label", text);
    });

    navTexts.forEach((textEl, index) => {
      setNodeText(textEl, locale.overlay.nav[index] || "");
    });

    if (overlayKickers[0]) overlayKickers[0].textContent = locale.overlay.emailKicker;
    if (overlayKickers[1]) overlayKickers[1].textContent = locale.overlay.socialKicker;

    socialGridLinks.forEach((link) => {
      const labelNode = link.querySelector(".u");
      if (labelNode) {
        setNodeText(labelNode, labelNode.dataset.text || labelNode.textContent || "");
      }
    });

    socialIconLinks.forEach((link) => {
      const label = link.getAttribute("aria-label");
      if (label) {
        link.setAttribute("aria-label", label);
      }
    });

    if (footerTitle) footerTitle.textContent = locale.footer.title;
    if (footerTicker) footerTicker.setAttribute("aria-label", locale.footer.tickerAria);
    footerTickerTexts.forEach((textNode) => {
      textNode.textContent = locale.footer.ticker;
    });

    footerColTitles.forEach((titleNode, index) => {
      const labels = [
        locale.footer.navTitle,
        locale.footer.socialTitle,
        locale.footer.contactTitle
      ];
      titleNode.textContent = labels[index] || "";
    });

    footerNavLinks.forEach((link, index) => {
      setNodeText(link, locale.footer.nav[index] || "");
    });

    if (footerForm) {
      setNodeText(footerForm, locale.footer.form);
    }

    updateLanguageButtons(lang);
    document.dispatchEvent(new CustomEvent("brach:shelltranslated", {
      detail: { language: lang, locale }
    }));
  }

  function getFocusable(container) {
    if (!container) return [];

    return [...container.querySelectorAll(
      'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])'
    )].filter((element) => !element.hasAttribute("disabled") && element.getAttribute("aria-hidden") !== "true");
  }

  function trapFocus(event) {
    if (!overlay?.classList.contains("is-open") || event.key !== "Tab") return;

    const focusables = getFocusable(overlayPanel);
    if (!focusables.length) return;

    const first = focusables[0];
    const last = focusables[focusables.length - 1];

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }

  function lockScroll() {
    if (scrollLock.applied) return;

    scrollLock.y = window.scrollY || window.pageYOffset || 0;
    document.body.style.position = "fixed";
    document.body.style.top = `${-scrollLock.y}px`;
    document.body.style.left = "0";
    document.body.style.right = "0";
    document.body.style.width = "100%";
    document.body.style.overflow = "hidden";

    scrollLock.onScroll = () => {
      window.scrollTo(0, scrollLock.y);
    };

    window.addEventListener("scroll", scrollLock.onScroll, { passive: false });
    scrollLock.applied = true;
  }

  function unlockScroll() {
    if (!scrollLock.applied) return;

    document.body.style.position = "";
    document.body.style.top = "";
    document.body.style.left = "";
    document.body.style.right = "";
    document.body.style.width = "";
    document.body.style.overflow = "";
    window.scrollTo(0, scrollLock.y);

    if (scrollLock.onScroll) {
      window.removeEventListener("scroll", scrollLock.onScroll);
    }

    scrollLock.applied = false;
    scrollLock.onScroll = null;
  }

  function buildMenuTimeline() {
    if (!overlay || !overlayPanel || !hasGsap) return null;

    const navItems = window.gsap.utils.toArray(".overlay__nav .navlink");
    const contactBlocks = window.gsap.utils.toArray(".overlay__contact > div");
    const duration = (value) => (reduceMotion ? Math.min(value, 0.18) : value);

    return window.gsap.timeline({
      paused: true,
      defaults: { ease: "expo.out" }
    })
      .fromTo(overlay, { autoAlpha: 0 }, { autoAlpha: 1, duration: duration(0.32), ease: "power2.out" }, 0)
      .fromTo(
        overlayPanel,
        { xPercent: 100, filter: reduceMotion ? "none" : "blur(10px)" },
        { xPercent: 0, filter: "blur(0px)", duration: duration(0.78) },
        0
      )
      .fromTo(
        overlayRight,
        { y: 14, opacity: 0 },
        { y: 0, opacity: 1, duration: duration(0.56) },
        reduceMotion ? 0 : 0.1
      )
      .fromTo(
        navItems,
        { y: 14, opacity: 0 },
        { y: 0, opacity: 1, duration: duration(0.56), stagger: reduceMotion ? 0 : 0.055 },
        reduceMotion ? 0 : 0.12
      )
      .fromTo(
        contactBlocks,
        { y: 12, opacity: 0 },
        { y: 0, opacity: 1, duration: duration(0.52), stagger: reduceMotion ? 0 : 0.07 },
        reduceMotion ? 0 : 0.18
      );
  }

  function openOverlayMenu() {
    if (!overlay || overlay.classList.contains("is-open")) return;

    lastFocus = document.activeElement;
    overlay.classList.add("is-open");
    overlay.setAttribute("aria-hidden", "false");
    openMenu?.setAttribute("aria-expanded", "true");
    document.body.classList.add("menu-opened");

    lockScroll();

    if (main) {
      main.setAttribute("aria-hidden", "true");
      if ("inert" in main) main.inert = true;
    }

    document.addEventListener("keydown", trapFocus);

    if (menuTl) {
      menuTl.play(0);
    }

    const focusables = getFocusable(overlayPanel);
    (focusables[0] || closeMenu)?.focus({ preventScroll: true });
  }

  function closeOverlayMenu(afterClose) {
    if (!overlay || !overlay.classList.contains("is-open")) return;

    document.body.classList.remove("menu-opened");

    const finalize = () => {
      overlay.classList.remove("is-open");
      overlay.setAttribute("aria-hidden", "true");
      openMenu?.setAttribute("aria-expanded", "false");
      unlockScroll();

      if (hasGsap) {
        window.gsap.set(overlay, { clearProps: "opacity,visibility" });
      }

      if (main) {
        main.removeAttribute("aria-hidden");
        if ("inert" in main) main.inert = false;
      }

      document.removeEventListener("keydown", trapFocus);

      if (lastFocus && typeof lastFocus.focus === "function") {
        lastFocus.focus({ preventScroll: true });
      }

      if (typeof afterClose === "function") {
        afterClose();
      }
    };

    if (!menuTl) {
      finalize();
      return;
    }

    menuTl.eventCallback("onReverseComplete", finalize);
    menuTl.reverse();
  }

  async function writeToClipboard(text) {
    if (!text) return false;

    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch (error) {
      try {
        const textarea = document.createElement("textarea");
        textarea.value = text;
        textarea.setAttribute("readonly", "");
        textarea.style.position = "absolute";
        textarea.style.left = "-9999px";
        document.body.appendChild(textarea);
        textarea.select();
        const copied = document.execCommand("copy");
        textarea.remove();
        return copied;
      } catch (fallbackError) {
        return false;
      }
    }
  }

  function showCopyToast(message) {
    if (!copyToast) return;

    copyToast.textContent = message;
    window.clearTimeout(copyToastTimer);
    copyToast.style.opacity = "1";
    copyToast.style.transform = "translateY(0)";

    copyToastTimer = window.setTimeout(() => {
      copyToast.style.opacity = "0";
      copyToast.style.transform = "translateY(4px)";
    }, 1200);
  }

  async function copyOverlayEmail() {
    const emailText = (emailLink?.innerText || "").trim();
    if (!emailText) return;

    const copied = await writeToClipboard(emailText);
    const locale = getBrachLocale();
    showCopyToast(copied ? locale.overlay.copySuccess : locale.overlay.copyError);
  }

  async function copyFooterEmail(event) {
    if (!footerEmailLink) return;

    event.preventDefault();

    const href = footerEmailLink.getAttribute("href") || "";
    const email = (footerEmailLink.textContent || "").trim();
    const copied = await writeToClipboard(email);
    const locale = getBrachLocale();

    if (footerEmailToast) {
      footerEmailToast.textContent = copied ? locale.overlay.emailCopied : locale.overlay.copyError;
      window.clearTimeout(footerToastTimer);
      footerToastTimer = window.setTimeout(() => {
        footerEmailToast.textContent = "";
      }, 1500);
    }

    if (href.startsWith("mailto:")) {
      window.setTimeout(() => {
        window.location.href = href;
      }, 280);
    }
  }

  function bindHoverWeight() {
    if (!hasGsap) return;

    window.gsap.set(".hover-gsap", { fontWeight: 700 });

    document.querySelectorAll(".hover-gsap").forEach((element) => {
      element.addEventListener("mouseenter", () => {
        window.gsap.to(element, {
          fontWeight: 900,
          duration: 0.32,
          ease: "power3.out",
          overwrite: "auto"
        });
      });

      element.addEventListener("mouseleave", () => {
        window.gsap.to(element, {
          fontWeight: 700,
          duration: 0.32,
          ease: "power3.out",
          overwrite: "auto"
        });
      });

      element.addEventListener("focus", () => {
        window.gsap.to(element, {
          fontWeight: 900,
          duration: 0.28,
          ease: "power3.out",
          overwrite: "auto"
        });
      });

      element.addEventListener("blur", () => {
        window.gsap.to(element, {
          fontWeight: 700,
          duration: 0.28,
          ease: "power3.out",
          overwrite: "auto"
        });
      });
    });
  }

  function bindShellEvents() {
    languageToggle?.addEventListener("click", (event) => {
      event.stopPropagation();
      if (languageSwitcher?.classList.contains("is-open")) {
        closeLanguageSwitcher();
        return;
      }
      openLanguageSwitcher();
    });

    languageButtons.forEach((button) => {
      button.addEventListener("click", (event) => {
        event.stopPropagation();
        const nextLanguage = button.dataset.lang;
        if (!nextLanguage || nextLanguage === activeLanguage) {
          closeLanguageSwitcher();
          return;
        }
        setBrachLanguage(nextLanguage);
        closeLanguageSwitcher();
      });
    });

    document.addEventListener("click", (event) => {
      if (!languageSwitcher?.contains(event.target)) {
        closeLanguageSwitcher();
      }
    });

    openMenu?.addEventListener("click", openOverlayMenu);
    closeMenu?.addEventListener("click", () => closeOverlayMenu());

    overlay?.addEventListener("click", (event) => {
      if (event.target === overlay) {
        closeOverlayMenu();
      }
    });

    navLinks.forEach((link) => {
      link.addEventListener("click", (event) => {
        const href = link.getAttribute("href") || "";
        if (!href.startsWith("#")) {
          closeOverlayMenu();
          return;
        }

        const destination = document.querySelector(href);
        if (!destination) return;

        event.preventDefault();
        closeOverlayMenu(() => {
          const topbarOffset = 90;
          const y = destination.getBoundingClientRect().top + (window.scrollY || window.pageYOffset || 0) - topbarOffset;
          window.scrollTo({ top: Math.max(0, y), behavior: "smooth" });
        });
      });
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        closeLanguageSwitcher();
        if (overlay?.classList.contains("is-open")) {
          closeOverlayMenu();
        }
      }
    });

    copyBtn?.addEventListener("click", copyOverlayEmail);
    footerEmailLink?.addEventListener("click", copyFooterEmail);

    document.addEventListener("brach:languagechange", (event) => {
      const nextLanguage = event.detail?.language || getBrachLanguage();
      applyLanguage(nextLanguage);
    });
  }

  menuTl = buildMenuTimeline();
  bindHoverWeight();
  bindShellEvents();
  applyLanguage(activeLanguage);
})();
