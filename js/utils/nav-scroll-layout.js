export function navLayout(id, numberOfItems, selector) {
    const navItems = [1];

    for (let i = 10; i < numberOfItems; i += 10) {
        navItems.push(i);
    }

    for (const item of navItems) {
        const li = document.createElement("li");

        li.innerHTML = `<a href="#${id}-${item}">${item}</a>`;
        selector.appendChild(li);
    }
}
