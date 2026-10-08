// A small, optional companion. All positions stay within the viewport.
(()=>{
 const pet=document.querySelector('#pixel-pet'),sprite=pet.querySelector('span'),toggle=document.querySelector('#pet-toggle');
 const size=64,margin=8;let x=64,y=innerHeight-size-18,target=x,last=0,lastTap=-Infinity,reactUntil=0,drag=null,hidden=false,hop=null,nextHop=0;
 try{hidden=localStorage.getItem('livia-pet')==='hidden'}catch{}
 const bounded=(v,max)=>Math.max(margin,Math.min(Math.max(margin,max-size-margin),v));
 function paint(lift=0){x=bounded(x,innerWidth);y=bounded(y,innerHeight);pet.style.transform=`translate3d(${x}px,${Math.max(margin,y-lift)}px,0)`}
 function paused(){return document.body.classList.contains('motion-off')||matchMedia('(prefers-reduced-motion: reduce)').matches}
 function labels(){const c=COPY[document.documentElement.lang]||COPY['pt-BR'];pet.setAttribute('aria-label',c.petLabel);pet.title=c.petLabel;toggle.setAttribute('aria-label',hidden?c.petShow:c.petHide);toggle.title=hidden?c.petShow:c.petHide;toggle.setAttribute('aria-pressed',String(!hidden))}
 function show(){pet.hidden=hidden;toggle.classList.toggle('pet-is-hidden',hidden);labels();try{localStorage.setItem('livia-pet',hidden?'hidden':'visible')}catch{}}
 function frame(n){sprite.style.backgroundPosition=`${-64*n}px 0`}
 function cuddle(){reactUntil=performance.now()+1700;frame(3)}
 function hearts(){if(document.querySelectorAll('.pet-heart').length>=9)return;for(let i=0;i<3;i++){const heart=document.createElement('span');heart.className='pet-heart';heart.setAttribute('aria-hidden','true');heart.style.left=Math.max(8,Math.min(innerWidth-24,x+size/2-9+(i-1)*13))+'px';heart.style.top=Math.max(8,y-8)+'px';heart.style.setProperty('--heart-drift',(i-1)*20+'px');heart.style.animationDelay=i*70+'ms';document.body.appendChild(heart);setTimeout(()=>heart.remove(),1600)}}
 function tap(){const now=performance.now();cuddle();if(now-lastTap<=400){hearts();lastTap=-Infinity}else lastTap=now}
 toggle.addEventListener('click',()=>{hidden=!hidden;show()});
 pet.addEventListener('pointerdown',e=>{if(e.button!==0)return;drag={id:e.pointerId,startX:e.clientX,startY:e.clientY,dx:e.clientX-x,dy:e.clientY-y,moved:false};hop=null;paint();pet.setPointerCapture(e.pointerId);pet.classList.add('pet-held');frame(2);e.preventDefault()});
 pet.addEventListener('pointermove',e=>{if(!drag||drag.id!==e.pointerId)return;if(Math.hypot(e.clientX-drag.startX,e.clientY-drag.startY)>4)drag.moved=true;x=e.clientX-drag.dx;y=e.clientY-drag.dy;target=x;paint()});
 function release(e){if(!drag||e.pointerId!==drag.id)return;const clicked=!drag.moved;drag=null;pet.classList.remove('pet-held');target=x;if(clicked)tap();else{lastTap=-Infinity;frame(1);}if(pet.hasPointerCapture(e.pointerId))pet.releasePointerCapture(e.pointerId)}
 pet.addEventListener('pointerup',release);pet.addEventListener('pointercancel',release);pet.addEventListener('lostpointercapture',()=>{drag=null;pet.classList.remove('pet-held')});
 pet.addEventListener('keydown',e=>{const steps={ArrowLeft:[-12,0],ArrowRight:[12,0],ArrowUp:[0,-12],ArrowDown:[0,12]};if(steps[e.key]){hop=null;e.preventDefault();x+=steps[e.key][0];y+=steps[e.key][1];target=x;paint()}if(e.key==='Escape'){hidden=true;show();toggle.focus()}});
 pet.addEventListener('click',e=>{if(e.detail===0)tap()});
 window.addEventListener('resize',()=>{paint();target=bounded(target,innerWidth)});
 new MutationObserver(labels).observe(document.documentElement,{attributes:true,attributeFilter:['lang']});
 let nextWalk=performance.now()+3000;
 function tick(now){const dt=last?Math.min((now-last)/1000,.06):0;last=now;
  if(!hidden&&!document.hidden&&!drag){
   if(paused()){hop=null;paint();frame(now<reactUntil?3:0)}else if(now<reactUntil){hop=null;paint();frame(3)}else{
    if(now>nextWalk){target=bounded(x+(Math.random()-.5)*220,innerWidth);nextWalk=now+4000+Math.random()*3500}
    const distance=target-x;
    if(!hop&&Math.abs(distance)>1&&now>=nextHop){const direction=Math.sign(distance);hop={start:now,from:x,to:bounded(x+direction*Math.min(22,Math.abs(distance)),innerWidth)};sprite.style.scale=direction<0?'-1 1':'1 1'}
    if(hop){const elapsed=now-hop.start;
     if(elapsed<90){frame(1);paint()}
     else if(elapsed<430){const p=(elapsed-90)/340;x=hop.from+(hop.to-hop.from)*p;frame(2);paint(Math.sin(Math.PI*p)*12)}
     else if(elapsed<520){x=hop.to;frame(1);paint()}
     else{x=hop.to;hop=null;nextHop=now+170;frame(0);paint()}
    }else{frame(0);paint()}
   }
  }
  requestAnimationFrame(tick);
 }
 paint();show();requestAnimationFrame(tick);
})();
