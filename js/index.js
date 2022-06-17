import { disableRightClick } from "./utils/disable-right-click.js";
import { projectsData } from "./utils/data.js";
import { responsiveLoading } from "./utils/responsive-loading.js";
import { switchLayer } from "./utils/switch-layer.js";

disableRightClick();

function createThumbnails() {
    for (const project of projectsData) {
        for (let i = 1; i < project.indexThumbnails + 1; i++) {
            const img = document.createElement("img");

            img.src = `/img/index/${project.id}/${i}.jpg`;
            img.classList.add("preview__image");
            document
                .querySelector(`.preview__container--${project.number}`)
                .appendChild(img);
        }
    }
}

function createOverview() {
    for (const project of projectsData) {
        const previewLayer = `.preview__container--${project.number}`;
        const spreadsLayer = `.spreads__background--${project.number}`;
        const visibleClass = "spreads__background--on";

        for (let i = 1; i < project.layoutSpreads + 1; i++) {
            const anchor = document.createElement("a");
            const img = document.createElement("img");

            anchor.href = `./${project.id}.html`;
            img.classList.add("spreads__image", `${project.id}__image-${i}`);
            img.setAttribute("loading", "lazy");

            img.addEventListener(
                "click",
                (e) => {
                    e.stopPropagation();
                },
                false
            );

            if (project.hasOwnProperty("altIcon")) {
                if (project.altIcon.includes(i)) {
                    img.classList.add("spreads__image--dark");
                }
            }

            (function loadImages() {
                const path = `${project.id}/spreads`;
                const property = innerWidth;
                const breakpoints = [500, 1500];

                responsiveLoading(img, path, i, property, breakpoints);
            })();

            anchor.appendChild(img);
            document
                .querySelector(`.spreads__container--${project.number}`)
                .appendChild(anchor);
        }

        switchLayer(previewLayer, spreadsLayer, visibleClass);
    }
}

createThumbnails();
createOverview();
