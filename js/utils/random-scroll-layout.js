export function randomContentLayout(file, id, array, selector) {
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
        if (i !== 1) {
            img.setAttribute("loading", "lazy");
        }
        i++;
        selector.appendChild(img);
    }
}