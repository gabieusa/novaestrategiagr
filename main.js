const burger = document.getElementById('burgerBtn');
  const navLinks = document.getElementById('navLinks');
  burger.addEventListener('click', () => navLinks.classList.toggle('open'));
  navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));

  document.querySelectorAll('.faq-item').forEach(item => {
    const q = item.querySelector('.faq-q');
    const a = item.querySelector('.faq-a');
    if(item.classList.contains('open')) a.style.maxHeight = a.scrollHeight + 'px';
    q.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach(i => { i.classList.remove('open'); i.querySelector('.faq-a').style.maxHeight = null; });
      if(!isOpen){ item.classList.add('open'); a.style.maxHeight = a.scrollHeight + 'px'; }
    });
  });

  document.querySelectorAll('.mod').forEach(mod => {
    const head = mod.querySelector('.mod-head');
    const body = mod.querySelector('.mod-body');
    if(mod.classList.contains('open')) body.style.maxHeight = body.scrollHeight + 'px';
    head.addEventListener('click', () => {
      const isOpen = mod.classList.contains('open');
      document.querySelectorAll('.mod').forEach(m => { m.classList.remove('open'); m.querySelector('.mod-body').style.maxHeight = null; });
      if(!isOpen){ mod.classList.add('open'); body.style.maxHeight = body.scrollHeight + 'px'; }
    });
  });

  const revealEls = document.querySelectorAll('.reveal');
  if('IntersectionObserver' in window){
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => { if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); } });
    }, {threshold:0.12});
    revealEls.forEach(el => io.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('in'));
  }

  const WHATSAPP_NUMBER = "5531988537546"; // TODO: substituir pelo número real da Nova Estratégia G&R (com DDI e DDD)
  function openWhatsApp(tipo){
    const msg = tipo === 'mentoria'
      ? "Olá! Quero saber mais sobre a Mentoria Premium individual do Mestre das Licitações."
      : "Olá! Quero garantir meu acesso ao curso Mestre das Licitações (R$ 29,90).";
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
  }
