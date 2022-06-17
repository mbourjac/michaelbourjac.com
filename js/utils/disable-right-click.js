export function disableRightClick() {
    window.addEventListener(
        "contextmenu",
        (e) => {
            e.preventDefault();
        },
        false
    );
}
