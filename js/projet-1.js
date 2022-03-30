function contentLayout(file, array, selector) {
    for (let item of array) {
        const img = document.createElement("img");
        if (innerHeight < 500) {
            img.src = `/img/${file}/small/${item}.jpg`;
        } else if (innerHeight < 900) {
            img.src = `/img/${file}/medium/${item}.jpg`;
        } else {
            img.src = `/img/${file}/${item}.jpg`;
        }
        img.id = `${file}-${item}`;
        selector.appendChild(img);
    }
}

const contentFile = "paris";
const contentImages = [];
for (let i = 1; i < 107; i ++) {
    contentImages.push(i);
}
const contentSelector = document.querySelector(".content");

contentLayout(contentFile, contentImages, contentSelector);

function navLayout(id, array, selector) {
    for (item of array) {
        const li = document.createElement("li");
        li.innerHTML = `<a href="#${id}-${item}">${item}</a>`;
        selector.appendChild(li);
    }
}

const navItems = [1];
for (let i = 10; i < 110; i += 10) {
    navItems.push(i);
}
const navSelector = document.querySelector(".content__nav");

navLayout(contentFile, navItems, navSelector);