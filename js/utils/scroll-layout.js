export function contentLayout(file, array, selector) {
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