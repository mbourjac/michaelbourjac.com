import { disableRightClick } from "./utils/disable-right-click.js";
import { projectsData } from "./utils/data.js";
import { contentLayout } from "./utils/scroll-layout.js";
import { navLayout } from "./utils/nav-scroll-layout.js";
import { createSpreads } from "./utils/spreads-layout.js";

const projectData = projectsData[projectsData.length - 2];

disableRightClick();

function createContent() {
    const contentSelector = document.querySelector(".content--projet-2");
    const navSelector = document.querySelector(".content__nav");

    contentLayout(projectData.id, projectData.projectItems, contentSelector);
    navLayout(projectData.id, projectData.projectItems, navSelector);
}

(function projectTwo() {
    createContent();
    createSpreads(projectData);
})();
