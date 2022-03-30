export function thumbnailsLayout(file, array, selector) {

    for (let item of array) {
        const img = document.createElement("img");
        img.src = `/img/${file}/thumbnails/${item}.jpg`;
        img.addEventListener("click", function() {
            document.querySelector(".thumbnails__image").src = `/img/${file}/nolayout/${item}.jpg`;
        });
        selector.appendChild(img);
    }
}