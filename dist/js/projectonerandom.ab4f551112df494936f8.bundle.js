(()=>{"use strict";!function(){const e="random",t=[];for(let e=1;e<107;e++)t.push(e);!function(e,t,n,o){let r=1;for(let e of n){const t=document.createElement("img");innerHeight<500?t.src=`/img/paris/small/${e}.jpg`:innerHeight<900?t.src=`/img/paris/medium/${e}.jpg`:t.src=`/img/paris/${e}.jpg`,t.id=`random-${r}`,1!==r&&t.setAttribute("loading","lazy"),r++,o.appendChild(t)}}(0,0,t.sort((()=>Math.random()-.5)),document.querySelector(".content"));const n=[1];for(let e=10;e<110;e+=10)n.push(e);!function(e,t,n,o){for(let e of n){const n=document.createElement("li");n.innerHTML=`<a href="#${t}-${e}">${e}</a>`,o.appendChild(n)}}(0,e,n,document.querySelector(".content__nav"))}()})();