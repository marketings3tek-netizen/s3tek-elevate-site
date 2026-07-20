// Nav scroll state + mobile toggle
window.addEventListener('DOMContentLoaded', ()=>{
  const nav = document.querySelector('.nav');
  window.addEventListener('scroll', ()=>{
    if(nav) nav.classList.toggle('scrolled', window.scrollY > 30);
  });
  const burger = document.querySelector('.hamburger');
  const links = document.querySelector('.nav-links');
  if(burger){
    burger.addEventListener('click', ()=> links.classList.toggle('open'));
    links.querySelectorAll('a').forEach(a=>a.addEventListener('click', ()=>links.classList.remove('open')));
  }

  // Scroll reveal
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target);} });
  },{threshold:0.15});
  document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

  document.querySelectorAll('.faq-q').forEach(q=>{
    q.addEventListener('click', ()=> q.closest('.faq-item').classList.toggle('open'));
  });

  // Radar fill animation
  const rio = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if(e.isIntersecting){
        e.target.querySelectorAll('.radar-fill').forEach(f=>{ f.style.width = f.dataset.value + '%'; });
        rio.unobserve(e.target);
      }
    });
  },{threshold:0.3});
  document.querySelectorAll('.radar-card').forEach(el=>rio.observe(el));
});
