export function expandableMenu(selector, number) {
    const expandElements = [];

    for (let i = 0; i < number; i++) {
        expandElements.push(`${selector} > li:nth-child(${i + 1}) > ul`);
    }

    for (let i = 0; i < number; i++) {
        document.querySelector(`${selector} > li:nth-child(${i + 1})`).addEventListener("click", function() {
            const ulElement = document.querySelector(expandElements[i]);

            if (ulElement.style.display === "none" || ulElement.style.display === "") {
                const closeElements = expandElements.filter(item => item !== expandElements[i]);
                for (let element of closeElements) {
                    document.querySelector(element).style.display = "none"
                }
                ulElement.style.display = "block";
            } else {
                ulElement.style.display = "none";
            }
        });
    }
}