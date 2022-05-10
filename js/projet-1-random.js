import { randomContentLayout } from "./utils/random-scroll-layout.js";
import { randomNavLayout } from "./utils/random-nav-scroll-layout.js";
import { toggleNav } from "./utils/toggle-nav.js";

toggleNav(false);

function projectOneRandom() {
    const contentFile = "paris";
    const contentId = "random";
    const contentImages = [];
    for (let i = 1; i < 107; i ++) {
        contentImages.push(i);
    }
    const contentRandom = contentImages.sort(() => Math.random() - 0.5);
    const contentSelector = document.querySelector(".content");
    randomContentLayout(contentFile, contentId, contentRandom, contentSelector);


    const navItems = [1];
    for (let i = 10; i < 110; i += 10) {
        navItems.push(i);
    }
    const navSelector = document.querySelector(".content__nav");
    randomNavLayout(contentFile, contentId, navItems, navSelector);
}

projectOneRandom();