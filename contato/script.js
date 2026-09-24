(() => {
  const locales = {
    'pt-BR': {
      title: 'Contato — Agência Brach', description: 'Conte sobre sua empresa e seu projeto. Vamos criar uma marca com presença, personalidade e direção.',
      eyebrow: 'Toda grande ideia começa com uma conversa', titleFirst: 'Vamos', titleLast: 'conversar.',
      lead: 'Conte o que você tem em mente. A gente ajuda a transformar sua próxima ideia em uma marca com presença e personalidade.',
      note: 'Prefere escrever por e-mail? Estamos por aqui também.',
      name: 'Seu nome *', email: 'E-mail *', company: 'Empresa *', phone: 'Telefone / WhatsApp *', message: 'Sobre o projeto *',
      namePlaceholder: 'Como podemos chamar você?', emailPlaceholder: 'voce@empresa.com', companyPlaceholder: 'Nome da empresa ou do projeto', phonePlaceholder: '(DDD) número de telefone', messagePlaceholder: 'Conte um pouco sobre sua ideia, o que precisa e o momento da sua empresa.',
      termsLead: 'Ao enviar, você concorda com nossos', terms: 'Termos de uso', connector: 'e', privacy: 'Políticas de Privacidade', submit: 'Vamos começar', sending: 'Enviando…',
      success: 'Mensagem enviada! Em breve, vamos conversar sobre seu projeto.', error: 'Não foi possível enviar agora. Seus dados continuam aqui. Tente novamente ou escreva para agenciabrach@gmail.com.',
      invalid: 'Confira os campos obrigatórios antes de enviar.', cooldown: 'Sua mensagem já foi enviada. Aguarde alguns instantes antes de enviar outra.', phoneInvalid: 'Informe um telefone com DDD, usando de 8 a 15 dígitos.', close: 'Fechar', policyLanguage: ''
    },
    en: {
      title: 'Contact — Brach Agency', description: 'Tell us about your company and your project. Let’s build a brand with presence, personality and direction.',
      eyebrow: 'Every great idea starts with a conversation', titleFirst: 'Let’s', titleLast: 'talk.',
      lead: 'Tell us what you have in mind. We’ll help turn your next idea into a brand with presence and personality.', note: 'Prefer email? You can reach us here too.',
      name: 'Your name *', email: 'Email *', company: 'Company *', phone: 'Phone / WhatsApp *', message: 'About the project *',
      namePlaceholder: 'What should we call you?', emailPlaceholder: 'you@company.com', companyPlaceholder: 'Company or project name', phonePlaceholder: 'Phone number with area / country code', messagePlaceholder: 'Tell us about your idea, what you need and where your business is today.',
      termsLead: 'By submitting, you agree to our', terms: 'Terms of use', connector: 'and', privacy: 'Privacy Policy', submit: 'Let’s get started', sending: 'Sending…',
      success: 'Message sent! We’ll be in touch about your project soon.', error: 'We couldn’t send your message. Your details are still here. Try again or email agenciabrach@gmail.com.',
      invalid: 'Please check the required fields before submitting.', cooldown: 'Your message was already sent. Please wait before sending another.', phoneInvalid: 'Enter a phone number with area code, using 8 to 15 digits.', close: 'Close', policyLanguage: 'These documents are currently available in Portuguese.'
    },
    es: {
      title: 'Contacto — Agencia Brach', description: 'Cuéntanos sobre tu empresa y tu proyecto. Vamos a crear una marca con presencia, personalidad y dirección.',
      eyebrow: 'Toda gran idea comienza con una conversación', titleFirst: 'Vamos a', titleLast: 'conversar.',
      lead: 'Cuéntanos qué tienes en mente. Te ayudamos a transformar tu próxima idea en una marca con presencia y personalidad.', note: '¿Prefieres escribir por correo? También estamos aquí.',
      name: 'Tu nombre *', email: 'Correo electrónico *', company: 'Empresa *', phone: 'Teléfono / WhatsApp *', message: 'Sobre el proyecto *',
      namePlaceholder: '¿Cómo te llamas?', emailPlaceholder: 'tu@empresa.com', companyPlaceholder: 'Nombre de la empresa o del proyecto', phonePlaceholder: 'Número con código de área / país', messagePlaceholder: 'Cuéntanos sobre tu idea, qué necesitas y el momento de tu empresa.',
      termsLead: 'Al enviar, aceptas nuestros', terms: 'Términos de uso', connector: 'y', privacy: 'Políticas de privacidad', submit: 'Comencemos', sending: 'Enviando…',
      success: '¡Mensaje enviado! Pronto hablaremos sobre tu proyecto.', error: 'No pudimos enviar el mensaje. Tus datos siguen aquí. Inténtalo de nuevo o escribe a agenciabrach@gmail.com.',
      invalid: 'Revisa los campos obligatorios antes de enviar.', cooldown: 'Tu mensaje ya fue enviado. Espera un momento antes de enviar otro.', phoneInvalid: 'Introduce un teléfono con código de área, de 8 a 15 dígitos.', close: 'Cerrar', policyLanguage: 'Estos documentos están disponibles en portugués.'
    }
  };
  const form = document.getElementById('inquiryForm');
  const submit = form.querySelector('[type="submit"]');
  const submitLabel = submit.querySelector('[data-contact-text="submit"]');
  const status = document.getElementById('inquiryStatus');
  const phone = form.elements.telefone;
  let language = 'pt-BR';
  let busy = false;
  let statusKey = '';
  let lastSubmission = 0;
  const strings = () => locales[language];

  function feedback(key, state = 'error') {
    statusKey = key;
    status.textContent = strings()[key] || '';
    status.dataset.state = state;
    if (key) status.focus({ preventScroll: true });
  }
  function validatePhone() {
    const digits = phone.value.replace(/\D/g, '');
    phone.setCustomValidity(phone.value && (digits.length < 8 || digits.length > 15) ? strings().phoneInvalid : '');
  }
  function setLanguage(value) {
    language = locales[value] ? value : 'pt-BR';
    const text = strings();
    document.querySelectorAll('[data-contact-text]').forEach(node => { node.textContent = text[node.dataset.contactText]; });
    document.querySelectorAll('[data-contact-placeholder]').forEach(node => { node.placeholder = text[node.dataset.contactPlaceholder]; });
    document.title = text.title;
    document.querySelectorAll('meta[name="description"],meta[property="og:description"],meta[name="twitter:description"]').forEach(node => { node.content = text.description; });
    document.querySelectorAll('meta[property="og:title"],meta[name="twitter:title"]').forEach(node => { node.content = text.title; });
    document.querySelector('.contact-policy__close').setAttribute('aria-label', text.close);
    submitLabel.textContent = busy ? text.sending : text.submit;
    if (statusKey) status.textContent = text[statusKey];
    validatePhone();
  }
  phone.addEventListener('input', validatePhone);
  form.addEventListener('input', () => { if (statusKey && !busy) feedback(''); });
  form.addEventListener('submit', async event => {
    event.preventDefault();
    if (busy) return;
    ['nome', 'email', 'empresa', 'telefone', 'mensagem'].forEach(name => { form.elements[name].value = form.elements[name].value.trim(); });
    validatePhone();
    if (!form.reportValidity()) { feedback('invalid'); return; }
    if (form.elements._honey.value || form.elements.website.value) { feedback('invalid'); return; }
    if (Date.now() - lastSubmission < 45000) { feedback('cooldown'); return; }
    const data = new FormData(form);
    data.set('_url', window.location.href);
    busy = true;
    submit.disabled = true;
    form.setAttribute('aria-busy', 'true');
    submitLabel.textContent = strings().sending;
    feedback('');
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 20000);
    try {
      const response = await fetch(form.dataset.ajaxAction, {
        method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded', Accept: 'application/json' },
        body: new URLSearchParams(data).toString(), signal: controller.signal
      });
      const result = await response.json();
      if (!response.ok || (result.success !== true && result.success !== 'true')) throw new Error('Submission rejected');
      form.reset();
      lastSubmission = Date.now();
      feedback('success', 'success');
    } catch {
      feedback('error');
    } finally {
      window.clearTimeout(timeout);
      busy = false;
      submit.disabled = false;
      form.removeAttribute('aria-busy');
      submitLabel.textContent = strings().submit;
    }
  });

  const policy = document.getElementById('contactPolicy');
  let policyTrigger;
  document.querySelectorAll('[data-contact-policy]').forEach(button => {
    button.addEventListener('click', () => {
      policyTrigger = button;
      const kind = button.dataset.contactPolicy;
      document.getElementById('contactPolicyTitle').textContent = strings()[kind];
      document.getElementById('contactPolicyBody').innerHTML = window.BRACH_POLICY_CONTENT[kind];
      policy.showModal();
    });
  });
  policy.querySelector('button').addEventListener('click', () => policy.close());
  policy.addEventListener('click', event => {
    const rect = policy.getBoundingClientRect();
    if (event.target === policy && (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom)) policy.close();
  });
  policy.addEventListener('close', () => policyTrigger?.focus());
  setLanguage(window.getBrachLanguage ? window.getBrachLanguage() : 'pt-BR');
  document.addEventListener('brach:languagechange', event => setLanguage(event.detail?.language));
})();
