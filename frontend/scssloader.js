window.addEventListener("load",(async()=>{const t=t=>new Promise(((e,n)=>Sass.compile(t,(t=>{0==t.status?e(t.text):n(t.formatted)})))),e=document.querySelectorAll('style[type="text/tailwindscss"]');for(var n=0;n<e.length;n++)e[n].innerHTML=await t(e[n].innerHTML),e[n].type="text/tailwindcss";const s=document.querySelectorAll('style[type="text/scss"]');for(n=0;n<s.length;n++)s[n].innerHTML=await t(s[n].innerHTML),s[n].type="text/css"}));
AIO={};
AIO.loadSCSS = async(url)=>{const t=t=>new Promise(((e,n)=>Sass.compile(t,(t=>{0==t.status?e(t.text):n(t.formatted)}))));var x=document.createElement('style');x.innerHTML=await t(await (await fetch(url)).text());document.head.appendChild(x);};
