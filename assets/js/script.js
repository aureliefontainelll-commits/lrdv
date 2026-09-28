
const menu = document.querySelector('.menu-btn');
const links = document.querySelector('.navlinks');
if(menu){menu.addEventListener('click',()=>links.classList.toggle('open'))}
document.querySelectorAll('form[data-demo]').forEach(form=>{
  form.addEventListener('submit',e=>{
    e.preventDefault();
    const n=form.querySelector('.notice');
    if(n){n.style.display='block'; n.textContent="Merci ! Le formulaire fonctionne en mode démonstration. Pour recevoir réellement les messages, reliez-le à Formspree, Netlify Forms ou votre propre backend."}
    form.reset();
  })
});
