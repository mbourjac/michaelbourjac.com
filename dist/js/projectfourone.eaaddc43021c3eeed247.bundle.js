(()=>{"use strict";let e=1;function t(t,n,i,c,r){t.setAttribute("usemap",`#map-${n}`);const s=document.createElement("map");s.setAttribute("name",`map-${n}`);const a=i.find((e=>e.number===n)),o=a.areas,l=c*(a.width/i[0].height)*innerHeight/100;for(let t=0;t<o.length;t++){const n=Math.floor(l*o[t][0]/a.width),i=Math.floor(l*o[t][1]/a.width),r=c*innerHeight/100,d=document.createElement("area");d.setAttribute("shape","rect"),d.setAttribute("coords",`${n}, 0, ${i}, ${r}`),d.setAttribute("alt",""),d.setAttribute("href","#"),d.setAttribute("class",`area-${e}`),e++,s.appendChild(d)}document.querySelector(r).appendChild(s)}!function(e,n,i,c){const r=["/img/scan/1/small/","/img/scan/1/medium/","/img/scan/1/large/"];!function(e,n,i){for(let i=1;i<n[0].items+1;i++){const c=".content--scan__footer",r=document.createElement("img");r.src=`${e}${i}.jpg`,r.style.height="10vh",1===i?r.style.paddingLeft="10px":i===n[0].items&&(r.style.paddingRight="10px"),n[0].maps.includes(i)&&t(r,i,n,10,c),document.querySelector(c).appendChild(r)}}("/img/scan/1/negatives/",[{items:4,height:684,maps:[1,2,3]},{number:1,width:5043,areas:[[2871,3599]]},{number:2,width:4359,areas:[[723,1451],[2904,3633]]},{number:3,width:4355,areas:[[724,1453],[2178,2914]]}]),function(e,t){for(let n=0;n<e.length;n++)document.querySelector(`.area-${n+1}`).addEventListener("click",(function(i){i.preventDefault();const c=document.querySelector(".content--scan__image");innerHeight<500||innerWidth<500?c.src=`${t[0]}${n+1}.jpg`:innerHeight<900||innerWidth<1025?c.src=`${t[1]}${n+1}.jpg`:c.src=`${t[2]}${n+1}.jpg`,document.querySelector(".content--scan__caption--current").textContent=e[n]}))}(["image 02. détail.","image 06. détails.","image 09. détails.","image 12.","image 14."],r),function(e,t){const n=[];for(let t=0;t<4;t++)n.push(`${e} > li:nth-child(${t+1}) > ul`);for(let t=0;t<4;t++)document.querySelector(`${e} > li:nth-child(${t+1})`).addEventListener("click",(function(){const e=document.querySelector(n[t]);if("none"===e.style.display||""===e.style.display){const i=n.filter((e=>e!==n[t]));for(let e of i)document.querySelector(e).style.display="none";e.style.display="block"}else e.style.display="none"}))}(".content--scan__nav--mobile")}()})();