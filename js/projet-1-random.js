function contentLayout(file, id, array, selector) {
    let i = 1;
    for (let item of array) {
        const img = document.createElement("img");
        if (innerHeight < 500) {
            img.src = `/img/${file}/small/${item}.jpg`;
        } else if (innerHeight < 900) {
            img.src = `/img/${file}/medium/${item}.jpg`;
        } else {
            img.src = `/img/${file}/${item}.jpg`;
        }
        img.id = `${id}-${i}`;
        i++;
        selector.appendChild(img);
    }
}

const contentFile = "paris";
const contentId = "random";
const contentImages = [];
for (let i = 1; i < 107; i ++) {
    contentImages.push(i);
}
const contentRandom = contentImages.sort(() => Math.random() - 0.5);
const contentSelector = document.querySelector(".content");

contentLayout(contentFile, contentId, contentRandom, contentSelector);

function navLayout(file, id, array, selector) {
    for (item of array) {
        const li = document.createElement("li");
        if (id !== "") {
            li.innerHTML = `<a href="#${id}-${item}">${item}</a>`;
        } else {
            li.innerHTML = `<a href="#${file}-${item}">${item}</a>`;
        }
        
        selector.appendChild(li);
    }
}

const navItems = [1];
for (let i = 10; i < 110; i += 10) {
    navItems.push(i);
}
const navSelector = document.querySelector(".content__nav");

navLayout(contentFile, contentId, navItems, navSelector);