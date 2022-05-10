import { toggleNav } from "./utils/toggle-nav.js";

const projectDetails = [
    ["projet-1, paris, 2015 —", "projet-1", "124 images."],
    ["projet-2, sud, 2014 —", "projet-2", "106 images."],
    ["projet-3, japon, 2019 7.15 — 8.13", "projet-3", "299 images."],
    ["projet-4, 2016 — 2022", "projet-4", "195 images."]
];

const projectPreview = [
    ["/img/paris/small/1.jpg", "/img/paris/medium/1.jpg", "/img/paris/1.jpg"],
    ["/img/sud/small/1.jpg", "/img/sud/medium/1.jpg", "/img/sud/1.jpg"],
    ["/img/japon/small/2.jpg", "/img/japon/medium/2.jpg", "/img/japon/2.jpg"],
    ["/img/scan/1/small/1.jpg", "/img/scan/1/medium/1.jpg", "/img/scan/1/large/1.jpg"]
];

let path = window.location.pathname;
let page = path.split("/").pop();

toggleNav(true);

if (innerHeight < innerWidth) {
    for (let i = 0; i < projectDetails.length; i ++) {
        const imagePreview = document.createElement("img");
        imagePreview.classList.add("content--index__image", "content--index__image--" + (i + 1));

        if (innerHeight < 500) {
            imagePreview.src = projectPreview[i][0];
        } else if (innerHeight < 900) {
            imagePreview.src = projectPreview[i][1];
        } else {
            imagePreview.src = projectPreview[i][2];
        }

        document.querySelector(".content--index").appendChild(imagePreview);
    }
}

for (let i = 0; i < projectDetails.length; i++) {
    document.querySelector("#nav-" + (i + 1)).addEventListener("mouseover", function() {
        if (page === "index.html") {
            document.querySelector("#nav-" + (i + 1) + " a").textContent = projectDetails[i][0];
        } else {
             document.querySelector(".content--index__caption").innerHTML = projectDetails[i][0] + '<br><span class="content--index__caption--light">' + projectDetails[i][2] + "</span>"; 
        }
        
        if (innerHeight < innerWidth) {
            document.querySelector(".content--index__image--" + (i + 1)).style.display = "block";
        }
    });
    
    document.querySelector("#nav-" + (i + 1)).addEventListener("mouseout", function(e) {
        if (page === "index.html") {
            document.querySelector("#nav-" + (i + 1) + " a").textContent = projectDetails[i][1];
        } else {
            document.querySelector(".content--index__caption").innerHTML = "";
        }
        
        if (innerHeight < innerWidth) {
            document.querySelector(".content--index__image--" + (i + 1)).style.display = "none";
        }
    });
}

