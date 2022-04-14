import { areaIndex, imageMapsLayout } from "./utils/dynamic-image-maps.js";
import { expandableMenu } from "./utils/expandable-menu.js";

export function projectFour(footerImageInfo, imageCaptions, containerSelector) {
    const footerImageVhHeight = 12;
    const numberOfItems = 4;

    imageMapsLayout(footerImageInfo, footerImageVhHeight, imageCaptions);
    expandableMenu(containerSelector, numberOfItems);
}