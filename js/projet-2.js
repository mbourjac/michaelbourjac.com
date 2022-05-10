import { contentLayout } from "./utils/scroll-layout.js";
import { navLayout } from "./utils/nav-scroll-layout.js";
import { toggleNav } from "./utils/toggle-nav.js";

toggleNav(false);

function projectTwo() {
    const contentFile = "sud";
    const contentImages = [];
    for (let i = 1; i < 102; i ++) {
        contentImages.push(i);
    }
    const contentSelector = document.querySelector(".content");
    contentLayout(contentFile, contentImages, contentSelector);

    const navItems = [1];
    for (let i = 10; i < 110; i += 10) {
        navItems.push(i);
    }
    const navSelector = document.querySelector(".content__nav");
    navLayout(contentFile, navItems, navSelector);
}

projectTwo();