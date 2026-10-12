// Draw connections in viewport pixels so shapes and endpoints never stretch.
(()=>{
 const map=document.querySelector('.atlas-map');if(!map)return;
 const svg=map.querySelector('svg'),lines=svg.querySelector('.atlas-lines'),points=svg.querySelector('.map-point');
 const nodes=[...map.querySelectorAll('[data-language-node]')];let queued=false;
 function draw(){queued=false;const rect=map.getBoundingClientRect();if(!rect.width||!rect.height)return;const w=map.clientWidth,h=map.clientHeight;svg.setAttribute('viewBox',`0 0 ${w} ${h}`);const background=svg.querySelector('rect');background.setAttribute('width',w);background.setAttribute('height',h);const locations=nodes.map(node=>{const r=node.getBoundingClientRect();return{key:node.dataset.languageNode,x:r.left+r.width/2-rect.left-map.clientLeft,y:r.top+r.height/2-rect.top-map.clientTop}});const start=locations.find(p=>p.key==='pt');if(!start)return;lines.innerHTML=locations.filter(p=>p!==start).map((p,i)=>{const cx=(start.x+p.x)/2,cy=Math.min(start.y,p.y)-Math.min(h*.22,65)+(i%2)*20;return`<path d="M${start.x} ${start.y} Q${cx} ${Math.max(20,cy)} ${p.x} ${p.y}" vector-effect="non-scaling-stroke"/>`}).join('');points.innerHTML=locations.map(p=>`<circle cx="${p.x}" cy="${p.y}" r="4"/>`).join('');}
 function schedule(){if(!queued){queued=true;requestAnimationFrame(draw)}}
 if(typeof ResizeObserver!=='undefined'){const observer=new ResizeObserver(schedule);observer.observe(map);nodes.forEach(node=>observer.observe(node));}
 window.addEventListener('resize',schedule);document.fonts?.ready.then(schedule);schedule();
})();
