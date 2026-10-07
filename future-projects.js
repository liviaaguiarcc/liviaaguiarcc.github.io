// Unannounced titles remain encrypted; the animation never reveals their names.
(()=>{
 const titles=[...document.querySelectorAll('.coded-title')];
 const glyphs=Array.from('01#%+?/_<>λ{}[]@');
 const reduced=matchMedia('(prefers-reduced-motion: reduce)');
 let timer=null,visible=true;
 function scramble(){for(const el of titles)el.textContent=Array.from({length:12},()=>glyphs[Math.floor(Math.random()*glyphs.length)]).join('')}
 function sync(){clearInterval(timer);timer=null;if(visible&&!document.hidden&&!reduced.matches&&!document.body.classList.contains('motion-off'))timer=setInterval(scramble,180)}
 scramble();
 if('IntersectionObserver' in window){const observer=new IntersectionObserver(entries=>{visible=entries.some(e=>e.isIntersecting);sync()});observer.observe(document.querySelector('.soon-row'))}
 new MutationObserver(sync).observe(document.body,{attributes:true,attributeFilter:['class']});
 reduced.addEventListener('change',sync);document.addEventListener('visibilitychange',sync);sync();
})();
