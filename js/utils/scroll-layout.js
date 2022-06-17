import { responsiveLoading } from "./responsive-loading.js";

export function contentLayout(file, numberOfItems, selector) {
    const contentItems = [];

    for (let i = 1; i < numberOfItems + 1; i++) {
        contentItems.push(i);
    }

    for (const item of contentItems) {
        const img = document.createElement("img");

        img.id = `${file}-${item}`;

        if (item !== 1) {
            img.setAttribute("loading", "lazy");
        }

        responsiveLoading(img, file, item);
        selector.appendChild(img);
    }
}
