(()=>{"use strict";let e=1;!function(t,n,r){for(let n=0;n<t.length;n++){const r=document.createElement("img");if(r.src=`/img/scan/1/negatives/${t[n].number}.jpg`,r.style.height="12vh",t[n].hasOwnProperty("areas")){r.setAttribute("usemap",`#map-${t[n].number}`);const a=document.createElement("map");a.setAttribute("name",`map-${t[n].number}`);const i=t[n].areas,c=t[n].width/t[n].height*12*innerHeight/100;for(let r=0;r<i.length;r++){const o=Math.floor(c*i[r][0]/t[n].width),s=Math.floor(c*i[r][1]/t[n].width),m=12*innerHeight/100,u=document.createElement("area");u.setAttribute("shape","rect"),u.setAttribute("coords",`${o}, 0, ${s}, ${m}`),u.setAttribute("alt",""),u.setAttribute("href","#"),u.setAttribute("class",`area-${e}`),e++,a.appendChild(u)}document.querySelector(".content--scan__footer").appendChild(a)}document.querySelector(".content--scan__footer").appendChild(r)}for(let e=0;e<r.length;e++)document.querySelector(`.area-${e+1}`).addEventListener("click",(function(t){t.preventDefault(),innerHeight<500||innerWidth<500?document.querySelector(".content--scan__image").src=`/img/scan/1/small/${e+1}.jpg`:innerHeight<900||innerWidth<1025?document.querySelector(".content--scan__image").src=`/img/scan/1/medium/${e+1}.jpg`:document.querySelector(".content--scan__image").src=`/img/scan/1/large/${e+1}.jpg`,document.querySelector(".content--scan__caption--current").textContent=r[e]}))}([{number:1,height:711,width:5074,areas:[[2905,3633]]},{number:2,height:711,width:4361,areas:[[727,1454],[2907,3634]]},{number:3,height:711,width:4360,areas:[[724,1452],[2180,2911]]},{number:4,height:711,width:5074}],0,["image 02. détail.","image 06. détails.","image 09. détails.","image 12.","image 14."])})();