export function navLayout(id, array, selector) {
    for (let item of array) {
        const li = document.createElement("li");
        li.innerHTML = `<a href="#${id}-${item}">${item}</a>`;
        selector.appendChild(li);
    }
}