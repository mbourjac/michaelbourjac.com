export function randomNavLayout(file, id, array, selector) {
    for (let item of array) {
        const li = document.createElement("li");
        if (id !== "") {
            li.innerHTML = `<a href="#${id}-${item}">${item}</a>`;
        } else {
            li.innerHTML = `<a href="#${file}-${item}">${item}</a>`;
        }       
        selector.appendChild(li);
    }
}