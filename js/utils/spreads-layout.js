import { switchLayer } from "./switch-layer.js";

export function createSpreads(projectData) {
    const baseLayer = ".nav__spreads";
    const topLayer = `.spreads__background--${projectData.number}`;
    const visibleClass = "spreads__background--on";
    const projectImages = ".spreads__image";

    for (let i = 1; i < projectData.layoutSpreads + 1; i++) {
        const img = document.createElement("img");

        img.classList.add(
            "spreads__image",
            "spreads__image--small",
            `${projectData.id}__image-${i}`
        );
        img.setAttribute("loading", "lazy");

        img.addEventListener(
            "click",
            (e) => {
                e.stopPropagation();
            },
            false
        );

        img.src = `/img/${projectData.id}/spreads/thumbnails/${i}.jpg`;

        /*         if (projectData.hasOwnProperty("altIcon")) {
            if (projectData.altIcon.includes(i)) {
                img.classList.add("spreads__image--dark");
            }
        }

        (function loadImages() {
            const path = `${projectData.id}/spreads/thumbnails/`;
            const property = innerWidth;
            const breakpoints = [500, 1500];

            responsiveLoading(img, path, i, property, breakpoints);
        })(); */

        document
            .querySelector(`.spreads__container--${projectData.number}`)
            .appendChild(img);
    }

    switchLayer(baseLayer, topLayer, visibleClass, projectImages);
}
