(()=>{"use strict";let e=1;function t(t,n,i,a,r){t.setAttribute("usemap",`#map-${n}`);const c=document.createElement("map");c.setAttribute("name",`map-${n}`);const s=i.find((e=>e.number===n)),o=s.areas,l=a*(s.width/i[0].height)*innerHeight/100;for(let t=0;t<o.length;t++){const n=Math.floor(l*o[t][0]/s.width),i=Math.floor(l*o[t][1]/s.width),r=a*innerHeight/100,m=document.createElement("area");m.setAttribute("shape","rect"),m.setAttribute("coords",`${n}, 0, ${i}, ${r}`),m.setAttribute("alt",""),m.setAttribute("href","#"),m.setAttribute("class",`area-${e}`),e++,c.appendChild(m)}document.querySelector(r).appendChild(c)}!function(e,n,i,a){const r=["/img/scan/4/small/","/img/scan/4/medium/","/img/scan/4/large/"];!function(e,n,i){for(let i=1;i<n[0].items+1;i++){const a=".content--scan__footer",r=document.createElement("img");r.src=`${e}${i}.jpg`,r.style.height="12vh",1===i?r.style.paddingLeft="10px":i===n[0].items&&(r.style.paddingRight="10px"),n[0].maps.includes(i)&&t(r,i,n,12,a),document.querySelector(a).appendChild(r)}}("/img/scan/4/negatives/",[{items:7,height:687,maps:[1,2,4,5,6,7]},{number:1,width:4565,areas:[[3111,3837],[3838,4565]]},{number:2,width:4346,areas:[[725,1449],[1450,2173]]},{number:4,width:4354,areas:[[1,724]]},{number:5,width:4347,areas:[[1442,2173]]},{number:6,width:4346,areas:[[724,1444],[1445,2173]]},{number:7,width:4108,areas:[[1,727],[2178,2904],[2905,3829]]}]),function(e,t){for(let n=0;n<e.length;n++)document.querySelector(`.area-${n+1}`).addEventListener("click",(function(i){i.preventDefault();const a=document.querySelector(".content--scan__image");innerHeight<500||innerWidth<500?a.src=`${t[0]}${n+1}.jpg`:innerHeight<900||innerWidth<1025?a.src=`${t[1]}${n+1}.jpg`:a.src=`${t[2]}${n+1}.jpg`,document.querySelector(".content--scan__caption--current").textContent=e[n]}))}(["image 02","image 03","image 05","image 06","image 16","image 24","image 29","image 30","image 34","image 37","image 38"],r),function(e,t){const n=[];for(let t=0;t<4;t++)n.push(`${e} > li:nth-child(${t+1}) > ul`);for(let t=0;t<4;t++)document.querySelector(`${e} > li:nth-child(${t+1})`).addEventListener("click",(function(){const e=document.querySelector(n[t]);if("none"===e.style.display||""===e.style.display){const i=n.filter((e=>e!==n[t]));for(let e of i)document.querySelector(e).style.display="none";e.style.display="block"}else e.style.display="none"}))}(".content--scan__nav--mobile")}()})();