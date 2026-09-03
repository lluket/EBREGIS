/* pages.js — script ligero para páginas de blog (navbar, menú móvil, idioma, iconos). */
(function(){
  var nav=document.getElementById('nav'),tog=document.getElementById('nav-tog'),menu=document.getElementById('nav-menu');
  function onScroll(){if(!nav)return;nav.classList.toggle('scrolled',window.scrollY>20);}
  window.addEventListener('scroll',onScroll,{passive:true});onScroll();
  if(tog&&menu){tog.addEventListener('click',function(){var o=menu.classList.toggle('open');nav.classList.toggle('menu-open',o);tog.setAttribute('aria-expanded',o?'true':'false');document.body.style.overflow=o?'hidden':'';});}
  window.toggleLang=function(){var m=document.getElementById('lang-menu');if(m)m.style.display=m.style.display==='block'?'none':'block';};
  document.addEventListener('click',function(e){var s=document.getElementById('lang-sel'),m=document.getElementById('lang-menu');if(m&&s&&!s.contains(e.target))m.style.display='none';});
  var t=0;(function ic(){if(window.lucide&&window.lucide.createIcons){lucide.createIcons();}else if(t++<50){setTimeout(ic,100);}})();
})();
