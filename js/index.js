const projectDetails = [
    ["projet-1, paris, 2015 —", "projet-1"],
    ["projet-2, sud, 2014 —", "projet-2"],
    ["projet-3, japon, 2019 7.15 — 8.13", "projet-3"],
    ["projet-4, 2016 — 2022", "projet-4"]
];

const projectPreview = [
    ["/img/paris/small/1.jpg", "/img/paris/medium/1.jpg", "/img/paris/1.jpg"],
    ["/img/sud/small/1.jpg", "/img/sud/medium/1.jpg", "/img/sud/1.jpg"],
    ["/img/japon/small/2.jpg", "/img/japon/medium/2.jpg", "/img/japon/2.jpg"],
    ["/img/scan/1/small/1.jpg", "/img/scan/1/medium/1.jpg", "/img/scan/1/large/1.jpg"]
];

if (innerHeight < innerWidth) {
    for (let i = 0; i < 4; i ++) {
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

for (let i = 0; i < 4; i++) {
    document.querySelector("#nav-" + (i + 1)).addEventListener("mouseover", function(e) {
        e.target.textContent = projectDetails[i][0];
        if (innerHeight < innerWidth) {
            document.querySelector(".content--index__image--" + (i + 1)).style.display = "block";
        }
    });
    
    document.querySelector("#nav-" + (i + 1)).addEventListener("mouseout", function(e) {
        e.target.textContent = projectDetails[i][1];
        if (innerHeight < innerWidth) {
            document.querySelector(".content--index__image--" + (i + 1)).style.display = "none";
        }
    });
}