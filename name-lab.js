const finalLetters=['','ㄱ','ㄲ','ㄳ','ㄴ','ㄵ','ㄶ','ㄷ','ㄹ','ㄺ','ㄻ','ㄼ','ㄽ','ㄾ','ㄿ','ㅀ','ㅁ','ㅂ','ㅄ','ㅅ','ㅆ','ㅇ','ㅈ','ㅊ','ㅋ','ㅌ','ㅍ','ㅎ'];
const nameExamples={livia:'리비아',ana:'아나',anna:'안나',maria:'마리아',joao:'주앙',jose:'조제',julia:'줄리아',juliana:'줄리아나',gabriel:'가브리엘',gabriela:'가브리엘라',lucas:'루카스',lucca:'루카',bruno:'브루누',pedro:'페드루',rafael:'하파엘',rafaela:'하파엘라',carlos:'카를루스',carla:'카를라',daniel:'다니엘',daniela:'다니엘라',marcos:'마르쿠스',paulo:'파울루',paula:'파울라',beatriz:'베아트리스',bianca:'비앙카',camila:'카밀라',carolina:'카롤리나',laura:'라우라',luiza:'루이자',luisa:'루이자',isabela:'이자벨라',isabella:'이자벨라',fernanda:'페르난다',fernando:'페르난두',felipe:'펠리피',aline:'알리니',alice:'알리시',amanda:'아만다',andrea:'안드레아',andre:'안드레',antonio:'안토니우',aguiar:'아기아르',cavalcanti:'카발칸치',silva:'시우바',santos:'산투스',oliveira:'올리베이라',souza:'소자',sofia:'소피아',sophia:'소피아',miguel:'미겔',arthur:'아르투르',vitoria:'비토리아',thiago:'치아구',tiago:'치아구',thais:'타이스',tais:'타이스',leticia:'레치시아',natalia:'나탈리아',manuela:'마누엘라',eduardo:'에두아르두',renata:'헤나타',renato:'헤나투',rodrigo:'호드리구'};
// Practical PT-BR name approximation, informed by Korean Portuguese spelling rules.
// Not a complete implementation of 외래어 표기법 or a pronunciation dictionary.
function latinNameToHangul(name){
 const raw=name.normalize('NFC').toLowerCase().trim();
 const folded=raw.normalize('NFD').replace(/[\u0300-\u036f]/g,'');
 if(!folded||!/^[a-z\s'’-]+$/.test(folded))throw new Error('unsupportedName');
 return raw.split(/[\s'’-]+/).filter(Boolean).map(word=>{
  const key=word.normalize('NFD').replace(/[\u0300-\u036f]/g,'');
  return nameExamples[key]||approximateWord(word);
 }).join(' ');
}
function approximateWord(raw){
 const marked=raw.normalize('NFC').toLowerCase();
 const word=marked.normalize('NFD').replace(/[\u0300-\u036f]/g,'');
 const accents=[...marked].map(c=>/[áàâéêíóôú]/.test(c));
 const nasal=[...marked].map(c=>/[ãõ]/.test(c));
 const vowels={a:'ㅏ',e:'ㅔ',i:'ㅣ',o:'ㅗ',u:'ㅜ',y:'ㅣ'};
 const sounds=[];
 for(let i=0;i<word.length;){
  const ch=word[i],next=word[i+1]||'',pair=word.slice(i,i+2);
  if(vowels[ch]){
   // Stressed vowels retain their quality; unstressed final e/o approach /i,u/.
   let v=vowels[ch];const end=i===word.length-1||(i===word.length-2&&next==='s');
   if(end&&!accents[i]){if(ch==='o')v='ㅜ';if(ch==='e')v='ㅣ'}
   if(nasal[i]&&pair==='ao'){sounds.push({v:'ㅏ',nasal:true});i+=2;continue}
   sounds.push({v,nasal:nasal[i]});i++;continue;
  }
  if(['nh','lh','ch','sh','rr','ss','ck','ph','th'].includes(pair)){
   sounds.push({c:({nh:'ny',lh:'ly',ch:'sh',sh:'sh',rr:'h',ss:'s',ck:'k',ph:'f',th:'t'})[pair]});i+=2;continue;
  }
  if((pair==='qu'||pair==='gu')&&/[ei]/.test(word[i+2]||'')){
   sounds.push({c:pair==='qu'?'k':'g'});i+=2;continue;
  }
  if(ch==='h'){i++;continue}
  let c=ch;
  if(ch==='c')c=/[ei]/.test(next)?'s':'k';
  if(marked[i]==='ç')c='s';
  if(ch==='g'&&/[ei]/.test(next))c='j';
  if(ch==='r'&&(i===0||/[ns]/.test(word[i-1]||'')))c='h';
  if(ch==='s'&&vowels[word[i-1]]&&vowels[next])c='z';
  if(ch==='x')c='sh';
  if(ch==='q')c='k';
  sounds.push({c});i++;
 }
 const onset={b:'ㅂ',p:'ㅍ',d:'ㄷ',t:'ㅌ',f:'ㅍ',v:'ㅂ',g:'ㄱ',k:'ㅋ',j:'ㅈ',z:'ㅈ',s:'ㅅ',sh:'ㅅ',l:'ㄹ',ly:'ㄹ',r:'ㄹ',h:'ㅎ',m:'ㅁ',n:'ㄴ',ny:'ㄴ',w:'ㅇ'};
 const palatal={'ㅏ':'ㅑ','ㅔ':'ㅖ','ㅣ':'ㅣ','ㅗ':'ㅛ','ㅜ':'ㅠ'};
 let out='';
 const emit=(c,v)=>{out+=composeSyllable(c,v)};
 const coda=value=>{
  if(!out)return false;
  const code=out.charCodeAt(out.length-1)-0xAC00;
  if(code<0||code>11171||code%28)return false;
  out=out.slice(0,-1)+String.fromCharCode(0xAC00+code+finalLetters.indexOf(value));return true;
 };
 for(let i=0;i<sounds.length;){
  const cur=sounds[i],next=sounds[i+1];
  if(cur.v){emit('ㅇ',cur.v);if(cur.nasal)coda('ㅇ');i++;continue}
  if(next?.v){
   let first=onset[cur.c]||'ㅇ',v=next.v;
   if(['ny','ly','sh'].includes(cur.c))v=palatal[v]||v;
   // Common Brazilian palatalisation of t/d before an /i/ sound.
   if(next.v==='ㅣ'&&cur.c==='t')first='ㅊ';
   if(next.v==='ㅣ'&&cur.c==='d')first='ㅈ';
   if(['l','ly'].includes(cur.c))coda('ㄹ');
   emit(first,v);if(next.nasal)coda('ㅇ');i+=2;continue;
  }
  // Codas avoid inventing a full syllable for every written consonant.
  if(['m','n'].includes(cur.c)){if(!coda('ㅇ'))emit(onset[cur.c],'ㅡ')}
  else if(cur.c==='k'&&!next){if(!coda('ㄱ'))emit('ㅋ','ㅡ')}
  else if(cur.c==='l')emit('ㅇ','ㅜ');
  else if(cur.c==='s'||cur.c==='sh')emit('ㅅ','ㅡ');
  else if(cur.c==='z')emit('ㅈ','ㅡ');
  else if(cur.c==='r')emit('ㄹ','ㅡ');
  else emit(onset[cur.c]||'ㅇ','ㅡ');
  i++;
 }
 return out;
}
function decomposeHangul(text){const compact=text.replace(/\s/g,'');if(!/^[가-힣]{1,12}$/.test(compact))throw new Error('invalidHangul');return [...compact].map((char,block)=>{const code=char.charCodeAt(0)-0xAC00;const i=Math.floor(code/588),v=Math.floor((code%588)/28),f=code%28;return{char,block,layout:[8,12,13,17,18].includes(v)?'horizontal':'vertical',pieces:[{type:'initial',value:initialLetters[i]},{type:'vowel',value:vowelLetters[v]},...(f?[{type:'final',value:finalLetters[f]}]:[])]}})}
let puzzleName='리비아',puzzleBlocks=[],puzzlePieces=[],puzzleSlots=[],selectedPiece=null,puzzleNotice=null;
function nameMessage(key,vars={}){return Object.entries(vars).reduce((s,[k,v])=>s.replaceAll('{'+k+'}',v),t(key))}
function refreshPuzzleLabels(){if(!$('#name-blocks'))return;for(const slot of puzzleSlots){const el=$(`[data-name-slot="${slot.id}"]`);if(el)el.setAttribute('aria-label',puzzleBlocks[slot.block].char+' · '+t(slot.type+'Slot')+' · '+slot.value)}for(const piece of puzzlePieces){const el=$(`[data-name-piece="${piece.id}"]`);if(el)el.setAttribute('aria-label',piece.value+' · '+t(piece.type+'Slot'))}renderPuzzleStatus()}
function renderPuzzleStatus(){const done=puzzleSlots.filter(s=>s.pieceId!==null).length,total=puzzleSlots.length;const complete=done===total&&total>0;$('#puzzle-status').textContent=puzzleNotice?nameMessage(puzzleNotice.key,puzzleNotice.vars):nameMessage(complete?'puzzleComplete':'puzzleProgress',complete?{name:puzzleName}:{done,total});$('.name-puzzle-area').classList.toggle('complete',complete);for(const block of puzzleBlocks){const done=puzzleSlots.filter(s=>s.block===block.block).every(s=>s.pieceId!==null);$(`[data-block="${block.block}"]`).classList.toggle('solved',done)}}
function createNamePuzzle(name){const blocks=decomposeHangul(name);puzzleName=name.trim();puzzleBlocks=blocks;puzzlePieces=[];puzzleSlots=[];selectedPiece=null;puzzleNotice=null;blocks.forEach(block=>block.pieces.forEach(piece=>{const id=puzzlePieces.length;puzzlePieces.push({...piece,id,used:false});puzzleSlots.push({...piece,id,block:block.block,pieceId:null})}));$('#name-target-text').textContent=puzzleName;$('#name-blocks').innerHTML=blocks.map(block=>`<div class="name-block ${block.layout} ${block.pieces.length===3?'with-final':''}" data-block="${block.block}"><span class="block-reference" lang="ko">${block.char}</span><div class="block-grid"><span class="block-result" aria-hidden="true">${block.char}</span>${puzzleSlots.filter(slot=>slot.block===block.block).map(slot=>`<button type="button" class="name-slot ${slot.type}" data-name-slot="${slot.id}"><span class="slot-ghost">${slot.value}</span><span class="slot-value"></span></button>`).join('')}</div></div>`).join('');const shuffled=[...puzzlePieces];for(let i=shuffled.length-1;i>0;i--){const j=(i*7+3)%(i+1);[shuffled[i],shuffled[j]]=[shuffled[j],shuffled[i]]}$('#name-pieces').innerHTML=shuffled.map(piece=>`<button type="button" draggable="true" data-name-piece="${piece.id}" aria-pressed="false">${piece.value}</button>`).join('');bindNamePieces();refreshPuzzleLabels();$('#name-error').textContent=''}
function selectNamePiece(id){const piece=puzzlePieces[id];if(!piece||piece.used)return;selectedPiece=id;puzzleNotice={key:'pieceSelected',vars:{piece:piece.value}};$$('[data-name-piece]').forEach(el=>el.setAttribute('aria-pressed',String(Number(el.dataset.namePiece)===id)));renderPuzzleStatus()}
function placeNamePiece(pieceId,slotId){const piece=puzzlePieces[pieceId],slot=puzzleSlots[slotId];if(!piece||!slot||piece.used||slot.pieceId!==null)return false;if(piece.value!==slot.value||piece.type!==slot.type){puzzleNotice={key:'wrongPiece'};renderPuzzleStatus();return false}piece.used=true;slot.pieceId=pieceId;selectedPiece=null;puzzleNotice=null;const button=$(`[data-name-piece="${pieceId}"]`);button.disabled=true;button.setAttribute('aria-pressed','false');const target=$(`[data-name-slot="${slotId}"]`);target.classList.add('filled');target.querySelector('.slot-value').textContent=piece.value;target.setAttribute('aria-pressed','true');$$('[data-name-piece]').forEach(el=>el.setAttribute('aria-pressed','false'));renderPuzzleStatus();return true}
function removeNamePiece(slotId){const slot=puzzleSlots[slotId];if(!slot||slot.pieceId===null)return;const piece=puzzlePieces[slot.pieceId];piece.used=false;$(`[data-name-piece="${piece.id}"]`).disabled=false;slot.pieceId=null;const target=$(`[data-name-slot="${slotId}"]`);target.classList.remove('filled');target.querySelector('.slot-value').textContent='';target.setAttribute('aria-pressed','false');puzzleNotice={key:'removedPiece'};renderPuzzleStatus()}
function bindNamePieces(){$$('[data-name-piece]').forEach(button=>{button.addEventListener('click',()=>selectNamePiece(Number(button.dataset.namePiece)));button.addEventListener('dragstart',e=>{const id=Number(button.dataset.namePiece);selectNamePiece(id);e.dataTransfer.setData('text/plain',String(id));e.dataTransfer.effectAllowed='move'})});$$('[data-name-slot]').forEach(button=>{const id=Number(button.dataset.nameSlot);button.addEventListener('click',()=>{if(puzzleSlots[id].pieceId!==null){removeNamePiece(id);return}if(selectedPiece===null){puzzleNotice={key:'choosePiece'};renderPuzzleStatus();return}placeNamePiece(selectedPiece,id)});button.addEventListener('dragover',e=>{e.preventDefault();button.classList.add('drag-over')});button.addEventListener('dragleave',()=>button.classList.remove('drag-over'));button.addEventListener('drop',e=>{e.preventDefault();button.classList.remove('drag-over');const raw=e.dataTransfer.getData('text/plain');if(/^\d+$/.test(raw))placeNamePiece(Number(raw),id)})})}
function buildFromEditedName(){try{createNamePuzzle($('#hangul-name').value)}catch(error){$('#name-error').textContent=t(error.message)||t('invalidHangul')}}
$('#name-form').addEventListener('submit',event=>{event.preventDefault();const name=$('#visitor-name').value.trim();if(!name){$('#name-error').textContent=t('emptyName');return}try{const suggestion=/^[가-힣\s]+$/.test(name)?name:latinNameToHangul(name);decomposeHangul(suggestion);$('#hangul-name').value=suggestion;createNamePuzzle(suggestion)}catch(error){$('#name-error').textContent=t(error.message)||t('invalidHangul')}});$('#build-name').addEventListener('click',buildFromEditedName);$('#hangul-name').addEventListener('keydown',e=>{if(e.key==='Enter'){e.preventDefault();buildFromEditedName()}});$('#reset-lab').addEventListener('click',()=>createNamePuzzle(puzzleName));$('#clear-name').addEventListener('click',()=>createNamePuzzle(puzzleName));createNamePuzzle(puzzleName);
