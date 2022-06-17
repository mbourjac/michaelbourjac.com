import { responsiveLoading } from "./responsive-loading.js";

export function randomContentLayout(file, numberOfItems, selector) {
    const contentItems = [];
    let index = 1;

    for (let i = 1; i < numberOfItems + 1; i++) {
        contentItems.push(i);
    }

    contentItems.sort(() => Math.random() - 0.5);

    for (const item of contentItems) {
        const img = document.createElement("img");

        img.id = `${file}-${index}`;

        if (index !== 1) {
            img.setAttribute("loading", "lazy");
        }

        responsiveLoading(img, file, item);
        selector.appendChild(img);
        index++;
    }
}
