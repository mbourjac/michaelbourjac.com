export function switchLayer(baseSelector, topSelector, cssClass) {
    const baseLayer = document.querySelector(".root");
    const topLayer = document.querySelector(topSelector);

    function switchClasses() {
        baseLayer.classList.toggle("root--inactive");
        topLayer.classList.toggle(cssClass);
    }

    document
        .querySelector(baseSelector)
        .addEventListener("click", switchClasses);

    topLayer.addEventListener("click", switchClasses);
}
