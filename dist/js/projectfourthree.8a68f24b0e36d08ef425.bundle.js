(()=>{"use strict";let e=1;function t(t,n,a,i,l){t.setAttribute("usemap",`#map-${n}`);const r=document.createElement("map");r.setAttribute("name",`map-${n}`);const s=a.find((e=>e.number===n)),o=s.areas,c=i*(s.width/a[0].height)*innerHeight/100;for(let t=0;t<o.length;t++){const n=Math.floor(c*o[t][0]/s.width),a=Math.floor(c*o[t][1]/s.width),l=i*innerHeight/100,m=document.createElement("area");m.setAttribute("shape","rect"),m.setAttribute("coords",`${n}, 0, ${a}, ${l}`),m.setAttribute("alt",""),m.setAttribute("href","#"),m.setAttribute("class",`area-${e}`),e++,r.appendChild(m)}document.querySelector(l).appendChild(r)}!function(e,n,a,i){const l=["/img/scan/3/small/","/img/scan/3/medium/","/img/scan/3/large/"];!function(e,n,a){for(let a=1;a<n[0].items+1;a++){const i=".content--scan__footer",l=document.createElement("img");l.src=`${e}${a}.jpg`,l.style.height="12vh",1===a?l.style.paddingLeft="10px":a===n[0].items&&(l.style.paddingRight="10px"),n[0].maps.includes(a)&&t(l,a,n,12,i),document.querySelector(i).appendChild(l)}}("/img/scan/3/negatives/",[{items:7,height:688,maps:[1,2,3,5,6,7]},{number:1,width:4350,areas:[[2900,3626],[3627,4350]]},{number:2,width:4345,areas:[[729,1457],[2175,2899],[3625,4345]]},{number:3,width:4348,areas:[[1,719]]},{number:5,width:4351,areas:[[1444,2169]]},{number:6,width:4348,areas:[[1444,2174],[2175,2902],[2903,3628]]},{number:7,width:3447,areas:[[1442,2173]]}]),function(e,t){for(let n=0;n<e.length;n++)document.querySelector(`.area-${n+1}`).addEventListener("click",(function(a){a.preventDefault();const i=document.querySelector(".content--scan__image");innerHeight<500||innerWidth<500?i.src=`${t[0]}${n+1}.jpg`:innerHeight<900||innerWidth<1025?i.src=`${t[1]}${n+1}.jpg`:i.src=`${t[2]}${n+1}.jpg`,document.querySelector(".content--scan__caption--current").textContent=e[n]}))}(["image 03 — Amour et Psyché, Salle du Gladiateur, Palais Neuf, Rome, Italie","image 04. détail — Louve capitoline, Salle de la Louve, Palais des Conservateurs, Rome, Italie","image 06 — Marchés de Trajan, Rome, Italie","image 08 — Porticciolo di Santa Lucia, Naples, italie","image 10. détail","image 11. détail","image 25 — Apollon Archer, Temple d'Apollon, Pompéi, Italie","image 31 — Faune Dansant, Maison du Faune, Pompéi, Italie","image 32 — Temple de Neptune, Paestum, Italie","image 33 — Temple de Neptune, Paestum, Italie","image 37 — Temple de Cérès, Paestum, Italie"],l),function(e,t){const n=[];for(let t=0;t<4;t++)n.push(`${e} > li:nth-child(${t+1}) > ul`);for(let t=0;t<4;t++)document.querySelector(`${e} > li:nth-child(${t+1})`).addEventListener("click",(function(){const e=document.querySelector(n[t]);if("none"===e.style.display||""===e.style.display){const a=n.filter((e=>e!==n[t]));for(let e of a)document.querySelector(e).style.display="none";e.style.display="block"}else e.style.display="none"}))}(".content--scan__nav--mobile")}()})();