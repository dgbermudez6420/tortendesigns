'use strict';
(() => {
  const gallery=document.querySelector('[data-gallery]');
  const viewport=gallery.querySelector('.compact-window');
  const track=gallery.querySelector('.compact-track');
  const group=gallery.querySelector('.compact-group');
  const motion=window.matchMedia('(prefers-reduced-motion: reduce)');
  const duplicate=group.cloneNode(true);
  duplicate.classList.add('compact-duplicate');
  duplicate.setAttribute('aria-hidden','true');
  duplicate.inert=true;
  duplicate.querySelectorAll('[data-original]').forEach(card=>card.removeAttribute('data-original'));
  track.append(duplicate);
  gallery.classList.add('is-ready');
  function manual(){
    if(gallery.classList.contains('is-manual'))return;
    const transform=getComputedStyle(track).transform;
    let offset=0;
    if(transform!=='none'){
      const matrix=new DOMMatrixReadOnly(transform);
      offset=((Math.abs(matrix.m41)%group.getBoundingClientRect().width)||0);
    }
    gallery.classList.add('is-manual');
    viewport.scrollLeft=offset;
  }
  function resume(){
    if(motion.matches||gallery.contains(document.activeElement))return;
    viewport.scrollLeft=0;
    gallery.classList.remove('is-manual');
  }
  gallery.addEventListener('focusin',manual);
  gallery.addEventListener('focusout',()=>setTimeout(resume,0));
  viewport.addEventListener('pointerdown',manual,{passive:true});
  document.addEventListener('pointerdown',event=>{if(!gallery.contains(event.target))resume();},{passive:true});
  viewport.addEventListener('keydown',event=>{
    const step=window.innerWidth<=600?176:210;
    if(['ArrowLeft','ArrowRight','Home','End'].includes(event.key)){
      event.preventDefault();manual();
      if(event.key==='Home')viewport.scrollTo({left:0,behavior:'auto'});
      else if(event.key==='End')viewport.scrollTo({left:viewport.scrollWidth,behavior:'auto'});
      else viewport.scrollBy({left:event.key==='ArrowRight'?step:-step,behavior:motion.matches?'auto':'smooth'});
    }
  });
  function visibility(){gallery.classList.toggle('is-hidden',document.hidden);}
  document.addEventListener('visibilitychange',visibility);
  motion.addEventListener('change',()=>{viewport.scrollLeft=0;if(motion.matches)gallery.classList.add('is-manual');else resume();});
  if(motion.matches)gallery.classList.add('is-manual');
  visibility();

  // No gallery buttons, expansion, or duplicate visible section.
})();

// Keine Drittanbieter-Messung vor einer ausdrücklichen Zustimmung.
(() => {
  const config=window.CAKE_COLLECTION;
  const panel=document.getElementById('consent-panel');
  const reopen=document.getElementById('privacy-settings');
  const key='cake-de-consent-v2';
  let current=null,loaded=false;
  try{current=localStorage.getItem(key);}catch{}
  function startTracking(){
    if(loaded||current!=='accepted'||config?.trackingConfirmed!==true||!config.trackingPixelId)return;
    loaded=true;
    window.pixelId=config.trackingPixelId;
    for(const path of ['pixel/pixel.js','utms/latest.js']){
      const script=document.createElement('script');
      script.src='https://cdn.utmify.com.br/scripts/'+path;
      script.async=true;script.defer=true;
      if(path.startsWith('utms/'))script.setAttribute('data-utmify-prevent-subids','');
      document.head.appendChild(script);
    }
  }
  if(!['accepted','rejected'].includes(current))panel.hidden=false;
  else startTracking();
  if(config?.trackingConfirmed===true)panel.querySelector('.consent-preview').hidden=true;
  reopen.addEventListener('click',()=>{panel.hidden=false;panel.querySelector('button').focus();});
  panel.querySelectorAll('[data-consent]').forEach(button=>button.addEventListener('click',()=>{
    const previous=current;
    current=button.dataset.consent;
    try{localStorage.setItem(key,current);}catch{}
    panel.hidden=true;
    if(current==='rejected'&&loaded){location.reload();return;}
    startTracking();
    if(previous)reopen.focus();
  }));
})();
