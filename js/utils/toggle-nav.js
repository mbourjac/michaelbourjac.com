export function toggleNav(isIndex) {

    const hiddenClass = "nav__global__section--hidden";
    const layoutsSelector = ".nav__global__section--layouts";
    const projectsSelector = ".nav__global__section--projects";

    let projectsAmount = 4;
    let layoutsAmount = 2;

    if (!isIndex) {
        projectsAmount--;
    }
    
    function expandLayouts() {
        for (let i = 1; i < (projectsAmount + 1); i++) {
            document.querySelector("#nav-" + i).classList.add(hiddenClass);
        }
        document.querySelector(projectsSelector).classList.remove(hiddenClass);

        document.querySelector(layoutsSelector).classList.add(hiddenClass);
        for (let i = 1; i < (layoutsAmount + 1); i++) {
            document.querySelector("#layout-" + i).classList.remove(hiddenClass);
        }
    }

    function expandProjects() {
        for (let i = 1; i < (projectsAmount + 1); i++) {
            document.querySelector("#nav-" + i).classList.remove(hiddenClass);
        }
        document.querySelector(projectsSelector).classList.add(hiddenClass);

        document.querySelector(layoutsSelector).classList.remove(hiddenClass);
        for (let i = 1; i < (layoutsAmount + 1); i++) {
            document.querySelector("#layout-" + i).classList.add(hiddenClass);
        }
    }

    document.querySelector(layoutsSelector).addEventListener("click", function(e) {
        e.preventDefault();
        expandLayouts();
    });

    document.querySelector(projectsSelector).addEventListener("click", function(e) {
        e.preventDefault();
        expandProjects();
    });
}