import { thumbnailsLayout } from "./utils/thumbnails-layout.js";
import { switchImage, index } from "./utils/switch-dynamic-image.js";

function projectTwoThumbnails() {
    const contentFile = "sud";
    const contentImages = [];
    for (let i = 1; i < 102; i ++) {
        contentImages.push(i);
    }
    const contentSelector = document.querySelector(".thumbnails__overview");
    thumbnailsLayout(contentFile, contentImages, contentSelector);


    const thumbnailsImage = document.querySelector(".thumbnails__image");
    const imagePath = "/img/sud/nolayout/";
    const switchOne = ["25", "25-2"];
    const switchTwo = ["40", "40-2"];
    const switchThree = ["79", "79-2", "79-3", "79-4", "79-5", "79-6", "79-7", "79-8", "79-9", "79-10", "79-11", "79-12", "79-13", "79-14", "79-15", "79-16"];
    switchImage(thumbnailsImage, imagePath, switchOne);
    switchImage(thumbnailsImage, imagePath, switchTwo);
    switchImage(thumbnailsImage, imagePath, switchThree);
}

projectTwoThumbnails();