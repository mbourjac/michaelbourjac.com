export let index = 0;

export function switchImage(selector, path, array) {
    selector.addEventListener("click", function () {
        const regex = new RegExp(path + array[0]);
        const source = selector.getAttribute('src');

        if (source === path + array[0] + ".jpg") {
            index = 0;
        }

        if (regex.test(source)) {
            if (index >= array.length - 1) {
                index = -1;
            }
            index++;
            selector.src = path + array[index] + ".jpg";
        }
    });
}