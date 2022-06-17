export function responsiveLoading(
    element,
    path,
    item,
    property = innerHeight,
    breakpoints = [500, 900]
) {
    if (property < breakpoints[0]) {
        element.src = `/img/${path}/small/${item}.jpg`;
    } else if (property < breakpoints[1]) {
        element.src = `/img/${path}/medium/${item}.jpg`;
    } else {
        element.src = `/img/${path}/large/${item}.jpg`;
    }
}
