import { areaIndex, dynamicImageMaps } from "./utils/dynamic-image-maps.js";
import { expandableMenu } from "./utils/expandable-menu.js";

function footerLayout(path, dataArray, viewportHeight) {
    for (let i = 1; i < dataArray[0].items + 1; i++) {
        const footerContainer = ".content--scan__footer";
        const footerImage = document.createElement("img");
        footerImage.src = `${path}${i}.jpg`;
        footerImage.style.height = `${viewportHeight}vh`;

        if (i === 1) {
            footerImage.style.paddingLeft = "10px";
        } else if (i === dataArray[0].items) {
            footerImage.style.paddingRight = "10px";
        }

        if (dataArray[0].maps.includes(i)) {
            dynamicImageMaps(footerImage, i, dataArray, viewportHeight, footerContainer);
        }
        document.querySelector(footerContainer).appendChild(footerImage);
    }
}

function dynamicContent(array, path) {
    for (let i = 0; i < array.length; i ++) {
        document.querySelector(`.area-${i + 1}`).addEventListener("click", function(e) {
            e.preventDefault();
            const contentImage = document.querySelector(".content--scan__image");

            if (innerHeight < 500 || innerWidth < 500) {
                contentImage.src = `${path[0]}${i + 1}.jpg`;
            } else if (innerHeight < 900 || innerWidth < 1025) {
                contentImage.src = `${path[1]}${i + 1}.jpg`;
            } else {
                contentImage.src = `${path[2]}${i + 1}.jpg`;
            }

            document.querySelector(".content--scan__caption--current").textContent = array[i];
        });
    }
}

export function projectFour(file, footerImageInfo, imageCaptions, containerSelector) {
    const footerImagePath = `/img/scan/${file}/negatives/`;
    const contentImagePath = [
        `/img/scan/${file}/small/`,
        `/img/scan/${file}/medium/`,
        `/img/scan/${file}/large/`
    ];
    const footerImageVhHeight = 10;
    const menuItemsNumber = 4;

    footerLayout(footerImagePath, footerImageInfo, footerImageVhHeight);
    dynamicContent(imageCaptions, contentImagePath);
    expandableMenu(containerSelector, menuItemsNumber);
}