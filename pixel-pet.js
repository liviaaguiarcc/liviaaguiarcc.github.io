// A small, optional companion. All positions stay within the viewport.
(()=>{
 const pet=document.querySelector('#pixel-pet'),sprite=pet.querySelector('span'),toggle=document.querySelector('#pet-toggle');
 const size=64,margin=8;let x=64,y=Math.max(80,innerHeight*.72),target=x,targetY=y,last=0,lastTap=-Infinity,reactUntil=0,drag=null,hidden=false,hop=null,nextHop=0;
 try{hidden=localStorage.getItem('livia-pet')==='hidden'}catch{}
 const bounded=(v,max)=>Math.max(margin,Math.min(Math.max(margin,max-size-margin),v));
 function paint(lift=0){x=bounded(x,innerWidth);y=bounded(y,innerHeight);pet.style.transform=`translate3d(${x}px,${Math.max(margin,y-lift)}px,0)`}
 function paused(){return document.body.classList.contains('motion-off')||matchMedia('(prefers-reduced-motion: reduce)').matches}
 function labels(){const c=COPY[document.documentElement.lang]||COPY['pt-BR'];pet.setAttribute('aria-label',c.petLabel);pet.title=c.petLabel;toggle.setAttribute('aria-label',hidden?c.petShow:c.petHide);toggle.title=hidden?c.petShow:c.petHide;toggle.setAttribute('aria-pressed',String(!hidden))}
 function show(){pet.hidden=hidden;toggle.classList.toggle('pet-is-hidden',hidden);labels();try{localStorage.setItem('livia-pet',hidden?'hidden':'visible')}catch{}}
 const face=document.createElement('canvas');face.width=48;face.height=48;face.setAttribute('aria-hidden','true');face.style.cssText='position:absolute;inset:0;width:64px;height:64px;image-rendering:pixelated;pointer-events:none;display:none';pet.appendChild(face);
 const dizzy=document.createElement('div');dizzy.className='pet-dizzy-decoration';dizzy.setAttribute('aria-hidden','true');dizzy.innerHTML='<span class="dizzy-eye eye-left"></span><span class="dizzy-eye eye-right"></span><span class="dizzy-star star-one">✦</span><span class="dizzy-star star-two">✦</span><span class="dizzy-star star-three">✦</span>';pet.appendChild(dizzy);
 const ctx=face.getContext('2d'),source=new Image();let eyePixels=null,gaze={x:0,y:0},idleFrame=false,dizzyUntil=0;
 source.onload=()=>{ctx.drawImage(source,0,0,48,48,0,0,48,48);eyePixels=ctx.getImageData(0,0,48,48);look()};source.src='assets/purple-slime.png';
 function look(){if(!eyePixels||!idleFrame)return;ctx.putImageData(eyePixels,0,0);const ox=Math.round(gaze.x*2),oy=Math.round(gaze.y*2);for(const left of [17,26]){for(let row=28;row<38;row++){const at=(row*48+23)*4;ctx.fillStyle=`rgb(${eyePixels.data[at]},${eyePixels.data[at+1]},${eyePixels.data[at+2]})`;ctx.fillRect(left-2,row,8,1)}ctx.drawImage(source,left,29,4,7,left+ox,29+oy,4,7)}}
 function frame(n){sprite.style.backgroundPosition=`${-64*n}px 0`;idleFrame=n===0;face.style.display=idleFrame?'block':'none';sprite.style.visibility=idleFrame&&eyePixels?'hidden':'visible';if(idleFrame)look()}
 window.addEventListener('pointermove',e=>{if(drag||hidden||hop)return;const dx=e.clientX-(x+size/2),dy=e.clientY-(y+size/2);const length=Math.hypot(dx,dy)||1;gaze={x:dx/length,y:dy/length};if(performance.now()>=dizzyUntil)look()},{passive:true});
 function clearDizzy(){dizzyUntil=0;pet.classList.remove('pet-dizzy')}
 function feelsDizzy(points){if(points.length<5)return false;let distance=0,turn=0,lastAngle=null;for(let i=1;i<points.length;i++){const dx=points[i].x-points[i-1].x,dy=points[i].y-points[i-1].y,len=Math.hypot(dx,dy);if(len<6)continue;distance+=len;const angle=Math.atan2(dy,dx);if(lastAngle!==null)turn+=Math.abs(Math.atan2(Math.sin(angle-lastAngle),Math.cos(angle-lastAngle)));lastAngle=angle;}const duration=points.at(-1).time-points[0].time;return duration>=450&&distance>420&&distance/Math.max(duration,1)*1000>300&&turn>5;}
 function cuddle(){reactUntil=performance.now()+1700;frame(3)}
 function hearts(){if(document.querySelectorAll('.pet-heart').length>=9)return;for(let i=0;i<3;i++){const heart=document.createElement('span');heart.className='pet-heart';heart.setAttribute('aria-hidden','true');heart.style.left=Math.max(8,Math.min(innerWidth-24,x+size/2-9+(i-1)*13))+'px';heart.style.top=Math.max(8,y-8)+'px';heart.style.setProperty('--heart-drift',(i-1)*20+'px');heart.style.animationDelay=i*70+'ms';document.body.appendChild(heart);setTimeout(()=>heart.remove(),1600)}}
 function tap(){const now=performance.now();cuddle();if(now-lastTap<=400){hearts();lastTap=-Infinity}else lastTap=now}
 toggle.addEventListener('click',()=>{hidden=!hidden;show()});
 pet.addEventListener('pointerdown',e=>{if(e.button!==0)return;drag={id:e.pointerId,startX:e.clientX,startY:e.clientY,dx:e.clientX-x,dy:e.clientY-y,moved:false,points:[{x:e.clientX,y:e.clientY,time:performance.now()}]};clearDizzy();hop=null;paint();pet.setPointerCapture(e.pointerId);pet.classList.add('pet-held');frame(2);e.preventDefault()});
 pet.addEventListener('pointermove',e=>{if(!drag||drag.id!==e.pointerId)return;const now=performance.now();drag.points.push({x:e.clientX,y:e.clientY,time:now});drag.points=drag.points.filter(p=>now-p.time<=1800);if(Math.hypot(e.clientX-drag.startX,e.clientY-drag.startY)>4)drag.moved=true;x=e.clientX-drag.dx;y=e.clientY-drag.dy;target=x;targetY=y;paint()});
 function release(e){if(!drag||e.pointerId!==drag.id)return;const clicked=!drag.moved,spun=e.type!=='pointercancel'&&feelsDizzy(drag.points);drag=null;pet.classList.remove('pet-held');target=x;targetY=y;if(clicked)tap();else{lastTap=-Infinity;if(spun){dizzyUntil=performance.now()+2800;nextWalk=dizzyUntil+1500;pet.classList.add('pet-dizzy');frame(0);}else frame(1);}if(pet.hasPointerCapture(e.pointerId))pet.releasePointerCapture(e.pointerId)}
 pet.addEventListener('pointerup',release);pet.addEventListener('pointercancel',release);pet.addEventListener('lostpointercapture',()=>{drag=null;pet.classList.remove('pet-held')});
 pet.addEventListener('keydown',e=>{const steps={ArrowLeft:[-12,0],ArrowRight:[12,0],ArrowUp:[0,-12],ArrowDown:[0,12]};if(steps[e.key]){hop=null;e.preventDefault();x+=steps[e.key][0];y+=steps[e.key][1];target=x;targetY=y;paint()}if(e.key==='Escape'){hidden=true;show();toggle.focus()}});
 pet.addEventListener('click',e=>{if(e.detail===0)tap()});
 window.addEventListener('resize',()=>{paint();target=bounded(target,innerWidth);targetY=bounded(targetY,innerHeight)});
 new MutationObserver(labels).observe(document.documentElement,{attributes:true,attributeFilter:['lang']});
 let nextWalk=performance.now()+3000;
 function tick(now){const dt=last?Math.min((now-last)/1000,.06):0;last=now;
  if(!hidden&&!document.hidden&&!drag){
   if(dizzyUntil&&now>=dizzyUntil)clearDizzy();
   if(now<dizzyUntil){hop=null;frame(0);face.style.display='none';sprite.style.visibility='visible';paint()}else if(paused()){hop=null;paint();frame(now<reactUntil?3:0)}else if(now<reactUntil){hop=null;paint();frame(3)}else{
    if(now>nextWalk){const angle=Math.floor(Math.random()*8)*Math.PI/4;const travel=70+Math.random()*100;let mx=Math.cos(angle)*travel,my=Math.sin(angle)*travel;if(x+mx<margin||x+mx>innerWidth-size-margin)mx=-mx;if(y+my<margin||y+my>innerHeight-size-margin)my=-my;target=bounded(x+mx,innerWidth);targetY=bounded(y+my,innerHeight);nextWalk=now+6500+Math.random()*2000}
    const dx=target-x,dy=targetY-y,distance=Math.hypot(dx,dy);
    if(!hop&&distance>1&&now>=nextHop){const step=Math.min(22,distance);hop={start:now,from:x,fromY:y,to:bounded(x+dx/distance*step,innerWidth),toY:bounded(y+dy/distance*step,innerHeight)};sprite.style.scale='1 1'}
    if(hop){const elapsed=now-hop.start;
     if(elapsed<90){frame(1);paint()}
     else if(elapsed<430){const p=(elapsed-90)/340;x=hop.from+(hop.to-hop.from)*p;y=hop.fromY+(hop.toY-hop.fromY)*p;frame(2);paint(Math.sin(Math.PI*p)*12)}
     else if(elapsed<520){x=hop.to;y=hop.toY;frame(1);paint()}
     else{x=hop.to;y=hop.toY;hop=null;nextHop=now+1400;frame(0);paint()}
    }else{frame(0);paint()}
   }
  }
  requestAnimationFrame(tick);
 }
 paint();show();requestAnimationFrame(tick);
})();
